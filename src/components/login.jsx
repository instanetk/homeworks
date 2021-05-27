import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link, Redirect } from 'react-router-dom';
import auth from '../services/authService';
import Quote from './common/quote';
import img from '../services/imgService';

const Login = ({ location }) => {
  const { t } = useTranslation();

  const [form, setState] = useState({ email: '', password: '' });
  const [error, setError] = useState({});

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const doSubmit = async (e) => {
    try {
      // This prevents a window reload (!)
      e.preventDefault();
      // This is the server's response to the auth route
      await auth.login(form.email, form.password);
      // Redirect user
      const { state } = location;
      window.location = state ? state.from.pathname : '/account';
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

  if (auth.getCurrentUser()) return <Redirect to="/account" />;

  return (
    <main
      className="flex justify-center h-screen bg-cover bg-center sm:items-center"
      style={{
        backgroundImage: 'url(' + img.login + ')',
      }}>
      <div className="w-full items-stretch px-4 mt-10 sm:mt-0">
        <div className="flex justify-center mx-auto">
          <div className="w-full sm:w-96 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6"></div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 select-none">
                  <Quote />
                </div>
                <form onSubmit={doSubmit}>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      {t('login.email')}
                    </label>
                    <input
                      onChange={updateField}
                      type="email"
                      name="email"
                      className="px-3 py-3 placeholder-gray-200 text-gray-200 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder={t('login.email')}
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      {t('login.password')}
                    </label>
                    <input
                      onChange={updateField}
                      type="password"
                      name="password"
                      className="px-3 py-3 placeholder-gray-200 text-gray-100 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder={t('login.password')}
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 focus:ring-0 focus:ring-offset-0"
                        style={{ transition: 'all .15s ease' }}
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-600"> {t('login.remember')}</span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-indigo-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="submit"
                      style={{ transition: 'all .15s ease' }}>
                      {t('login.button')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 mx-1">
              <div className="w-1/2">
                <Link to="password" className="text-white font-semibold">
                  <small>{t('login.forgot')}</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="register" className="text-white font-semibold">
                  <small>{t('login.register')}</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
