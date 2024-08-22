export const formatPluralWord = (
  number: number,
  words: string[],
  hideNumber?: true,
): string => {
  const remainder10 = number % 10;
  const remainder100 = number % 100;

  let word = '';
  if (remainder100 >= 11 && remainder100 <= 19) {
    word = words[2];
  } else if (remainder10 === 1) {
    word = words[0];
  } else if (remainder10 >= 2 && remainder10 <= 4) {
    word = words[1];
  } else {
    word = words[2];
  }

  return hideNumber ? word : `${number} ${word}`;
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
