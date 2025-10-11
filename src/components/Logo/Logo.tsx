import styles from './Logo.module.scss';

interface LogoProps {
  colored: boolean;
}

const Logo = ({ colored }: LogoProps) => {
  return (
    <a href="/" className={styles.logo__link}>
      <img
        src={colored ? './logo_color.svg' : './logo_white.svg'}
        alt="sporthub logotype"
      ></img>
    </a>
  );
};

export default Logo;
