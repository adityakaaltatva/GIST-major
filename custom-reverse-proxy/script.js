import express from 'express';
import httpProxy from 'http-proxy';

const app = express();

const BASE_PATH = 'https://gist-deploy.s3.ap-south-1.amazonaws.com/output';

const proxy = httpProxy.createProxyServer();

app.use((req, res) => {
    const hostname = req.hostname;
    const subdomain = hostname.split('.')[0];
    const resolvesTo = `${BASE_PATH}/${subdomain}`;

    console.log(`Proxying request for ${hostname} to ${resolvesTo}`);

    proxy.web(req, res, { target: resolvesTo, changeOrigin: true }, (err) => {
        console.error('Proxy error:', err.message);
        res.status(500).send('Proxy error occurred');
    });
});

// Add behavior for root URLs to redirect to `index.html`
proxy.on('proxyReq', (proxyReq, req, res) => {
    if (req.url === '/') {
        proxyReq.path += 'index.html'; // 
        console.log(`Rewriting path to: ${proxyReq.path}`);
    }
});

const port = 8000;

app.listen(port, () => {
    console.log(`Reverse proxy running on port ${port}`);
});
