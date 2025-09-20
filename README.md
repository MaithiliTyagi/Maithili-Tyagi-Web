# Maithili Tyagi - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Maithili Tyagi, an Electrical Engineering student with expertise in web development and IoT projects.

![Portfolio Preview](public/portfolio.png)

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between themes with persistent preferences
- **3D Interactive Avatar**: Animated 3D avatar using Three.js and React Three Fiber
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Skills Section**: Comprehensive skills display across multiple domains

## 🚀 Live Demo

Visit the live portfolio:

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components

### 3D Graphics

- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### Additional Libraries

- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling
- **TanStack Query** - Data fetching and caching
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── Hero.tsx         # Landing section with 3D avatar
│   ├── About.tsx        # About section with personal info
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Project portfolio
│   ├── Contact.tsx      # Contact form
│   ├── Navbar.tsx       # Navigation header
│   ├── ThemeToggle.tsx  # Theme switcher
│   └── AI3DAvatar.tsx   # 3D animated avatar
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── main.tsx            # Application entry point
```

## 🎯 Key Sections

### Hero Section

- Animated introduction with 3D avatar
- Call-to-action buttons
- Smooth scroll indicators

### About Section

- Personal information and background
- Educational details (KIIT University, CGPA: 8.61)
- Contact information

### Skills Section

- **Web Development**: HTML, CSS, JavaScript, C, Python, React.j
- **Electrical Engineering**: Circuit Design, PCB Design, Microcontrollers
- **IoT & Embedded Systems**: Arduino, Raspberry Pi, Sensors
- **Problem Solving**: Debugging, Optimization, System Architecture

### Projects Section

- **IoT Based Home Automation** - Voice-controlled smart home system
- **Weather App** - Python-based weather application
- **Hangman Game** - Interactive Python game
- **Stock Market Predictor** - Data science application
- **Tic Tac Toe Game** - Web-based game
- **Dots and Boxes Game** - Strategy game
- **Portfolio Website** - This very project

### Contact Section

- Functional contact form with email integration
- Social media links (LinkedIn, GitHub, Twitter)
- Direct email contact option

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MaithiliTyagi/maithili-portfolio-journey.git
   cd maithili-portfolio-journey
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Start development server**

   ```bash
   npm run dev
   ```
4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Updating Personal Information

- Edit `src/components/About.tsx` for personal details
- Modify `src/components/Hero.tsx` for the main introduction
- Update contact information in `src/components/Contact.tsx`

### Adding New Projects

1. Add project images to the `public/` directory
2. Update the `projects` array in `src/components/Projects.tsx`
3. Include project details, tags, and links

### Modifying Skills

- Edit the skills data in `src/components/Skills.tsx`
- Add or remove skill categories as needed

### Styling Changes

- Modify `tailwind.config.ts` for theme customization
- Update `src/index.css` for global styles
- Customize component styles in individual component files

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop**: Full-featured experience with 3D avatar
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Streamlined interface with mobile-optimized navigation

## 🎭 Theme Support

- **Light Theme**: Clean, professional appearance
- **Dark Theme**: Modern dark mode with proper contrast
- **Persistent**: Theme preference saved in localStorage
- **Smooth Transitions**: Animated theme switching

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MaithiliTyagi/maithili-portfolio-journey/issues).

## 📞 Contact

**Maithili Tyagi**

- Email: [tyagimaithili918@gmail.com](mailto:tyagimaithili918@gmail.com)
- LinkedIn: [maithili-tyagi-266a77286](https://www.linkedin.com/in/maithili-tyagi-266a77286/)
- GitHub: [@MaithiliTyagi](https://github.com/MaithiliTyagi)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Three.js](https://threejs.org/) for 3D graphics capabilities
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for fast development experience

---

⭐ **Star this repository if you found it helpful!**
