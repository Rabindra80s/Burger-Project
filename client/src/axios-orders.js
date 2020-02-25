import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerproject-6378a.firebaseio.com'
});

export default instance;