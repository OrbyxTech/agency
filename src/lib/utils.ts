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

/**
 * Convert a given timestamp to a human-readable format like "1s ago", "1m ago", "1h ago", etc.
 * @param timestamp The timestamp string to convert.
 * @returns A string representing the time difference between the given timestamp and the current time.
 */
export function timeAgo(timestamp: string): string {
  const now = new Date();
  const pastTime = new Date(timestamp);
  const timeDifference = now.getTime() - pastTime.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years === 1 ? "a year ago" : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? "a month ago" : `${months} months ago`;
  } else if (days > 0) {
    return days === 1 ? "a day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "an hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
  } else {
    return seconds === 1 ? "a second ago" : `${seconds} seconds ago`;
  }
}
