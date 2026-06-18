import React, { Suspense } from 'react';
import { useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import * as THREE from 'three';

class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { 
    if (this.state.hasError) return <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', zIndex:10, color:'red', fontWeight:'bold'}}>WebGL Error</div>; 
    return this.props.children; 
  }
}

function PointCloud() {
  const pcd = useLoader(PCDLoader, '/bunny.pcd');
  if (pcd && pcd.material) {
    (pcd.material as THREE.PointsMaterial).size = 0.02;
    (pcd.material as THREE.PointsMaterial).color = new THREE.Color('#3b82f6');
  }
  return (
    <Center>
      <primitive object={pcd} scale={20} rotation={[Math.PI, 0, 0]} />
    </Center>
  );
}

export function MapLayer({ isMain, onClick }: { isMain: boolean; onClick: () => void }) {
  return (
    <div className={isMain ? 'layer-main' : 'layer-pip'} onClick={onClick} style={{ backgroundColor: '#e2e8f0' }}>
      {!isMain && <div className="pip-overlay-text" style={{ color: 'rgba(11, 17, 32, 0.7)', textShadow: 'none' }}>Click to enter 3D map</div>}
      <ErrorBoundary>
        <Suspense fallback={<div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>Loading...</div>}>
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }} style={{ width: '100%', height: '100%', pointerEvents: isMain ? 'auto' : 'none' }}>
            <ambientLight intensity={0.5} />
            <PointCloud />
            <OrbitControls makeDefault autoRotate autoRotateSpeed={2} enableZoom={isMain} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
