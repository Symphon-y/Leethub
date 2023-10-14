const mergeAndSortTwoArrays = <T>(left: T[], right: T[]): T[] => {
  const result: T[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;
  console.log('left', left);
  console.log('right', right);

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[]
): number => {
  let result: number = 0;
  // Merge the arrays into a single sorted array
  const mergedArray = mergeAndSortTwoArrays<number>(nums1, nums2);
  // If the array length is odd, the median is the middle data point
  if (mergedArray.length % 2 === 1) {
    result = mergedArray[(mergedArray.length - 1) / 2];
  }
  // if the array length is even, the median is the average of the two middle data points.
  else if (mergedArray.length % 1 === 0) {
    const midPoint = Math.floor(mergedArray.length / 2);
    const leftMiddleIndex: number = midPoint;
    const rightMiddleIndex: number = midPoint - 1;
    result = (mergedArray[leftMiddleIndex] + mergedArray[rightMiddleIndex]) / 2;
  }
  return result;
};
