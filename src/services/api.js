import axios from 'axios';

const AxiosApi = axios.create({
       baseURL: 'https://mbahri.ir/Api-PHP-Resume',
       timeout: 10000,
       headers: {
              'Content-Type': 'application/json',
       },
}); 

export default AxiosApi;
