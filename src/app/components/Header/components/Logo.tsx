import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FirstRectangule, LogoSmartBusiness, SecondRectangule, WrapperRectangules } from './Logo.style';
import TextSmartBusiness from '../../../../assets/logo/text-smart-business.svg';
import LogoSmartBusinessMobile from '../../../../assets/logo/smart-mobile.svg';

export function Logo() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 610;

  return (
    <Link href='/'>
      {isMobile ? (
        <Image src={LogoSmartBusinessMobile} alt='Smart Business Mobile' />
      ) : (
        <LogoSmartBusiness>
          <WrapperRectangules>
            <FirstRectangule></FirstRectangule>
            <SecondRectangule></SecondRectangule>
          </WrapperRectangules>
          <Image src={TextSmartBusiness} alt='Text Smart Business' />
        </LogoSmartBusiness>
      )}
    </Link>
  );
}
