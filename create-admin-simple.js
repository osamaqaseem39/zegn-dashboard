// Simple script to create admin user
// This will be used to create the initial admin user

const adminUser = {
  email: 'admin@zegn.com',
  password: 'Admin123!@#',
  role: 'admin',
  userName: 'System Administrator',
  referralCode: 'ADMIN001',
  walletInfo: {
    turnKeyWalletId: '',
    address: '',
    totalBalance: '0',
    cash: '0',
    hasExported: false,
    totalRewards: '0',
  },
  isActive: true,
  isEnableNotification: false,
  profileUrl: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log('✅ Initial admin user data prepared:');
console.log('📧 Email:', adminUser.email);
console.log('👤 Name:', adminUser.userName);
console.log('🔑 Role:', adminUser.role);
console.log('🔐 Password:', adminUser.password);
console.log('');
console.log('⚠️  IMPORTANT: Please change the default password after first login!');
console.log('🔐 Default Password: Admin123!@#');
console.log('');
console.log('To create this admin user, you can:');
console.log('1. Use MongoDB Compass or any MongoDB client');
console.log('2. Connect to your MongoDB database');
console.log('3. Insert this document into the "users" collection:');
console.log('');
console.log(JSON.stringify(adminUser, null, 2));