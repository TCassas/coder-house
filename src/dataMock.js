const dataMock = [
    {
        name: "AKIRA",
        img: "./imgs/akira-cover.jpeg",
        author: "Katsuhiro Otomo",
        info: "Vol. 13",
        price: "720",
        stock: 4,
        description: "Welcome to Neo-Tokyo, built on the ashes of a Tokyo annihilated by a blast of unknown origin that triggered World War III. The lives of two streetwise teenage friends, Tetsuo and Kaneda, change forever when paranormal abilities begin to waken in Tetsuo, making him a target for a shadowy agency that will stop at nothing to prevent another catastrophe like the one that leveled Tokyo. At the core of the agency's motivation is a raw, all-consuming fear of an unthinkable, monstrous power known only as Akira.",
        audience: "+16",
        genres: ["Sience Fiction", "Bozosoku", "Psychological"],
        id: 1
    },    
    {
        name: "Blade of the Immortal",
        img: "https://static.wikia.nocookie.net/manjipedia/images/6/6a/Volume_01.jpg",
        author: "Hiroaki Samura",
        info: "Vol. 1",
        price: "1200",
        stock: 4,
        description: "Hiroaki Samura's Blade of the Immortal will keep you on edge! Manji, a ronin warrior of feudal Japan, has been cursed with immortality. To rid himself of this curse and end his life of misery, he must slay one thousand evil men! His quest begins when a young girl seeks his help in taking revenge on her parents' killers . . . and his quest won't end until the blood of a thousand has spilled!",
        audience: "+16",
        genres: ["Action", "Samurai", "Love"],
        id: 2
    },    
    {
        name: "Vinland Saga",
        img: "https://kodansha.us/wp-content/uploads/2020/12/9781632366306-678x1024.jpeg",
        author: "Makoto Yukimura",
        info: "Vol. 10",
        price: "720",
        stock: 5,
        description: "As a child, Thorfinn sat at the feet of the great Leif Ericson and thrilled to wild tales of a land far to the west. But his youthful fantasies were shattered by a mercenary raid. Raised by the Vikings who murdered his father, Thorfinn became a terrifying warrior, forever seeking to kill the band's leader, Askeladd, and avenge his father. Sustaining Thorfinn through his ordeal are his pride in his family and his dreams of a fertile westward land, a land without war or slavery … the land Leif called Vinland.",
        audience: "+16",
        genres: ["Historical", "Action", "War"],
        id: 3
    },    
    {
        name: "UZUMAKI",
        img: "./imgs/uzumaki-cover.jpg",
        author: "Junji Ito",
        info: "Unique volume",
        price: "1700",
        stock: 10,
        description: "Kurozu-cho, a small fogbound town on the coast of Japan, is cursed. According to Shuichi Saito, the withdrawn boyfriend of teenager Kirie Goshima, their town is haunted not by a person or being but by a pattern: uzumaki, the spiral, the hypnotic secret shape of the world. It manifests itself in small ways: seashells, ferns, whirlpools in water, whirlwinds in air. And in large ways: the spiral marks on people's bodies, the insane obsessions of Shuichi's father, the voice from the cochlea in your inner ear. As the madness spreads, the inhabitants of Kurouzu-cho are pulled ever deeper, as if into a whirlpool from which there is no return...",
        audience: "+16",
        genres: ["Horror", "Body dysmorphia", "Psychological"],
        id: 4
    },    
    {
        name: "Vagabond",
        img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30656-dNNIEyEIF66b.png",
        author: "Takehiko Inoue",
        info: "Vol. 1",
        price: "420",
        stock: 20,
        description: "At seventeen years of age, Miyamoto Musashi--still known by his childhood name, Shinmen Takezo--was a wild young brute just setting out along the way of the sword. In the aftermath of the epic Battle of Sekigahara, Takezo finds himself a fugitive survivor on the losing side of the war. Takezo's vicious nature has made him an outcast even in his own village, and he is hunted down like an animal. At this crucial crossroads in Takezo's life, an eccentric monk and a childhood friend are the only ones who can help him find his way.",
        audience: "+16",
        genres: ["Samurai", "Historical", "Philosophical"],
        id: 5
    },    
    {
        name: "Himizu",
        img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx34553-8yShm3eh5Cpp.jpg",
        author: "Minoru Furuya",
        info: "Vol. 1",
        price: "980",
        stock: 12,
        description: "Every day in Japan, 2500 people die due to any number of causes. Do you think you'll be one of the ones to die? No, of course not. Do you think you'll win the lottery? You'd like to think so, we all would. But Sumida is different. He wants the status quo to remain in every way; live a normal life, get a normal job, have normal kids, never to be anyone fortunate or unfortunate, content in normalcy. Anyone who doesn't agree is foolish, doomed to live their life scraping up a mountain that they can never conquer, fated to die in despair wishing things had been better. When his mother kicks his father out of the house and onto the streets, he thinks he'll be fine. When his mother leaves him to live with her boyfriend, he makes the best of it. When he realizes that he's no longer average, he strives to make his life worthwhile the only way he knows how. When the demons in the back of his mind speak to him, he tries his best to ignore them.",
        audience: "+16",
        genres: ["Love", "Emotional", "Psychological"],
        id: 6
    },    
    {
        name: "I Am a Hero",
        img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx44440-oLFibAj4TvM7.jpg",
        author: "Kengo Hanazawa",
        info: "Vol. 1",
        price: "420",
        stock: 4,
        description: "Hideo Suzuki is a thirty-five year old mangaka assistant struggling to be the hero in his own life by breaking back into the lime light with a new serial all the while juggling his relationship with his girlfriend and his own delusions. However, as hard as Hideo may try, the world seems to have a different set of plans for him; sinister and dark machinations that completely overturn his reality as he knows it.",
        audience: "+16",
        genres: ["Zombies", "Survival", "Comedy"],
        id: 7
    },    
    {
        name: "Chainsaw Man",
        img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-82gwrvQV6OBc.png",
        author: "Tatsuki Fujimoto",
        info: "Vol. 1",
        price: "480",
        stock: 4,
        description: "The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!",
        audience: "+16",
        genres: ["Sience Fiction", "Action", "Comedy"],
        id: 8
    },    
    {
        name: "Saltiness",
        img: "https://cdn.myanimelist.net/images/manga/3/98397l.jpg",
        author: "Minoru Furuya",
        info: "Vol. 1",
        price: "480",
        stock: 4,
        description: "31 year old Nakamaru Takehiko has trained all his life to never be disturbed by anything that the world throws at him. Whether dog poop begins to rain down from the heavens, or a human shaped strawberry monster shows up in front of him, his will never faltered. But when he realized that his existence in the house inhibits his sister from getting married, he panicked. In his panicked state, he left the house for Tokyo. Now homeless, he must find ways to survive in this world with only his iron will and the companions he finds along the way.",
        audience: "+16",
        genres: ["Comedy", "Philosophical", "Slice of life"],
        id: 9
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataMock)
        },2000)
    })
}

const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataMock.find(item => item.id === parseInt(id)))
        },2000)
    })
}

export { getProducts, getProductById }