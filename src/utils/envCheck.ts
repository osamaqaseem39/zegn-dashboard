export function checkRequiredEnvVars() {
  const required = [
    'REACT_APP_API_BASE_URL',
    'REACT_APP_SOLSCAN_API_KEY',
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
} 