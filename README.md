# Kelly Zhong's Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Showcase my projects, skills, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple)

## ✨ Features

- 🎨 **Beautiful UI** - Modern, clean design with smooth animations
- 📱 **Responsive** - Fully responsive for all screen sizes
- ⚡ **Fast** - Built with Vite for lightning-fast HMR and builds
- 🌙 **Dark/Light Mode** - Toggle between themes (optional feature)
- 🎯 **Smooth Animations** - Framer Motion for delightful interactions
- 📄 **Multiple Pages** - Home, Projects, About, Resume
- 🔗 **Easy Navigation** - React Router for seamless page transitions

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 5** - Build tool & dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Styling
- **CSS** - Modern CSS with CSS variables
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/925754332-dev/pinkdev-portfolio.git

# Navigate to project directory
cd pinkdev-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build



# Preview production build
npm run preview
```

The dev server will run at `http://localhost:5173/`

## 📁 Project Structure

```
pinkdev-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   ├── Navbar.tsx    # Navigation bar
│   │   └── Footer.tsx    # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── Projects.tsx   # Projects listing
│   │   ├── ProjectDetail.tsx  # Individual project
│   │   ├── About.tsx     # About me
│   │   └── Resume.tsx    # Resume page
│   ├── data/              # Data files
│   │   └── projects.ts    # Project data
│   ├── styles/            # Global styles
│   │   └── globals.css
│   ├── App.tsx            # Root component
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── vite.config.ts        # Vite config
```

## 📄 Pages

- **Home** (`/`) - Landing page with introduction, skills, and featured projects
- **Projects** (`/projects`) - Browse all projects with filtering
- **Project Detail** (`/project/:id`) - Detailed view of individual projects
- **About** (`/about`) - Personal introduction, experience, and education
- **Resume** (`/resume`) - Full professional resume with detailed sections

## 🎨 Customization

### Update Projects

Edit `src/data/projects.ts` to add or modify your projects:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    desc: "A brief description of your project",
    image: "/images/project-screenshot.png",
    badge: "React",
    badgeColor: "#61dafb",
    tags: ["React", "TypeScript", "Vite"],
    category: "Coding",
    link: "https://github.com/yourusername/project",
  },
  // Add more projects...
];
```

### Update Personal Info

Update your personal information in the following files:
- `src/pages/About.tsx` - Update personal details, experience, education
- `src/pages/Resume.tsx` - Update resume content
- `src/pages/Home.tsx` - Update hero section and skills

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect this repository to [Vercel](https://vercel.com) for automatic deployments.

### Netlify

```bash
# Build command
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# Build
npm run build

# Deploy (if using GitHub Actions)
# The build output (dist/) will be automatically deployed
```

## 📸 Available Scripts

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Live Demo

- **Vercel Deployment:** [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app) *(Update with actual URL)*

## 👤 Author

**Kelly Zhong**

- Frontend Developer
- Huawei
- MSc Design & Digital Media, University of Edinburgh
- BEng Computer Network Engineering, Dalian Maritime University

**Skills:**
- React, Angular, TypeScript, JavaScript
- Android, Java, UI Design
- 3D Visualization (Unity3d, WebGL)
- Motion Development (SVG, Canvas animations)
- Engineering (Webpack, Babel, Vite)

**Contact:**
- Email: 925754332@qq.com
- Phone: 15542482022
- Location: Hangzhou, China

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components inspired by modern design patterns
- Icons from [Lucide](https://lucide.dev/)

---

**Made with ❤️ by Kelly Zhong**
