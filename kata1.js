//Sum the Largest Numbers


const sumLargestNumbers = function(data = []) {
  let largest = data[0], secondLargest = data[1];

  for(let i = 1; i < data.length; i++){
    if (data[i] > largest){
      secondLargest = largest;
      largest = data[i];
    } else if(data[i] > secondLargest){
      secondLargest = data[i];      //10  4  34  6  92  2
    }
  }
  return (largest + secondLargest);
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));