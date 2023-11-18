import axios from 'axios';

// Тут дальше можно подключить какие нибудь интерсепторы
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
});

export default instance;
