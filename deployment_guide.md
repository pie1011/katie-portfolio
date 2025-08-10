# 🚀 Complete Deployment Guide: GitHub to Netlify

## Step 1: Create a New React Project

### Option A: Using Create React App (Recommended)
```bash
# In your terminal/command prompt
npx create-react-app katie-portfolio
cd katie-portfolio
```

### Option B: Using Vite (Faster alternative)
```bash
npm create vite@latest katie-portfolio -- --template react
cd katie-portfolio
npm install
```

## Step 2: Install Required Dependencies

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Lucide React for icons
npm install lucide-react
```

## Step 3: Configure Tailwind CSS

### Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 4: Replace App.js with Your Portfolio

1. **Delete the default content** in `src/App.js`
2. **Copy the entire React component** from the artifact above
3. **Paste it into** `src/App.js`
4. **Make sure the import/export is correct:**

```javascript
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ExternalLink, Github, Linkedin, Mail, Briefcase, User, Code, GraduationCap, Award, MapPin, Calendar, ChevronDown, ChevronRight } from 'lucide-react';

// ... [paste the entire component code here] ...

export default ModernPortfolio;
```

## Step 5: Update App.js to Use Your Component

Replace the contents of `src/App.js` with:
```javascript
import ModernPortfolio from './ModernPortfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <ModernPortfolio />
    </div>
  );
}

export default App;
```

### Alternative: Create a separate component file
1. Create `src/ModernPortfolio.js` with the component code
2. Import it in `src/App.js`:
```javascript
import ModernPortfolio from './ModernPortfolio';
```

## Step 6: Test Locally

```bash
# Start the development server
npm start
```

Your site should open at `http://localhost:3000` - make sure everything looks good!

## Step 7: Create GitHub Repository

### Option A: Using GitHub Web Interface
1. Go to [github.com](https://github.com)
2. Click the **"+"** in the top right → **"New repository"**
3. Name it: `katie-harshman-portfolio` (or whatever you prefer)
4. Make it **Public**
5. **Don't** initialize with README (since you already have a project)
6. Click **"Create repository"**

### Option B: Using GitHub CLI (if you have it)
```bash
gh repo create katie-harshman-portfolio --public
```

## Step 8: Connect Local Project to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Modern React Portfolio"

# Add your GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/katie-harshman-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 9: Deploy to Netlify

### Method 1: Netlify Web Interface (Recommended)

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** (you can use your GitHub account)
3. **Click "Add new site"** → **"Import an existing project"**
4. **Connect to GitHub** → **Authorize Netlify**
5. **Choose your repository** (`katie-harshman-portfolio`)
6. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Branch:** `main`
7. **Click "Deploy site"**

### Method 2: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from your project directory
netlify deploy --prod --dir=build
```

## Step 10: Configure Custom Domain (Optional)

1. **In Netlify Dashboard** → **Site Settings** → **Domain Management**
2. **Add custom domain:** `katieharshman.com`
3. **Update DNS records** with your domain provider:
   - Add a **CNAME** record pointing to your Netlify subdomain
   - Or use Netlify's DNS if you transfer your domain

## Step 11: Set up Continuous Deployment

✅ **This happens automatically!** Every time you push to GitHub, Netlify will rebuild and deploy your site.

### To make updates:
```bash
# Make your changes
git add .
git commit -m "Update portfolio content"
git push origin main
```

## 📁 Final Project Structure

```
katie-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js (or ModernPortfolio.js)
│   ├── App.css
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔧 Troubleshooting Common Issues

### Build Fails - "Module not found"
```bash
# Make sure all dependencies are installed
npm install
```

### Tailwind styles not working
- Check that `tailwind.config.js` has the correct content paths
- Ensure `@tailwind` directives are in `src/index.css`

### Icons not showing
```bash
# Reinstall lucide-react
npm install lucide-react
```

### GitHub push fails
```bash
# Check if remote is set correctly
git remote -v

# If wrong, update it:
git remote set-url origin https://github.com/YOUR_USERNAME/your-repo-name.git
```

## 📝 Environment Variables (if needed)

Create `.env` in your project root:
```
REACT_APP_CONTACT_EMAIL=your-email@example.com
REACT_APP_SITE_URL=https://your-site.netlify.app
```

## 🎯 Next Steps After Deployment

1. **Test your live site** thoroughly on different devices
2. **Update your LinkedIn** with your new portfolio URL
3. **Add Google Analytics** (optional)
4. **Set up form handling** for the contact form
5. **Add your Netlify URL** to your GitHub repo description

## 🚨 Important Notes

- **Keep your repo public** for free GitHub/Netlify hosting
- **The contact form** will work automatically with Netlify Forms
- **All your existing PDFs and assets** need to be in the `public` folder
- **Update all asset URLs** to work with the new structure

Your portfolio will be live at: `https://your-site-name.netlify.app`

---

Need help with any of these steps? Let me know which part you're stuck on!