module.exports = function reverse (n) {
  let array = Array.from(String(n));
  for (let i = (array.length - 1); i > 0; i--) {
    if (array[i] == '0') {
        array.pop();
    }
    break;
}
  return array;
}
