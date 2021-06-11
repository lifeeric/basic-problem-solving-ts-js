// get the file extension of a filename.

export const getFileExtension = (str: string): string =>
  str.slice(str.lastIndexOf("."));
