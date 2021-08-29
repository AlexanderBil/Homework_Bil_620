//Task 1
function upperCase(str){
    if(!!/[A-Z]/.exec(str[0])){
        console.log(`String's not starts with uppercase character`);
    }else{
        console.log(`String's starts with uppercase character`);
    }
}

upperCase('regexp');
upperCase('RegExp');


//Task 2
function checkEmail(str){
    let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(reg.test(str) == false){
        alert('Your email is not correct (FALSE)');
    }else{
        alert('Your email is correct (TRUE)');
    }
}

checkEmail("Qmail2@gmail.com");


//Task 3
let reg1 = /d(b+)(d)/ig;
console.log(reg1.exec("cdbBdbsbz"));



//Task 4
let str1= "Java Script";
alert(str1.replace(/(\w+) (\w+)/i, '$2, $1'));



//Task 5
function validCart(str){
    let reg2 = /\d{4}-\d{4}-\d{4}-\d{4}/;
 if(reg2.test(str)){
     console.log('Success. Your card is valid');
 }else{
    console.log('Error. Your card is not valid');
 }
}

validCart("1264-4356-5467-5678");


//Task 6
function checkEmail2(str){
 let reg =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(reg.test(str)){
      console.log("Email is correct!");
    }else{
      console.log("Email is not correct!");
    }
}

checkEmail2('my_mail@gmail.com');
// Email is correct!
checkEmail2('#my_mail@gmail.com');
// Email is not correct!
checkEmail2('my_ma--il@gmail.com');
// Email is not correct!



//Task 7
function checkLogin(str){
    if(/^[a-zA-z]{1}[a-zA-Z1-9.]{2,10}$/.test(str)){
      console.log('true');
    }else{
      console.log('false');
    }
      console.log(str.match(/([0-9]*[.])?[0-9]+/g).join(' '));
}

checkLogin('ee1.1ret3');
// true
// 1.1, 3

checkLogin('ee1*1ret3');
// false 
// 1, 1, 3
