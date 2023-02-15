function countOccurence(string) {
    const result = {};
    for (let i = 0; i < string.length; i++) {
  
        let alphabet = string[i];
        if (result[alphabet] === undefined) {
          result[alphabet] = 1;
        } else {
          result[alphabet]++;
        
      }
    }
    return result;
  }
  
  const string = "hexagonal";
  console.log(countOccurence(string));
  
