// components/UserProfile.js
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile__menu">
        <img src={user?.picture} alt={user?.name} className="profile__picture" />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    )
  );
};
