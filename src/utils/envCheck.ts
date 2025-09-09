export function checkRequiredEnvVars() {
  const required = [
    'VITE_API_BASE_URL',
    'VITE_SOLSCAN_API_KEY',
  ];

  const missing = required.filter(key => !import.meta.env[key]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
} 