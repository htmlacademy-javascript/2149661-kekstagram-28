//Функция для проверки длины строки
const srtLengthCheck = (string, lengthCount) => string.length >= lengthCount;

//Функция для проверки, является ли строка палиндромом.
function isPalindrom() {
  let stringToRight = isPalindrom.slice();
  let stringToLeft = isPalindrom.slice(-1,isPalindrom.length)
  if (stringToRight === stringToLeft) {
    return true;
  }
  return false;
}

