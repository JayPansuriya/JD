// 2 Write a JavaScript function to get the last day of a month.
function task3_2(){
    console.log("2 Write a JavaScript function to get the last day of a month.");
let month = parseInt(prompt("enter month : ","1"));
let year =parseInt(prompt("enter year : ","2021"));;
let arr = ["sun","mon","tue","wed","thu","fri",'sat']
// month=month+1;
if( (month<1) || (month>12)){
    console.log("please enter valid month");
    
}else{

    lastDay(month,year);
}

function lastDay(m,y){
let time = new Date(y,m,0);
let op = time.getDay();
console.log("Last Day in this Month : " + arr[op]);

}

}