# JD
NoteBook for day to day work.

🔥JAVASCRIPT🔥

--------------------------------------------------------------------------------------
JavaScript was initially created to “make web pages alive”.

Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

---------------------------------------------------------------------------------------

JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.
How do engines work?
Engines are complicated. But the basics are easy.

The engine (embedded if it’s a browser) reads (“parses”) the script.
Then it converts (“compiles”) the script to the machine language.
And then the machine code runs, pretty fast.

--------------------------------------------------------------

✅Multi-line input in consol

Usually, when we put a line of code into the console, and then press Enter, it executes.

To insert multiple lines, press Shift+Enter. This way one can enter long fragments of JavaScript code.

-------------------------------------------------------------------
As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

The benefit of a separate file is that the browser will download it and store it in its cache.

Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

That reduces traffic and makes pages faster.


------------------------------------------------------------------------------
✅NaN

NaN represents a computational error.

Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.

The value NaN is unique in that it does not equal anything



--------------------------------------------------------------------------------------

✅null

is just a special value which represents “nothing”, “empty” or “value unknown”.

---------------------------------------------------------------------------------------

✅undefined
 
The meaning of undefined is “value is not assigned”.

-------------------------------------------------------------------------------------
✅isNaN

isNaN(value) converts its argument to a number and then tests it for being NaN.

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true


✅isFinite

isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

alert( isFinite("15") ); // true

------------------------------------------------------------------------------------------
✅ “precision losses”

0.1 + 0.2 is not exactly 0.3

A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.

In other words, what is 0.1? It is one divided by ten 1/10, one-tenth. In decimal numeral system such numbers are easily representable. Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).


------------------------------------------------------------------------------------------

 0️⃣an empty or a space-only string is treated as 0 in all numeric functions.
 
-----------------------------------------------------------------------------------------

✅Object.is  (also called SameValue)

 Object.is that compares values like ===
 
 two edge cases:
 1.NaN: Object.is(NaN, NaN) === true
 2.Object.is(0, -0) === false

------------------------------------------------------------------------------------------------------

✅parseInt and parseFloat

Numeric conversion using a plus + or Number() is strict. 


They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. 

parseInt('100px'); // 100
parseFloat('12.5em'); // 12.5

parseInt('a123'); // NaN

parseInt('0xff', 16); // 255

----------------------------------------------------------------------------------------------

✅Comparisons


let a = 0;
alert( Boolean(a) ); // false

👉let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!


👉A strict equality operator === checks the equality without type conversion.

👉alert( null == undefined ); // true

---------------------------------------------------------------------------------------------

✅ if else and ? :

let result = condition ? value1 : value2;

---------------------------------------------------------------------------------------------

✅ || 

 If any of its arguments are true, it returns true, otherwise it returns false.
 
 
 ✅ &&
 The AND && operator does the following:
Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
 
✅ !
The operator accepts a single argument and does the following:
Converts the operand to boolean type: true/false.
Returns the inverse value.

✅Nullish coalescing operator '??'
?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

-------------------------------------------------------------------------------------------------

✅while

✅do while

✅for

✅break

✅continue

✅Labels for break/continue

------------------------------------------------------------------------------------------------

✅switch

A switch statement can replace multiple if checks.
It gives a more descriptive way to compare a value with multiple variants.

use === for comparision

--------------------------------------------------------------------------

✅functions

Quite often we need to perform a similar action in many places of the script.

They allow the code to be called many times without repetition.

👉function name(parameters) {
  ...body...
}

👉Local variables
A variable declared inside a function is only visible inside that function.

👉Outer variables
A function can access an outer variable as well,.

👉Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.

👉Parameters
We can pass arbitrary data to functions using parameters (also called function arguments) .
  👉Default values
   If a parameter is not provided, then its value becomes undefined
   
👉Return  
A function can return a value back into the calling code as the result.

👉A function with an empty return or without it returns undefined
If a function does not return a value, it is the same as if it returns undefined
-------------------------------------------------------------------------------------------------------------



