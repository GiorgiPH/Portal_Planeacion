const http = require('http');

const baseUrl = 'http://localhost:3000';
const basePath = '/portal-planeacion';

const testPaths = [
  `${basePath}/`,
  `${basePath}/images/logo-finanzas.png`,
  `${basePath}/icon-light-32x32.png`,
  `${basePath}/icon-dark-32x32.png`,
  `${basePath}/apple-icon.png`
];

function testPath(path) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'GET',
      timeout: 5000
    };

    const req = http.request(options, (res) => {
      console.log(`✓ ${path} - Status: ${res.statusCode}, Content-Type: ${res.headers['content-type']}`);
      res.on('data', () => {}); // Consumir datos
      res.on('end', () => {
        resolve(res.statusCode === 200 || res.statusCode === 304);
      });
    });

    req.on('error', (e) => {
      console.log(`✗ ${path} - Error: ${e.message}`);
      resolve(false);
    });

    req.on('timeout', () => {
      console.log(`✗ ${path} - Timeout`);
      req.destroy();
      resolve(false);
    });

    req.end();
  });
}

async function runTests() {
  console.log('Testing image paths with basePath...\n');
  
  const results = [];
  for (const path of testPaths) {
    const success = await testPath(path);
    results.push({ path, success });
    await new Promise(resolve => setTimeout(resolve, 100)); // Pequeña pausa
  }
  
  console.log('\n=== Summary ===');
  const successful = results.filter(r => r.success).length;
  const total = results.length;
  console.log(`Successful: ${successful}/${total}`);
  
  if (successful < total) {
    console.log('\nFailed paths:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.path}`);
    });
    process.exit(1);
  } else {
    console.log('\nAll tests passed!');
    process.exit(0);
  }
}

runTests().catch(console.error);