function srtLength(string, lengthCount){
  if (string.length >= lengthCount) {
    return true;
  }
  return false;
}
console.log(srtLength('проверяемая строка', 20));
