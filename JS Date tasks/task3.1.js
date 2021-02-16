// 1 Write a JavaScript function to get the number of days in a month.

function task3_1(){
console.log(" 1 Write a JavaScript function to get the number of days in a month.");
let month = parseInt(prompt("enter month : ","1"));
let year =parseInt(prompt("enter year : ","2021"));;

if( (month<1) || (month>12)){
    console.log("please enter valid month");
    
}else{
    totalDays(month,year);
}

function totalDays(m,y){
let time = new Date(y,m,0);
let op = time.getDate();
console.log("Num of Days in this Month : " + op);
}

}
