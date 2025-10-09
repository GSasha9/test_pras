import { CITATION_DATA } from '../../shared/constants';
import { NEWS_DATA } from '../../shared/constants/news-data';
import Citation from '../Citation/Citation';
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
          <section className={styles.citations}>
            {Object.keys(CITATION_DATA).map((el) => (
              <Citation {...CITATION_DATA[el]} key={crypto.randomUUID()} />
            ))}
          </section>
        </section>
      </div>
    </main>
  );
};

export default Main;
