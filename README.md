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






