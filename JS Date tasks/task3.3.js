
// 3 Write a JavaScript function to get time differences in months between two dates.

function task3_3(){
    console.log("3 Write a JavaScript function to get time differences in months between two dates.");
let date1 =  new Date(prompt("add first date :","2021-02-05"));
let date2 =  new Date(prompt("add second date :","2021-02-05"));

function diffMonth(dt1,dt2){ 
     let b = date2.getMonth() - date1.getMonth();
     let c = date2.getFullYear() - date1.getFullYear();
    if(b<0){
        b=-b;
    }
    if(c<0){
        c=-c;
    }
    console.log("total num of months:" +(b+c*12))
}
diffMonth(date1,date2);

}




    // if(date1.getFullYear() < date2.getFullYear()){

    // let b = date2.getMonth() - date1.getMonth();
    // let c = date2.getFullYear() - date1.getFullYear();
    //  console.log("total num of months:" +(b+c*12));
    // }else if(date1.getFullYear() == date2.getFullYear()){
    //         if(date1.getMonth() < date2.getMonth()){

    //          let d = date2.getMonth() - date1.getMonth();
    //          let e = date2.getFullYear() - date1.getFullYear();
    //          console.log("total num of months:" +(d+e*12));
    //         }
    //         else{
    //             console.log("please enter valid date");
    //         }

    // }else{
    //         console.log("please enter valid date");
    //     }


