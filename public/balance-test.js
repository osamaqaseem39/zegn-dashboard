// Balance Endpoint Test Script
// Run this in your browser console while logged into the dashboard

(function() {
  console.log('🚀 Starting Balance Endpoint Tests...');
  
  // Get JWT token from localStorage
  const token = localStorage.getItem('token') || localStorage.getItem('auth_token') || localStorage.getItem('jwt');
  
  if (!token) {
    console.error('❌ No JWT token found in localStorage. Please login first.');
    return;
  }
  
  console.log('✅ JWT token found');
  
  // Test function
  async function testBalanceEndpoint(includeHoldings = false) {
    const url = includeHoldings 
      ? '/api/v1/user/balance?isHoldings=true' 
      : '/api/v1/user/balance';
    
    const testName = includeHoldings ? 'WITH Holdings' : 'WITHOUT Holdings';
    
    console.log(`\n📋 Testing ${testName}...`);
    console.log(`📍 URL: ${url}`);
    
    try {
      const startTime = performance.now();
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const endTime = performance.now();
      const duration = Math.round(endTime - startTime);
      
      console.log(`⏱️  Response time: ${duration}ms`);
      console.log(`📊 Status: ${response.status} ${response.statusText}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Success - ${testName}:`);
        console.log('📄 Response Data:', data);
        
        // Extract and display key metrics
        if (data.data) {
          const balance = data.data;
          console.log(`💰 Total Balance: $${balance.totalBalance || '0'}`);
          console.log(`💵 Cash Balance: $${balance.cashBalance || '0'}`);
          console.log(`📈 Holdings Balance: $${balance.totalHoldingBalance || '0'}`);
          console.log(`📊 All Time Profit: $${balance.allTimeProfit || '0'}`);
          console.log(`🪙 Token Accounts: ${balance.tokenAccounts?.length || 0}`);
          console.log(`📋 Holdings: ${balance.holdings?.length || 0}`);
          
          if (balance.error) {
            console.warn(`⚠️  Balance Warning: ${balance.error}`);
          }
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error(`❌ Error - ${testName}:`);
        console.error('📄 Error Data:', errorData);
      }
      
    } catch (error) {
      console.error(`❌ Network Error - ${testName}:`, error);
    }
  }
  
  // Run tests
  async function runAllTests() {
    await testBalanceEndpoint(false); // Without holdings
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
    await testBalanceEndpoint(true);  // With holdings
    
    console.log('\n🎉 All tests completed!');
    console.log('💡 Tip: Check the Network tab in DevTools for more details');
  }
  
  runAllTests();
})();