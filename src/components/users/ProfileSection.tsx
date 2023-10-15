import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}

const ProfileSection: React.FC<SectionProps> = ({ title, description, children, className }) => {
    const inputClasses = `mt-8 grid ${className || ''}`;
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>

      <div className={inputClasses}>
        {children}
      </div>
    </div>
  );
};

export default ProfileSection;
