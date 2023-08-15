import { StaticImageData } from 'next/image';
import secondSlide from '@/public/static/second-slide.png';
import thirdSlide from '@/public/static/third-slide.png';
import firstMobile from '@/public/static/mobile-slide-1.png';
import secondMobile from '@/public/static/mobile-slide-2.png';
import thirdMobile from '@/public/static/mobile-slide-3.png';
import sl from '@/public/static/22.png';

interface ImageWithIndex {
  path: StaticImageData;
  index: number;
  buttonText: string;
  description: string;
  href: string;
  title?: string;
  mobilePath: StaticImageData;
  mobileTitle: string;
}

export const slidesInfo: ImageWithIndex[] = [
  {
    path: sl,
    index: 0,
    buttonText: 'Подробнее о компании',
    description: 'Компания, специализирующаяся на поставке металлорежущего, слесарного инструмента и станков зарубежных производителей на предприятия в России. Ее деятельность направлена на обеспечение предприятий различных отраслей качественным и надежным оборудованием, необходимым для эффективного производства.',
    href: '/about',
    mobilePath: firstMobile,
    mobileTitle: 'Микрос',
    title: 'Микрос',
  },
  {
    path: secondSlide,
    index: 2,
    buttonText: 'Перейти в каталог',
    description: 'Мы предлагаем широкий ассортимент металлорежущего, слесарного инструмента, станков, манипуляторов и систем хранения, представленных зарубежными и российскими производителями. Здесь вы найдете высококачественные и надежные инструменты, которые позволят вам эффективно работать.',
    href: '/catalog',
    title: 'Актуальный каталог',
    mobilePath: secondMobile,
    mobileTitle: 'Актуальный каталог',
  },
  {
    path: thirdSlide,
    index: 1,
    buttonText: 'Получить контакты',
    description: 'Хотите задать вопросы или получить консультацию у наших специалистов? Тогда просто нажмите на кнопку "Получить контакты" и найдите все необходимые данные для связи с нашей командой. Мы всегда рады помочь вам и ответить на все ваши вопросы.',
    href: '/contacts',
    title: 'Наши контакты',
    mobilePath: thirdMobile,
    mobileTitle: 'Наши контакты',
  },
];
