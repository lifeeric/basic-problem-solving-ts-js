export const moveCharsForward = (str: string): string =>
  str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0) + 1;
      return String.fromCharCode(code > 122 ? 97 : code)
    })
    .join("");

  
