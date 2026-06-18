# Insight.IO Dashboard

A sleek, responsive, and high-performance UI/UX dashboard built for ERIC Robotics.

## Approach & Design Decisions

- **Tech Stack**: Built using React (Vite) for fast module replacement and scalable component architecture.
- **Styling**: Pure vanilla CSS and CSS Modules are used for styling, keeping dependencies lightweight while maintaining precise control over the aesthetics.
- **3D Rendering**: `@react-three/fiber` and `three.js` are used for rendering point clouds effectively within the browser.
- **Aesthetic**: Deep dark mode theme with glassmorphism effects and modern SVG icons (Lucide React) to create a premium feel. Micro-animations are implemented on metrics and buttons.

## Setup Instructions

1. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.
