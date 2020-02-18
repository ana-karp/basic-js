module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error;
    ;
    let trArr = [];
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i++; 
        continue;
      }
      if (arr[i] === '--discard-prev') {
        if(i - 1 >= 0) trArr.pop();
        continue;
      }
      if (arr[i] === '--double-next') {
        if(i + 1 < arr.length) trArr.push(arr[i + 1]);
        continue;
      }
      if (arr[i] === '--double-prev') {
        if(i - 1 >= 0) trArr.push(arr[i - 1]);
        continue;
      }
    
      trArr.push(arr[i]);
    }
    return trArr;
  };
