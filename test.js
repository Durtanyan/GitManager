const arrUpperCase = (delimiter) => {
  return "молоко сахар бетон бабушка".split(delimiter).map((elem) => {
    return elem.toUpperCase();
  });
};
console.log(arrUpperCase(" "));
