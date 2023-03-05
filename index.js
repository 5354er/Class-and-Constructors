// Write a function and call it tally sort
// tallySort accepts and array where the array => returns a sorted array tallied

// make an array and use the index of the array to count how many times that number
// appaers then tranform the tally into an array that has the number arranged from lea
// -st to greatest

// find the min number
// find the max number

// create and array to tally occurences of each number
// between min and max
// return an array that fills out the array according to 
// the tally as if the orriginal array where sorted.


function randomArray(max, size) {
  let result = new Array(size);
  for(let i = 0; i < size; i++) {
    let random = Math.floor(max * Math.random());

    result[i] = random;
  }
  return result;
}

function tallySort(array) {

  const sorted = array.sort((a,b) => Math.min(a) - Math.max(b));
  let tally = [];
  let count = 0;
  
  
  for(let i = 1; i < sorted.length; i++) {
    
    let current = sorted[i]
    let before = sorted[i -1]
    // ↓ tally the number of same occurances
    //console.log(sorted.indexOf(i), i)
      console.log(`sorted value ${sorted[i -1]} at iteration ${i}`)
      if(current === before){
        count++  
      } 
      if(sorted.indexOf(i) === -1) {
        count = 0; 
      };
    tally.push(count)
  }
  console.log(count)
  console.log(tally)
}

let aa = randomArray(10, 10);

//-------------------------------------

console.log(tallySort(aa))

const sum = (...args) => {
  
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sum(1,2))