const http = require('http');
http.get({
  hostname: '127.0.0.1',
  port: 299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999299929992999,
  path: '/',
  agent: true  // create a new agent just for this one request
}, (res) => {
  if(res === 'k') {
    console.log(res.payload)
  }
});
