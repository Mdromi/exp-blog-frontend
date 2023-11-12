import GetStoredUserData from "../../utils/helperFunction/GetStoredUserData";

interface Field {
  type: string;
  id: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  value?: string;
  isDisabled?: boolean;
  required?: boolean,
  errorKeys?: Array<string>,
}

interface Section {
  title: string;
  description: string;
  className: string;
  fields: Field[];
}

const storedUserData = GetStoredUserData();

const generateSections = (): Section[] => {
  const sections: Section[] = [
    {
      title: "Profile",
      description:
        "This information will be displayed publicly so be careful what you share.",
      className: "grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",
      fields: [
        {
          type: "username",
          name: "username",
          id: "username-input",
          autoComplete: "off",
          placeholder: "Enter username",
          label: "Username",
          value: storedUserData.username,
          isDisabled: true,
          required: true,
          errorKeys: ["user_id"],
        },
        {
          type: "text",
          id: "title",
          name: "title",
          autoComplete: "off",
          placeholder: "Write a few words about yourself.",
          label: "Short Title",
          required: true,
          errorKeys: ["Required_title", "Title_length"],
        },
        {
          type: "text",
          id: "bio",
          name: "bio",
          autoComplete: "off",
          placeholder: "Write a few sentences about yourself.",
          label: "Bio",
          multiline: true,
          required: true,
          errorKeys: ["Required_bio", "Bio_length"],
        },
        {
          type: "profilePic",
          id: "profilePic",
          name: "profilePic",
          label: "Profile Pic",
        },
        {
          type: "coverPic",
          id: "coverPic",
          name: "coverPic",
          label: "Cover Pic",
        },
      ],
    },
    {
      title: "Personal Information",
      description: "Use a permanent address where you can receive mail.",
      className: "grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",
      fields: [
        {
          type: "profile",
          id: "fullName",
          name: "fullName",
          autoComplete: "off",
          placeholder: "Enter Your Full Name",
          label: "Full name",
          required: true,
          errorKeys: ["Required_name", "Name_length"],
        },
        {
          type: "profile",
          id: "email",
          name: "email",
          autoComplete: "off",
          placeholder: "Enter Your Email",
          label: "Email",
          value: storedUserData.email,
          isDisabled: true,
          required: true,
          errorKeys: ["Required_email", "Invalid_email"],
        },
      ],
    },
    {
      title: "Your Social Links",
      description:
        "We'll always let you know about important changes, but you pick what else you want to hear about.",
      className: "grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-2",
      fields: [
        {
          type: "social",
          id: "website",
          name: "website",
          autoComplete: "off",
          placeholder: "Enter your Website Link",
          label: "Website",
        },
        {
          type: "social",
          id: "github",
          name: "github",
          autoComplete: "off",
          placeholder: "Enter your Github Link",
          label: "Github",
        },
        {
          type: "social",
          id: "linkedin",
          name: "linkedin",
          autoComplete: "off",
          placeholder: "Enter your Linkedin Link",
          label: "Linkedin",
        },
        {
          type: "social",
          id: "twitter",
          name: "twitter",
          autoComplete: "off",
          placeholder: "Enter your Twitter Link",
          label: "Twitter",
        },
      ],
    },
  ];

  return sections;
};

export default generateSections;
