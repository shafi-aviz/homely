export type TextAndLink = {
  text: string;
  link: string;
};

export const trimString = (
  line: string,
  len: number = 20
): string => {
  if (line.length < len + 3) return line;
  else return line.slice(0, len) + '...';
};
