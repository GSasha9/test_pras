import SubscribeForm from '../SubscribeForm/SubscribeForm';

import styles from './SubscribeBlock.module.scss';

const SubscribeBlock = () => {
  return (
    <div className={styles.subscribe__wrapper}>
      <h4>Подписки</h4>
      <div>
        <SubscribeForm buttonTextColor="white" />
      </div>
    </div>
  );
};

export default SubscribeBlock;
