// CORS configuration for API requests
export const corsConfig = {
  // Allowed origins - includes main domain and all sub-pages/subdomains
  allowedOrigins: [
    // Production domains
    'https://degn.vercel.app',
    'https://*.degn.vercel.app', // Allow all subdomains of degn.vercel.app
    'https://degn.vercel.app/*', // Allow all sub-pages of degn.vercel.app
    
    // Dashboard domain (if different)
    'https://zegn-dashboard.vercel.app',
    'https://*.zegn-dashboard.vercel.app', // Allow all subdomains
    'https://zegn-dashboard.vercel.app/*', // Allow all sub-pages
    
    // Development domains
    'http://localhost:3000',
    'http://localhost:3000/*', // Allow all sub-pages of localhost:3000
    'http://localhost:5173',
    'http://localhost:5173/*', // Allow all sub-pages of localhost:5173
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3000/*', // Allow all sub-pages of 127.0.0.1:3000
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5173/*', // Allow all sub-pages of 127.0.0.1:5173
    
    // Additional local development ports
    'http://localhost:3001',
    'http://localhost:3001/*',
    'http://localhost:8080',
    'http://localhost:8080/*',
  ],
  
  // Allowed methods
  allowedMethods: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'OPTIONS',
    'PATCH',
  ],
  
  // Allowed headers
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'X-Requested-With',
    'Origin',
    'Access-Control-Request-Method',
    'Access-Control-Request-Headers',
  ],
  
  // Exposed headers
  exposedHeaders: [
    'Content-Length',
    'Content-Type',
    'Date',
    'Server',
  ],
  
  // Credentials
  credentials: false,
  
  // Max age for preflight requests
  maxAge: 86400, // 24 hours
};

// Utility function to check if an origin is allowed
export const isOriginAllowed = (origin: string): boolean => {
  if (!origin) return false;
  
  // Check exact matches first
  if (corsConfig.allowedOrigins.includes(origin)) {
    return true;
  }
  
  // Check wildcard patterns
  return corsConfig.allowedOrigins.some(allowedOrigin => {
    if (allowedOrigin.includes('*')) {
      const pattern = allowedOrigin.replace(/\*/g, '.*');
      const regex = new RegExp(`^${pattern}$`);
      return regex.test(origin);
    }
    return false;
  });
};

// Dynamic CORS configuration for runtime
export const getCorsOptions = (origin?: string) => ({
  origin: origin && isOriginAllowed(origin) ? origin : false,
  methods: corsConfig.allowedMethods,
  allowedHeaders: corsConfig.allowedHeaders,
  exposedHeaders: corsConfig.exposedHeaders,
  credentials: corsConfig.credentials,
  maxAge: corsConfig.maxAge,
});

export default corsConfig;