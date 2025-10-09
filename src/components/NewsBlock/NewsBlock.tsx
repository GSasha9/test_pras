import style from './NewsBlock.module.scss';

export interface NewsBlockProps {
  image: string;
  date: string;
  tag: string;
  title: string;
  preview: string;
  isWide: boolean;
}

const NewsBlock = ({
  image,
  date,
  tag,
  title,
  preview,
  isWide,
}: NewsBlockProps) => {
  return (
    <a href="#" className={style.newsBlock__link}>
      <div
        className={`${style.newsBlock__wrapper} ${isWide ? style.covered : ''}`}
        style={
          isWide
            ? {
                backgroundImage: ` linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.6) 100%
          ), url(${image})`,
              }
            : {}
        }
      >
        {!isWide && (
          <img className={style.newsBlock__img} src={image} alt={title} />
        )}
        <div className={style.newsBlock__meta}>
          <p className={style.newsBlock__meta_date}>{date}</p>
          <p className={style.newsBlock__meta_tag}>#{tag}</p>
        </div>
        <h3 className={style.newsBlock__title}>{title}</h3>
        <p className={style.newsBlock__preview}>{preview}</p>
      </div>
    </a>
  );
};

export default NewsBlock;
