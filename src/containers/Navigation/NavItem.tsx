import React from 'react';

type NavItemProps = {
  href: string;
  onClick: (e: React.MouseEvent, href: string) => void;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, onClick, text }) => (
  <a
    href={href}
    onClick={(e) => onClick(e, href)}
    className="info-content hover:bg-info-content hover:text-white rounded-md px-3 py-2 text-sm font-medium"
  >
    {text}
  </a>
);

export default NavItem;
