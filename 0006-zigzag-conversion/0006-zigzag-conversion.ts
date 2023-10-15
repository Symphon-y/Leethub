const createPattern = (s: string, numRows: number): number[] => {
  let isIndexAscending: boolean = true;
  let i: number = 0;

  let pattern: number[] = [];
  for (let j = 0; j < s.length; j++) {
    if (isIndexAscending) {
      pattern.push(i);
      i++;
      if (i >= numRows - 1) {
        isIndexAscending = false;
      }
    } else {
      pattern.push(i);
      i--;
      if (i <= 0) {
        isIndexAscending = true;
      }
    }
  }
  return pattern;
};

const createZigZagSchema = (
  s: string,
  pattern: number[]
): { [key: string]: any } => {
  let objectCache: { [key: string]: any } = {};

  for (let i = 0; i < s.length; i++) {
    if (!objectCache[pattern[i]]) {
      objectCache[pattern[i]] = [];
    }
    objectCache[pattern[i]].push(s[i]);
  }
  return objectCache;
};

const convert = (s: string, numRows: number): string => {
  // Handle edge cases
  if (numRows === 1) {
    return s;
  } else if (numRows === 0) {
    return '';
  }

  let result: string = '';
  const pattern = createPattern(s, numRows);
  const schema = createZigZagSchema(s, pattern);
  const arraysInOrder = Object.keys(schema).sort(
    (a: string, b: string): number => {
      return Number(a) - Number(b);
    }
  );
  arraysInOrder.forEach((key) => {
    const convertedString = schema[key].join('');
    result += convertedString;
  });

  return result;
};
