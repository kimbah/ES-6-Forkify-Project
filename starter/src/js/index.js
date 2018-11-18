import axios from 'axios';

async function getResutls (query) {
    // const proxy = 'https://crossorigin.me/';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'bd3c455da920d142f8ea20e15dde31bd';
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        window.alert(error);
    }
}
getResutls('tomato pasta');
