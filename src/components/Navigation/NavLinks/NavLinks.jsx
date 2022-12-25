import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    
    <ul className={s.navBar}>
       <li>
         <NavLink to={routes.HOME} activeClassName={s.active} exact>
       <AiOutlineHome />
          
       </NavLink>
       </li>

      <li>
        <NavLink to={routes.ABOUT} activeClassName={s.active}>
          <AiOutlineUser />

          
       </NavLink>
      </li>

     <li>
       <NavLink to={routes.PROJECTS} activeClassName={s.active}>
         <AiOutlineFundProjectionScreen />
          
       </NavLink>
     </li>

     <li>
       <NavLink to={routes.RESUME} activeClassName={s.active}>
         <CgFileDocument />
          
       </NavLink>
      </li>
     </ul>
  );
};

export default NavLinks;
