const baseURL = import.meta.env.REACT_APP_API_BASE_URL;
import axios from 'axios';

axios.defaults.baseURL = `${baseURL}/api/v1`;
export default axios;
