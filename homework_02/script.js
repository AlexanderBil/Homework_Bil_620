// Task 1
let x = 1;
let y = 2;
let res1 = String(x) + y

console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);

console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x) || Boolean(y);

console.log(res3);
console.log(typeof res3);

let res4 = parseInt(Boolean(x), y);

console.log(res4);
console.log(typeof res4);

//----------------------------------

//Task 2
let enter_number = prompt('Enter the number');

let check_number_a = (enter_number > 0 && enter_number % 2 === 0) ? true : false;
let check_number_b = (enter_number % 7 === 0 ) ? true : false;

console.log(`Multiple 2, ${check_number_a}`);
console.log(`Multiple 7, ${check_number_b}`);

//-----------------------------------

//Task 3
let array = [];
array[0] = 1;
array[1] = "JS";
array[2] = true;
array[3] = null;

alert(`Base array: [${array}]`);
let new_value = prompt('Enter the new value of the array');
array[5] = new_value;
alert(`5-th element: ${array[5]}`);
array.shift();
alert(`New array: [${array}]`);

//----------------------------------


//Task 4

let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join('*'));

//----------------------------------

//Task 5 

const isAdult = prompt("Are you 18 years old?");
isAdult >= 18 ? alert("You have 18") : alert("You are too young");

//---------------------------------

//Task 6

let a = +prompt('Enter the side (a) of the triangle');
let b = +prompt('Enter the side (b) of the triangle');
let c = +prompt('Enter the side (c) of the triangle');


if(isNaN(a) || isNaN(b) || isNaN(c)){
console.log("Incorrect data");
}else{
    let triangle_sides = [a, b, c].sort();
    let p = 0.5*(a + b + c);
    let two_sides = (Math.pow(triangle_sides[0], 2) + Math.pow(triangle_sides[1], 2)).toFixed(3);
    let third_side = (Math.pow(triangle_sides[2], 2)).toFixed(3);
    if(two_sides === third_side){
        console.log(`Triangle is rectangular S = ${0.5*triangle_sides[0]*triangle_sides[1]}`);
    }else{
        console.log(`The triangle is not rectangular S = ${Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(3)}`);
    }
}



//Task 7

let date = new Date();
let hour = date.getHours();

    switch(true){
        case hour >= 0 && hour < 5:
            alert("Доброї ночі");
            break;

        case hour >= 5 && hour < 11:
            alert("Доброго ранку");
            break;

        case hour >= 11 && hour < 17:
            alert("Доброго дня");
            break;

        case  hour >= 17 && hour <= 23:
            alert("Доброго вечора");
            break;
    }


// Variant 2

let date = new Date();
let hour = date.getHours();

if(hour >= 0 && hour < 5){
  alert("Доброї ночі");
}
if(hour >= 5 && hour < 11){
  alert("Доброго ранку");
}
if(hour >= 11 && hour < 17){
  alert("Доброго дня");
}
if(hour >= 17 && hour <= 23){
  alert("Доброго вечора");
}






