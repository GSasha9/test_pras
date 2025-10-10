import { CITATION_DATA } from '../../shared/constants';
import { BANNERS_DATA } from '../../shared/constants';
import { NEWS_DATA } from '../../shared/constants/news-data';
import Banner from '../Banner/Banner';
import Citation from '../Citation/Citation';
import NewsBlock from '../NewsBlock/NewsBlock';
import SocialsBlock from '../SocialsBlock/SocialsBlock';
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
        </section>
      </div>
      <section className={styles.banner}>
        <Banner {...BANNERS_DATA.main} />
      </section>
      <div className="container">
        <section className={styles.contacts}>
          <SocialsBlock />
          <SubscribeForm></SubscribeForm>
        </section>
      </div>
      <section className={styles.banner}>
        <Banner {...BANNERS_DATA.footer} />
      </section>
    </main>
  );
};

export default Main;
