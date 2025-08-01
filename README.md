# SoftEdge Development Website

A modern, responsive website for SoftEdge Development showcasing web development, QA automation, and UX design services.

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📦 Deployment

This project is configured for automatic deployment to Netlify:

### Automatic Deployment Setup

1. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Netlify will automatically detect the build settings from `netlify.toml`

2. **GitHub Secrets (Optional - for GitHub Actions):**
   - Go to your GitHub repository settings
   - Navigate to Secrets and Variables > Actions
   - Add these secrets:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

### Build Configuration

- **Build Command:** `npm run build`
- **Publish Directory:** `out`
- **Node Version:** 18

## 🛠 Technologies

- **Framework:** Next.js 14.2.31
- **Styling:** Tailwind CSS
- **Typography:** Inter Font
- **Icons:** Lucide React
- **Deployment:** Netlify

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── [pages]/           # Individual pages
├── components/            # Reusable components
├── public/               # Static assets
├── netlify.toml          # Netlify configuration
└── next.config.mjs       # Next.js configuration
\`\`\`

## 🔧 Configuration Files

- `netlify.toml` - Netlify build and deployment settings
- `next.config.mjs` - Next.js configuration for static export
- `.github/workflows/deploy.yml` - GitHub Actions workflow (optional)

## 📈 Performance Features

- Static site generation
- Image optimization
- Font optimization with Inter
- Automatic caching headers
- Security headers
- PWA manifest

## 🔒 Security

- XSS Protection
- Content Security Policy
- Frame Options
- HTTPS enforcement
- Secure headers configuration

## 📱 PWA Features

- Offline capability
- App-like experience
- Custom manifest
- Optimized icons

---

Built with ❤️ by SoftEdge Development
