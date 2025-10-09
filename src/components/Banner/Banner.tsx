import styles from './Banner.module.scss';

export interface BannerProps {
  primaryText: string;
  secondaryText: string;
  imgLink: string;
  inHeader?: boolean;
}

const Banner = ({
  primaryText,
  secondaryText,
  imgLink,
  inHeader,
}: BannerProps) => {
  return (
    <div
      className={`${styles.banner__wrapper} ${inHeader ? styles.big : styles.small}`}
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.3) 40%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(0, 0, 0, 0.6) 100%
          ),
          url(${imgLink})
        `,
      }}
    >
      <div className={styles.banner__text}>
        <a href="#">
          <p className={styles.banner__text_secondary}>#{secondaryText}</p>
          <h2 className={styles.banner__text_primary}>{primaryText}</h2>
        </a>
      </div>
    </div>
  );
};

export default Banner;
