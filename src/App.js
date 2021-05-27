import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { io } from 'socket.io-client';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/common/protectedRoute';
import NavBar from './components/common/navBar.jsx';
import Translate from './components/common/translate';
import User from './components/common/user';
import Footer from './components/common/footer';
import Home from './components/home';
import Schedule from './components/schedule';
import Services from './components/services';
import Pinboard from './components/pinboard';
import Testimonials from './components/testimonials/testimonials';
import Unpublished from './components/testimonials/unpublished';
import Coverings from './components/categories/coverings';
import Irrigation from './components/categories/irrigation';
import Painting from './components/categories/painting';
import Cleaning from './components/categories/cleaning';
import Plumbing from './components/categories/plumbing';
import Pavers from './components/categories/pavers';
import Granite from './components/categories/granite';
import Pool from './components/categories/pool';
import Misc from './components/categories/misc';
import Login from './components/login';
import Registration from './components/registration';
import Logout from './components/logout';
import NotFound from './components/notFound';
import Account from './components/account';
import auth from './services/authService';
import Tiles from './components/services/tiles';
import Laminate from './components/services/laminate';
import Carpet from './components/services/carpet';
import Backsplash from './components/services/backsplash';
import CarpetCleaning from './components/services/carpetCleaning';
import OneTimeCleaning from './components/services/cleaning';
import Handyman from './components/services/handyman';
import MinorElectrical from './components/services/minorElectrical';
import BathroomRemodel from './components/services/bathroomRemodel';
import KitchenRemodel from './components/services/kitchenRemodel';
import IrrigationService from './components/services/irrigation';
import Landscape from './components/services/landscape';
import AppointmentCard from './components/account/appointmentCard';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const socket = io(process.env.REACT_APP_SOCKET_IO, { transports: ['websocket'] });

  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const user = auth.getCurrentUser();
      setUser(user);
    } catch (ex) {}
  }, []);

  // const [userCount, setUserCount] = useState();

  // useEffect(() => {
  //   // Listening to the server emit an "userCount" event - live online users count
  //   socket.on('userCount', (count) => {
  //     // console.log('remainder:', count % 2);
  //     if (count % 2 === 0) setUserCount(count / 2);
  //   });

  //   return () => {
  //     socket.off();
  //     console.log('useEffect off');
  //   };
  // }, []);

  return (
    <div id="App" className="min-h-screen antialiasing bg-gray-100 sm:flex">
      <ToastContainer />
      <NavBar />
      <div className="sm:flex-col sm:w-full">
        <Switch>
          <Route path={['/services/floors-coverings', '/services/pisos-y-revestimientos']} component={Coverings} />
          <Route
            path={['/services/landscape-irrigation', '/services/jardinería-e-irrigación']}
            component={Irrigation}
          />
          <Route path={['/services/painting', '/services/pintura']} component={Painting} />
          <Route path={['/services/cleaning', '/services/limpieza']} component={Cleaning} />
          <Route path={['/services/plumbing', '/services/plomería']} component={Plumbing} />
          <Route path={['/services/pavers-stones', '/services/pavimentos-y-piedras']} component={Pavers} />
          <Route path={['/services/granite-countertops', '/services/superficies-de-granito']} component={Granite} />
          <Route path={['/services/pool-service', '/services/servicio-de-piscina']} component={Pool} />
          <Route path={['/services/miscellaneous', '/services/misceláneos']} component={Misc} />
          <Route path="/services" component={Services} />
          <Route path={['/schedule/tile-installation', '/schedule/instalación-de-losas']} component={Tiles} />
          <Route
            path={['/schedule/hardwood-laminate-floors', '/schedule/pisos-de-madera-y-laminado']}
            component={Laminate}
          />
          <Route path={['/schedule/carpet-installation', '/schedule/instalación-de-alfombras']} component={Carpet} />
          <Route path={['/schedule/backsplash', '/schedule/backsplash']} component={Backsplash} />
          <Route path={['/schedule/carpet-cleaning', '/schedule/limpieza-de-alfombras']} component={CarpetCleaning} />
          <Route path={['/schedule/one-time-cleaning', '/schedule/limpieza--una-vez-']} component={OneTimeCleaning} />
          <Route path={['/schedule/handyman-services', '/schedule/servicios-de-reparación']} component={Handyman} />
          <Route path={['/schedule/minor-electrical', '/schedule/electricidad-menor']} component={MinorElectrical} />
          <Route path={['/schedule/bathroom-renovation', '/schedule/remodelación-de-baños']} component={BathroomRemodel} />
          <Route path={['/schedule/kitchen-renovation', '/schedule/remodelación-de-cocina']} component={KitchenRemodel} />
          <Route path={['/schedule/irrigation', '/schedule/irrigacion']} component={IrrigationService} />
          <Route path={['/schedule/landscaping', '/schedule/jardinería']} component={Landscape} />
          <Route path="/schedule" component={Schedule}>
            <Redirect to="/services" />
          </Route>
          <Route path="/pinboard" component={Pinboard} />
          <Route path={['/testimonials', '/testimonios']} render={(props) => <Testimonials user={user} {...props} />} />
          <ProtectedRoute path="/unpublished" render={(props) => <Unpublished user={user} {...props} />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound} />
          <ProtectedRoute path="/account" render={(props) => <Account user={user} socket={socket} {...props} />} />
          <ProtectedRoute
            path="/appointment"
            render={(props) => <AppointmentCard user={user} {...props} />}></ProtectedRoute>
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <Translate />
        <User user={user} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
