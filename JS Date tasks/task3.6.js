// 6 Write a JavaScript function to get timezone offset in seconds.

function task3_6(){
    console.log("6 Write a JavaScript function to get timezone offset in seconds.");
let date1 =  new Date(prompt("add first date :","2021-02-05"));

d = date1.getTimezoneOffset();

if(d<0){

    d=-d;
}

console.log(d*60);


}




