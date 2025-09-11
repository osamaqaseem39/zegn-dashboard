# Admin Setup Instructions

## Initial Admin User

The system has been configured to use a single admin user for access. The signup functionality has been removed for security reasons.

### Admin Credentials

- **Email**: `admin@zegn.com`
- **Password**: `Admin123!@#`
- **Role**: `admin`

### Setting Up the Admin User

1. **Start MongoDB** (if not already running)
2. **Connect to your MongoDB database** using MongoDB Compass or any MongoDB client
3. **Navigate to the "users" collection**
4. **Insert the following document**:

```json
{
  "email": "admin@zegn.com",
  "password": "Admin123!@#",
  "role": "admin",
  "userName": "System Administrator",
  "referralCode": "ADMIN001",
  "walletInfo": {
    "turnKeyWalletId": "",
    "address": "",
    "totalBalance": "0",
    "cash": "0",
    "hasExported": false,
    "totalRewards": "0"
  },
  "isActive": true,
  "isEnableNotification": false,
  "profileUrl": "",
  "createdAt": "2025-09-09T12:03:23.671Z",
  "updatedAt": "2025-09-09T12:03:23.671Z"
}
```

### Security Notes

⚠️ **IMPORTANT**: Change the default password after first login!

1. Log in with the admin credentials
2. Navigate to the user profile section
3. Change the password to something secure
4. Consider enabling two-factor authentication if available

### Accessing the Dashboard

1. Start the dashboard: `npm run dev`
2. Navigate to `http://localhost:3001`
3. Use the admin credentials to log in
4. You'll have full access to all admin features

### Features Available

- User Management (view, create, edit users)
- Admin User Creation (create additional admin users)
- Token Management
- Transaction Management
- Category Management
- Market Analysis
- Dashboard Analytics

### Troubleshooting

If you can't log in:
1. Verify the admin user exists in the MongoDB "users" collection
2. Check that the email and password match exactly
3. Ensure the user has `"isActive": true`
4. Check the API server is running and accessible

### Creating Additional Admin Users

Once logged in as the initial admin:
1. Navigate to "Users" in the sidebar
2. Click "Create Admin" button
3. Fill in the admin details
4. The new admin will be created with full privileges