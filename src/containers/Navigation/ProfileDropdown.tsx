import React from "react";

type DropdownItem = {
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
};

type DropdownProps = {
  avatarSrc: string;
  userProfileHref: string;
  items: DropdownItem[];
};

const ProfileDropdown: React.FC<DropdownProps> = ({
  avatarSrc,
  items,
}) => (
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={avatarSrc} alt="avatar" />
      </div>
    </label>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      {items.map((item, index) => (
        <li key={index}>
          {item.href ? (
            <a
              href={item.href}
              className="justify-between"
              onClick={item.onClick}
            >
              {item.label}
              {item.label === "Profile" && <span className="badge">New</span>}
            </a>
          ) : (
            <span className="justify-between" onClick={item.onClick}>
              {item.label}
              {item.label === "Profile" && <span className="badge">New</span>}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ProfileDropdown;
