import axios from "axios";

const instance = axios.create({
    // Firebase real database url
    baseURL: 'https://burger-builder-fe664-default-rtdb.firebaseio.com',

});

export default instance;