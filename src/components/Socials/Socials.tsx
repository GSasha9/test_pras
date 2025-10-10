import styles from './Socials.module.scss';

interface SocialsProps {
  items: string[];
}

const Socials = ({ items }: SocialsProps) => {
  return (
    <ul className={styles.socials__list}>
      {items.map((el) => (
        <li className={styles.socials__list_item} key={el.split('.')[0]}>
          <a
            href="#"
            className={styles.socials__list_link}
            style={{ backgroundImage: `url(${el})` }}
          ></a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
