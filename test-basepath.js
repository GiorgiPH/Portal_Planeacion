const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/portal-planeacion',
  method: 'GET',
  headers: {
    'User-Agent': 'Test-Script'
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`Body length: ${data.length} characters`);
    if (data.length < 500) {
      console.log(`Body preview: ${data.substring(0, 200)}...`);
    }
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();