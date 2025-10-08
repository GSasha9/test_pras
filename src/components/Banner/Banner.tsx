import styles from './Banner.module.scss';

export interface BannerProps {
  primaryText: string;
  secondaryText: string;
  imgLink: string;
}

const Banner = ({ primaryText, secondaryText, imgLink }: BannerProps) => {
  return (
    <div
      className={styles.banner__wrapper}
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
        <p className={styles.banner__text_secondary}>#{secondaryText}</p>
        <h2 className={styles.banner__text_primary}>{primaryText}</h2>
      </div>
    </div>
  );
};

export default Banner;
