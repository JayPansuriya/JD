let name = prompt("name : ",'');
let n = prompt("n : ",'');


let arr = name.split(" ");

let firstName = arr[0];

arr.shift(arr[0]);


let arr1 = arr.join(" ");

let lastName = arr1;

console.log("First Name : "+firstName);
console.log("Last Name : "+lastName);


let a = [];
for(let i=0;i<n;i++){
  a[i]={};
  a[i].name=prompt("add name :");
  a[i].age=prompt("add age :");
}
console.log(a);

for(let i=0;i<n;i++){
if ((a[i].name).indexOf(firstName) != -1){
  console.log(a[i]); 
}
}


