import { CITATION_DATA, SOCIALS_ICONS } from '../../shared/constants';
import { BANNERS_DATA } from '../../shared/constants';
import { NEWS_DATA } from '../../shared/constants/news-data';
import Banner from '../Banner/Banner';
import Citation from '../Citation/Citation';
import NewsBlock from '../NewsBlock/NewsBlock';
import Socials from '../Socials/Socials';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main} style={{ display: 'flex' }}>
      <div className="container">
        <h4>Последнее</h4>

        <section className={styles.main__section}>
          <section className={styles.news}>
            <div className={styles.news__row}>
              <NewsBlock {...NEWS_DATA.alpinism} />
              <NewsBlock {...NEWS_DATA.skii} />
            </div>
            <div className={styles.news__row}>
              <NewsBlock {...NEWS_DATA.football} />
              <NewsBlock {...NEWS_DATA.alpinism} />
            </div>
          </section>

          <section className={styles.citations}>
            {Object.keys(CITATION_DATA).map((el) => (
              <Citation {...CITATION_DATA[el]} key={crypto.randomUUID()} />
            ))}
          </section>
          <div className={styles.news__row}>
            <NewsBlock {...NEWS_DATA.alpinism} />
            <NewsBlock {...NEWS_DATA.football} />
          </div>
          <section className={styles.banner}>
            <Banner {...BANNERS_DATA.main} />
          </section>

          <section className={styles.contacts}>
            <Socials items={SOCIALS_ICONS} />
            <SubscribeForm></SubscribeForm>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Main;
