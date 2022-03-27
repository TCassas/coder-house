const dataMock = [
    {name: "AKIRA", img: "./imgs/akira-cover.jpeg", author: "Katsuhiro Otomo", info: "Vol. 13", price: "720", stock: 4, id: 1},
    {name: "Blade of the Immortal", img: "https://static.wikia.nocookie.net/manjipedia/images/6/6a/Volume_01.jpg", author: "Hiroaki Samura", info: "Vol. 1", price: "1200", stock: 4, id: 2},
    {name: "Vinland Saga", img: "https://kodansha.us/wp-content/uploads/2020/12/9781632366306-678x1024.jpeg", author: "Makoto Yukimura", info: "Vol. 10", price: "720", stock: 5, id: 3},
    {name: "UZUMAKI", img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30436-Opk9ZubMPuDU.jpg", author: "Junji Ito", info: "Unique volume", price: "1700", stock: 10, id: 4},
    {name: "Vagabond", img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30656-dNNIEyEIF66b.png", author: "Takehiko Inoue", info: "Vol. 1", price: "420", stock: 20, id: 5},
    {name: "Himizu", img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx34553-8yShm3eh5Cpp.jpg", author: "Minoru Furuya", info: "Vol. 1", price: "980", stock: 12, id: 6},
    {name: "I Am a Hero", img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx44440-oLFibAj4TvM7.jpg", author: "Kengo Hanazawa", info: "Vol. 1", price: "420", stock: 4, id: 7},
    {name: "Chainsaw Man", img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-82gwrvQV6OBc.png", author: "Tatsuki Fujimoto", info: "Vol. 1", price: "480", stock: 4, id: 8},
    {name: "Saltiness", img: "https://cdn.myanimelist.net/images/manga/3/98397l.jpg", author: "Minoru Furuya", info: "Vol. 1", price: "480", stock: 4, id: 9}
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataMock)
        }, 2000)
    })
}

export default getProducts