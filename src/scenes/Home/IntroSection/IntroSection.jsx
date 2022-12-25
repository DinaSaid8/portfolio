import s from './IntroSection.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
  
} from 'react-icons/fa';
import {
  MdOutlineAlternateEmail
  , MdPhoneIphone
} from 'react-icons/md';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h2 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h2>

          <div className={s.description}>
            <p>
              I fell in love with programming and I have at least
              learnt something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}>
                  {' '}
                  Web Technologies and Products
                </b>
              </i>
            </p>

            <p>
              A passionate Frontend Developer 🚀 <br />I
              have an experience of building{' '}
              <i>
                <b className={s.purple}>Web</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript | ReactJs
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

      </div>

      <div className={s.introSocial}>
        <h3>Let's work together...
</h3>
        
        <p>
        How do you take <span className={s.purple}>your coffee </span>
        ?
        </p>
        <ul className={s.socialLinks}>
          {/* github */}
          <li className={s.socialLink}>
            <a
              href="https://github.com/DinaSaid8"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          {/* linkedin */}
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/dina-said-93271918b/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
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
              className={s.socialIcon}
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
              className={s.socialIcon}
            >
          <MdPhoneIphone/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
