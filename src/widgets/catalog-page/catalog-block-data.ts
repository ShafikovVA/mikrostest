export interface CatalogItemData {
  isTextPlacementLeft: boolean,
  backgroundImg: string,
  title: string,
  description: string,
  link: string,
  backgroundImgMobile: string;
}

export const catalogData: CatalogItemData[] = [
  {
    isTextPlacementLeft: true,
    backgroundImg: "url('/catalog-bg-1.png')",
    backgroundImgMobile: "url('/catalog-bg-mobile-1.png')",
    title: 'Инструменты',
    description: 'Компания, специализирующаяся на поставке металлорежущего, слесарного инструмента и станков зарубежных производителей на предприятия в России. Ее деятельность направлена на обеспечение предприятий различных отраслей качественным и надежным оборудованием, необходимым для эффективного производства.',
    link: './catalog/tools',
  },
  {
    isTextPlacementLeft: false,
    backgroundImg: "url('/catalog-bg-2.png')",
    backgroundImgMobile: "url('/catalog-bg-mobile-2.png')",
    title: 'Системы хранения',
    description: 'Компания, специализирующаяся на поставке металлорежущего, слесарного инструмента и станков зарубежных производителей на предприятия в России. Ее деятельность направлена на обеспечение предприятий различных отраслей качественным и надежным оборудованием, необходимым для эффективного производства.',
    link: './catalog/storage-systems',
  },
  {
    isTextPlacementLeft: true,
    backgroundImgMobile: "url('/catalog-bg-mobile-33.png')",
    backgroundImg: "url('/catalog-bg-33.png')",
    title: 'Станки',
    description: 'В этом разделе вы можете найти информацию о разнообразных типах станков, их характеристиках и возможностях. Мы предлагаем широкий ассортимент станков, чтобы удовлетворить потребности самых разнообразных клиентов.',
    link: './catalog/machine-tools',
  },
  {
    isTextPlacementLeft: false,
    backgroundImgMobile: "url('/catalog-bg-mobile-4.png')",
    backgroundImg: "url('/catalog-bg-4.png')",
    title: 'Манипуляторы',
    description: 'Компания, специализирующаяся на поставке металлорежущего, слесарного инструмента и станков зарубежных производителей на предприятия в России. Ее деятельность направлена на обеспечение предприятий различных отраслей качественным и надежным оборудованием, необходимым для эффективного производства.',
    link: './catalog/manipulators',
  },
];
