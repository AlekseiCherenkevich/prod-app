import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: __IS_DEV__ ? true : false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;