import styles from './BurgerButton.module.scss';

interface BurgerButtonProps {
  callback: () => void;
}

const BurgerButton = ({ callback }: BurgerButtonProps) => {
  return (
    <div className={styles.burgerButton__wrapper} onClick={callback}>
      <p className={`${styles.burgerButton__line} ${styles.up}`}></p>
      <p className={`${styles.burgerButton__line} ${styles.down}`}></p>
    </div>
  );
};

export default BurgerButton;
