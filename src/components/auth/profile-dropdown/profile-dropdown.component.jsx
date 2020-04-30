import React from "react";
import { useHistory } from "react-router-dom";

const ProfileDropdown = ({ signOutStart, toggleDropdown }) => {
  const history = useHistory();
  return (
    <div className={`${toggleDropdown ? "profile-dropdown" : "hide-display"}`}>
      <span className="name">John</span>
      <span onClick={() => history.push("/watchlist")}>Your watchlist</span>
      <span onClick={() => signOutStart()}>Sign out</span>
    </div>
  );
};

export default ProfileDropdown;
