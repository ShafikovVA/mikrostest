interface Description {
  link: string;
  title: string;
}

export interface AccordionElement {
  title: string;
  description: Description[];
  link: string;
}

export const links: AccordionElement[] = [
  {
    title: 'Инструментальные решение',
    link: 'tools',
    description: [
      {
        title: 'Металлорежущий инструмент (токарный, фрезерный, резьбовой, монолитный)',
        link: '/catalog/tools/cutting-tools',
      },
      {
        title: 'Специальный и сложнорежущий инструмент',
        link: '/catalog/tools/special',
      },
      {
        title: 'Слесарный инструмент',
        link: '/catalog/tools/locksmith',
      },
      {
        title: 'Оснастка для металлообрабатывающих станков',
        link: '/catalog/tools/equipment',
      },
    ],
  },
  {
    title: 'Системы хранения',
    link: 'storage-systems',
    description: [
      {
        title: 'Автоматизированные системы хранения',
        link: '/catalog/storage-systems/automatic',
      },
      {
        title: 'Классические системы хранения',
        link: '/catalog/storage-systems/classic',
      },
    ],
  },
  {
    title: 'Станки',
    link: 'machine-tools',
    description: [
      {
        title: 'Токарные, Фрезерные',
        link: '/catalog/machine-tools/milling',
      },
      {
        title: 'Обрабатывающие центры',
        link: '/catalog/machine-tools/processing-centers',
      },
      {
        title: 'Суперфинишные станки для колец подшипников',
        link: '/catalog/machine-tools/bearings',
      },
    ],
  },
  {
    title: 'Манипуляторы',
    link: 'manipulators',
    description: [
      {
        title: 'Роботы-манипуляторы',
        link: '/catalog/manipulators/robot-manipulators',
      },
      {
        title: 'Безрельсовые манипуляторы',
        link: '/catalog/manipulators/trackless',
      },
    ],
  },
];
