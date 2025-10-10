import {
  CONTACTS_DATA,
  FOOTER_MENU_LIST,
  SOCIALS_ICONS_CIRCLE,
} from '../../shared/constants';
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__nav_wrapper}>
          <Logo colored={false} />
          {FOOTER_MENU_LIST.map((el) => (
            <a href="#" key={el} className={styles.footer__link}>
              {el}
            </a>
          ))}
          <Contacts {...CONTACTS_DATA.email} />
        </div>

        <Socials items={SOCIALS_ICONS_CIRCLE} />
        <div className={styles.footer__bottom}>
          <p>©2022 «Спортхаб»</p>
          <div className={styles.about}>
            <img src="./pras_logo.png" alt="Developers logo" />
            <p>Разработка сайта — компания PRAS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
