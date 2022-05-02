# Tengu Store 👺📚
Final project for the React course ran by CoderHouse 💻

## Idea
___
Manga e-commerce with auth, cart persistance, stock control, responsive design, dynamic/conditional, forms, simple animations and some other things 🐊

I choose "Tengu Store" as the name of my e-commerce, and mangas as the main products of the  page because of my passion for japanese culture.

**What is a [tengu](https://en.wikipedia.org/wiki/Tengu)?**

## Setup
___
Execute the following commands in your terminal
```
git clone https://github.com/TCassas/coder-house.git
cd coder-house
npm install
cp .env.example .env
npm start
```
This will boot up the react application on port 3000.

**Notes:**
- After the evaluation of this project, you would have to provide your own Firebase credentials in the .env file, just follow the .env.example.
- The img property in the products collection correlates to a file inside the folder /public/imgs/

## Firebase collection structures
___
### Product:
- author: string
- description: string
- genres: array of strings
- img: string
- info: string
- name: string
- price: number
- stock: number
### Order:
- buyer: object
- - email: string
- - name: string
- - phone: string
- date: timestamp
- total: number
### Likes:
- date: timestamp
- itemId: string (refers to a document in the products collection)
- userId: string (refers to a document in the users collection)
### Genres:
- name: string
## Dependencies
___
This project uses the following dependencies
- Data storage & Auth: [firebase](https://github.com/firebase/firebase-js-sdk)
- Styling: [styled-components](https://github.com/styled-components/styled-components)
- Animations: [framer-motion](https://github.com/framer/motion)
- Routing: [react-router-dom](https://github.com/remix-run/react-router)
- Iconography: [react-icons](https://github.com/react-icons/react-icons)
- Manga 3D Model: [threejs](https://github.com/mrdoob/three.js)
## Navigation examples
___
Home component
![Showing home component](/public/imgs/navigation/home.gif)

Item detail
![Showing item detail component with 3D model manga](/public/imgs/navigation/itemDetail.gif)

General navegation between items and genres
![Goign through items and filtering between genres](/public/imgs/navigation/navegation.gif)

Adding and removing items from the cart
![Adding and removing items from cart](/public/imgs/navigation/addRemoveCart.gif)

Auth navigation
![Firebase auth demonstration](/public/imgs/navigation/auth.gif)

Auth functinalities
![Showing auth login with errors and notifications](/public/imgs/navigation/authFunctionalities.gif)

User page demonstration
![Showing an emnpty user page, and adding data to fill it with likes and orders](/public/imgs/navigation/userPage.gif)

Search bar demonstration
![Filtering products by search for mangas, author and genres with the search bar](/public/imgs/navigation/search.gif)
## Misc
This project was boostrapped with [Create React App](https://github.com/facebook/create-react-app).
