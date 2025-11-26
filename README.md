# ZEGN Dashboard

A modern cryptocurrency trading and token management dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 Real-time Token Analytics
- 💰 Portfolio Management
- 📈 Trading Interface
- 👥 User Management (Admin)
- 🏷️ Category Management
- 📱 Responsive Design
- 🎨 Modern UI/UX

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Charts**: ApexCharts
- **UI Components**: Radix UI
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js (>=16.0.0)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:osamaqaseem39/zegn-dashboard.git
cd zegn-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Start the development server:
```bash
npm run dev
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=https://degn.vercel.app/api/v1
VITE_API_VERSION=v1

# Other configurations
VITE_APP_NAME=ZEGN Dashboard
VITE_APP_VERSION=2.0.0
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run linting

## Project Structure

```
src/
├── api/              # API service functions
├── components/       # Reusable UI components
│   ├── auth/         # Authentication components
│   ├── charts/       # Chart components
│   ├── common/       # Common components
│   ├── form/         # Form components
│   ├── modals/       # Modal components
│   └── ui/           # Base UI components
├── config/           # Configuration files
├── context/          # React contexts
├── hooks/            # Custom hooks
├── icons/            # Icon components
├── layout/           # Layout components
├── pages/            # Page components
│   ├── AuthPages/    # Authentication pages
│   ├── Dashboard/    # Dashboard pages
│   ├── Tokens/       # Token management pages
│   ├── Users/        # User management pages
│   └── ...
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Features Overview

### Dashboard
- Real-time token prices and charts
- Portfolio overview
- Recent transactions
- Market analytics

### Token Management
- Token listing and details
- Buy/Sell interface
- Price charts and analytics
- Token categories

### User Management (Admin)
- User list and details
- Balance management
- User analytics

### Authentication
- Secure login/logout
- Protected routes
- JWT token management

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set the build command: `npm run build`
3. Set the output directory: `dist`
4. Add environment variables in Vercel dashboard
5. Deploy!

The dashboard will be available at your Vercel domain.

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:

- `VITE_API_BASE_URL` - Your API domain
- `VITE_API_VERSION` - API version (usually v1)
- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Application version

## Development

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

### Adding New Features

1. Create feature branch
2. Add components in appropriate directories
3. Update types if needed
4. Add tests if applicable
5. Submit pull request

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.