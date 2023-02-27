import Validator from '../app';

test.each(['1test', '_test', '-test', 'test1', 'test_', 'test-', 'te#st', 'te st', 't1234t', 't12345t',
])(
  ('The method must return false'),
  (name) => {
    expect(Validator.validateUsername(name)).toBeFalsy();
  },
);

test.each(['1test', '_test', '-test', 'test1', 'test_', 'test-',
])(
  ('The method must return message \'Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире\''),
  (name) => {
    expect(Validator.validateUsername(name, true)).toBe('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  },
);

test.each(['te#st', 'te st',
])(
  ('The method must return message \'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)\''),
  (name) => {
    expect(Validator.validateUsername(name, true)).toBe('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
  },
);

test.each(['t1234t', 't12345t',
])(
  ('The method must return message \'Имя не должно содержать подряд более трёх цифр\''),
  (name) => {
    expect(Validator.validateUsername(name, true)).toBe('Имя не должно содержать подряд более трёх цифр');
  },
);

test.each(['te1st', 'te123st', 'te12-34st', 'te12_34st',
])(
  ('The method must return true or message \'ok\''),
  (name) => {
    expect(Validator.validateUsername(name)).toBeTruthy();
    expect(Validator.validateUsername(name, true)).toBe('ok');
  },
);
