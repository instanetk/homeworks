import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;

const apiEndpoint = apiUrl + '/testimonial';

export function submit(testimonial) {
  // console.log(testimonial);
  return http.post(apiEndpoint, testimonial);
}

export function getTestimonials() {
  return http.get(apiEndpoint);
}

export function hideTestimonial(id) {
  const query = apiEndpoint + '/?id=' + id;
  return http.put(query);
}
export function deleteTestimonial(id) {
  const query = apiEndpoint + '/?id=' + id;
  return http.delete(query);
}
