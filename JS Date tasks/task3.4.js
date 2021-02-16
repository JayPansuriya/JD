// 4 Write a JavaScript function to get the week end date.
function task3_4(){
    console.log("4 Write a JavaScript function to get the week end date.");
let dt1 =  new Date(prompt("add year and month :","2021-02"));


function weekEnd(date1){
    let d = new Date(date1.getFullYear(),date1.getMonth()+1,0);
for(let i=0;i<d.getDate();i++){
    date1.setDate(i+1);
        if((date1.getDay() == 0 ) || (date1.getDay() == 6)){
             console.log(date1.toDateString());
        }
    }   
}

weekEnd(dt1);
}
