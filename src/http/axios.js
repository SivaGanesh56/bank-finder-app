import { setup } from 'axios-cache-adapter'
import { API_URL } from '../pages/BankList/constants';

const axiosInstance  = setup({
    baseURL: API_URL,

    cache: {
        maxAge: 15 * 60 * 1000,
        exclude: {
            // Store responses from requests with query parameters in cache
            query: false
        }
    }
})

export default axiosInstance;