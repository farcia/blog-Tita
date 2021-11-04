import axios from "axios";


export default axios.create({
    baseURL: `https://dummyapi.io/data/v1/`,
    headers:{'app-id': '6182b3ec4c1eec763a4e0193'}
});