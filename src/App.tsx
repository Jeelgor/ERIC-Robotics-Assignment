import { useState } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { TopHUD } from './components/TopHUD';
import { BottomLeftHUD } from './components/BottomLeftHUD';
import { BottomRightHUD } from './components/BottomRightHUD';
import { VideoLayer } from './components/VideoLayer';
import { MapLayer } from './components/MapLayer';

function App() {
  const [isCameraMain, setIsCameraMain] = useState(true);

  return (
    <div className="app-container">
      {/* Toggleable Layers */}
      <VideoLayer 
        isMain={isCameraMain} 
        onClick={() => !isCameraMain && setIsCameraMain(true)} 
      />
      
      <MapLayer 
        isMain={!isCameraMain} 
        onClick={() => isCameraMain && setIsCameraMain(false)} 
      />

      {/* Foreground HUD Overlay */}
      <div className="hud-overlay">
        <Sidebar />
        <TopHUD />
        <BottomLeftHUD />
        <BottomRightHUD />
      </div>
    </div>
  );
}

export default App;
