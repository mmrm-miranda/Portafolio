import { useState, useEffect } from 'react';


export const useGreeting = () => {
  const [greeting, setGreeting] = useState('');


  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      setGreeting('Buenos Días');

    } else if (hour >= 12 && hour < 19) {
      setGreeting('Buenas Tardes');

    } else {
      setGreeting('Buenas Noches');

    }
  }, []); 

  return { greeting };
};