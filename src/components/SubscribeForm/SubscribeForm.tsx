import styles from './SubscribeForm.module.scss';

const SubscribeForm = () => {
  return (
    <div className={styles.subscribe__wrapper}>
      <h4>Подписки</h4>
      <form
        action="/subscribe"
        method="POST"
        className={styles.subscribe__form}
      >
        <input
          className={styles.form_input}
          type="email"
          placeholder="Введите ваш email"
        ></input>
        <button className={styles.form_button}>Подписаться</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
