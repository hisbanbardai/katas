const repeatNumbers = function (data = []) {
  numOfEle = 0; result = "";
  while(numOfEle < data.length){
      for (let j = 0; j < data[numOfEle][1]; j++){
        result+= data[numOfEle][0];
      }
      if (data.length !== 1 && numOfEle!== data.length - 1){
        result+= ",";
      }
      numOfEle+=1;
    }
    return result;
  }

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);