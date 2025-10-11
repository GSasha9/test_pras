import styles from './Menu.module.scss';

interface MenuProps {
  items: string[];
  upperCase: boolean;
  fontSize?: string;
  gap?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const Menu = ({ items, upperCase, fontSize, gap, direction }: MenuProps) => {
  const style: React.CSSProperties = {
    ...(upperCase ? { textTransform: 'uppercase' } : {}),
    ...(fontSize ? { fontSize: fontSize } : {}),
    ...(gap ? { gap } : {}),
    ...(direction ? { flexDirection: direction } : {}),
  };

  return (
    <ul className={styles.menu__list} style={style}>
      {items.map((el) => (
        <li
          key={`${el}${crypto.randomUUID()}`}
          className={upperCase ? styles.item_uppercase : styles.item_regular}
        >
          <a href="#">{el}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
