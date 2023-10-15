interface Field {
  type: string;
  id: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
}

interface Section {
  title: string;
  description: string;
  className: string;
  fields: Field[];
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
          id: "username-input",
          autoComplete: "off",
          placeholder: "Enter username",
          label: "Username",
        },
        {
          type: "text",
          id: "title",
          autoComplete: "off",
          placeholder: "Write a few words about yourself.",
          label: "Short Title",
        },
        {
          type: "text",
          id: "about",
          autoComplete: "off",
          placeholder: "Write a few sentences about yourself.",
          label: "About",
          multiline: true,
        },
        {
          type: "photo",
          id: "photo",
          label: "Photo",
        },
        {
          type: "cover-photo",
          id: "cover-photo",
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
          autoComplete: "off",
          placeholder: "Enter Your First Name",
          label: "First name",
        },
        {
          type: "profile",
          id: "last-name",
          autoComplete: "off",
          placeholder: "Enter Your Last Name",
          label: "Last name",
        },
        {
          type: "profile",
          id: "email",
          autoComplete: "off",
          placeholder: "Enter Your Email",
          label: "Email",
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
          autoComplete: "off",
          placeholder: "Enter your Website Link",
          label: "Website",
        },
        {
          type: "social",
          id: "github",
          autoComplete: "off",
          placeholder: "Enter your Github Link",
          label: "Github",
        },
        {
          type: "social",
          id: "linkedin",
          autoComplete: "off",
          placeholder: "Enter your Linkedin Link",
          label: "Linkedin",
        },
        {
          type: "social",
          id: "twitter",
          autoComplete: "off",
          placeholder: "Enter your Twitter Link",
          label: "Twitter",
        },
      ],
    },
  ];

  return sections;
}
export default generateSections

