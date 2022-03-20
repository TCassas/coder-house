import React, { Suspense } from "react"
import styled from "styled-components"
import { Canvas } from "@react-three/fiber";
import BookModel from "./BookModel";
import { OrbitControls } from "@react-three/drei";

const Book = ({ pagesCount, cover }) => {
    return (
        <Wrapper>
            <Canvas>
            <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <BookModel pagesCount={600} cover={"https://patchbae.github.io/images/AKIRA.jpg"} />
                </Suspense>
            </Canvas>
        </Wrapper> 
    )
}

const Wrapper = styled.div`
    height: 400px;

    .canvas {
        height: 20px;
    }
`;

export default Book