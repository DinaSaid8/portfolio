import s from './MainNavigation.module.scss';
import { useState } from 'react';
import Media from 'react-media';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Burger from '../Burger/Burger';

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>

      <nav className={s.desktop}>
        <NavLinks />
      </nav>

      <Media query={{ maxWidth: 768 }}>
        {() => (
          <>
            <Burger onClick={toggleDrawer} />
          </>
        )}
      </Media>

      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={s.navigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
    </>
  );
};

export default MainNavigation;
