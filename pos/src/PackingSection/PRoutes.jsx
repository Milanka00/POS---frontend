import React from 'react';
import { useLocation } from 'react-router-dom';
import PNavBar from './PackingSideNavigation';


const PRoutes = () => {
  const location = useLocation();
  const includePaths = ['/packingSection', '/addPackages', '/issuePackages'];
  
  // Get the user role from local storage
  const userRole = localStorage.getItem('userRole');
  
  // Check if the user has the required role
  const hasAccess = userRole === 'PackingSection';
  
  
  
  return (
    <React.Fragment>
      {includePaths.includes(location.pathname) && <PNavBar />}
      {/* Render your routes here */}
    </React.Fragment>
  );
};

export default PRoutes;
