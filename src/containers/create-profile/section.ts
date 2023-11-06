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
}

interface Section {
  title: string;
  description: string;
  className: string;
  fields: Field[];
}

// Retrieve user_data from localStorage
const storedUserDataString = localStorage?.getItem('user_data');

let storedUserData: any;
try {
  storedUserData = storedUserDataString ? JSON.parse(storedUserDataString) : null;
} catch (error) {
  console.error("Error parsing storedUserData:", error);
  storedUserData = null;
}


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
        },
        {
          type: "text",
          id: "title",
          name: "title",
          autoComplete: "off",
          placeholder: "Write a few words about yourself.",
          label: "Short Title",
        },
        {
          type: "text",
          id: "about",
          name: "about",
          autoComplete: "off",
          placeholder: "Write a few sentences about yourself.",
          label: "About",
          multiline: true,
        },
        {
          type: "photo",
          id: "photo",
          name: "photo",
          label: "Photo",
        },
        {
          type: "cover-photo",
          id: "cover-photo",
          name: "cover-photo",
          label: "Cover photo",
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
          id: "first-name",
          name: "first-name",
          autoComplete: "off",
          placeholder: "Enter Your First Name",
          label: "First name",
        },
        {
          type: "profile",
          id: "last-name",
          name: "last-name",
          autoComplete: "off",
          placeholder: "Enter Your Last Name",
          label: "Last name",
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
