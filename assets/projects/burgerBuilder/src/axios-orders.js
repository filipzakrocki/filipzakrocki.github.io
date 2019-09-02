import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-project-1551193995472.firebaseio.com/'
})

export default instance;