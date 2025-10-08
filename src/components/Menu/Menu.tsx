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
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};

export default Menu;
