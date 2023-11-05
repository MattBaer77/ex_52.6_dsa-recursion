/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {

  if (i === nums.length) {
    return 1;
  }

  return nums[i] * product(nums, (i + 1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  // ITERATIVE

  // let longestWordLength = 0;

  // for (let word of words){

  //   if (word.length > longestWordLength) {
  //     longestWordLength = word.length
  //   }

  // }

  // return longestWordLength;

  // RECURSIVE
  let longestWordLength = 0;

  function findLongest(wordList) {

    if (words.length === 0) {

      return;
  
    } else {
  
      const currentWord = words.pop();
  
      if (currentWord.length > longestWordLength) {
  
        longestWordLength = currentWord.length
  
      }
  
      findLongest(wordList)
  
    }

  }

  findLongest([...words]);

  return longestWordLength;

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

  let skip = false;
  let returnString = ""

  function checkAndToggle(string) {

    if (string.length === 0) {

      return;

    } else {

      const letter = string [0];
      string = string.substring(1)

      if (skip === false) {
        returnString = returnString + letter
      }

      skip = !skip

      checkAndToggle(string)

    }

  }

  checkAndToggle(str)

  return returnString;

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length === 0) {
    return true
  }

  if (str[0] !== str[(str.length-1)]){
    return false
  }

  str = str.substring(1)
  str = str.substring(0, (str.length - 1))

  return isPalindrome(str)

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, count=0) {

  if (arr.length === 0){

    return -1;

  }

  if (arr[0] === val) {

    return count;

  } else {

    count ++
    truncatedArr = [...arr]
    truncatedArr.shift()

    return findIndex(truncatedArr, val, count)

  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
