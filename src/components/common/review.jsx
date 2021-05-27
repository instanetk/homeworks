import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { submit } from '../../services/testimonialService';

const Review = ({ onClose, sayThanks }) => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name_ggs: '',
    email: '',
    testimonial: '',
  });

  const formRef = useRef();
  formRef.current = form;

  const updateField = (e) => {
    setForm({
      ...formRef.current,
      [e.target.name]: e.target.value,
    });
    // console.log(formRef.current);
  };

  const close = () => {
    onClose();
  };

  let wordCount = formRef.current.testimonial.split(/\S+/g).length - 1;

  let color = () => {
    let color;
    switch (true) {
      case wordCount >= 25 && wordCount <= 35:
        color = 'text-yellow-600';
        break;
      case wordCount >= 35:
        color = 'text-red-500';
        break;
      default:
        color = 'text-green-500';
    }
    return color;
  };
  const getLanguage = () => window.localStorage.i18nextLng.split('').slice(0, 2).join('');

  //   console.log('en-US'.split('').slice(0, 2).join(''));

  const doSubmit = async (e) => {
    try {
      // This prevents a window reload (!)
      e.preventDefault();
      // Create testimonial object
      const testimonial = {
        name: formRef.current.name_ggs,
        email: formRef.current.email,
        testimonial: formRef.current.testimonial,
        language: getLanguage(),
      };

      await submit(testimonial);
      sayThanks();
    } catch (ex) {
      console.log(ex.message);
    }
  };

  const thumbUp = (
    <div className="w-4 h-4 ml-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
      </svg>
    </div>
  );

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-25" onClick={close}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline">
          <div className="sm:flex sm:items-start">
            <form onSubmit={doSubmit} className="flex w-full max-w-lg space-x-3">
              <div className="w-full max-w-2xl px-5 py-5 m-auto mt-0 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 font-light text-center text-gray-600 dark:text-white ">
                  <div className="flex justify-end text-gray-400">
                    <div className="w-6 h-6 cursor-pointer" onClick={close}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-1xl sm:text-2xl italic font-serif select-none">{t('review.title')}</span>
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="relative ">
                      {/* <label className="text-xs text-gray-400 ml-2">&#8203;</label> */}

                      <input
                        onChange={updateField}
                        value={formRef.current.name_ggs}
                        name="name_ggs"
                        type="text"
                        id="contact-form-name"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 text-gray-700 placeholder-gray-100 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder={t('review.name')}
                      />
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      {/* <label className="text-xs text-gray-400 ml-2">We won't publish your email</label> */}

                      <input
                        onChange={updateField}
                        value={formRef.current.email}
                        name="email"
                        type="text"
                        id="contact-form-email"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 text-gray-700 placeholder-gray-200 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder={t('review.email')}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="text-gray-700" htmlFor="name">
                      <textarea
                        onChange={updateField}
                        value={formRef.current.testimonial}
                        name="testimonial"
                        className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-200 text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
                        id="comment"
                        placeholder={t('review.placeholder')}
                        rows="5"
                        cols="40"></textarea>
                    </label>
                    <p className="text-xs text-center">
                      <span className={`font-semibold ${color()}`}>{wordCount}</span>{' '}
                      <span>{wordCount === 1 ? t('review.word') : t('review.words')}</span>
                    </p>
                  </div>
                  <div className="col-span-2 text-right">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                      <div className="flex items-center align-middle justify-center">
                        {t('review.send')} {wordCount > 39 ? thumbUp : ''}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
