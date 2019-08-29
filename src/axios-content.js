import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bonsai-27421.firebaseio.com/'
});

export default instance;