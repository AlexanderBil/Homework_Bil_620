//Task 1
//for
const arr = [2, 3, 4, 5];

let mult_result = arr[0];
for(let i = 1; i < arr.length; i++){
    mult_result = arr[i] * mult_result;
}
console.log('Task 1 - for:', mult_result);

//while
let i = 1;
let mult_result2 = arr[0];
while (i < arr.length){
    mult_result2 = arr[i] * mult_result2;
    i++
}
console.log('Task 1 - while:', mult_result2);

//------------------------------------------

//Task 2
document.write('Task 2 <br>');
for(let i = 0; i < 15; i++){
     i % 2 === 0 ? document.write(`${i} is even <br>`) : document.write(`${i} is odd <br>`);
}

//------------------------------------------

//Task 3
function randArray(k){
    let arr = [];
    let min = 1;
    let max = 500;
    for(let i = 0; i < k; i++){
        arr.push(Math.floor(Math.random()* (max - min + 1 )) + min)
    }
    console.log('Task 3:', arr);
}

randArray(5);

//------------------------------------------

//Task 4
const a = prompt('Task 4. Enter number a');
const b = prompt('Task 4. Enter number b');

function raiseToDegree(a, b){
    return (Math.pow(a, b));
}

console.log('Task 4:', raiseToDegree(a, b));

//------------------------------------------

//Task 5
function findMin(){
    let min_number = (Math.min(...arguments));
    return min_number;
}

console.log('Task 5:', findMin(12, 14, 4, -4, 0.2)); // -4

//------------------------------------------

//Task 6
function findUnigue(arr){
  let test_arr = [];
  for(let element of arr){
      if(!test_arr.includes(element)){
          test_arr.push(element)
      }
  }
  return arr.length != test_arr.length ? false : true
}

console.log('Task 6 [1, 2, 3, 5, 3]:', findUnigue([1, 2, 3, 5, 3])); //false
console.log('Task 6 [1, 2, 3, 5, 11]:', findUnigue([1, 2, 3, 5, 11])); // true

//------------------------------------------

//Task 7

function lastElem(arr, count){
if(count === undefined){
  return arr[arr.length-1];
}
 if(count >= arr.length){
   return arr;
}else{
   return arr.slice(-count);
 }
}

console.log(lastElem('Task 7 [3, 4, 10, -5]:',[3, 4, 10, -5])); // -5
console.log(lastElem('Task 7 [3, 4, 10, -5],2:',[3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem('Task 7 [3, 4, 10, -5],8',[3, 4, 10, -5], 8)); // [3, 4, 10, -5]

//----------------------------------------

//Task 8
function firstLetterUp(str){
  let strToArr = [];
  let arr = str.split(' ');
    arr.map(item => {
        strToArr.push(item.charAt(0).toUpperCase() + item.slice(1));
    })
    return strToArr.join(' ');
}

console.log('Task 8', firstLetterUp('i love java script'));

