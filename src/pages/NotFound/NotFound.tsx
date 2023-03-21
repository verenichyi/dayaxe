import React from 'react';
import { Navigate } from 'react-router-dom';
import { Routes } from "../../enums/routes";

const NotFound = () => {
  return <Navigate to={Routes.Home} />;
};

export default NotFound;
