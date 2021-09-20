export enum Patters {
    LetterAndNumber = '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$',
    OnlyNumber = '^[0-9]*$',
    OnlyLetter = '[a-zA-Z][a-zA-Z ]*$',
    cuit='^([0-9]{2})+([-][0-9]{8})+([-][0-9]{1})*$',
    numberAndComas='^[0-9]+([,][0-9]+)*$',
    tel='[0-9]',
  
  }
  