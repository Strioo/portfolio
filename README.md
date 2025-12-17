# 🌐 Portfolio Website - Wahid Satrio Aji

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-purple)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-cyan)](https://tailwindcss.com/)

> Modern, responsive, and performant portfolio website built with React, Vite, and TailwindCSS.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 📱 **Fully Responsive** - Looks great on all devices
- 🎨 **Modern UI/UX** - Clean design with smooth animations
- 🌙 **Dark Theme** - Eye-friendly dark color scheme
- 📧 **Contact Form** - Direct email integration
- 🎓 **Certificates Showcase** - Dynamic certificate display
- 💼 **Project Portfolio** - Showcase of real-world projects

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite 7.3.0
- **Styling:** TailwindCSS v4
- **Deployment:** Vercel

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

📖 **See detailed guide:** [VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)

**Important:** Images do NOT need to be moved from `src/assets/` to `public/`. Vite will automatically bundle and optimize them during build.

## 📁 Project Structure

```
frontend-portfolio/
├── public/                        # Static files (favicon only)
├── src/
│   ├── assets/images/            # All images (auto-bundled by Vite)
│   ├── components/               # React components
│   ├── lib/data.js              # Content configuration
│   └── index.css                # Global styles
├── index.html
└── vite.config.js
```

## 🎨 Customization

### Update Personal Info

Edit `src/lib/data.js`:

```javascript
export const personalInfo = {
  name: 'Your Name',
  role: 'Your Role',
  // ... customize all content here
};
```

### Change Colors

Edit `src/index.css` CSS variables.

## 👤 Author

**Wahid Satrio Aji** - Frontend Developer

- GitHub: [@Strioo](https://github.com/Strioo)
- LinkedIn: [Wahid Satrio Aji](https://www.linkedin.com/in/wahid-satrio-aji/)
- Instagram: [@dihawt0](https://www.instagram.com/dihawt0/)
- Email: wahidsatrioaji29@gmail.com

---

Made with ❤️ by Wahid Satrio Aji
