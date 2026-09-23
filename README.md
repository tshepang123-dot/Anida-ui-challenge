# Anida UI Challenge

A React + TypeScript front-end implementation of a chosen UI design, built with Vite and styled using plain CSS. Created as part of the ReactTS UI Challenge (React Lesson 2), focused on layout accuracy, responsiveness, and reusable component design.

## 🔗 Live Demo

[View on Netlify](https://designingui.netlify.app)

## 📋 About the Project

This project replicates a provided UI design as closely as possible, covering layout, colors, typography, and interactive elements (hover states on links and buttons). The interface is fully responsive across mobile, tablet, and desktop breakpoints.

## 🛠️ Built With

- React
- TypeScript
- Vite
- Plain CSS

## ✨ Features

- Pixel-accurate recreation of the chosen design
- Reusable, self-contained components
- Responsive layout (mobile → desktop)
- Interactive hover states on buttons and links

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/tshepang123-dot/Anida-ui-challenge.git
cd Anida-ui-challenge
npm install
npm run dev
```

The app will run locally at `http://localhost:5173` (or the port Vite assigns).

## 📦 Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
  components/   # Reusable UI components
  assets/       # Images, icons, fonts
  App.tsx
  main.tsx
```

---


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
