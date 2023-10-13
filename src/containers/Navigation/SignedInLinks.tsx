import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from "../../store/modules/auth/actions/authAction";
import { AnyAction } from "redux";
import Default from "../../assets/default.png";
import NavItem from "./NavItem";
import ProfileDropdown from "./ProfileDropdown";
import NotificationButton from "./NotificationButton";

const SignedInLinks: React.FC = () => {
  const currentState = useSelector((state: AnyAction) => state);

  const { isAuthenticated, currentUser } = currentState.Auth;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch<any>(SignOut());
  };

  let imagePreview = null;
  if (currentUser && currentUser.avatar_path) {
    imagePreview = currentUser.avatar_path;
  } else {
    imagePreview = Default;
  }

  const handleClick = (e: React.MouseEvent, destination: string) => {
    e.preventDefault();
    // Add logic for handling the click event
    navigate(destination);
  };

  const logout = (e: AnyAction) => {
    e.preventDefault();
    logoutUser();
    navigate("/login");
  };
  const userProfile = isAuthenticated
    ? `/profile/${currentState.Auth.currentUser.id}`
    : "";

  const profileDropDownItems = [
    {
      label: "Profile",
      href: userProfile,
      onClick: (e: React.MouseEvent) => handleClick(e, userProfile),
    },
    { label: "Settings" },
    { label: "Logout", onClick: logout },
  ];

  const [notificationCount, setNotificationCount] = useState<number>(5);

  const handleNotificationClick = () => {
    // Add your logic here, for example, opening a notification panel or resetting the count.
    // For now, let's just reset the count to 0.
    setNotificationCount(0);
  };

  return (
    <div className="flex-none gap-2">
      <div className="navbarItem">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <NavItem
              href="/createpost"
              onClick={(e) => handleClick(e, "/createpost")}
              text="Create Post"
            />
            <NavItem
              href="/authposts"
              onClick={(e) => handleClick(e, "/authposts")}
              text="My Post"
            />
          </div>
        </div>
      </div>
      <NotificationButton
        onClick={handleNotificationClick}
        badgeCount={notificationCount}
      />

      <ProfileDropdown
        avatarSrc={imagePreview}
        userProfileHref={userProfile}
        items={profileDropDownItems}
      />
    </div>
  );
};

export default SignedInLinks;
