// 5 Write a JavaScript function to add specified weeks to a date.

function task3_5(){
        console.log(" 5 Write a JavaScript function to add specified weeks to a date.");
let date1 =  new Date(prompt("add first date :","2021-02-05"));

console.log(date1.toDateString())

let week = +prompt("enter weeks you have to add :","1")

function addWeek(d,w){

        d.setDate(d.getDate()+w*7);
console.log(d.toDateString())
}
addWeek(date1,week);
}