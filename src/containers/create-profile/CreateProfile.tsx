import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";
import PhotoInput from "./PhotoInput";
import CoverPhotoInput from "./CoverPhotoInput";
import SaveCancelButtons from "./SaveCancelButtons";
import ProfileSection from "./ProfileSection";
import GenericInput from "./GenericInput";
import generateSections from "./section";

const CreateProfile: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: AnyAction) => state.Auth.isAuthenticated
  );

  // State to manage the photo data
  const [photoData, setPhotoData] = useState<string | null>(null);

  // Callback function to update the photoData state
  const handlePhotoChange = (newPhotoData: string) => {
    setPhotoData(newPhotoData);
  };

  // State to manage the cover photo data
  const [coverPhotoData, setCoverPhotoData] = useState<string | null>(null);

  // State to manage form data
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  // Callback function to update the form data
  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };


  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  // Callback function to update the coverPhotoData state
  const handleCoverPhotoChange = (newCoverPhotoData: string) => {
    setCoverPhotoData(newCoverPhotoData);
  };

  const sections = generateSections();

  return (
    <div className="flex w-75 justify-center items-center mt-6 ">
      {isAuthenticated ? (
        <div className="">
          <form className="w-75 mt-6 p-10 rounded-md border border-base-300">
            <div className="space-y-12">
              {/* Pass the callback function to PhotoInput */}
              <PhotoInput
                id="photo"
                label="Photo"
                onPhotoChange={handlePhotoChange}
              />
              <CoverPhotoInput
                id="cover-photo"
                label="Cover Photo"
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
                    <>
                     <GenericInput
                      key={fieldIndex}
                      {...field}
                      // value={formData[field.name as keyof typeof formData] ?? ""}
                      value={field.value ? field.value :  ""}
                      onChange={(value) => field.name && handleFieldChange(field.name, value)}
                    />
                    </>
                   
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

export default CreateProfile;
