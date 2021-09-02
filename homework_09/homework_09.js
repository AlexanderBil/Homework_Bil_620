//Task 1
$('a[href^="https://"]').attr('target','_blank');


//Task 2 
$('.head').css('background', 'green').find('.inner').css('fontSize', '35px')


//Task3
$("div:nth-child(10)").insertBefore("h3:nth-child(9)");
$("div:nth-child(12)").insertBefore("h3:nth-child(11)");

//Task 4
let count = 0;
$('input').change(function(){
    if(count === 2){
        $('input').prop("disabled", true);
    }
    if(this.checked){
     count++
 }
})
