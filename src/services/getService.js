import http from './httpService';
// import { apiUrl } from '../config.json';

const apiUrl = process.env.REACT_APP_API_URL;

const apiEndPoint = apiUrl + '/services';

export function getServices(category) {
  if (category) {
    let catEndPoint = apiEndPoint + '?category=' + category;
    return http.get(catEndPoint);
  }
  return http.get(apiEndPoint);
}
