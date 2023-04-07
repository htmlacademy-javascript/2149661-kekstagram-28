//Функция для проверки длины строки
const srtLengthCheck = (string, lengthCount) => string.length >= lengthCount;

//Функция для проверки, является ли строка палиндромом.
function isPalindrom() {
  let stringToRight = isPalindrom.slice();
  let stringToLeft = isPalindrom.slice(isPalindrom.length,-1);
  if (stringToRight === stringToLeft) {
    return true;
  }
  return false;
}

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function returnNumber(string){
  let parse;
  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(string[i])) {
      parse += string[i];
      parse.parseInt();
    }
  }
  parse = parse.replaceAll(' ', '');
  return parse;
}
  /* let noSpaces = string.replaceAll(' ', '');
  console.log(noSpaces);
  let parse = parseInt(noSpaces, 10);
  console.log(parse); */
  /* pars = Math.abs(pars); */
