import React from "react";
import {  useSelector } from "react-redux";
import { AnyAction } from "redux";
import PhotoInput from "./PhotoInput";
import CoverPhotoInput from "./CoverPhotoInput";
import SaveCancelButtons from "./SaveCancelButtons";
import ProfileSection from "./ProfileSection";
import GenericInput from "./GenericInput";
import generateSections from "./section";

const Profile: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: AnyAction) => state.Auth.isAuthenticated
  );

  const sections = generateSections();
  return (
    <div className="flex justify-center items-center mt-6 ">
      {isAuthenticated ? (
        <div className="">
          <form className="w-75 mt-6 p-10 rounded-md border border-base-300">
            <div className="space-y-12">
              <PhotoInput id="photo" label="Photo" />
              <CoverPhotoInput id="cover-photo" label="Cover Photo" />
              {sections.map((section, index) => (
                <ProfileSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  className={section.className}
                >
                  {section.fields.map((field, fieldIndex) => (
                    <GenericInput key={fieldIndex} {...field} />
                  ))}
                </ProfileSection>
              ))}
            </div>
            <SaveCancelButtons />
          </form>
        </div>
      ) : (
        <p>Please log in to access the content.</p>
      )}
    </div>
  );
};

export default Profile;
