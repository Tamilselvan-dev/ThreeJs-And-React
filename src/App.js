import React, { Suspense } from "react";
import "./styles.css";
import styled from "styled-components";
import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection
        title="TS-DEV 3D"
        description="Let's Create 3D Modeling opjects using React JS and Three JS"
      />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>

      <TextSection
        title="3D Box Geometry"
        description="Box Geometry with transparent color"
      />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>

      <TextSection
        title="3D Flobby Distort"
        description="Flobby Material with inconsistency state"
      />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    width: 1000px;
  }
`;
