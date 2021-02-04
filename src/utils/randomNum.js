function getRandomNum(min, max) {
  let range = max - min;
  let rand = Math.random();
  return(min + Math.round(rand * range));
}

export {getRandomNum}
