# Authentication Information

## Default Admin Credentials

When using the "Create Admin User" button, the following credentials are created:

- **Email**: `admin@zegn.com`
- **Password**: `Admin123!@#`
- **Role**: `admin`

## CORS Issue Fix

The backend has been updated to properly handle CORS requests from:
- `https://zegn-dashboard.vercel.app`
- Local development servers

## Troubleshooting

### If login fails with CORS error:
1. The backend needs to be redeployed with the updated CORS configuration
2. Check browser console for detailed CORS logs

### If login fails with 401/404:
1. Make sure to create the admin user first
2. Use the exact credentials above
3. Check that the backend is running and accessible

## API Endpoints

- **Create Admin**: `POST /api/v1/admin/user/create-test-admin`
- **Login**: `POST /api/v1/auth/signIn`
- **Get Token**: `GET /api/v1/admin/token/{tokenAddress}`