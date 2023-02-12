function capitalize(string) {
    const firstLetter = string.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = string.slice(1);
    string = firstLetterCap + remainingLetters;
    return string;
  }
  
  export { capitalize };