import { useState } from 'react';

import {
  BANNERS_DATA,
  HEADER_MENU_LIST,
  SUB_HEADER_MENU_LIST,
} from '../../shared/constants';
import Banner from '../Banner/Banner';
import BurgerButton from '../BurgerIcon/BurgerButton';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import ModalMenu from '../ModalMenu/ModalMenu';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <Banner {...BANNERS_DATA.header} />
        <div className={styles.menu__wrapper}>
          <Logo colored={true} />
          <nav className={styles.menu__nav}>
            <div>
              <Menu items={HEADER_MENU_LIST} upperCase={true} />
            </div>

            <BurgerButton callback={handleOpen} />
          </nav>
        </div>
        <nav className={styles.subMenu__wrapper}>
          <Menu items={SUB_HEADER_MENU_LIST} upperCase={false} />
        </nav>
      </div>
      <ModalMenu isOpen={isOpen} handleClose={handleClose} />
    </header>
  );
};

export default Header;
