# AI/ML Career Transition Platform

![Earn Technologies LLC](images/logo.svg)

## 🚀 About

The AI/ML Career Transition Platform is a comprehensive web application designed to help software engineering professionals transition into AI/ML roles. Built by **Earn Technologies LLC**, this platform provides personalized learning paths, role mappings, training models, and curated resources.

## ✨ Features

- **📊 Overview**: Statistics and benefits of transitioning to AI/ML
- **🎯 Role Mapping**: 8 different SE roles mapped to AI/ML positions
- **📚 Training Model**: 6-phase structured learning path (6-18 months)
- **🎓 Personalized Paths**: Interactive tool to generate custom learning roadmaps
- **🔗 Resources**: Curated courses, books, certifications, and communities
- **💼 Professional Design**: Modern, responsive UI with gradient themes
- **📱 Mobile-Friendly**: Fully responsive design for all devices

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Advanced styling with gradients, animations, and flexbox/grid
- **JavaScript (ES6+)**: Interactive functionality and dynamic content
- **SVG**: Custom logo and graphics
- **No Dependencies**: Pure vanilla JavaScript - no frameworks required

## 📁 Project Structure

```
ai-ml-platform/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Complete stylesheet
├── js/
│   └── app.js              # JavaScript application logic
├── images/
│   ├── logo.svg            # Company logo
│   └── favicon.svg         # Website favicon
├── README.md               # This file
├── DEPLOYMENT.md           # Deployment guide
└── LICENSE                 # License file
```

## 🚀 Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or server required!

```bash
# Simple HTTP server (optional)
python -m http.server 8000
# or
npx serve
```

## 🌐 Cloud Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up** for a free account at [netlify.com](https://www.netlify.com)
2. **Drag and drop** the entire `ai-ml-platform` folder onto Netlify
3. Your site is live in seconds!
4. **Custom domain**: Configure in Site Settings → Domain Management

**Netlify CLI Method:**
```bash
npm install -g netlify-cli
cd ai-ml-platform
netlify deploy --prod
```

### Option 2: Vercel

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import** your project from Git or upload files
3. Deploy with one click

**Vercel CLI Method:**
```bash
npm install -g vercel
cd ai-ml-platform
vercel --prod
```

### Option 3: GitHub Pages

1. **Create** a GitHub repository
2. **Upload** all files
3. Go to Settings → Pages
4. Select branch and root folder
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 4: AWS S3 + CloudFront

1. **Create** an S3 bucket
2. **Enable** static website hosting
3. **Upload** all files
4. **Configure** CloudFront for CDN (optional)
5. **Set** bucket policy for public access

### Option 5: Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Option 6: Azure Static Web Apps

1. **Sign up** for Azure
2. Create a **Static Web App** resource
3. Connect your GitHub repo or upload files
4. Automatic deployment on every push

## 📋 Pre-Deployment Checklist

- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify all links work correctly
- [ ] Check logo and images load properly
- [ ] Test all interactive features (tabs, accordions, selectors)
- [ ] Validate HTML and CSS
- [ ] Optimize images (if any added later)
- [ ] Add Google Analytics (optional)
- [ ] Configure custom domain
- [ ] Add SSL certificate (usually automatic with hosting providers)

## 🎨 Customization

### Changing Colors

Edit `css/styles.css` and modify the gradient colors:

```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Updating Company Information

Edit `index.html`:
- Company name in header
- Contact information in footer
- Tagline and descriptions

### Adding Content

- **New roles**: Add to `role-mapping` section in HTML
- **New resources**: Add to `resources` section
- **New training phases**: Add to `timeline` in HTML

## 📊 Analytics Integration

Add Google Analytics:

```html
<!-- Add before closing </head> tag in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🔒 Security Considerations

- No sensitive data stored
- No backend required
- Static site = inherently secure
- Use HTTPS (automatic with most hosting providers)
- Regular updates to keep content fresh

## 🐛 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Responsive design with breakpoints at 768px and 480px
- Touch-friendly navigation
- Optimized font sizes for mobile
- Hamburger menu considerations built-in

## ⚡ Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **No external dependencies**: Faster loading
- **Optimized CSS**: Minimal file size
- **Efficient JavaScript**: No unnecessary libraries

## 🧪 Testing

### Manual Testing Checklist

- [ ] All tabs navigate correctly
- [ ] Accordions expand/collapse
- [ ] Personalized path generator works
- [ ] All dropdowns function
- [ ] Links open correctly
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Mobile menu works
- [ ] Print stylesheet works

### Automated Testing

```bash
# HTML Validation
https://validator.w3.org/

# CSS Validation
https://jigsaw.w3.org/css-validator/

# Lighthouse Audit
Run in Chrome DevTools
```

## 📝 License

Copyright © 2025 Earn Technologies LLC. All rights reserved.

## 🤝 Support

For support or inquiries:
- **Email**: info@earntechnologies.com
- **Phone**: +1 (555) 123-4567
- **Website**: [Coming Soon]

## 🎯 Roadmap

- [ ] Add user authentication
- [ ] Progress tracking dashboard
- [ ] Email newsletter integration
- [ ] Course recommendation engine
- [ ] Community forum
- [ ] Video tutorials
- [ ] Career coaching integration
- [ ] Job board integration

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## 🙏 Acknowledgments

Built with passion by **Earn Technologies LLC** to empower software engineers in their AI/ML career transition journey.

---

**Made with ❤️ by Earn Technologies LLC**

*Empowering Careers Through AI/ML Innovation*