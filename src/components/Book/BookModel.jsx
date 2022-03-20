import { useLoader } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import * as THREE from 'three'

const BookModel = ({ pagesCount, cover }) => {
    const [mangaWidth, setMangaWidth] = useState(0.8)
    const [coverMap, setCoverMap] = useState([])

    useEffect(() => {
        //Set book width
        if(pagesCount > 250 &&  pagesCount < 400) {
            setMangaWidth(1.1)
        } else if(pagesCount > 400) {
            setMangaWidth(1.2)
        } else {
            setMangaWidth(0.4)
        }
        
        //Prepare book cover texture
        cover = cover ? cover : "/imgs/akira-cover.jpeg"
        const paths = [
            "/imgs/spine.png", "/imgs/pages-texture.png",
            "/imgs/black-texture.jpg", "/imgs/black-texture.jpg",
            cover, "/imgs/back-cover.png"
        ]

        const loader = new THREE.TextureLoader()

        setCoverMap(paths.map(path => {
            return new THREE.MeshLambertMaterial({
                map: loader.load(path)
            })
        }))
    }, [])

    return (
        <mesh rotation={[0, 0.4, 0]} material={coverMap}>
            <boxBufferGeometry
                attach="geometry"
                args={[2.5, 4, mangaWidth]}
            />
            <meshStandardMaterial
                attach="material"
            />
        </mesh>
    )
}

export default BookModel