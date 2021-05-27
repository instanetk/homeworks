import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/common/loading';
import './i18next';
import ScrollToTop from './scrollToTop';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/tailwind.css';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Suspense>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
