module.exports = function longestConsecutiveLength(array) {
    if(array.length === 0) return 0;
    if(array.length === 1) return 1;
  let obj = {};
  let value = 1;
  let l = array.length;
  for(let i = 0; i < l; i++) {
      if(obj[array[i]-1] && obj[array[i]+1]) {
          obj[array[i]] = value+1;
          obj[array[i]+1] = value+1;
          obj[array[i]-1] = value+1;
      } else if(obj[array[i]+1]) {
          obj[array[i]] = value+1;
          obj[array[i]+1] = value+1;
      } else if (obj[array[i]-1]) {
          obj[array[i]] = value+1;
          obj[array[i]-1] = value+1;
      } else {
          obj[array[i]] = value;
      }
  }
  
  let sequencesArray = [];
  for(let key in obj) {
      if(obj[key] === 2) {
          sequencesArray.push(key);
      }
  }
  if(sequencesArray.length === 0) return 1;

  let key = 1;
  let obj1 = {};
  obj1[key] = 0;
  l = sequencesArray.length;
  for(let i = 0; i < l; i++) {
      if(sequencesArray[i] - sequencesArray[i-1] > 1) {
          key++;
          obj1[key] = 0;
          obj1[key]++;
      } else {
          obj1[key]++;
      }
  }
  
  let maxSequenceLength = 0;
  for(let key in obj1) {
      if(maxSequenceLength < obj1[key]) {
          maxSequenceLength = obj1[key];
      }
  }

  return maxSequenceLength;
}
