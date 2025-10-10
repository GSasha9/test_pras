import styles from './Contacts.module.scss';

export interface ContatctsProps {
  title: string;
  contact: string;
}

const Contacts = ({ title, contact }: ContatctsProps) => {
  return (
    <div className={styles.contacts__wrapper}>
      <p className={styles.contacts__title}>{title}</p>
      <p className={styles.contacts__contact}>{contact}</p>
    </div>
  );
};

export default Contacts;
