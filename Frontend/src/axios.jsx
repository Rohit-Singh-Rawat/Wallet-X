
import axios from 'axios';

axios.defaults.baseURL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
export default axios;
