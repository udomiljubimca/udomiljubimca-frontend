import React, { useState } from "react";
import "./UserProfile.css";
import Avatar from "../../assets/avatar.svg"
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import EasyEdit from 'react-easy-edit';

function UserProfile({ userData, isUserView }) {

  const [isEditing, setIsEditing] = useState(false);

  const saveEdit = () => {
    console.log('click');
  }

  const cancelEdit = () => {
    console.log('canceled');
  }

  const handleFieldEdit = (e) => {
    console.log(e);
  }

  return (
    <section className="user-profile container">
      <h1 className="page-title mt-4">PROFIL KORISNIKA</h1>

      <div className="user-profile__inner">
        <div className="user-profile__intro">
          <div>
            <img src={userData.image ? userData.image : Avatar} alt={userData.name} />
            {/* {isEditing && <AiOutlineEdit />} */}
          </div>
          <h2>{userData.name}</h2>
        </div>

        <div className="user-profile__details">
          <div className="d-flex">
            {isEditing ?
              <EasyEdit
                type="text"
                onSave={(e) => saveEdit(e, 'age')}
                onCancel={cancelEdit}
                placeholder={userData.age}
                saveButtonLabel={<AiOutlineCheck />}
                cancelButtonLabel={<AiOutlineClose />}
                attributes={{ name: "age", id: 'age' }}
              /> :
              <p>{userData.age} godine,</p>
            }
            <br />
            {isEditing ?
              <EasyEdit
                type="text"
                onSave={(e) => saveEdit(e, 'location')}
                onCancel={cancelEdit}
                placeholder={userData.location}
                saveButtonLabel={<AiOutlineCheck />}
                cancelButtonLabel={<AiOutlineClose />}
                attributes={{ name: "location", id: 'location' }}
              /> :
              <p>{userData.location}</p>
            }
          </div>
          <p>Korisnik od {userData.registrationDate}.</p>
        </div>

        <div className="user-profile__about">
          <h3>O meni</h3>

          {isEditing ?
            <EasyEdit
              type="textarea"
              onSave={(e) => saveEdit(e, 'about')}
              onCancel={cancelEdit}
              placeholder={userData.about}
              saveButtonLabel={<AiOutlineCheck />}
              cancelButtonLabel={<AiOutlineClose />}
              attributes={{ name: "about", id: 'about' }}
            /> :
            <p>{userData.about}</p>
          }

          {isUserView && (
            <button type="button" onClick={() => setIsEditing(prev => !prev)} className="custom-btn btn-primary">
              {isEditing ? 'Zavrsi' : ' Uredi profil'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
