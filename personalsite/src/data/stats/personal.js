import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2000-08-30T08:53:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'skills',
    label: 'Skills Learned',
    value: 15,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Mumbai, IND',
  },
  {
    key: 'earning',
    label: 'Independent since',
    value: '17yr',
  },
  {
    key: 'lines',
    label: 'Lines of Javascript powering this website',
    value: '3115 approx.',
  },
];

export default data;
