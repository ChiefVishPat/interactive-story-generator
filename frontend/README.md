# Interactive Story Generator - Frontend

A modern, TypeScript-based React frontend for the Interactive Story Generator with a clean, minimalistic design using a tan color palette.

## ✨ Features

- **TypeScript**: Full TypeScript migration for type safety and better development experience
- **Modern UI**: Clean, minimalistic design with tan (#D2B48C) primary color theme
- **Smooth Animations**: Loading animations and transitions throughout the app
- **Responsive Design**: Mobile-friendly responsive design
- **Type Safety**: Comprehensive TypeScript types for all components and API calls

## 🎨 Design System

- **Primary Color**: #D2B48C (Tan)
- **Secondary Color**: #C19A6B
- **Accent Color**: #8B7355
- **Typography**: Inter font family for modern, readable text
- **Animations**: Smooth CSS transitions and keyframe animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

The development server includes:
- Hot Module Replacement (HMR)
- TypeScript compilation
- ESLint integration

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Preview the production build locally:
   ```bash
   npm run preview
   ```

### Code Quality

Run TypeScript type checking:
```bash
npx tsc --noEmit
```

Run ESLint:
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── LoadingStatus.tsx
│   ├── StoryGame.tsx
│   ├── StoryGenerator.tsx
│   ├── StoryLoader.tsx
│   └── ThemeInput.tsx
├── types/               # TypeScript type definitions
│   └── story.ts
├── App.tsx             # Main App component
├── App.css             # Global styles
├── main.tsx            # Application entry point
├── utils.ts            # Utility functions
└── index.css           # Base CSS styles
```

## 🛠 Technologies Used

- **React 19**: UI library
- **TypeScript**: Type safety and enhanced development experience
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **ESLint**: Code linting and quality assurance
- **Inter Font**: Modern typography

## 🎯 UI/UX Improvements Made

1. **Color Palette**: Implemented tan-based color scheme with complementary earth tones
2. **Typography**: Upgraded to Inter font with improved spacing and weights
3. **Loading Animations**: Added smooth spinner with pulse effects and fade-in animations
4. **Interactive Elements**: Enhanced buttons with gradients, hover effects, and shimmer animations
5. **Card Design**: Modern card layouts with subtle shadows and borders
6. **Responsive Design**: Mobile-optimized layouts and touch-friendly interactions
7. **Accessibility**: Improved contrast ratios and focus states

## 🔧 Configuration Files

- `tsconfig.json`: TypeScript configuration
- `vite.config.js`: Vite build configuration
- `eslint.config.js`: ESLint rules and settings
- `package.json`: Dependencies and scripts
