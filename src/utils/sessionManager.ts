// Session management utilities
export class SessionManager {
  private static readonly TOKEN_KEY = 'token';
  private static readonly USER_KEY = 'user';
  private static readonly TOKEN_EXPIRY_KEY = 'token_expiry';

  // Store token with expiry
  static setToken(token: string, expiresIn?: number): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    
    if (expiresIn) {
      const expiryTime = Date.now() + (expiresIn * 1000);
      localStorage.setItem(this.TOKEN_EXPIRY_KEY, expiryTime.toString());
    }
  }

  // Get stored token
  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Check if token is expired
  static isTokenExpired(): boolean {
    const expiryTime = localStorage.getItem(this.TOKEN_EXPIRY_KEY);
    if (!expiryTime) return false; // No expiry set, assume valid
    
    return Date.now() > parseInt(expiryTime);
  }

  // Check if token exists and is valid
  static hasValidToken(): boolean {
    const token = this.getToken();
    return token !== null && !this.isTokenExpired();
  }

  // Clear all session data
  static clearSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_EXPIRY_KEY);
  }

  // Store user data
  static setUser(user: any): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // Get stored user data
  static getUser(): any | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  // Get token expiry time in milliseconds
  static getTokenExpiry(): number | null {
    const expiryTime = localStorage.getItem(this.TOKEN_EXPIRY_KEY);
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