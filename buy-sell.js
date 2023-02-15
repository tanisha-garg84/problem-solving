function BuyAndSell(array,k,l) {
    let result = array[k] - array[l];
  
    if (result < 0) {
      console.log("Loss: ", result);
    } else if (result > 0) {
      console.log("Profit: ", result);
    }
  }
  
  const indexArray = [2, 3, 5, 7, 11, 13];
  BuyAndSell(indexArray,1,3);
  