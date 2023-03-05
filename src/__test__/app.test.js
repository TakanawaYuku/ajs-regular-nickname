import Validator from '../app';

test.each([
  ['Yuku', true],
  ['Takanawa', true],
  ['Bukuska92nick', true],
  ['Dreiko-yuku', true],
])('nickname valid', (name, expected) => {
  const nickname = new Validator(name);
  expect(nickname.validateUsername()).toBe(expected);
});
test.each([
  ['4yukutakanawa', false],
  ['Bukuska1992', false],
  ['2306Nick', false],
  ['Yuku19922306Takanawa', false],
  ['yuku*bukuska', false],
])('nickname invalid', (name, expected) => {
  const nickname = new Validator(name);
  expect(nickname.validateUsername()).toBe(expected);
});
