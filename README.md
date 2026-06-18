# Insight.IO Dashboard

**Candidate Details:**
- **Full Name:** Jeel Gor
- **Contact Number:** 6355652684
- **Email ID:** jeelgor10@gmail.com

---
## Video Explanation: https://drive.google.com/file/d/1mIjMHNrmadbpYQDJvKTa5UK_9fMpO23J/view?usp=sharing
---

## Approach
My goal for this assignment was to faithfully recreate the Insight.IO dashboard while ensuring the application felt like a real, performant piece of robotics software rather than just a static webpage. I started by breaking the provided design down into modular components (Sidebars, Top HUD, etc.) and placing them in a floating overlay. Once the layout was pixel-perfect, my primary focus shifted to performance: ensuring that the heavy media elements—the live camera feed and the 3D LiDAR point cloud—could run simultaneously without tanking the browser's frame rate or crashing. 

## Tools Used
* **React & Vite**: I chose Vite as the build tool and local development server because it is incredibly fast and provides out-of-the-box support for modern React modules. React allowed me to build the HUD as reusable, isolated components.
* **CSS Modules**: For styling, I used pure CSS Modules. This ensured that the styling for complex components like the D-Pad or Zoom Slider remained scoped and didn't accidentally leak or break the layout of the mobile views.
* **Three.js & React-Three-Fiber**: To render the `.pcd` point cloud data, I bypassed heavy ROS setups and directly integrated `Three.js`. By using `React-Three-Fiber`, I was able to write my 3D WebGL canvas declaratively as React components, utilizing the `PCDLoader` to parse the millions of data points into the scene.

## Design & Architecture Decisions
* **Decoupled Layer Architecture**: The most significant architectural decision I made was completely separating the media layers (the Video and the 3D Map) from the UI components. The HUD elements sit in a transparent `pointer-events: none` overlay that floats above the background. 
* **Seamless View Swapping**: When the user clicks the Picture-in-Picture (PiP) window, the dashboard smoothly swaps the 3D map and the camera feed. Instead of destroying and recreating these React components (which would cause the video to restart and the WebGL canvas to lose context and crash), I built a system that simply toggles their CSS classes (`layer-main` vs `layer-pip`). This allows them to physically swap places on the screen using CSS transitions, keeping the video playing and the 3D map rotating without a single dropped frame.
* **Offline-First (Self-Hosted)**: To satisfy the self-hosting requirement, I stored the heavy `.mp4` video and `.pcd` map files directly inside the local `public` directory rather than hot-linking them from cloud URLs. This guarantees that the dashboard can run completely offline in the field without internet dependencies.
* **Mobile Responsiveness**: Because field operators often use tablets or phones, I implemented aggressive CSS media queries. On screens smaller than 768px, the layout automatically reorganizes itself: the left sidebar drops to become a bottom navigation bar, the top HUD buttons wrap cleanly, and the PiP window perfectly centers itself to avoid overlapping the manual controls.

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
