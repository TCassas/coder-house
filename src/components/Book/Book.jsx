import React, { Suspense } from "react"
import styled from "styled-components"
import { Canvas } from "@react-three/fiber";
import BookModel from "./BookModel";
import { OrbitControls } from "@react-three/drei";

const Book = ({ size, cover = "/imgs/akira-cover.jpeg", thickness, enableZoom }) => {
    return (
        <Wrapper>
            <Canvas>
                <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={enableZoom} minDistance={1.7} maxDistance={4} />
                <ambientLight intensity={0.2} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <BookModel size={size} cover={cover} thickness={thickness} />
                </Suspense>
            </Canvas>
        </Wrapper> 
    )
}

const Wrapper = styled.div`
    height: 400px;
    cursor: grab;

    .canvas {
        height: 20px;
        overflow: visible;
    }
`;

export default Book