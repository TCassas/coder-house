import React, { Suspense } from "react"
import styled from "styled-components"
import { Canvas } from "@react-three/fiber";
import BookModel from "./BookModel";
import Loader from '../Loader/Loader'
import { OrbitControls } from "@react-three/drei";

const Book = ({ size, cover = "/imgs/akira-cover.jpeg", thickness, enableZoom }) => {
    cover = cover ? cover : "/imgs/akira-cover.jpeg"

    return (
        <Wrapper>
            <Canvas>
                <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={enableZoom} minDistance={1.7} maxDistance={4} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, -5, -2]} intensity={0.8} />
                <Suspense fallback={<Loader />}>
                    <BookModel size={size} cover={cover} thickness={thickness} />
                </Suspense>
            </Canvas>
        </Wrapper> 
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 99%; //Muy extraño, pero es la solución que encontré a que el modelo 3d haga resize
    cursor: grab;
    margin: 0 auto;

    .canvas {
        height: 20px;
        overflow: hidden;
        height: 100%;
    }
`;

export default Book