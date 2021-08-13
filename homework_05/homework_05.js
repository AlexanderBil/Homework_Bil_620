//Task 1-------------------
const mentor = {
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
}

function propsCount(currentObject){
  console.log(Object.keys(currentObject).length);
}

propsCount(mentor);


//Task 2-------------------
const mentor2 = {
    course: "React JS", 
    duration: 7,
    direction: "web-development",
    type: "marathon",
    style: "online"
}

function showProps(obj){
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
}

showProps(mentor2);


//Task 3--------------------
class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return (`${this.surname} ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName){
        return (`${this.surname} ${this.name} ${midleName}`);
    }

    showCourse(){
        const year_today = (new Date()).getFullYear();
        const course = year_today - this.year;
        return course;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);

console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());


//Task 4------------------------

class Worker{
    #experience = 1.2
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary(){
        console.log(`${this.fullName} salary: ${this.dayRate*this.workingDays}`);
    }

    showSalaryWithExperience(){
        console.log(`${this.fullName} salary: ${this.dayRate*this.workingDays*this.#experience}`);
        return this.dayRate*this.workingDays*this.#experience
    }

    get showExp(){
        return this.#experience;
    }

    set setExp(value){
        this.#experience = value;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.group();
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.groupEnd();


let worker2 = new Worker("Tom Tomson", 48, 22);
console.group();
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.groupEnd();


let worker3 = new Worker("Andy Ander", 29, 23);
console.group();
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.groupEnd();


function sortBySalary (){
  const workers = {}
  for(let i = 0; i < arguments.length; i++){
      let e = arguments[i];    
      workers[e.fullName] = e.showSalaryWithExperience();
  }
  let sortArr = Object.keys(workers).sort((a,b) => workers[a] - workers[b])
                                    .map(item => `${item}: ${workers[item]}`)
                                    .join(' ');
  console.log("Sorted salary:"+ sortArr);
}

sortBySalary(worker1, worker2, worker3);



//Task 5-------------------------

class GeometricFigure{
constructor(){}
getArea(){
  return 0;
}
toString(){
    return Object.getPrototypeOf(this).constructor.name;
}
}

class Triangle extends GeometricFigure{
    constructor(a, h){
        super();
        this.a = a;
        this.h = h;
    }
    getArea(){
       return 0.5 * this.a * this.h;
    }
}

class Square extends GeometricFigure{
    constructor(a){
        super();
        this.a = a;
    }
    getArea(){
        return Math.pow(this.a, 2);
    }
}

class Circle extends GeometricFigure{
    constructor(r){
        super();
        this.r = r;
    }
    getArea(){
        return Math.PI * Math.pow(this.r, 2);
    }
}

function handleFigures(figures){
const sum = figures.reduce((acc, figures) => {
    return acc + figures.getArea();
}, 0);

const result = figures.reduce((acc, figure) => {
    if(figure instanceof GeometricFigure){
        acc.push(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
    }
    return acc;
  }, []);

result.push(sum);
return result;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));