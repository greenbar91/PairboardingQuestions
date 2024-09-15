// The magic index of an array occurs when the element at that index is the same as the index itself. More simply, the magic index is when array[i] === i. Write a recursive method, findMagicIndex, that takes in an array and returns the index that is the magic index. The method must take O(logN) time and O(logN) space.
// Constraints:
// The array is sorted
// The array may have multiple magic indices. If this is the case, return the leftmost occurance.
// The elements in the array don't have to be distinct
// The magic index doesn't always exist; return -1 if it doesn't exist
// The array may have negative values
// Examples:
// a[i]  -4, -2, 2, 6, 6, 6, 6, 10
// i      0,  1, 2, 3, 4, 5, 6, 7
// Result: 2

// a[i]  -4 -2  1  6  6  6  6 10
//   i    0  1  2  3  4  5  6  7
// Result: 6

// a[i]  -4 -2  1  6  6  6  7 10
//   i    0  1  2  3  4  5  6  7
// Result: -1
// If your partner gets stuck, ask them: What an algorithm can run in O(logN) time, what does that generally mean we must be doing?
// The answer we are looking for here is splitting it in half


function magicArray(array, start, end){

    if (end < start || start < 0 || end >= array.length)
        return -1;

   const midpoint = Math.floor((start + end) / 2)

   if (midpoint == array[midpoint]){
    return midpoint
   }

   const leftSideEnd = Math.min(midpoint - 1, array[midpoint])
   const leftSideRecursion = magicArray(array, start, leftSideEnd)

   if (leftSideRecursion >= 0){
        return leftSideEnd
   }

   const rightSideStart = Math.max(midpoint + 1, array[midpoint])
   const rightSideRecursion = magicArray(array, rightSideStart, end )

   if(rightSideRecursion >= 0){
    return rightSideStart
   }


   return -1

}

const array = [-4, -2, 2, 6, 6, 6, 6, 10]

console.log(magicArray(array, 0 , 7))


function sortScores(unsortedScores, highestPossibleScore) {
    // Step 1: Create an array to hold the count of each score
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

    // Step 2: Populate the score counts
    unsortedScores.forEach(score => {
      scoreCounts[score]++;
    });

    // Step 3: Build the sorted array
    const sortedScores = [];

    // Iterate over the scoreCounts array
    for (let score = 0; score <= highestPossibleScore; score++) {
      const count = scoreCounts[score];

      // For each score, append it count times to the sortedScores array
      for (let i = 0; i < count; i++) {
        sortedScores.push(score);
      }
    }

    return sortedScores;
  }

  // Test the function
  const unsortedScores = [37, 89, 41, 65, 91, 53];
  const HIGHEST_POSSIBLE_SCORE = 100;

  const sortedScores = sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
  console.log(sortedScores);  // Expected output: [37, 41, 53, 65, 89, 91]


  function isBalanced(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (string[i] === '(') {
        count += 1;
      } else if (string[i] === ')') {
        count -= 1;

        if (count < 0) return false;
      }
    }

    return !count;
  }
