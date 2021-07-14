const techList = (techArray, person) => {
  if (!techArray || techArray.length === 0) {
    return 'Vazio!';
  }
  const techListOrdered = techArray.sort().map((techItem) => (
     { 
      tech: techItem,
      name: person
    }
  ));
  return techListOrdered;
};

module.exports = techList;