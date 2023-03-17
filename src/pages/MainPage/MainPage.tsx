import React from 'react';
import Hotels from '../../modules/Hotels';
import HowItWorks from '../../modules/HowItWorks';
import Featured from '../../modules/Featured';
import Promotions from '../../modules/Promotions';

const MainPage = () => {
  return (
    <>
      <Hotels />
      <HowItWorks />
      <Featured />
      <Promotions />
    </>
  );
};

export default MainPage;
