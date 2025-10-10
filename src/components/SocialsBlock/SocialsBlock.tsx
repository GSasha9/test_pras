import { SOCIALS_ICONS } from '../../shared/constants';
import Socials from '../Socials/Socials';

import styles from './SocialsBlock.module.scss';

const SocialsBlock = () => {
  return (
    <div className={styles.socials__wrapper}>
      <h4>Соцсети</h4>
      <Socials items={SOCIALS_ICONS} />
    </div>
  );
};

export default SocialsBlock;
