import React, { useState, useRef } from "react";
import "./UserProfile.css";
import Avatar from "../../assets/avatar.svg"
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import EasyEdit from 'react-easy-edit';

function UserProfile({ userData, isUserView }) {

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileInfo] = useState(userData);

  const onSaveFieldEdit = (value, fieldName) => {
    setProfileInfo((current) => { return { ...current, [fieldName]: value } })
  }

  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <section className="user-profile container">
      <h1 className="page-title mt-4">PROFIL KORISNIKA</h1>

      <div className="user-profile__inner">
        <div className="user-profile__intro">
          <div onClick={() => isEditing && imageUploader.current.click()} style={{
            cursor: isEditing && 'pointer'
          }}>
            <img ref={uploadedImage} src={profileData.image ? profileData.image : Avatar} alt={profileData.name} />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none"
            }}
          />
          <h2>{profileData.name}</h2>
        </div>

        <div className="user-profile__details">
          <div className="d-flex">
            {isEditing ?
              <EasyEdit
                type="text"
                onSave={(e) => onSaveFieldEdit(e, 'age')}
                placeholder={profileData.age}
                saveButtonLabel={<AiOutlineCheck />}
                cancelButtonLabel={<AiOutlineClose />}
                attributes={{ name: "age", id: 'age' }}
              /> :
              <p>{profileData.age} godine,</p>
            }
            <br />
            {isEditing ?
              <EasyEdit
                type="text"
                onSave={(e) => onSaveFieldEdit(e, 'location')}
                placeholder={profileData.location}
                saveButtonLabel={<AiOutlineCheck />}
                cancelButtonLabel={<AiOutlineClose />}
                attributes={{ name: "location", id: 'location' }}
              /> :
              <p>{profileData.location}</p>
            }
          </div>
          <p>Korisnik od {profileData.registrationDate}.</p>
        </div>

        <div className="user-profile__about">
          <h3>O meni</h3>

          {isEditing ?
            <EasyEdit
              type="textarea"
              onSave={(e) => onSaveFieldEdit(e, 'about')}
              placeholder={profileData.about}
              saveButtonLabel={<AiOutlineCheck />}
              cancelButtonLabel={<AiOutlineClose />}
              attributes={{ name: "about", id: 'about' }}
            /> :
            <p>{profileData.about}</p>
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
