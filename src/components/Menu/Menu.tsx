import styles from './Menu.module.scss';

interface MenuProps {
  items: string[];
  upperCase: boolean;
}

const Menu = ({ items, upperCase }: MenuProps) => {
  return (
    <ul
      className={styles.menu__list}
      style={upperCase ? { textTransform: 'uppercase' } : {}}
    >
      {items.map((el) => (
        <li
          key={el}
          className={
            upperCase ? `${styles.item_uppercase}` : `${styles.item_regular}`
          }
        >
          <a href="#">{el}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
