import Logo from '../Logo/Logo';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Logo colored={false} />
      </div>
    </footer>
  );
};

export default Footer;
