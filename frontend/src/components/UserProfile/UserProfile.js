import React from "react";
import "./UserProfile.css";
import Avatar from "../../assets/avatar.svg"
function UserProfile({ isUserView }) {
  return (
    <section className="user-profile container">
      <h1 className="page-title mt-4">Profil korisnika</h1>

      <div className="user-profile__inner">
        <div className="user-profile__intro">
          <img src={Avatar} alt="Udomi Ljubimca" />
          <h2>Petar Petrovic</h2>
        </div>

        <div className="user-profile__details">
          <p>33 godine, Beograd</p>
          <p>Korisnik od 01.01.2021.</p>
        </div>

        <div className="user-profile__about">
          <h3>O meni</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            dolor totam necessitatibus autem neque accusantium, recusandae
            cumque suscipit.
          </p>
          {isUserView && (
            <button type="button" className="custom-btn btn-primary">
              Uredi profil
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
