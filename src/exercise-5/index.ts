/* 
  create a new string adding "New!" in front of a given string.
  If the given string begins with "New!" already
  then return the original string.
*/

export const addNewString = (para: string): string =>
  para.indexOf("New!") !== -1 ? para : "New! " + para;
