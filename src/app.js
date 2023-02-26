export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    const expectRightUserName = /^[-_\w\d]+$/; // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)
    const expextRightStartSymbols = /^[^-_\d]/; // Имя не должно начинаться цифрами, символами подчёркивания или тире
    const expectRightEndSymbols = /.+[^-_\d]$/; // Имя не должно заканчиваться цифрами, символами подчёркивания или тире
    const exeptThreeNumbersInRow = /\d{4,}/; // Имя не должно содержать подряд более трёх цифр

    if (!expectRightUserName.test(this.name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    } else if (!expextRightStartSymbols.test(this.name)) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    } else if (!expectRightEndSymbols.test(this.name)) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    } else if (!exeptThreeNumbersInRow.test(this.name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
  }
}
