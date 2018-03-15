module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;
  let obj = {};
  let l = array.length;
  for (let i = 0; i < l; i++) {
    if (obj[array[i] - 1] && obj[array[i] + 1]) {
      obj[array[i]] = 2;
      obj[array[i] + 1] = 2;
      obj[array[i] - 1] = 2;
    } else if (obj[array[i] + 1]) {
      obj[array[i]] = 2;
      obj[array[i] + 1] = 2;
    } else if (obj[array[i] - 1]) {
      obj[array[i]] = 2;
      obj[array[i] - 1] = 2;
    } else {
      obj[array[i]] = 1;
    }
  }

  let longestSequence = 0;
  let count = 1;
  for (let key in obj) {
    if (obj[key] === 2 && obj[+key+1]) {
      count++;
    } else {
      count = 1;
    }
    if(count > longestSequence) {
      longestSequence = count;
    } 
  }
  
  return longestSequence;
  
  //if (sequencesArray.length === 0) return 1;

  // let key = 1;
  // let obj1 = {};
  // obj1[key] = 0;
  // l = sequencesArray.length;
  // for (let i = 0; i < l; i++) {
  //   if (sequencesArray[i] - sequencesArray[i - 1] > 1) {
  //     key++;
  //     obj1[key] = 0;
  //     obj1[key]++;
  //   } else {
  //     obj1[key]++;
  //   }
  // }

  // let maxSequenceLength = 0;
  // for (let key in obj1) {
  //   if (maxSequenceLength < obj1[key]) {
  //     maxSequenceLength = obj1[key];
  //   }
  // }

  // return maxSequenceLength;
};
