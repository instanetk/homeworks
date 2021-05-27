import React, { useCallback, useEffect } from 'react';
import queryString from 'query-string';
import { getAppointment } from '../../services/scheduleService';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Delete from './delete';
import img from '../../services/imgService';

const AppointmentCard = ({ location, history, user }) => {
  // Extract the ID from the URL query.
  let id;
  if (location.search !== 'undefined') {
    let result = queryString.parse(location.search);
    id = result.id;
  }

  // Query database
  const [appointment, setAppointment] = React.useState({});

  const fetchAppointment = useCallback(async () => {
    const { data } = await getAppointment(id);
    setAppointment(data[0]);
    setCenter(data[0].coordinates);
  }, [id]);

  useEffect(() => {
    fetchAppointment();
  }, [fetchAppointment]);

  // Google Maps configuration
  // eslint-disable-next-line
  const [map, setMap] = React.useState(null);
  // eslint-disable-next-line
  const [center, setCenter] = React.useState({
    lat: 28.5445894,
    lng: -81.5883121,
  });
  // eslint-disable-next-line
  const [zoom, setZoom] = React.useState(17);
  // eslint-disable-next-line
  const [error, setError] = React.useState({});
  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  const options = {
    disableDefaultUI: false,
  };
  // Switch statement to set the category image
  let image;
  switch (appointment.service) {
    case 'Tile Installation':
    case 'Instalación de Losas':
      image = 'catCovering';
      break;
    case 'Hardwood & Laminate Floors':
    case 'Pisos de Madera y Laminado':
      image = 'srvLaminate';
      break;
    case 'Carpet Installation':
    case 'Instalación de Alfombras':
      image = 'srvCarpet';
      break;
    case 'Backsplash':
      image = 'srvBacksplash';
      break;
    case 'Bathroom Remodel':
    case 'Remodelacion de Baños':
      image = 'srvBathroom';
      break;
    case 'Kitchen Remodel':
    case 'Remodelación de Cocina':
      image = 'srvKitchen';
      break;
    case 'Landscape & Irrigation':
    case 'Jardinería e Irrigación':
      image = 'catLandscaping';
      break;
    case 'Painting':
    case 'Pintura':
      image = 'catPaining';
      break;
    case 'Carpet Cleaning':
    case 'Liempieza de Alfombras':
      image = 'srvCarpetClean';
      break;
    case 'One-Time Cleaning':
    case 'Limpieza (Una vez)':
      image = 'srvCleaning';
      break;
    case 'Plumbing':
    case 'Plomeria':
      image = 'catPlumbing';
      break;
    case 'Pavers & Stones':
    case 'Pavimentos y Piedras':
      image = 'catPavers';
      break;
    case 'Granite Countertops':
    case 'Superficies de Granito':
      image = 'catGranite';
      break;
    case 'Pool Service':
    case 'Servicio de Piscina':
      image = 'catPool';
      break;
    case 'Handyman Services':
    case 'Servicios de Reparación':
      image = 'srvHandyman';
      break;
    case 'Minor Electrical':
    case 'Electricidad Menor':
      image = 'srvElectrical';
      break;
    case 'Irrigation':
    case 'Irrigación':
      image = 'srvIrrigation';
      break;
    case 'Landscaping':
    case 'Jardineria':
      image = 'catLandscaping';
      break;
    default:
      image = '';
  }
  // Format the date Object
  const date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const [visible, setVisible] = React.useState(false);

  const onCancel = () => {
    setVisible(!visible);
  };

  return (
    <div
      className="flex min-h-screen items-center w-full p-20 bg-cover bg-center"
      style={{
        backgroundImage: 'url(' + img.login + ')',
      }}>
      <div id="delete" className={`${visible ? '' : 'hidden'}`}>
        <Delete id={id} onCancel={onCancel} />
      </div>
      <div className="flex w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} language="en" region="us">
          <div className="w-1/2">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={zoom}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={options}>
              {/* Child components, such as markers, info windows, etc. */}
              {zoom > 8 ? <Marker position={center} /> : null}
            </GoogleMap>
          </div>
        </LoadScript>
        <div className="w-1/2">
          <div
            id="header"
            className="bg-pink-700 h-52 p-4 bg-cover bg-center relative"
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/dgt2j8jc0/image/upload/c_scale,q_80,w_1000/' + img[image] + ')',
            }}>
            <h1 className="text-white font-bold text-4xl text-shadow-xl absolute right-2 bottom-2 select-none">
              {appointment.service}
            </h1>
          </div>
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-2xl">{appointment.name}</h2>
            <h2 className="text-gray-700 font-bold text-xl">{appointment.phone}</h2>
            <h2 className="text-gray-700 font-bold text-xl">{appointment.email}</h2>
            <p className="mt-2 text-gray-600 text-sm">{appointment.address}</p>
            <p className="mt-2 text-gray-600 text-sm italic font-serif">{appointment.note}</p>
            <p className="mt-2 text-gray-600 text-sm">{new Date(appointment.date).toLocaleDateString('en-US', date)}</p>
          </div>

          <div className="flex item-center justify-between mt-3 p-4">
            {user.isAdmin ? (
              <div className="flex justify-between w-full">
                <button
                  onClick={history.goBack}
                  className="px-3 py-2 bg-gray-200 hover:bg-purple-200 text-black text-xs font-bold uppercase rounded">
                  Back to Schedule
                </button>
                <button
                  onClick={() => setVisible(!visible)}
                  className="px-3 py-2 bg-gray-200 hover:bg-red-400 text-black text-xs font-bold uppercase rounded">
                  Delete
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
