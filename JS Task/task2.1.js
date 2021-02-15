//console.log("HELLO JD!!!");

let par = prompt("enter your words : ","");

//"Lorem ipsum dolor sit amet, consectetur adipisicing elit";


console.log(par);

let countChar = 0;         //for all char with space
let countCharWS = 0;       //without space all char
let countSpace = 0;        //count space  
let countWord = 0;		   //count words


countChar=par.length;


for(let i=0;i<par.length;i++){
	if(par[i]==" "){
		countSpace += 1 ;
	}

}

let wordArr = par.split(" ");

let countWaste=0;
for(let i=0;i<wordArr.length;i++){
if(wordArr[i]==""){
	countWaste+=1;
}
}

countCharWS = countChar - countSpace;


console.log("Total num of words : "+ (wordArr.length - countWaste)); //total word

console.log("Total num of spaces : "+countSpace); //total space

console.log("Total num of char without space : "+countChar); //total char

console.log("Total num of char without spaces : "+countCharWS); //total char without space










