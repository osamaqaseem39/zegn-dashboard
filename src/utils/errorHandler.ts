// Global error handling utilities

export interface AppError {
  message: string;
  code?: string;
  status?: number;
  isNetworkError?: boolean;
  isAuthError?: boolean;
}

export class ErrorHandler {
  static handleApiError(error: any): AppError {
    // Handle network errors
    if (!error.response) {
      return {
        message: 'Network error. Please check your connection and try again.',
        code: 'NETWORK_ERROR',
        isNetworkError: true
      };
    }

    const status = error.response.status;
    const data = error.response.data;

    // Handle authentication errors
    if (status === 401) {
      return {
        message: 'Authentication required. Please sign in again.',
        code: 'AUTH_ERROR',
        status: 401,
        isAuthError: true
      };
    }

    // Handle permission errors
    if (status === 403) {
      return {
        message: 'You don\'t have permission to perform this action.',
        code: 'PERMISSION_ERROR',
        status: 403
      };
    }

    // Handle server errors
    if (status >= 500) {
      return {
        message: 'Server error. Please try again later.',
        code: 'SERVER_ERROR',
        status
      };
    }

    // Handle client errors
    if (status >= 400) {
      const message = data?.message || data?.error || `Request failed with status ${status}`;
      return {
        message,
        code: 'CLIENT_ERROR',
        status
      };
    }

    // Default error
    return {
      message: error.message || 'An unexpected error occurred',
      code: 'UNKNOWN_ERROR'
    };
  }

  static isRetryableError(error: AppError): boolean {
    return error.isNetworkError || (error.status && error.status >= 500);
  }

  static getRetryDelay(attempt: number): number {
    // Exponential backoff: 1s, 2s, 4s, 8s, 16s
    return Math.min(1000 * Math.pow(2, attempt), 16000);
  }
}

export default ErrorHandler;