import http from './httpService';
// import { apiUrl } from '../config.json';

const apiUrl = process.env.REACT_APP_API_URL;

const apiEndpoint = apiUrl + '/schedule';

export function schedule(appointment) {
  return http.post(apiEndpoint, {
    name: appointment.name,
    phone: appointment.phone,
    email: appointment.email,
    address: appointment.address,
    date: new Date(appointment.date).toLocaleDateString('en-US', { timeZone: 'UTC' }),
    note: appointment.note,
    coordinates: appointment.coordinates,
    service: appointment.service,
  });
}

export function getSchedule(dateRange) {
  // console.log('range', dateRange);
  const from = new Date(dateRange[0]).toLocaleDateString('en-US', { timeZone: 'America/New_York' });
  const to = new Date(dateRange[1]).toLocaleDateString('en-US', { timeZone: 'America/New_York' });
  const query = apiEndpoint + '/list?from=' + from + '&to=' + to;
  // console.log('query', query);
  return http.get(query);
}

export function getAppointment(id) {
  const query = apiEndpoint + '/appointment/?id=' + id;
  return http.get(query);
}

export function updateStatus(id) {
  const query = apiEndpoint + '/appointment/?id=' + id;
  return http.put(query);
}

export function deleteAppointment(id) {
  const query = apiEndpoint + '/appointment/?id=' + id;
  return http.delete(query);
}
