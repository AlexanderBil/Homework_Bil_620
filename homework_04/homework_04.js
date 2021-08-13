//Task 1------------------
function calcRectangleArea(){
    try{
        let a = +prompt('Enter side a');
        let b = +prompt('Enter side b');
        let s = a*b;
        if(isNaN(a) || isNaN(b)){
            throw new Error("Sorry your value is incorect");
         }
         alert(`S = ${s}`);
    }
    catch(e){
       alert("Sorry value incorect");
       console.log(e.name);
    }
}

calcRectangleArea();



// Task 2-------------------
function checkAge(){
    let age = prompt("Enter your age");

    try{
        if(age.length === 0){
            throw new Error("The field is empty! Please enter your age");
        }
        if(isNaN(age)){
            throw new Error("Value is not correct");
        }
        if(parseInt(age) < 14){
            throw new Error("Your age is less than 14");
        }
        alert("Happy viewing!");
    }
    catch(e){
        alert(e.name)
        alert(e.message)
    }    
}
checkAge()



//Task 3---------------------
class MonthException {
    constructor(message){
        this.message = message;
        this.name = 'MonthException';
    }
}

function showMonthName(month){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    try{
          if(month >= 1 && month <= 12){
              return monthNames[month-1];
          }else{
              throw new MonthException("Incorrect month number");
          }
    }catch(e){
      return `${e.name}${e.message}`
    }
}

console.log(showMonthName(5));
console.log(showMonthName(15));



//Task 4---------------------
function showUser(id){
    try{
        if(id < 0){
            throw new Error("ID must not be negative");
        }
        return {"id": id}
    }catch(e){
        console.log(`${e.name}:${e.message}:${id}`);
    }
}

function showUsers(ids){
    let arr = [];
      for(let i = 0; i < ids.length; i++){
        let e = ids[i];
          if(showUser(e)){
            arr.push(showUser(e))
          }
      }
console.log(arr);
}

showUsers([7, -12, 44, 22]);