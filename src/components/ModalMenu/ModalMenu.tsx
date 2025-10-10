import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  CONTACTS_DATA,
  FOOTER_MENU_LIST,
  HEADER_MENU_LIST,
  SOCIALS_ICONS_CIRCLE,
  SUB_HEADER_MENU_LIST,
} from '../../shared/constants';
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Socials from '../Socials/Socials';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

import styles from './ModalMenu.module.scss';

interface ModalMenuProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ModalMenu = ({ isOpen, handleClose }: ModalMenuProps) => {
  const container = document.getElementById('root');

  useEffect(() => {
    const closeOnEscKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;

    document.body.addEventListener('keydown', closeOnEscKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscKey);
    };
  }, [handleClose]);

  if (!container) throw new Error('Error');

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.modal}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) {
          handleClose();
        }
      }}
    >
      <div className={styles.modal_content}>
        <div className={styles.modal_top}>
          <Logo colored={false} />
          <button className={styles.close} onClick={handleClose}></button>
        </div>
        <div className={styles.modal_main}>
          <div className={styles.modal_nav}>
            <Menu
              items={HEADER_MENU_LIST}
              upperCase={true}
              fontSize={'16px'}
              gap={'32px'}
              direction={'column'}
            />
            <Menu
              items={SUB_HEADER_MENU_LIST}
              upperCase={false}
              fontSize={'14px'}
              gap={'14px'}
              direction={'column'}
            />
            <Menu
              items={FOOTER_MENU_LIST}
              upperCase={true}
              fontSize={'16px'}
              gap={'32px'}
              direction={'column'}
            />
          </div>
          <div className={styles.modal_socials}>
            <Socials items={SOCIALS_ICONS_CIRCLE} />
          </div>
        </div>

        <div className={styles.modal_bottom}>
          <Contacts {...CONTACTS_DATA.advert} textColor="white" />
          <div>
            <p>Подписка</p>
            <SubscribeForm buttonColor="white" />
          </div>
        </div>
      </div>
    </div>,

    container
  );
};

export default ModalMenu;
