//Функция для проверки длины строки
const srtLengthCheck = (string, lengthCount) => string.length >= lengthCount;

//Функция для проверки, является ли строка палиндромом.
function isPalindrom(string) {
  let reverseStr = NaN;
  for (let i = string.length - 1; i >= 0; i--) {
    string = reverseStr += string[i];
  }
  return string;
}

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function returnNumber(string){
  let parse = ' ';
  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(string[i])) {
      parse += string[i];
    }
  }
  parse = parse.replaceAll(' ', '');
  return parse;
}
/*Функция, которая принимает три параметра:
- исходную строку,
- минимальную длину,
- строку с добавочными символами
возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.*/

function autoFill (string, minLength, updString) {
  let parseString = String(string);
  while (string.length < minLength) {
    string += updString;
  }
  return string;
console.log(string);
}
/*
возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.*/
