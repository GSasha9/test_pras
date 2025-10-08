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
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <p>#{secondaryText}</p>
      <h2>{primaryText}</h2>
    </div>
  );
};

export default Banner;
