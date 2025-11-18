# Overview

This is a full-stack web application built with React, TypeScript, and Express.js that appears to be a trading platform called "Tribex Alpha". The application features an AI-powered trading interface with components for displaying market data, charts, and trading functionality. It uses a modern tech stack with shadcn/ui components for the frontend and is configured for both development and production environments.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming (dark theme optimized)
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Charts**: Recharts library for data visualization

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build System**: ESBuild for production bundling, tsx for development
- **Development**: Vite middleware integration for hot module replacement
- **Storage**: Abstract storage interface with in-memory implementation (MemStorage class)
- **API Structure**: RESTful API with `/api` prefix routing

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless)
- **Schema**: Users table with id, username, and password fields
- **Migrations**: Drizzle Kit for schema management and migrations

## Development Environment
- **Replit Integration**: Configured with Replit-specific Vite plugins for development
- **Hot Reloading**: Full-stack hot reload with Vite middleware
- **Build Process**: Separate client and server builds with shared TypeScript configuration

## Component Architecture
- **Design System**: Consistent component library with variants and theming
- **Layout**: Responsive design with mobile-first approach
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Typography**: Custom font stack with Inter, DM Sans, and Fira Code

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Database**: Neon Database (PostgreSQL), Drizzle ORM, Drizzle Kit

## UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React icon library
- **Charts**: Recharts for data visualization

## State and Data Management
- **Server State**: TanStack React Query for API state management
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod schema validation library

## Development and Deployment
- **Replit Platform**: Replit-specific plugins for development environment
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Utilities**: date-fns for date manipulation, clsx for conditional classes

## Database and Authentication
- **PostgreSQL**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with Zod schema integration
- **Connection**: PostgreSQL connection pooling and session management