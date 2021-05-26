import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, lt } from "../assets/locale";

i18n.use(initReactI18next).init({
  resources: {
    en,
    lt,
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: true,

  ns: ['common'],
  defaultNS: 'common',

  keySeparator: false,
});

export const locale = i18n;
