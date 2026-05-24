# 🚀 Deployment Guide - Misty Horizon Holidays

Complete guide for deploying the website to various platforms.

## Table of Contents
1. [Pre-deployment Checklist](#pre-deployment-checklist)
2. [Vercel (Recommended)](#vercel-recommended)
3. [Netlify](#netlify)
4. [GitHub Pages](#github-pages)
5. [Traditional Server](#traditional-server)
6. [Docker](#docker)
7. [Post-deployment](#post-deployment)

---

## Pre-deployment Checklist

- [ ] Run `npm run build` locally and verify no errors
- [ ] Test production build: `npm run preview`
- [ ] Update business contact information in App.jsx
- [ ] Verify all images load correctly
- [ ] Test on different devices (desktop, tablet, mobile)
- [ ] Check all links and buttons work
- [ ] Test WhatsApp integration
- [ ] Verify Google Maps embed
- [ ] Update meta tags and descriptions
- [ ] Add favicon to public folder
- [ ] Optimize images (compressed)
- [ ] Run Lighthouse audit
- [ ] Test form submission
- [ ] Check analytics setup
- [ ] Verify domain/hosting setup

---

## Vercel (Recommended)

### Why Vercel?
- ⚡ Optimized for Vite & React
- 🌍 Global CDN
- 🔄 Automatic deployments from Git
- 📊 Analytics built-in
- 🔐 Automatic HTTPS
- 💨 Instant rollbacks

### Setup Steps

#### 1. Prepare for Deployment
```bash
# Ensure everything is committed to git
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

#### 2. Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub/GitLab/Bitbucket
- Authorize Vercel to access your repositories

#### 3. Import Project
1. Click "New Project"
2. Select your repository
3. Framework: Select "React"
4. Build command: `npm run build`
5. Output directory: `dist`

#### 4. Environment Variables (if needed)
```
VITE_API_URL=https://api.example.com
```

#### 5. Deploy
- Click "Deploy"
- Wait for build to complete
- Access your site at `your-project.vercel.app`

#### 6. Custom Domain
1. Go to project settings
2. Domains → Add Domain
3. Add your custom domain (e.g., mistyhorizonholidays.com)
4. Update DNS records at your domain provider

### Vercel Configuration File

Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "env": {
    "VITE_API_URL": "@api_url"
  },
  "regions": ["iad1", "sin1"],
  "functions": {
    "api/**/*.js": {
      "memory": 1024,
      "maxDuration": 60
    }
  },
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=3600"
        }
      ]
    }
  ]
}
```

---

## Netlify

### Setup Steps

#### 1. Connect Repository
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init
```

#### 2. Configuration

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[context.production]
  command = "npm run build"
  publish = "dist"

[context.deploy-preview]
  command = "npm run build"

[context.branch-deploy]
  command = "npm run build"
```

#### 3. Deploy
```bash
# Deploy
netlify deploy --prod
```

#### 4. Add Custom Domain
1. Go to Netlify Dashboard
2. Domain management → Add custom domain
3. Update DNS records

---

## GitHub Pages

### Setup Steps

#### 1. Update vite.config.js
```javascript
export default {
  base: '/misty-horizon/', // if deploying to subdirectory
  // ... rest of config
}
```

#### 2. Create GitHub Action

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 3. Repository Settings
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages / root

---

## Traditional Server

### Requirements
- Node.js 16+ (optional, can use prebuilt)
- Web server (Nginx/Apache)
- Domain with DNS

### Option A: With Node.js

#### 1. Build Locally
```bash
npm run build
```

#### 2. Upload Files
```bash
scp -r dist/* user@server:/var/www/misty-horizon/
```

#### 3. Install PM2 (Process Manager)
```bash
npm install -g pm2
```

#### 4. Create Server App

Create `server.js`:
```javascript
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(join(__dirname, 'dist')));

// Serve index.html for all routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### 5. PM2 Configuration

Create `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [{
    name: 'misty-horizon',
    script: './server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log'
  }]
};
```

#### 6. Start with PM2
```bash
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

### Option B: Static Only (Recommended)

#### 1. Build
```bash
npm run build
```

#### 2. Upload `dist` folder to server

#### 3. Configure Nginx

```nginx
server {
    listen 80;
    server_name mistyhorizonholidays.com;
    
    root /var/www/misty-horizon/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript 
               application/json application/javascript 
               application/x-javascript text/xml 
               application/xml application/xml+rss;
    
    # Cache
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

#### 4. Enable HTTPS (Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d mistyhorizonholidays.com
```

---

## Docker

### Dockerfile

Create `Dockerfile`:
```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install serve to serve static files
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

### .dockerignore
```
node_modules
npm-debug.log
dist
.git
.gitignore
README.md
.vscode
```

### Build & Run

```bash
# Build image
docker build -t misty-horizon:latest .

# Run container
docker run -p 3000:3000 misty-horizon:latest

# Or with docker-compose
docker-compose up
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  misty-horizon:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

---

## Post-deployment

### 1. Verify Deployment
- [ ] Test all pages load
- [ ] Test responsive design
- [ ] Test forms
- [ ] Check images load
- [ ] Test WhatsApp links
- [ ] Verify Google Maps
- [ ] Test contact information links
- [ ] Check animations
- [ ] Test on mobile devices

### 2. Setup Analytics
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Setup SSL Certificate
- For Vercel/Netlify: Automatic
- For traditional server: Use Let's Encrypt

### 4. Setup Email
```javascript
// Contact form should send to email service
// Use SendGrid, Mailgun, or similar
```

### 5. Monitor Performance
- Set up monitoring alerts
- Track uptime with UptimeRobot
- Monitor error logs

### 6. Backup Strategy
```bash
# Regular backups
rsync -avz dist/ backup@server:/backups/misty-horizon/
```

---

## Rollback Procedures

### Vercel
```bash
# View deployments
vercel list

# Rollback to previous
vercel rollback
```

### Netlify
```bash
# View deployments in UI
# Click "Publish deploy"
```

### Traditional Server
```bash
# Keep previous builds
cp -r dist dist-backup-$(date +%s)

# Restore if needed
cp -r dist-backup-{timestamp}/* dist/
```

---

## Performance Optimization

### 1. Enable Caching

**Nginx:**
```nginx
location ~* \.(js|css)$ {
    expires 1y;
}

location ~* \.(jpg|jpeg|png|gif|ico|svg)$ {
    expires 1y;
}

location = /index.html {
    expires 1d;
}
```

### 2. Enable Compression
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1024;
```

### 3. Use CDN
- Vercel: Built-in CDN
- Netlify: Built-in CDN
- Traditional: Add CloudFlare CDN

### 4. Lighthouse Audit
```bash
npm install -g lighthouse
lighthouse https://mistyhorizonholidays.com --view
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf node_modules
npm install
npm run build
```

### Styles Not Loading
- Check CSS imports
- Verify Tailwind CSS build
- Check CDN availability

### Images Not Showing
- Verify image paths
- Check file sizes
- Optimize images

### CORS Issues
- Add proper headers
- Configure CORS middleware
- Check API endpoints

### Slow Performance
- Enable caching
- Compress images
- Minimize bundle size
- Use CDN

---

## Support

For deployment issues:
1. Check deployment logs
2. Run build locally
3. Test with preview mode
4. Contact hosting support

---

**Last Updated**: May 2026
