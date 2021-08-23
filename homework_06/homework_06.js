//Task 1-------------------
document.getElementById("test").innerText = "Last";
document.getElementsByTagName('div')[0].innerText = "Last";

//Task2--------------------
let picture = document.querySelector('.image').src = "cat.jpg"
alert(picture)

//Task3---------------------
let pList = document.querySelectorAll("#text > p");
for(let i = 0; i < pList.length; i++){
    console.log(`Selector text ${i}: ${pList[i].innerHTML}`);
}

//Task4---------------------
let list = document.getElementById("list");
items = list.getElementsByTagName("li");

//Variant-1
for(let i = 0; i < items.length; i++){
    if(i == Math.floor(items.length * 0.5)){
        alert(items[i].innerHTML);
        break;
    }else{
        alert(items[i].innerHTML);
        alert(items[items.length-(i+1)].innerHTML);
    }
}

//Variant-2
let children = list.children;
alert(children[0].innerText);
alert(children[4].innerText);
alert(children[1].innerText);
alert(children[3].innerText);
alert(children[2].innerText);


//Task5--------------------------
let btn = document.getElementById('button');
btn.onclick = () => {
    document.getElementsByTagName("h1")[0].style.background = "#98FB98";
    let myDiv = document.getElementById("myDiv");
    let children = myDiv.children;
    children[0].style.fontWeight = "bold";
    children[1].style.color = "red";
    children[2].style.textDecoration = "underline";
    children[3].style.fontStyle = "italic";
 
let newParagraph  = document.createElement("p");
let list = document.getElementById("myList");
list.style.display = "none";
items = list.getElementsByTagName("li");
for(let i = 0; i < items.length; i++){
  newParagraph.innerHTML += items[i].innerHTML;
}
myDiv.appendChild(newParagraph);

document.getElementsByTagName("span")[0].style.display = "none";
}

//Task6--------------------------
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let text1 = prompt();
let text2 = prompt();

input1.value = text1;
input2.value = text2;

let storage = input1.value;
input1.value = input2.value;
input2.value = storage;

console.log(`Input1 = ${input1.value}`);
console.log(`Input2 = ${input2.value}`);


//Task7-------------------------
let main = document.createElement("main");
let div = document.createElement("div");
let p = document.createElement("p");
p.innerHTML = "First paragraph";
main.classList.add("mainClass", "check", "item");
div.id = "myDiv";
div.appendChild(p);
main.appendChild(div);
document.body.appendChild(main);