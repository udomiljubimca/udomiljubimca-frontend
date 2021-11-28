import React from "react";
import "./UserProfile.css";
import Avatar from "../../assets/avatar.svg"

function UserProfile({ userData, isUserView }) {
  return (
    <section className="user-profile container">
      <h1 className="page-title mt-4">PROFIL KORISNIKA</h1>

      <div className="user-profile__inner">
        <div className="user-profile__intro">
          <img src={userData.image ? userData.image : Avatar} alt={userData.name} />
          <h2>{userData.name}</h2>
        </div>

        <div className="user-profile__details">
          <p>{userData.age}, {userData.location}</p>
          <p>Korisnik od {userData.registrationDate}.</p>
        </div>

        <div className="user-profile__about">
          <h3>O meni</h3>
          <p>{userData.about}</p>
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
