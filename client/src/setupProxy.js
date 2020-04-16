const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: 'http://server:3001',
  pathRewrite: {
    '^/api': '/', 
  },
};

module.exports = (app) => app.use('/api', createProxyMiddleware(options));