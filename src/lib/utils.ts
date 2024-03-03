/**
 * Converts a string into an array where each word is an element, using a custom separator.
 *
 * @param str The input string to be converted into an array.
 * @param separator The separator to split the input string by.
 * @returns An array of strings where each element represents a word from the input string.
 */
export const stringToArray = (str: string, separator: string) => {
  // Split the string by commas and trim each element
  return str.split(separator).map((item) => item.trim());
};
