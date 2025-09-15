// Session management utilities
export class SessionManager {
  private static readonly TOKEN_KEY = 'token';
  private static readonly USER_KEY = 'user';
  private static readonly TOKEN_EXPIRY_KEY = 'token_expiry';

  // Store token with expiry
  static setToken(token: string, expiresIn?: number): void {
    console.log('SessionManager: Setting token:', token);
    console.log('SessionManager: Token type:', typeof token);
    console.log('SessionManager: Token length:', token ? token.length : 'null/undefined');
    console.log('SessionManager: Setting expiresIn:', expiresIn);
    
    if (!token) {
      console.error('SessionManager: Token is null/undefined, cannot store');
      return;
    }
    
    try {
      sessionStorage.setItem(this.TOKEN_KEY, token);
      console.log('SessionManager: Token stored in sessionStorage successfully');
    } catch (error) {
      console.error('SessionManager: Error storing token:', error);
      return;
    }
    
    if (expiresIn) {
      const expiryTime = Date.now() + (expiresIn * 1000);
      sessionStorage.setItem(this.TOKEN_EXPIRY_KEY, expiryTime.toString());
      console.log('SessionManager: Expiry time set:', new Date(expiryTime));
    }
    
    // Verify storage
    const storedToken = sessionStorage.getItem(this.TOKEN_KEY);
    console.log('SessionManager: Verification - stored token:', storedToken);
    console.log('SessionManager: Verification - token matches:', storedToken === token);
  }

  // Get stored token
  static getToken(): string | null {
    console.log('SessionManager: Getting token from sessionStorage');
    console.log('SessionManager: Token key:', this.TOKEN_KEY);
    console.log('SessionManager: All sessionStorage keys:', Object.keys(sessionStorage));
    console.log('SessionManager: Token value from sessionStorage:', sessionStorage.getItem(this.TOKEN_KEY));
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  // Check if token is expired
  static isTokenExpired(): boolean {
    const expiryTime = sessionStorage.getItem(this.TOKEN_EXPIRY_KEY);
    console.log('SessionManager: Checking token expiry');
    console.log('SessionManager: Expiry time from storage:', expiryTime);
    console.log('SessionManager: Current time:', Date.now());
    console.log('SessionManager: Expiry time parsed:', expiryTime ? parseInt(expiryTime) : 'null');
    
    if (!expiryTime) {
      console.log('SessionManager: No expiry set, assuming valid');
      return false; // No expiry set, assume valid
    }
    
    const isExpired = Date.now() > parseInt(expiryTime);
    console.log('SessionManager: Token is expired:', isExpired);
    return isExpired;
  }

  // Check if token exists and is valid
  static hasValidToken(): boolean {
    const token = this.getToken();
    console.log('SessionManager: hasValidToken check');
    console.log('SessionManager: Token exists:', token !== null);
    console.log('SessionManager: Token value:', token);
    
    const isExpired = this.isTokenExpired();
    console.log('SessionManager: Token is expired:', isExpired);
    
    const isValid = token !== null && !isExpired;
    console.log('SessionManager: Token is valid:', isValid);
    
    return isValid;
  }

  // Clear all session data
  static clearSession(): void {
    console.log('SessionManager: Clearing session data');
    console.log('SessionManager: Before clear - token exists:', sessionStorage.getItem(this.TOKEN_KEY) !== null);
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
    sessionStorage.removeItem(this.TOKEN_EXPIRY_KEY);
    console.log('SessionManager: After clear - token exists:', sessionStorage.getItem(this.TOKEN_KEY) !== null);
  }

  // Store user data
  static setUser(user: any): void {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // Get stored user data
  static getUser(): any | null {
    const userStr = sessionStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  // Get token expiry time in milliseconds
  static getTokenExpiry(): number | null {
    const expiryTime = sessionStorage.getItem(this.TOKEN_EXPIRY_KEY);
    return expiryTime ? parseInt(expiryTime) : null;
  }

  // Get time until token expires in milliseconds
  static getTimeUntilExpiry(): number | null {
    const expiryTime = this.getTokenExpiry();
    if (!expiryTime) return null;
    
    return Math.max(0, expiryTime - Date.now());
  }

  // Check if token needs refresh (within 5 minutes of expiry)
  static needsRefresh(): boolean {
    const timeUntilExpiry = this.getTimeUntilExpiry();
    if (!timeUntilExpiry) return false;
    
    // Refresh if less than 5 minutes remaining
    return timeUntilExpiry < (5 * 60 * 1000);
  }
}

export default SessionManager;