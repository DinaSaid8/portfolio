import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
} from 'react-icons/fa';
import { MdOutlineAlternateEmail, MdPhoneIphone } from 'react-icons/md';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by <em>Dina Said</em></h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} <em>DS.dev</em></h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/DinaSaid8"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li>
              <a
                href="https://www.linkedin.com/in/dina-said-93271918b/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
              {/* email */}
          <li className={s.socialLink}>
            <a
              href="mailto:dinasaidelashqar@gmail.com"
              target="_blank"
              rel="noreferrer"
              
            >
          <MdOutlineAlternateEmail/>
            </a>
          </li>
          {/* phone */}
          <li className={s.socialLink}>
            <a
              href="tel:01025298063"
              target="_blank"
              rel="noreferrer"
            
            >
          <MdPhoneIphone/>
            </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
