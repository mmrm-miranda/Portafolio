import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const useGreeting = () => {
  const { language } = useLanguage();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    const isEn = language === 'en';

    if (hour >= 6 && hour < 12) {
      setGreeting(isEn ? 'Good Morning' : 'Buenos Días');
    } else if (hour >= 12 && hour < 19) {
      setGreeting(isEn ? 'Good Afternoon' : 'Buenas Tardes');
    } else {
      setGreeting(isEn ? 'Good Evening' : 'Buenas Noches');
    }
  }, [language]);

  return { greeting };
};