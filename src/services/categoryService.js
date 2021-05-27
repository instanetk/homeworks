import http from './httpService';
// import { apiUrl } from '../config.json';

const apiUrl = process.env.REACT_APP_API_URL;

const apiEndPoint = apiUrl + '/categories';

export function getCategories() {
  return http.get(apiEndPoint);
}
