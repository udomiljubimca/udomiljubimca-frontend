import React from 'react';
import Card from '../pet-profile/Cards/Cards';
import Header from '../Header';

function UserProfile() {
  return (
    <div>
      <Header />
      <div>
        <h2>Petar Petrovic</h2>
        <hr />
        <p>33 godine, Beograd</p>
        <p>Korisnik od 01.01.2021.</p>
        <h3>O meni</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          dolor totam necessitatibus autem neque accusantium, recusandae cumque
          suscipit.
        </p>
      </div>
      <Card />
    </div>
  );
}

export default UserProfile;
