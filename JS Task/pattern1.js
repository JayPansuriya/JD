var text = 65;
var n = parseInt(prompt("enter n: ", "5"));

let str = '';

//upper triangle
for (let i = 0; i < n + 1; i++) {


    for (let j = 0; j < n - i; j++) {
        str = str.concat(" ");
    }
    for (let j = 0; j < i; j++) {
        str = str.concat(String.fromCharCode(text) + " ");

        text = text + 1;
    }

    str = str.concat("\n");
}
//lower triangle
text = text - n - 1;

for (let i = 1; i < n; i++) {

    for (let j = 0; j < i; j++) {
        str = str.concat(" ");
    }
    for (let j = 0; j < n - i; j++) {
        str = str.concat(String.fromCharCode(text) + " ");

        text = text - 1;
    }
    str = str.concat("\n");
}


console.log(str);
