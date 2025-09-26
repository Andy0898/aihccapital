# AIHC Capital Official Website

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vue](https://img.shields.io/badge/Vue-3.4+-green.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF.svg)](https://vitejs.dev/)

A modern, professional website for AIHC Capital investment firm featuring server-side rendering (SSR), responsive design, and comprehensive content management capabilities.

## 🎯 Project Overview

AIHC Capital's official website serves as a digital platform showcasing the firm's investment expertise, portfolio success stories, team members, and company philosophy. The website provides both public-facing content and an administrative interface for content management.

### Key Features

- **🏠 Professional Homepage** - Hero section with company overview and key value propositions
- **👥 Team Showcase** - Detailed profiles of investment professionals and leadership
- **💼 Investment Philosophy** - Comprehensive explanation of investment strategies and approach
- **📈 Success Cases** - Portfolio of successful investments with detailed case studies
- **📞 Contact Information** - Multiple contact methods and location details
- **🔧 Admin Panel** - Content management system for case studies and team information
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **⚡ Server-Side Rendering** - Enhanced SEO and performance with SSR support

## 🛠 Technology Stack

### Frontend Framework
- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript development
- **Vue Router** - Client-side routing with navigation guards

### Build Tools & Development
- **Vite** - Fast build tool and development server
- **Vue TSC** - TypeScript compiler for Vue
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS post-processing with autoprefixer
- **Custom Design System** - Consistent color palette and typography

### Server-Side Rendering
- **Express.js** - Web server for SSR
- **@vue/server-renderer** - Vue 3 SSR capabilities
- **Compression** - Response compression middleware
- **Sirv** - Static file serving

### Testing & Quality Assurance
- **Vitest** - Unit testing framework
- **@vue/test-utils** - Vue component testing utilities
- **JSDOM** - DOM testing environment
- **V8 Coverage** - Code coverage reporting

## 📁 Project Structure

```
aihccapital/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css              # Global styles and Tailwind imports
│   ├── components/
│   │   └── layout/
│   │       ├── AdminLayout.vue       # Admin panel layout
│   │       ├── AppFooter.vue         # Site footer component
│   │       ├── AppHeader.vue         # Site header with navigation
│   │       └── MainLayout.vue        # Main site layout
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.vue    # Admin dashboard
│   │   │   └── CaseManagement.vue    # Case study management
│   │   ├── AboutPage.vue             # Company information
│   │   ├── CaseDetail.vue            # Individual case study
│   │   ├── CasesPage.vue             # Case studies listing
│   │   ├── ContactPage.vue           # Contact information
│   │   ├── HomePage.vue              # Landing page
│   │   ├── PhilosophyPage.vue        # Investment philosophy
│   │   ├── TeamMemberDetail.vue      # Individual team member
│   │   └── TeamPage.vue              # Team listing
│   ├── router/
│   │   └── index.ts                  # Vue Router configuration
│   ├── test/
│   │   └── integration.test.ts       # Integration tests
│   ├── types/
│   │   └── index.ts                  # TypeScript type definitions
│   ├── App.vue                       # Root Vue component
│   ├── components.d.ts               # Auto-generated component types
│   ├── entry-client.ts               # Client-side entry point
│   ├── entry-server.ts               # Server-side entry point
│   └── main.ts                       # Main application bootstrap
├── dist/                             # Build output directory
├── node_modules/                     # Dependencies
├── index.html                        # HTML template
├── package.json                      # Project dependencies and scripts
├── server.js                         # Express SSR server
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite build configuration
├── vitest.config.ts                  # Vitest testing configuration
└── README.md                         # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- Modern web browser with ES2015+ support

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aihccapital
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
   Navigate to `http://localhost:3000` to view the application

### Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run build:client` | Build client-side bundle only |
| `npm run build:server` | Build server-side bundle only |
| `npm run build:ssr` | Build both client and server bundles |
| `npm run preview` | Preview production build locally |
| `npm run serve:ssr` | Start SSR production server |
| `npm run test` | Run unit tests in watch mode |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:run` | Run tests once and exit |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |

## 🏗 Architecture & Design

### Component Architecture

The application follows a modular component-based architecture:

- **Layout Components**: Reusable layout structures (`MainLayout`, `AdminLayout`)
- **Page Components**: Route-specific pages with business logic
- **Shared Components**: Common UI elements (`AppHeader`, `AppFooter`)

### Routing Strategy

- **Public Routes**: Main website pages accessible to all visitors
- **Protected Routes**: Admin panel with authentication guard
- **Dynamic Routes**: Team member and case study detail pages
- **SEO Optimization**: Meta tags and titles for each route

### State Management

- **Local State**: Component-level state using Vue 3 Composition API
- **Route State**: URL parameters for dynamic content
- **Authentication**: Token-based authentication for admin access

### Styling Approach

- **Utility-First**: Tailwind CSS for rapid UI development
- **Design System**: Consistent color palette and spacing scale
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Custom Components**: Reusable UI patterns and interactions

## 🔧 Configuration

### Environment Setup

The project uses environment-specific configurations:

- **Development**: Hot reload, source maps, debugging tools
- **Production**: Optimized bundles, compression, caching
- **SSR**: Server-side rendering for improved SEO

### Build Configuration

**Vite Configuration** (`vite.config.ts`):
- Path aliases for clean imports
- Dev server on port 3000
- Source maps for debugging
- SSR-specific optimizations

**TypeScript Configuration** (`tsconfig.json`):
- Strict type checking
- ES2020+ target
- Vue 3 support
- Path mapping

**Tailwind Configuration** (`tailwind.config.js`):
- Custom color palette
- Extended spacing scale
- Typography system
- Responsive breakpoints

## 🧪 Testing Strategy

### Unit Testing

- **Framework**: Vitest with Vue Test Utils
- **Environment**: JSDOM for DOM testing
- **Coverage**: V8 provider with multiple output formats
- **Location**: Tests co-located with components (`.test.ts` files)

### Testing Commands

```bash
# Run tests in watch mode
npm run test

# Run tests with UI dashboard
npm run test:ui

# Run tests once with coverage
npm run test:run
```

### Test Structure

Example test files:
- `src/components/layout/AppHeader.test.ts`
- `src/pages/HomePage.test.ts`
- `src/pages/ContactPage.test.ts`
- `src/pages/TeamPage.test.ts`

## 🚀 Deployment

### Production Build

1. **Build the application**
   ```bash
   npm run build:ssr
   ```

2. **Start production server**
   ```bash
   npm run serve:ssr
   ```

### Deployment Options

- **Static Hosting**: Build client-only version for CDN deployment
- **Node.js Hosting**: Deploy with SSR server for optimal SEO
- **Container Deployment**: Docker support for scalable deployments

### Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Dead code elimination
- **Asset Optimization**: Image and CSS optimization
- **Compression**: Gzip compression for responses
- **Caching**: Strategic caching headers

## 🔐 Admin Panel

The admin panel provides content management capabilities:

### Features
- **Dashboard**: Overview of site metrics and content
- **Case Management**: CRUD operations for success cases
- **Team Management**: Update team member information
- **Authentication**: Secure login with token-based auth

### Access
- **URL**: `/admin`
- **Authentication**: Required for all admin routes
- **Layout**: Dedicated admin layout with navigation

## 📱 Responsive Design

### Breakpoint System
- **xs**: 475px+ (Extra small devices)
- **sm**: 640px+ (Small devices)
- **md**: 768px+ (Medium devices)
- **lg**: 1024px+ (Large devices)
- **xl**: 1280px+ (Extra large devices)
- **2xl**: 1536px+ (2X large devices)

### Mobile Optimization
- Touch-friendly interface
- Optimized navigation
- Responsive images
- Performance considerations

## 🤝 Contributing

### Development Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes with proper testing**
   ```bash
   npm run test
   npm run lint
   ```

3. **Commit with descriptive messages**
   ```bash
   git commit -m "feat: add new feature description"
   ```

4. **Push and create pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Standards

- **TypeScript**: Strict typing required
- **ESLint**: Follow configured rules
- **Prettier**: Consistent code formatting
- **Testing**: Unit tests for new components
- **Documentation**: Update README for significant changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For technical support or questions about the project:

- **Development Team**: Internal development team
- **Issues**: Create GitHub issues for bugs or feature requests
- **Documentation**: Refer to this README and inline code comments

---

**Built with ❤️ for AIHC Capital**
