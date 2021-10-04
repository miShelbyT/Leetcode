var compress = function (chars) {
  let i = 0;
  let j = 0;
  let index = 0;
  while (j < chars.length) {
    j++;
    if (chars[i] !== chars[j]) {
      chars[index++] = chars[i];
      if (j - i > 1) {
        const stringifiedNum = (j - i).toString();
        for (let k = 0; k < stringifiedNum.length; k++) {
          chars[index++] = stringifiedNum[k];
        }
      }
      i = j;
    }
  }
  return index;
};