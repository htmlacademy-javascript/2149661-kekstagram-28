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

function autoFill (string, minLength, symbols) {
  const newString = minLength - string.length;
  if (newString <= 0) {
    return string;
  }
  return symbols.slice(0, newString % symbols.length) + symbols.repeat(newString / symbols.length) + string;
}

