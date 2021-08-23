//Task1------------------------
const newWin = window.open("", "", "width=300,height=300");
setTimeout(() => newWin.resizeTo(500,500), 2000);
setTimeout(() => newWin.moveTo(200,200), 4000);
setTimeout(() => newWin.close(), 6000);

//Tas2-------------------------
function changeCSS(){
    let p = document.getElementsByTagName('p')[0];
    p.innerText = "This change!!!!!!";
    p.style.fontFamily = "Comic Sans MS";
    p.style.color = "orange";
    p.style.fontSize = "20pt"; 
}

//Task3------------------------
document.querySelector('.btn_1').onclick = () => {
    document.body.style.background = "blue";
}
document.querySelector('.btn_2').ondblclick = () => {
    document.body.style.background = "pink";
}
document.querySelector('.btn_3').onmousedown = () => {
    document.body.style.background = "brown";
}
document.querySelector('.btn_3').onmouseup = () => {
    document.body.style.background = "white";
}
document.querySelector('.linkColor').onmouseover = () => {
    document.body.style.background = "yellow";
}
document.querySelector('.linkColor').onmouseout = () => {
    document.body.style.background = "white";
}

//Task4-----------------------
let btn = document.querySelector('.btn_4');
btn.onclick = () => {
    let select = document.getElementById('select');
    select.options[select.selectedIndex].remove();
}

//Task5-----------------------
let btn2 = document.querySelector('.btn_5');
let blocktask5 = document.querySelector('.blocktask5');

btn2.onclick = () => {
    let p = document.createElement('p');
    p.innerHTML = "I was pressed!";
    blocktask5.appendChild(p)
}

btn2.onmouseover = () => {
    let p = document.createElement('p');
    p.innerHTML = "Mouse on me!";
    blocktask5.appendChild(p)
}

btn2.onmouseout = () => {
    let p = document.createElement('p');
    p.innerHTML = "Mouse is not on me!";
    blocktask5.appendChild(p)
}

//Task6------------------------
width.innerHTML += window.innerWidth;
height.innerHTML += window.innerHeight;
window.onresize = () => {
    width.innerHTML = `Width: ${window.innerWidth}`;
    height.innerHTML = `Height: ${window.innerHeight}`;
}



//Task7-------------------------
let countryValue = document.getElementById('country');
let citiesValue = document.getElementById('cities');

countryValue.addEventListener("change", e => {
        let data = e.target.value;
        
        if(data == "usa"){
            citiesValue.innerHTML = "";
            let t1 = new Option("New-York", "york");
            let t2 = new Option("Washington", "wash");
            let t3 = new Option("Boston", "bost");
            let t4 = new Option("Chikago", "chik");
            citiesValue.append(t1, t2, t3, t4);
        }
        if(data == "ger"){
            citiesValue.innerHTML = "";
            let t1 = new Option("Berlin", "ber");
            let t2 = new Option("Hamburg", "ham");
            let t3 = new Option("Munich", "mun");
            let t4 = new Option("Koln", "kol");
            citiesValue.append(t1, t2, t3, t4);
        }

        if(data == "ukr"){
            citiesValue.innerHTML = "";
            let t1 = new Option("Lviv", "lvi");
            let t2 = new Option("Kiev", "kie");
            let t3 = new Option("Odessa", "ode");
            let t4 = new Option("Dnieper", "dni");
            citiesValue.append(t1, t2, t3, t4);
        }

        let res = countryValue.options[countryValue.selectedIndex].text;
        let p = document.getElementById('infoCoutry');
        document.getElementById('infoCity').innerHTML = "";
         p.innerHTML = `${res},`

    })

    citiesValue.addEventListener("change", e => {
        let res = citiesValue.options[citiesValue.selectedIndex].text;
        let p = document.getElementById('infoCity');
        p.innerHTML = `${res}`
    })


 
