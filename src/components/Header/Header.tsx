import { BANNERS_DATA, HEADER_MENU_LIST } from '../../shared/constants';
import Banner from '../Banner/Banner';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Banner {...BANNERS_DATA.header} />
        <div className={styles.menu__wrapper}>
          <Logo colored={true} />
          <Menu items={HEADER_MENU_LIST} upperCase={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;
