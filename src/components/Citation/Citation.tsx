import styles from './Citation.module.scss';

export interface CitationProps {
  image: string;
  name: string;
  role: string;
  text: string;
}

const Citation = ({ image, name, role, text }: CitationProps) => {
  return (
    <div className={styles.citation__wrapper}>
      <div className={styles.citation__img}>
        <img src={image} alt={name}></img>
      </div>

      <div className={styles.citation__spiker}>
        <p className={styles.citation__name}>{name}</p>
        <p className={styles.citation__role}>{role}</p>
      </div>

      <p className={styles.citation__text}>{text}</p>
    </div>
  );
};

export default Citation;
