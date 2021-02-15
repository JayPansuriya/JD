

let min = +(prompt("enter min : "));
let max = +(prompt("enter max : "));

let arr = [];
let arr1 = [];

function genNum(min,max){
	arr.push(min);
	if(min<max)
	{
		genNum(min+1,max);

	}
	return
}


genNum(min,max);
console.log(arr);

let minVar = min;  //var that don't cahnge in for loop
let sum ;
function genNew(min,max){	
	arr1.push(min);
	sum=min+minVar+1;
	minVar+=1;
	if(minVar <= max)
	{
		genNew(sum,max);
	}

	return
}


genNew(min,max);
console.log(arr1);











































