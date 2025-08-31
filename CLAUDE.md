# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React 19, TypeScript, and Vite. The project uses Tailwind CSS v4 for styling, Framer Motion for animations, and features a modern responsive design with a particle background effect. The portfolio includes sections for personal information, skill pillars (Backend Development, DevOps, and Cybersecurity), projects showcase, and contact information.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (runs TypeScript compilation followed by Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Architecture & Structure

### Core Architecture
- **React 19** with TypeScript for type safety
- **Vite** as build tool and development server
- **Component-based architecture** with clear separation of concerns
- **Single App.tsx entry point** that imports and orchestrates all sections
- **Centralized data management** through portfolioData object in App.tsx

### Project Structure
```
src/
├── components/          # React components for each portfolio section
├── hooks/              # Custom React hooks (useScrollSpy for navigation)
├── types/              # TypeScript type definitions
├── assets/             # Static assets
├── App.tsx             # Main app component with portfolio data
├── main.tsx            # React application entry point
└── index.css           # Global styles and Tailwind imports
```

### Key Components
- **HeroSection** - Landing section with name, title, and hero message
- **AboutSection** - Personal information and background
- **PillarsSection** - Three main skill areas with interactive cards
- **ProjectsSection** - Portfolio projects showcase
- **ContactSection** - Contact information and links
- **ParticleBackground** - Animated background effect
- **Navbar** - Fixed navigation with scroll spy functionality

### State Management
- Portfolio data is managed as a single object in `App.tsx`
- Components receive data through props
- Navigation state managed by `useScrollSpy` hook using Intersection Observer API

### Styling System
- **Tailwind CSS v4** with custom configuration
- **Custom color palette**: primary (#0A192F), devops (#1E3A8A), security (#047857), backend (#9A3412)
- **Custom animations**: float, pulse-slow
- **Responsive design** with mobile-first approach
- **Global styles** in index.css including text gradients and particle animations

### Type Definitions
Located in `src/types/portfolio.ts`:
- `PortfolioData` - Main data structure
- `Project` - Project information interface
- `ContactInfo` - Contact details interface
- `PillarContent` - Skill pillar structure

### Custom Hooks
- `useScrollSpy` - Tracks which section is currently in viewport for navigation highlighting
- `scrollToSection` - Smooth scroll utility function

## Current Development State

The portfolio is in active development with placeholder content marked with `📝 PLACEHOLDER` comments throughout the codebase. The main areas requiring customization:
- Personal information in App.tsx
- Project data (currently empty array)
- Contact information
- About section text

## Dependencies

### Core Dependencies
- `react` ^19.1.1 & `react-dom` ^19.1.1
- `framer-motion` ^12.23.12 - Animation library
- `lucide-react` ^0.542.0 - Icon library
- `react-intersection-observer` ^9.16.0 - Intersection Observer utilities

### Development Tools
- `typescript` ~5.8.3
- `vite` ^7.1.2 
- `@vitejs/plugin-react` ^5.0.0
- `tailwindcss` ^4.1.12
- `eslint` ^9.33.0 with TypeScript and React plugins

## Build Configuration

- **Vite config**: Standard React setup with no additional plugins
- **TypeScript**: Strict mode with separate configs for app and node environments
- **ESLint**: Modern flat config with React and TypeScript rules
- **Tailwind**: v4 with PostCSS processing and custom theme extensions