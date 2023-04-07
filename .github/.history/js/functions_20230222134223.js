const srtLengthCheck = (string, length) => string.length <= length;

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ','');
  let reverseString = '';
  for (let i = tempString.length -1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  if (tempString === reverseString) {
    return 'Palindrom';
  }
  return 'Not Palindrom';
};
//Функция для проверки, является ли строка палиндромом.
/* function isPalindrom(string) {
  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    return (string.at(i) !== string.at(j));
  }
} */
//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function returnNumber(string){
  let parse = '';
  if (!Number.isFinite(string)){
    for (let i = 0; i <= string.length; i++) {
      if (!isNaN(string[i])) {
        parse += string[i];
      }
    }parse = parse.replaceAll(' ', '');
    return parse;
  }
  parse = String(string);
  parse = parse.replaceAll('.', '');
  parse = +parse;
  return Math.abs(parse);
}

/*Функция, которая принимает три параметра:
- исходную строку,
- минимальную длину,
- строку с добавочными символами
возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.*/

function autoFill (string, minLength, symbols) {
  let newString = String('');
  if (minLength > string.length){
    for (let i = 0; i < minLength - string.length; i++) {
      newString += symbols;
    }
    if (newString.length >= minLength) {
      newString = newString.slice(0, minLength - string.length);
      //minLength - string.length
    }return newString + string;
  }
  return string;
};

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('q', 4, 'we');
