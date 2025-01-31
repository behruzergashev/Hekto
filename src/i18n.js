import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        email: "ergashevbehruz100@gmail.com",
        phone: "+998 942630429",
        language: "English",
        subtitle: "Best Furniture For Your Castle....",
        title: "New Furniture Collection Trends in 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
        shopNow: "Shop Now"
    },
  },
  uz: {
    translation: {
    email: "ergashevbehruz100@gmail.com",
    phone: "+998 942630429",
        language: "O'zbek",
        subtitle: "Qalbingiz uchun eng yaxshi mebellar....",
        title: "2020-yilda yangi mebel kolleksiyalari trendlari",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
        shopNow: "Sotib oling"
    },
  },
  ru: {
    translation: {
        email: "ergashevbehruz100@gmail.com",
        phone: "+998 942630429",
        language: "Русский",
        subtitle: "Лучшие мебель для вашего замка....",
        title: "Новые тенденции коллекции мебели в 2020 году",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
        shopNow: "Купить "
      
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
