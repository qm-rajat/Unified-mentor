import React, { useEffect, useState } from "react";
import { isLoggedUser } from "../../service/storeUserInfo";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const loggedUser = isLoggedUser();

  useEffect(() => {
    if (!loggedUser) {
      navigate("/login");
    }

    setLoading(false);
  }, [loggedUser, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default PrivateRoute;
