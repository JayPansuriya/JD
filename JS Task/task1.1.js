console.log("Author JD!!!");

let n = prompt("enter total num : ",'');


let arr = [];
for(let i=0;i<n;i++){
  arr[i]={};
  let x = prompt("add name :");
  arr[i].name={};
  let a = x.split(" ");
  arr[i].name.firstName = a[0];
  a.shift(arr[0]);
  let b = a.join(" ");
  arr[i].name.lastName = b;

  arr[i].age=prompt("add age :");
}
console.log(arr);


arr1 = JSON.parse(JSON.stringify(arr));

for(let i=0;i<n;i++){

  arr1[i].name.firstName=(arr1[i].name.firstName.toUpperCase()); //to uppercase
  arr1[i].name.lastName=(arr1[i].name.lastName.toUpperCase());
}
console.log(arr1);



arr2 = JSON.parse(JSON.stringify(arr1));


function compare( a, b ) {
    if ( a.name.firstName < b.name.firstName ){
      return -1;
    }
    if ( a.name.firstName > b.name.firstName ){
      return 1;
    }
    return 0;
  }
  arr2.sort( compare );

console.log(arr2);



let getInfo = prompt("enter name you have to search : ");

for(let i=0;i<n;i++){
let patt = arr2[i].name.lastName;
if (patt.indexOf(getInfo.toUpperCase()) != -1){
  console.log(arr2[i]); 
}

}









