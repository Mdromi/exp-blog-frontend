import React from 'react';

interface LogoLinkProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const LogoLink: React.FC<LogoLinkProps> = ({ onClick }) => (
  <a href="/" onClick={onClick} className="btn btn-ghost normal-case text-xl">
    Medium
  </a>
);

export default LogoLink;
