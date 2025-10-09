import type { BannerProps } from '../../components/Banner/Banner';

export const BANNERS_DATA: Record<string, BannerProps> = {
  header: {
    primaryText: `Юрий Поклад: «Динамо» как бы начинает работать заново`,
    secondaryText: 'Экстрим',
    imgLink: 'tennis.png',
    inHeader: true,
  },
  main: {
    primaryText: `Юрий Поклад: «Динамо» как бы начинает работать заново`,
    secondaryText: 'болельщикам',
    imgLink: 'bike.png',
    inHeader: false,
  },
};
