
console.log("HELLO JD!!!");

let n = prompt("enter total num : ",'');


let min = prompt("enter min range : ",'');

let max = prompt("enter max range : ",'');

let arr = [];


while(arr.length < n){

var number;
 
number = Math.ceil(Math.random()*(max-min) + min);               
arr.push(number);

}
console.log(arr);

//arr.sort(function(a, b) { return a - b; });



n=arr.length;
for(let i=0;i<n-1;i++){
	for(let j=i+1;j<n-i+1;j++){
		if(arr[i]>arr[j]){
			[arr[i],arr[j]]=[arr[j],arr[i]];
		}
	}
}


console.log(arr);

let num = prompt("enter nth smallest num : ",'');
console.log(arr[num-1]);









