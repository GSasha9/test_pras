import styles from './Contacts.module.scss';

export interface ContatctsProps {
  title: string;
  contact: string;
  textColor?: string;
}

const Contacts = ({ title, contact, textColor }: ContatctsProps) => {
  return (
    <div className={styles.contacts__wrapper} style={{ color: textColor }}>
      <p className={styles.contacts__title}>{title}</p>
      <p className={styles.contacts__contact}>{contact}</p>
    </div>
  );
};

export default Contacts;
