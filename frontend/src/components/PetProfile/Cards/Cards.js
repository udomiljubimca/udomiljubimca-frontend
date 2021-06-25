import React, { useEffect, useState } from 'react';

import './Cards.css';
import ProfileCard from './ProfileCard';

const Cards = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data.json')
      .then((response) => response.json())
      .then((responseData) => {
        setFetchedData(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='cards'>
      {fetchedData.map((el) => (
        <ProfileCard
          key={el.id}
          type={el.type}
          image={el.image}
          location={el.location}
          age={el.age}
          sex={el.sex}
        />
      ))}
    </div>
  );
};

export default Cards;
