import styles from './BurgerButton.module.scss';

const BurgerButton = () => {
  return (
    <div className={styles.burgerButton__wrapper}>
      <p className={`${styles.burgerButton__line} ${styles.up}`}></p>
      <p className={`${styles.burgerButton__line} ${styles.down}`}></p>
    </div>
  );
};

export default BurgerButton;
