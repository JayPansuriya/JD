var num = 1;
var n = parseInt(prompt("enter n: ", "5"));

let str = '';
let str1 = '';
let str2 = '';
//upper triangle
for (let i = 0; i < n; i++) {


    for (let j = 0; j < n - i; j++) {
        str = str.concat(" ");
    }
    for (let j = 0; j < i; j++) {
        str = str.concat("*" + " ");
    }

    str = str.concat("\n");
}
//lower triangle
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

        if (i > j) {
            str = str.concat(" ");
        } else {
            str = str.concat("*" + " ");
        }
    }
    str = str.concat("\n");

}
console.log(str);