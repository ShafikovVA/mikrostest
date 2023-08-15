import { ReviewCardProps } from '@/entities/review-card';
import uvz from '@/public/static/uvz-icon.png';
import mechel from '@/public/static/mechel-icon.png';
import aptec from '@/public/static/aptek-icon.png';

export const reviews: ReviewCardProps[] = [
  {
    company: 'АО “НПО "ЭЛЕКТРОМАШИНА"',
    icon: uvz,
    review: 'Данным письмом подтверждаем высокую надежность и квалификацию, а так же эффективность компании ООО «Микрос» как поставщика металлорежущего инструмента и оборудования. За всё время сотрудничества ни разу не возникало вопросов ни по качеству поставляемого оборудования, ни по срокам доставки инструмента. Все вопросы решались быстро и в рабочем порядке. Отдельно отмечаем оперативность решений новых задач поступивших от производства АО "НПО "ЭЛЕКТРОМАШИНА". Рекомендуем компанию ООО «Микрос» как надежного поставщика металлорежущего инструмента и оборудования. ',
  },
  {
    company: 'ПАО "Мечел"',
    icon: mechel,
    review: 'Благодарим компанию ООО «Микрос» за своевременную доставку металлорежущего инструмента. Ваши сотрудники показали себя высокими профессионалами. Вся продукция была доставлена своевременно, надлежаще запакована и имела необходимые документы. Также отмечаем качество Вашего товара и приемлемые цены. Мы планируем сотрудничать с Вами на постоянной основе.',
  },
  {
    company: 'ООО "Артэк"',
    icon: aptec,
    review: 'ООО "Микрос" является нашим партнёром в области металлообработки и поставки металлорежущего инструмента. За это время данная компания показала свою способность с полной ответственностью подходить к поставленным задачам, выполнять работы качественно и в срок. Отличительной чертой работы компании является оперативная обратная связь, сокращение сроков поставки и индивидуальный подход к каждой задачи. Рекомендуем ООО "Микрос", как надёжного и стабильного делового партнёра.',
  },
];
