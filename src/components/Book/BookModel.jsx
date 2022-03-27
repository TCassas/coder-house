import { useLoader } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import * as THREE from 'three'

const BookModel = ({ size, cover, thickness }) => {
    const [mangaSize, setMangaSize] = useState([])
    const [mangaWidth, setMangaWidth] = useState(0.8)
    const [coverMap, setCoverMap] = useState([])

    useEffect(() => {
        //Set manga thickness
        switch(thickness) {
            case 1: setMangaWidth(0.4)
                break;
            case 2: setMangaWidth(0.8)
                break;
            case 3: setMangaWidth(0.9)
                break;
        }

        //Set manga general size
        switch(size) {
            case 1: setMangaSize([1.5, 2.4])
                break;
            case 2: setMangaSize([2, 3.5])
                break;
            case 3: setMangaSize([2.5, 4])
                break;
        }
        
        //Prepare manga cover texture
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
                args={[...mangaSize, mangaWidth]}
            />
            <meshStandardMaterial
                attach="material"
            />
        </mesh>
    )
}

export default BookModel