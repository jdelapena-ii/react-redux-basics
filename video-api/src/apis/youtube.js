import axios from 'axios'

const KEY = 'AIzaSyCPrmdszsIG81jdpAhFUPpfF-ZdsQMKD68';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: { 
        part: 'snippet',
        maxResult: 10,
        key: KEY
    }
})