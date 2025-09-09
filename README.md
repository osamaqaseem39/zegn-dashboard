# ZEGN Dashboard

A modern, comprehensive trading dashboard built with React, TypeScript, and Tailwind CSS. This dashboard integrates with the ZEGN API to provide a complete trading experience with user authentication, token trading, transaction history, and referral management.

## 🚀 Features

- **User Authentication**: Secure login/register with JWT tokens
- **Token Trading**: Buy, sell, and swap tokens with real-time quotes
- **Transaction History**: View and track all your trading activities
- **Real-time Prices**: Live token price updates with 24h changes
- **Referral System**: Manage your referral code and track earnings
- **Responsive Design**: Modern UI that works on all devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Comprehensive Forms**: Advanced form system with validation and consistent styling
- **User Management**: Complete user profile management with preferences
- **Token Management**: Full token administration with market data
- **Transaction Analytics**: Advanced filtering and export capabilities

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **State Management**: React Context API
- **HTTP Client**: Axios with interceptors
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Form System**: Custom form components with validation

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn
- ZEGN API running (see zegn-api directory)

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   cd zegn-dashboard
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:8081/v1
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
zegn-dashboard/
├── src/
│   ├── api/                    # API service files
│   │   ├── authApi.ts         # Authentication API
│   │   ├── transactionApi.ts  # Trading API
│   │   ├── tokenApi.ts        # Token data API
│   │   ├── referralApi.ts     # Referral API
│   │   └── axiosConfig.ts     # Axios configuration
│   ├── components/
│   │   ├── form/              # Form components
│   │   │   ├── Form.tsx       # Base form component
│   │   │   └── input/         # Form input components
│   │   │       ├── InputField.tsx
│   │   │       ├── SelectField.tsx
│   │   │       ├── TextArea.tsx
│   │   │       └── Checkbox.tsx
│   │   ├── ui/                # Reusable UI components
│   │   └── ...                # Other components
│   ├── context/
│   │   └── AuthContext.tsx    # Authentication context
│   ├── pages/
│   │   ├── Dashboard/         # Main dashboard
│   │   ├── AuthPages/         # Login/Register pages
│   │   ├── Users/             # User management
│   │   │   ├── UserProfileForm.tsx
│   │   │   └── ...
│   │   ├── Tokens/            # Token management
│   │   │   ├── TokenManagementForm.tsx
│   │   │   └── ...
│   │   ├── Transactions/      # Transaction management
│   │   │   ├── TransactionHistoryForm.tsx
│   │   │   └── ...
│   │   └── ...                # Other pages
│   ├── utils/
│   │   └── cn.ts              # Utility functions
│   └── App.tsx                # Main app component
├── public/                    # Static assets
└── package.json
```

## 🎨 Design System

The dashboard uses a consistent design system with:

### Color Palette
- **Primary**: Brand blue (#465FFF)
- **Success**: Green (#12B76A)
- **Error**: Red (#F04438)
- **Warning**: Orange (#FB6514)
- **Gray Scale**: 25-950 range for backgrounds and text

### Typography
- **Font Family**: Outfit (Google Fonts)
- **Font Sizes**: Custom scale with theme-sm, theme-md, theme-lg
- **Font Weights**: 100-900 range

### Components
- **Cards**: Consistent card components with headers, content, and footers
- **Buttons**: Multiple variants (default, outline, secondary, destructive)
- **Inputs**: Form inputs with icons, validation states, and hints
- **Badges**: Status indicators and labels
- **Modals**: Overlay dialogs for confirmations and forms

## 📝 Form System

The dashboard includes a comprehensive form system with:

### Base Form Component
- **Form.tsx**: Wrapper component with consistent styling and actions
- **Features**: Loading states, validation, back navigation, submit/cancel actions
- **Variants**: Create, edit, and view modes

### Input Components
- **InputField.tsx**: Text, number, email, password, date inputs
- **SelectField.tsx**: Dropdown selection with options
- **TextArea.tsx**: Multi-line text input with character count
- **Checkbox.tsx**: Boolean inputs with custom styling

### Features
- **Consistent Styling**: All inputs follow the design system
- **Validation States**: Error, success, and disabled states
- **Icons**: Optional left/right icons for better UX
- **Hints**: Helper text and character limits
- **Accessibility**: Proper labels and ARIA attributes

## 🔧 API Integration

The dashboard integrates with the following ZEGN API endpoints:

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /auth/profile` - Get user profile
- `PUT /auth/profile` - Update user profile

### Trading
- `POST /transactions/buy` - Buy tokens
- `POST /transactions/sell` - Sell tokens
- `POST /transactions/swap` - Swap tokens
- `GET /transactions/history` - Get transaction history
- `GET /transactions/quote` - Get swap quotes

### Tokens
- `GET /tokens` - List available tokens
- `GET /tokens/prices` - Get token prices

### Referrals
- `GET /referrals/code` - Get referral code
- `GET /referrals/stats` - Get referral statistics
- `GET /referrals/earnings` - Get referral earnings

## 📊 Dashboard Features

### Main Dashboard
- **Overview Cards**: Display balance, transactions, referrals, and earnings
- **Trading Interface**: Buy tokens with real-time quotes
- **Token Prices**: Live price updates with 24h changes
- **Recent Transactions**: List of recent trading activities
- **Referral Program**: Manage referral code and track earnings

### User Management
- **User Profile Form**: Complete user profile management
- **Preferences**: Language, timezone, currency settings
- **Notifications**: Email, push, and SMS notification settings
- **Account Status**: Verification status and balance display

### Token Management
- **Token Management Form**: Add and edit token information
- **Basic Info**: Symbol, name, address, decimals
- **Social Links**: Website, Twitter, Telegram, Discord
- **Market Data**: Market cap, volume, supply information
- **Token Settings**: Active status and verification

### Transaction Management
- **Transaction History Form**: Advanced transaction filtering
- **Filters**: Type, status, token, date range, amount range
- **Statistics**: Total, completed, pending, failed counts
- **Export**: CSV export functionality
- **Pagination**: Page navigation for large datasets

### Trading Flow
1. Select a token from the dropdown
2. Enter the amount to trade
3. Set slippage tolerance
4. Get a quote for the trade
5. Review the quote details
6. Execute the trade

## 🎯 Key Features

### Real-time Data
- Live token prices with 24h change indicators
- Real-time transaction status updates
- Dynamic balance updates

### User Experience
- Responsive design for all screen sizes
- Loading states and error handling
- Intuitive navigation and layout
- Modern, clean UI design
- Consistent form experience

### Security
- JWT token-based authentication
- Secure API communication
- Protected routes
- Automatic token refresh

### Form Features
- **Validation**: Client-side and server-side validation
- **Error Handling**: Clear error messages and states
- **Loading States**: Visual feedback during operations
- **Accessibility**: Screen reader support and keyboard navigation
- **Responsive**: Mobile-friendly form layouts

## 🔧 Development

### Adding New Features
1. Create API service functions in `src/api/`
2. Add UI components in `src/components/`
3. Create pages in `src/pages/`
4. Update routing in `App.tsx`

### Styling
- Use Tailwind CSS classes for styling
- Create custom components in `src/components/ui/`
- Follow the existing design system
- Use the form components for consistent UX

### State Management
- Use React Context for global state
- Use local state for component-specific data
- Keep API calls in service files

### Form Development
1. Use the base `Form` component for consistent layout
2. Import form inputs from `src/components/form/input/`
3. Follow the established patterns for validation and error handling
4. Use the design system colors and spacing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables
- `REACT_APP_API_BASE_URL`: ZEGN API base URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation
- Review the troubleshooting section
- Create an issue in the repository

## 🔗 Related Projects

- [ZEGN API](../zegn-api) - Backend API service
- [ZEGN Documentation](../docs) - API documentation

