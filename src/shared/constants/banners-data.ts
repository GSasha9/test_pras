import type { BannerProps } from '../../components/Banner/Banner';

export const BANNERS_DATA: Record<string, BannerProps> = {
  header: {
    primaryText: `Юрий Поклад: «Динамо» как бы начинает работать заново`,
    tag: '#Экстрим',
    imgLink: 'tennis.png',
    inHeader: true,
  },
  main: {
    primaryText: `Юрий Поклад: «Динамо» как бы начинает работать заново`,
    tag: '#болельщикам',
    imgLink: 'bike.png',
    inHeader: false,
  },
  footer: {
    primaryText: `Экстрим`,
    secondaryText:
      'Интервью с Юрием Покладом. Полный список всех медалей Беларуси на Европейских играх.',
    imgLink: 'bike2.png',
    inHeader: false,
  },
};
