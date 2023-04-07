//Функция для проверки длины строки
const srtLengthCheck = (string, lengthCount) => string.length >= lengthCount;

//Функция для проверки, является ли строка палиндромом.
function isPalindrom(string) {
  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    if (string.at(i) !== string.at(j)){
      return false;
    }
    return true;
  }
}

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN:

/*
Рабочий вариант

function returnNumbers(string){
  let parse = '';
  if (typeof string === Number) {
    return string;
  }
  for (let i = 0;i < string.length; i++){
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      parse += string.at(i);
    }
  }return parseInt(parse, 10);
}
*/

function returnNumber(string){
  let parse = '';
  if (typeof string === Number) {
    return string;
  }
  for (let i = 0; i < string.length; i++){
    if (!Number.isNaN(parseInt(string[i], 10))) {
      parse += string[i];
    }
  }return parseInt(parse, 10);
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
}
