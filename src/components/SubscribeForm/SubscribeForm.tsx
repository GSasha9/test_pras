import styles from './SubscribeForm.module.scss';

interface SubscribeFormProps {
  buttonColor?: string;
  buttonTextColor?: string;
}

const SubscribeForm = ({
  buttonColor,
  buttonTextColor,
}: SubscribeFormProps) => {
  const style: React.CSSProperties = {
    ...(buttonColor ? { backgroundColor: buttonColor } : {}),
    ...(buttonTextColor ? { color: buttonTextColor } : {}),
  };

  return (
    <form action="/subscribe" method="POST" className={styles.subscribe__form}>
      <input
        className={styles.form_input}
        type="email"
        placeholder="Введите ваш email"
      ></input>
      <button className={styles.form_button} style={style}>
        Подписаться
      </button>
    </form>
  );
};

export default SubscribeForm;
