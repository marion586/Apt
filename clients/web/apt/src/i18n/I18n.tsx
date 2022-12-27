import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Languagedetector from 'i18next-browser-languagedetector';

import translationEn from './translation/en/translation.json';
import translationFr from './translation/fr/translation.json';

i18n
  //
  .use(Languagedetector)
  //
  .use(initReactI18next)
  //

  .init({
    resources: {
      en: {
        translation: translationEn,
      },
      fr: {
        translation: translationFr,
      },
    },
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
