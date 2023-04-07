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

const parseNumber = (string) => {
  if (typeof string === 'number') {
    string = String(string).replaceAll('.', '').replaceAll('-', '');
    return Number(string);
  }
  let parsedString = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string.at(i),10))) {
      parsedString += string.at(i);
    }
  }return parseInt(parsedString, 10);
};

/*Функция, которая принимает три параметра:
- исходную строку,
- минимальную длину,
- строку с добавочными символами
возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.*/

function autoFill (string, minLength, symbols) {
  let newString = minLength - string.length;
  if (newString <= 0) {
    return string;
  }
  return symbols.slice(0, newString % symbols.length) + symbols.repeat(newString / symbols.length) + string;
}

/* const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('q', 4, 'we');
 */
