# Harinarayan Kumar - Premium Portfolio Website

A modern, premium portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── YouTube.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Opens automatically at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📄 Features

### 🎨 Navbar
- Glassmorphic design with backdrop blur
- Smooth animations using Framer Motion
- Responsive mobile menu
- Fixed navigation with smooth scroll anchors

### 🦸 Hero Section
- Eye-catching gradient headline
- Multi-level animation on load
- Call-to-action buttons (Download Resume, View Work)
- Animated scroll indicator
- Background gradient effects

### 💪 Skills Section
- Categorized skills: Data Science, Development, Security/Tools
- Icon-based category display
- Hover animations on skill badges
- Gradient backgrounds with glassmorphic cards

### 📌 Projects Grid
- 3 featured projects with detailed descriptions
- Technology tags for each project
- Action buttons (View & GitHub links)
- Hover animations and glow effects
- Fully responsive card layout

### 📺 YouTube Section
- Statistics display (Subscribers, Videos, Views)
- Featured videos showcase
- Call-to-action to subscribe
- Clean, minimal design

### 🔗 Footer
- Contact information
- Social media links (GitHub, LinkedIn, YouTube, Email)
- Quick links section
- "Made with ❤️ in Gaya" footer message

## 🎯 Design System

### Color Palette
- **Primary Dark**: `#020617` (darker)
- **Secondary Dark**: `#0F172A` (dark)
- **Cyan**: `#00D4FF`
- **Neon Blue**: `#0EA5E9`
- **Neon Purple**: `#A855F7`

### Components
- Glassmorphic cards with backdrop blur
- Gradient text using `bg-clip-text`
- Smooth transitions and animations
- Responsive design using Tailwind breakpoints

## 🎬 Animations

- **Page Load**: Staggered animations with Framer Motion
- **Hover Effects**: Scale, rotate, and color transitions
- **Scroll Reveal**: Elements animate in on scroll
- **Continuous**: Floating and glowing effects
- **Navigation**: Smooth transitions between sections

## 📱 Responsive Design

- Mobile-first approach
- Fully responsive from 320px to 2560px
- Tailwind breakpoints: sm, md, lg, xl, 2xl
- Mobile hamburger menu
- Optimized touch interactions

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
Update `vite.config.js` with base path if needed.

## 📊 Performance Optimizations

- Code splitting with Vite
- Lazy loading images (future enhancement)
- CSS purging with Tailwind
- Minimal JavaScript bundle
- Smooth 60fps animations

## 🔐 Security

- No external CDN dependencies
- Local node modules
- Safe external links with `rel="noopener noreferrer"`
- XSS protection with React

## 📝 Customization

### Update Personal Information
Edit data in component files:
- **Navbar**: `src/components/Navbar.jsx`
- **Hero**: `src/components/Hero.jsx`
- **Footer**: `src/components/Footer.jsx`

### Modify Colors
Update in `tailwind.config.js`:
```js
colors: {
  'cyan': '#00D4FF',
  // ... other colors
}
```

### Add/Remove Sections
Create new components in `src/components/` and import in `App.jsx`

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 💬 Support

For questions or issues, feel free to reach out:
- 📧 Email: harinarayankumar548@gmail.com
- 🔗 LinkedIn: linkedin.com/in/harinarayankumarpal
- 🐙 GitHub: github.com/HARINARAYAN-2027

---

**Made with ❤️ in Gaya, Bihar**
