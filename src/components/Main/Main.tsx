import { NEWS_DATA } from '../../shared/constants/news-data';
import NewsBlock from '../NewsBlock/NewsBlock';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main} style={{ display: 'flex' }}>
      <div className="container">
        <h4>Последнее</h4>
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
      </div>
    </main>
  );
};

export default Main;
