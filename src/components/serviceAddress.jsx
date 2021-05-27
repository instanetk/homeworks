import React from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';
import useStateRef from 'react-usestateref';
import { schedule } from '../services/scheduleService';
import { toast } from 'react-toastify';

const styles = {
  form: '',
  input: 'px-3 py-2 h-9 placeholder-indigo-500 w-full',
  button:
    'mt-6 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-lg font-normal rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ',
  h2: 'mt-2 text-md text-gray-600 font-normal text-left',
  map: 'mt-4 md:mt-0 mr-6 md:mr-0 h-72 md:h-auto md:flex rounded-md shadow select-none overflow-hidden md:w-1/2',
  mainDiv: 'md:flex justify-between ml-6 md:ml-0 md:px-20 md:flex-shrink-0',
  boxDiv: 'h-full px-5 py-6 md:px-8 md:py-6 rounded-md shadow md:w-1/2 mr-6 bg-white md:flex-shrink-0',
};

const containerStyle = {
  width: '100%',
  height: '100%',
};

const libraries = ['places'];

const options = {
  disableDefaultUI: true,
  latLngBounds: {
    north: 29.1871986, // Ocala
    south: 27.3364347, // Sarasota
    west: -83.0001026, // Clearwater
    east: -80.6102592, // Cocoa
  },
};

const ServiceAddress = ({ sayThanks, service }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line
  const [map, setMap] = React.useState(null);
  const [searchBox, setSearchBox] = React.useState(null);
  // eslint-disable-next-line
  const [address, setAddress, ref] = useStateRef(null);
  const [center, setCenter] = React.useState({
    lat: 28.5445894,
    lng: -81.5883121,
  });
  const [zoom, setZoom] = React.useState(8);
  // Use the _ggs suffix to prevent Chrome autofill.
  const [form, setForm, formRef] = useStateRef({
    name_ggs: '',
    phone_ggs: '',
    email: '',
    address: '',
    note: '',
    date: '',
    coordinates: center,
    service,
  });
  const [error, setError] = React.useState({});

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onSearchBoxLoad = React.useCallback((ref) => {
    setSearchBox(ref);
  }, []);

  const onPlacesChanged = React.useCallback(() => {
    setAddress(searchBox.getPlaces());
    const updateMap = () => {
      let coordinates = ref.current[0].geometry.location;
      let center = {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      };

      setCenter(center);
      setZoom(17);
      setForm({ ...formRef.current, address: ref.current[0].formatted_address });
      // console.log(formRef.current);
    };
    updateMap();
  }, [searchBox, setAddress, ref, formRef, setForm]);

  const updateField = (e) => {
    setForm({
      ...formRef.current,
      [e.target.name]: e.target.value,
    });
    // console.log(formRef.current);
  };

  const doSubmit = async (e) => {
    try {
      // This prevents a window reload (!)
      e.preventDefault();
      // Create appointment object
      const appointment = {
        name: formRef.current.name_ggs,
        phone: formRef.current.phone_ggs,
        email: formRef.current.email,
        address: formRef.current.address,
        date: formRef.current.date,
        note: formRef.current.note,
        coordinates: center,
        service: formRef.current.service,
      };

      console.log('appointment object', appointment);
      await schedule(appointment);
      sayThanks();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...error };
        // If errors, set the error state to the response data.
        errors.username = ex.response.data;
        setError(errors);
        // This error will be displayed to the client.
        toast('🦊 ' + errors.username);
      }
    }
  };

  return (
    <div>
      <div className="ml-20">
        <h3 className="-ml-14 sm:ml-0 py-4 text-gray-700 font-bold text-md uppercase select-none">
          {t('serviceAddress.title')}
        </h3>
      </div>
      <div className={styles.mainDiv}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={libraries}
          language="en"
          region="us">
          <div className={styles.boxDiv}>
            <form onSubmit={doSubmit} className={styles.form} autoComplete="none">
              <input autoComplete="on" value="none" type="hidden"></input>

              <h2 className={styles.h2}>{t('serviceAddress.name')}</h2>
              <input
                onChange={updateField}
                type="text"
                name="name_ggs"
                autoComplete="none"
                placeholder={t('serviceAddress.fullname')}
                className={styles.input}></input>
              <h2 className={styles.h2}>{t('serviceAddress.phone')}</h2>
              <input
                onChange={updateField}
                type="text"
                name="phone_ggs"
                autoComplete="none"
                placeholder="407-321-0000"
                className={styles.input}></input>
              <h2 className={styles.h2}>{t('serviceAddress.email')}</h2>
              <input
                onChange={updateField}
                type="text"
                name="email"
                autoComplete="none"
                placeholder={t('serviceAddress.placeholder_email')}
                className={styles.input}></input>
              <h2 className={styles.h2}>{t('serviceAddress.address')}</h2>
              <StandaloneSearchBox
                onLoad={onSearchBoxLoad}
                onPlacesChanged={onPlacesChanged}
                bounds={options.latLngBounds}>
                <input
                  type="text"
                  name="googleAddress"
                  autoComplete="off"
                  placeholder="777 E Washington St, Orlando, FL"
                  className={styles.input}></input>
              </StandaloneSearchBox>
              <h2 className={styles.h2}>{t('serviceAddress.date')}</h2>
              <input onChange={updateField} type="date" name="date" className={styles.input}></input>
              <span className="flex">
                <h2 className={styles.h2}>{t('serviceAddress.note')}</h2>
                <p className="text-xs hidden">Optional</p>
              </span>
              <input
                onChange={updateField}
                type="text"
                name="note"
                autoComplete="none"
                placeholder={t('serviceAddress.placeholder_note')}
                className={styles.input}></input>
              <button type="submit" className={styles.button}>
                {t('serviceAddress.button')}
              </button>
            </form>
          </div>
          <div className={styles.map}>
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
      </div>
    </div>
  );
};

export default React.memo(ServiceAddress);
