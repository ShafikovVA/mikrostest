export interface BankDetail {
  key: string | null;
  value: string;
}

type DetailType = 'inn' | 'kpp' | 'orgn' | 'ur' | 'bank' | 'bik' | 'p/c' | 'k/c';

export const details: Record<DetailType, BankDetail> = {
  inn: {
    key: 'ИНН',
    value: '7448249956',
  },
  kpp: {
    key: 'КПП',
    value: '745301001',
  },
  orgn: {
    key: 'ОГРН',
    value: '1237400007448',
  },
  ur: {
    key: null,
    value: 'Юридический/Почтовый адрес: 454090, г. Челябинск, ул. Труда, д. 64А , офис 602',
  },
  bank: {
    key: 'Банк',
    value: 'ПАО Сбербанк (ЧЕЛЯБИНСКОЕ ОТДЕЛЕНИЕ N8597 ПАО СБЕРБАНК)',
  },
  bik: {
    key: 'БИК',
    value: '047501602',
  },
  'p/c': {
    key: 'Р/с',
    value: '40702810072000001862',
  },
  'k/c': {
    key: 'К/c',
    value: '30101810700000000602',
  },
};
