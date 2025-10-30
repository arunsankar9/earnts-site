# 🚀 Deployment Guide - AI/ML Career Transition Platform

This guide provides step-by-step instructions for deploying your AI/ML Career Transition Platform to various cloud hosting providers.

## Table of Contents

1. [Netlify Deployment (Recommended)](#netlify-deployment)
2. [Vercel Deployment](#vercel-deployment)
3. [GitHub Pages Deployment](#github-pages-deployment)
4. [AWS S3 + CloudFront Deployment](#aws-s3--cloudfront-deployment)
5. [Firebase Hosting Deployment](#firebase-hosting-deployment)
6. [Azure Static Web Apps](#azure-static-web-apps)
7. [Custom Domain Setup](#custom-domain-setup)
8. [SSL Certificate Configuration](#ssl-certificate-configuration)
9. [Performance Optimization](#performance-optimization)

---

## 1. Netlify Deployment

### Method A: Drag & Drop (Easiest)

1. **Create Account**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up for a free account (GitHub, GitLab, or email)

2. **Deploy Site**
   - Log in to Netlify dashboard
   - Drag and drop the entire `ai-ml-platform` folder onto the deploy zone
   - Wait 10-30 seconds for deployment

3. **Your Site is Live!**
   - Netlify provides a random URL: `https://random-name-12345.netlify.app`
   - Click on the URL to view your site

4. **Customize URL**
   - Go to Site Settings → General → Site Details
   - Click "Change site name"
   - Enter: `earn-technologies-ml-platform` (or your choice)
   - New URL: `https://earn-technologies-ml-platform.netlify.app`

### Method B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to project directory
cd ai-ml-platform

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod

# Follow prompts:
# - Create new site or use existing
# - Choose team (usually your personal account)
# - Site name: earn-technologies-ml-platform
# - Publish directory: . (current directory)
```

### Method C: Git-based Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ai-ml-platform.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.`
   - Click "Deploy site"

3. **Auto-Deploy**
   - Every push to `main` branch triggers automatic deployment
   - View deploy logs in Netlify dashboard

### Netlify Features

- ✅ Free SSL certificate (automatic)
- ✅ Custom domains
- ✅ Continuous deployment from Git
- ✅ Deploy previews for pull requests
- ✅ Form handling
- ✅ Serverless functions (if needed later)
- ✅ CDN distribution worldwide

---

## 2. Vercel Deployment

### Method A: Web Interface

1. **Create Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or email

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import from Git repository or upload files
   - Select `ai-ml-platform` directory

3. **Configure**
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `.`
   - Install Command: (leave empty)

4. **Deploy**
   - Click "Deploy"
   - Your site is live at `https://your-project.vercel.app`

### Method B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd ai-ml-platform

# Login
vercel login

# Deploy
vercel --prod

# Follow prompts
```

### Vercel Features

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant rollbacks
- ✅ Preview deployments
- ✅ Zero-config deployments

---

## 3. GitHub Pages Deployment

### Step-by-Step

1. **Create GitHub Repository**
   ```bash
   # Create new repo on GitHub first
   # Then in your local directory:
   
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ai-ml-platform.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
   - Click "Save"

3. **Access Your Site**
   - URL: `https://yourusername.github.io/ai-ml-platform/`
   - Takes 1-5 minutes to go live

4. **Custom Domain (Optional)**
   - Add `CNAME` file to root with your domain
   - Configure DNS settings with your domain provider
   - Add custom domain in GitHub Pages settings

### GitHub Pages Limitations

- ⚠️ Public repositories only (free tier)
- ⚠️ No server-side processing
- ⚠️ 1GB storage limit
- ✅ Free SSL with custom domains

---

## 4. AWS S3 + CloudFront Deployment

### Prerequisites

- AWS Account
- AWS CLI installed

### Step 1: Create S3 Bucket

```bash
# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Create bucket (replace with your bucket name)
aws s3 mb s3://earn-technologies-ml-platform

# Upload files
cd ai-ml-platform
aws s3 sync . s3://earn-technologies-ml-platform/
```

### Step 2: Configure Bucket for Static Hosting

```bash
# Enable static website hosting
aws s3 website s3://earn-technologies-ml-platform/ \
  --index-document index.html \
  --error-document index.html
```

### Step 3: Set Bucket Policy

Create `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::earn-technologies-ml-platform/*"
    }
  ]
}
```

Apply policy:

```bash
aws s3api put-bucket-policy \
  --bucket earn-technologies-ml-platform \
  --policy file://bucket-policy.json
```

### Step 4: Create CloudFront Distribution (CDN)

1. Go to AWS Console → CloudFront
2. Create Distribution
3. Origin Domain: Select your S3 bucket
4. Origin Path: (leave empty)
5. Viewer Protocol Policy: Redirect HTTP to HTTPS
6. Price Class: Use All Edge Locations
7. Alternate Domain Names: your-domain.com (optional)
8. SSL Certificate: Default or custom
9. Create Distribution

### Costs

- S3: ~$0.023 per GB storage
- CloudFront: ~$0.085 per GB transfer
- Free tier: 50 GB transfer/month for 1 year

---

## 5. Firebase Hosting Deployment

### Setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize Firebase in project directory
cd ai-ml-platform
firebase init hosting

# Select options:
# - Use existing project or create new
# - Public directory: . (current directory)
# - Single-page app: Yes
# - Set up automatic builds with GitHub: Optional

# Deploy
firebase deploy --only hosting
```

### Firebase Configuration

Your `firebase.json` should look like:

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Firebase Features

- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Custom domains
- ✅ Deploy rollback
- ✅ Free tier: 10GB storage, 360MB/day transfer

---

## 6. Azure Static Web Apps

### Using Azure Portal

1. **Create Resource**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource"
   - Search "Static Web Apps"
   - Click "Create"

2. **Configure**
   - Subscription: Your subscription
   - Resource Group: Create new or use existing
   - Name: earn-technologies-ml-platform
   - Region: Choose nearest
   - SKU: Free
   - Deployment source: GitHub or Other

3. **GitHub Integration (Optional)**
   - Authorize Azure to access GitHub
   - Select repository and branch
   - Build presets: Custom
   - App location: /
   - Output location: (leave empty)

4. **Deploy**
   - Click "Review + create"
   - Click "Create"
   - URL: `https://your-app.azurestaticapps.net`

### Using Azure CLI

```bash
# Install Azure CLI
# For macOS: brew install azure-cli
# For Windows: Download from Azure website

# Login
az login

# Create Static Web App
az staticwebapp create \
  --name earn-technologies-ml-platform \
  --resource-group myResourceGroup \
  --location "Central US" \
  --sku Free

# Deploy
az staticwebapp upload \
  --name earn-technologies-ml-platform \
  --source ./ai-ml-platform
```

---

## 7. Custom Domain Setup

### DNS Configuration

Add these DNS records at your domain provider:

**For root domain (example.com):**
```
Type: A
Name: @
Value: [Provider's IP address]

Type: CNAME
Name: www
Value: [Provider's domain]
```

**For subdomain (platform.example.com):**
```
Type: CNAME
Name: platform
Value: [Provider's domain]
```

### Provider-Specific Instructions

**Netlify:**
1. Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions
4. SSL automatically provisioned

**Vercel:**
1. Project Settings → Domains
2. Add domain
3. Configure DNS as instructed
4. SSL automatically provisioned

**GitHub Pages:**
1. Settings → Pages → Custom domain
2. Enter domain name
3. Add CNAME file to repository
4. Configure DNS at your registrar

---

## 8. SSL Certificate Configuration

### Automatic SSL (Recommended)

Most modern hosting providers offer free, automatic SSL:

- **Netlify**: Automatic (Let's Encrypt)
- **Vercel**: Automatic (Let's Encrypt)
- **Firebase**: Automatic (Google-managed)
- **Cloudflare**: Automatic (Cloudflare SSL)

### Manual SSL Setup

If using custom hosting:

1. **Get Certificate**
   - Use Let's Encrypt (free)
   - Use Certbot for automation
   
2. **Install Certificate**
   ```bash
   # Example for Certbot
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

3. **Auto-Renewal**
   ```bash
   # Certbot sets up auto-renewal
   sudo certbot renew --dry-run
   ```

---

## 9. Performance Optimization

### Before Deployment

1. **Minify CSS**
   ```bash
   # Using cssnano or online tool
   npx cssnano css/styles.css css/styles.min.css
   ```

2. **Minify JavaScript**
   ```bash
   # Using terser
   npx terser js/app.js -o js/app.min.js -c -m
   ```

3. **Optimize Images**
   - SVGs are already optimized
   - For future raster images, use tools like:
     - ImageOptim (Mac)
     - TinyPNG (Online)
     - SVGO (CLI)

### After Deployment

1. **Enable Compression**
   - Most CDNs enable gzip/brotli automatically
   - Verify in Network tab (DevTools)

2. **Set Cache Headers**
   - Static assets: 1 year cache
   - HTML: No cache or short cache

3. **Use CDN**
   - All recommended providers include CDN
   - Content served from edge locations worldwide

4. **Monitor Performance**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest
   - Lighthouse (Chrome DevTools)

### Performance Checklist

- [ ] Minified CSS and JS
- [ ] Optimized images
- [ ] Browser caching enabled
- [ ] Gzip/Brotli compression
- [ ] CDN enabled
- [ ] HTTPS enabled
- [ ] HTTP/2 enabled
- [ ] Lazy loading for images (if added later)

---

## 🎯 Recommended Deployment Choice

**For this project, we recommend Netlify:**

✅ **Easiest setup** (drag & drop)  
✅ **Free tier** is generous  
✅ **Automatic SSL**  
✅ **Global CDN**  
✅ **Deploy previews**  
✅ **Custom domains** included  
✅ **No credit card** required  

---

## 📞 Need Help?

If you encounter any issues during deployment:

1. Check hosting provider's documentation
2. Review error logs in provider's dashboard
3. Verify DNS propagation (use whatsmydns.net)
4. Clear browser cache
5. Contact Earn Technologies LLC support

---

## ✅ Post-Deployment Checklist

After successful deployment:

- [ ] Test site on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check SSL certificate is active
- [ ] Test all interactive features
- [ ] Verify analytics are tracking (if added)
- [ ] Check page load speed
- [ ] Test forms (if any)
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google Search Console
- [ ] Add site to Google Analytics
- [ ] Share site URL!

---

**Deployment Complete! 🎉**

Your AI/ML Career Transition Platform is now live and helping people transform their careers!

*Questions? Contact Earn Technologies LLC at info@earntechnologies.com*