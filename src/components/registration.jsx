import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../services/userService';
import { useTranslation } from 'react-i18next';
import auth from '../services/authService';
import img from '../services/imgService';

const Registration = () => {
  const { t } = useTranslation();

  const [form, setState] = useState({ email: '', password: '', name: '', zip: '', phone: '', marketing: false });
  const [error, setError] = useState({});

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const marketing = () => {
    setState({ ...form, marketing: !form.marketing });
  };

  const doSubmit = async (e) => {
    try {
      // This prevents a window reload (!)
      e.preventDefault();
      // Create user object
      const user = {
        name: form.name,
        email: form.email,
        password: form.password,
        zip: form.zip,
        phone: form.phone,
        marketing: form.marketing,
      };
      console.log(user);
      // This is the server's response to the auth route
      const response = await register(user);
      // Save token on browser
      auth.loginWithJwt(response.headers['x-auth-token']);
      // Redirect user
      // Here we use window.location instead of history.push to force an app reload
      window.location = '/';
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
  if (auth.getCurrentUser()) return <Redirect to="/" />;

  return (
    <main
      className="flex justify-center sm:h-screen bg-cover bg-center sm:items-center"
      style={{
        backgroundImage: 'url(' + img.login + ')',
      }}>
      <div className="w-full items-stretch px-4 sm:mt-0">
        <div className="flex justify-center mx-auto">
          <div className="mt-10 w-full sm:w-7/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6"></div>
              <div className="flex-auto px-4 lg:px-10 py-0 pt-0">
                <div className="text-gray-500 text-center mb-3 select-none">
                  <small className="font-serif italic text-lg">{t('register.tagline')}</small>
                </div>
                <form onSubmit={doSubmit}>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      {t('register.name')}
                    </label>
                    <input
                      onChange={updateField}
                      type="text"
                      name="name"
                      className="px-3 py-3 placeholder-gray-200 text-gray-200 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder={t('register.fullname')}
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      {t('register.email')}
                    </label>
                    <input
                      onChange={updateField}
                      type="email"
                      name="email"
                      className="px-3 py-3 placeholder-gray-200 text-gray-200 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder={t('register.email')}
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      {t('register.password')}
                    </label>
                    <input
                      onChange={updateField}
                      type="password"
                      name="password"
                      className="px-3 py-3 placeholder-gray-200 text-gray-100 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder={t('register.password')}
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      {t('register.zip')}
                    </label>
                    <input
                      onChange={updateField}
                      type="text"
                      name="zip"
                      className="px-3 py-3 placeholder-gray-200 text-gray-200 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="12345"
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      {t('register.phone')}
                    </label>
                    <input
                      onChange={updateField}
                      type="text"
                      name="phone"
                      className="px-3 py-3 placeholder-gray-200 text-gray-200 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="407-321-0000"
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                  <div className="mt-6">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        onChange={marketing}
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 focus:ring-0 focus:ring-offset-0"
                        style={{ transition: 'all .15s ease' }}
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-600">{t('register.marketing')}</span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-indigo-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="submit"
                      style={{ transition: 'all .15s ease' }}>
                      {t('register.create')}
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-wrap mt-6 mx-3 bg-white rounded p-2 m-2">
                <span className="text-xs text-gray-600 font-semibold text-justify">{t('register.legal')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registration;
