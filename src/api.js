import axios from 'axios'

const api = axios.create({
    baseURL: 'http://challenge-front-end.us-east-2.elasticbeanstalk.com/retrieve-product'
})

export default api