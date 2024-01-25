const arrayToString = (genres) => {
  const genresList = [];
  genres.map((element) => genresList.push(element.text));
  return genresList.join(", ");
};
