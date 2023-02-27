export default class Validator {
  static validateUsername(nameParam, message = false) {
    let name = nameParam;
    if (/^[\d|_|-]/.test(name) || /[\d|_|-]$/.test(name)) return message ? 'Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире' : false;

    name = name.replace(/-/g, 'q');

    if (/\W/.test(name)) return message ? 'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)' : false;

    if (/\d{4}/.test(name)) return message ? 'Имя не должно содержать подряд более трёх цифр' : false;

    return message ? 'ok' : true;
  }
}

// Для проверки
const names = ['Yuku', 'Takanawa', 'Bukuska', 'bukuska1992', '_Nick', 'Nick2306w'];

// eslint-disable-next-line no-console
names.forEach((name) => console.log(name, Validator.validateUsername(name, true)));
