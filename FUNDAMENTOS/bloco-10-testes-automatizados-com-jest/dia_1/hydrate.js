const hydrate = (string) => {
  const splitString = string.split('');
  const sumGlasses = splitString.reduce((sum, curr) => {
    let characteresNum = parseInt(curr);
    let checkNumber = isNaN(characteresNum) === false;
    if (checkNumber) {
      return sum + characteresNum;
    }
    return sum;
  }, 0);

  const checkPlural = (sumGlasses > 1) ? `copos` : `copo`;
  return `${sumGlasses} ${checkPlural} de água`;
};

module.exports = hydrate;