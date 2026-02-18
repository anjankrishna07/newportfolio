# Anjan Krishna - Interactive Portfolio

A modern, interactive portfolio website built with React, Vite, and Framer Motion.

## Features

- 🎨 Modern, visually appealing design
- ✨ Smooth animations and transitions
- 📱 Fully responsive
- 🚀 Fast performance with Vite
- 🎯 Interactive scroll effects
- 💫 Framer Motion animations

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Pages

- **Home** (`/`) - Hero section with quick links
- **Projects** (`/projects`) - Showcase of ML projects
- **Experience** (`/experience`) - Professional timeline
- **Education** (`/education`) - Academic background
- **Notes** (`/notes`) - Blog posts and thoughts

## Tech Stack

- React 18
- React Router DOM
- Framer Motion
- Vite
- CSS3

## Project Structure

```
src/
  ├── components/
  │   └── Navbar.jsx
  ├── pages/
  │   ├── Home.jsx
  │   ├── Projects.jsx
  │   ├── Experience.jsx
  │   ├── Education.jsx
  │   └── Notes.jsx
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

## Notes Data

Notes are loaded from `/public/notes.json`. Make sure this file exists with your notes data.

