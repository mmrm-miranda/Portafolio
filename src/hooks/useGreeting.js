import { useLanguage } from '../context/useLanguage';

export const useGreeting = () => {
  const { language } = useLanguage();

  const hour = new Date().getHours();
  const isEn = language === 'en';

  let greeting;
  if (hour >= 6 && hour < 12) {
    greeting = isEn ? 'Good Morning' : 'Buenos Días';
  } else if (hour >= 12 && hour < 19) {
    greeting = isEn ? 'Good Afternoon' : 'Buenas Tardes';
  } else {
    greeting = isEn ? 'Good Evening' : 'Buenas Noches';
  }

  return { greeting };
};
