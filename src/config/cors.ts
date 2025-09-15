// CORS configuration for API requests
export const corsConfig = {
  // Allowed origins
  allowedOrigins: [
    'https://degn.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173',
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

export default corsConfig;