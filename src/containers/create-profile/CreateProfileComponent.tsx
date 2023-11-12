import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import PhotoInput from "./PhotoInput";
import CoverPhotoInput from "./CoverPhotoInput";
import CreateProfileButton from "./CreateProfileButton";
import ProfileSection from "./ProfileSection";
import GenericInput from "./GenericInput";
import generateSections from "./section";
import { CreateProfile } from "../../store/modules/profile/actions/profileAction";
import ConvertFileToBase64 from "../../utils/helperFunction/convertFileToBase64";
import GetStoredUserData from "../../utils/helperFunction/GetStoredUserData";
import {PhotoInfo} from "./InputField"

const CreateProfileComponent: React.FC = () => {
  const currentState = useSelector(
    (state: AnyAction) => state.Auth
  );
  const userData = GetStoredUserData(); 
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const [photoData, setPhotoData] = useState<PhotoInfo>({ data: null, name: null });
  // State to manage the cover photo data
  const [coverPhotoData, setCoverPhotoData] = useState<PhotoInfo>({ data: null, name: null });


  // State to manage form data
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  // Callback function to update the photoData state
  const handlePhotoChange = async (newPhotoData: PhotoInfo) => {
    // const base64String = await ConvertFileToBase64(newPhotoData)
    // setPhotoData(base64String);
    setPhotoData(newPhotoData);
  };

  const createProfile = (credentials: any) => {
    dispatch<any>(CreateProfile(credentials));
  };

  // Callback function to update the form data
  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  // Callback function to update the coverPhotoData state
  const handleCoverPhotoChange = async (newCoverPhotoData: PhotoInfo) => {
    // const base64String = await ConvertFileToBase64(newCoverPhotoData)
    // setCoverPhotoData(base64String);
    setCoverPhotoData(newCoverPhotoData);
  };

  const sections = generateSections();

  // Submit form data
  const handleCreateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Combine form data and file data
    const newProfileData = {
      ...formData,
      profilePic: photoData,
      coverPic: coverPhotoData,
      userID: currentState.currentUser.id,
      username: userData.username
    };
    // console.log("newProfileData", newProfileData);
    
    createProfile(newProfileData)
  };

  useEffect(() => {
    const newProfileData = {
      ...formData,
      photo: photoData,
      coverPhoto: coverPhotoData,
    };
    // console.log("newProfileData", newProfileData);
    // console.log("photoData", photoData);
    console.log("currentState", currentState);
  }, [formData, coverPhotoData, photoData]);

  return (
    <div className="flex w-75 justify-center items-center mt-6 ">
      {currentState.isAuthenticated ? (
        <div className="">
          <form
            className="w-75 mt-6 p-10 rounded-md border border-base-300"
            onSubmit={handleCreateProfile}
            encType="multipart/form-data"
          >
            <div className="space-y-12">
              <PhotoInput
                id="profilePic"
                name="profilePic" 
                label="Profile Pic"
                onPhotoChange={handlePhotoChange}
              />
              <CoverPhotoInput
                id="cover-pic"
                label="Cover Pic"
                onCoverPhotoChange={handleCoverPhotoChange}
              />
              {sections.map((section, index) => (
                <ProfileSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  className={section.className}
                >
                  {section.fields.map((field, fieldIndex) => (
                    <GenericInput
                      key={fieldIndex}
                      {...field}
                      value={field.value ? field.value : ""}
                      onChange={(value) =>
                        field.name && handleFieldChange(field.name, value)
                      }
                    />
                  ))}
                </ProfileSection>
              ))}
            </div>
            <CreateProfileButton />
          </form>
        </div>
      ) : (
        <p>Please log in to access the content.</p>
      )}
    </div>
  );
};

export default CreateProfileComponent;
