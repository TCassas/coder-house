import styled from "styled-components"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import { useEffect, useState } from "react"
import * as THREE from 'three';

const Book = ({ pagesCount, cover }) => {
    const [mangaWidth, setMangaWidth] = useState(0.8)
    const [texture, setTexture] = useState()
    const [loading, setLoading] = useState(true)
    const loader = new THREE.TextureLoader()

    useEffect(() => {
        //Set book width
        if(pagesCount > 250 &&  pagesCount < 400) {
            setMangaWidth(1.1)
        } else if(pagesCount > 400) {
            setMangaWidth(1.2)
        } else {
            setMangaWidth(0.8)
        }

        //Prepare cover texture
        const paths = [
            "/imgs/pages-texture.jpg", "/imgs/black-texture.jpg",
            "/imgs/black-texture.jpg", "/imgs/black-texture.jpg",
            "https://patchbae.github.io/images/AKIRA.jpg", "/imgs/black-texture.jpg"
        ]

        setTexture(paths.map(path => {
            return new THREE.MeshLambertMaterial({
                map: loader.load(path)
            })
        }))
    }, [])

    useEffect(() => {
        setLoading(false)
    }, [texture])

    return (
        <Wrapper>
            {!loading &&
                <Canvas className="canvas">
                    <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <mesh rotation={[0, 0.4, 0]} material={texture} >
                        <boxBufferGeometry
                            attach="geometry"
                            args={[2.5, 4, 0.8]}
                        />
                        <meshLambertMaterial
                            attach='material'
                            color="white"
                        />
                    </mesh>
                </Canvas>
            }
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