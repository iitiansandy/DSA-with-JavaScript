

/*
1. Print pyramid star pattern
            * 
           * * 
          * * * 
         * * * * 
        * * * * *
*/

function printPyramid(n){
    var str = '';
    // outer loop for rows
    for(var i=1; i<=n; i++){
        // printing spaces
        for(var k=1; k<=n-i; k++){
            str += " ";
        }
        // printing stars
        for(var j=1; j<=i; j++){
            str += "* ";
        }
        console.log(str);
        str = "";
    }
}
printPyramid(5)


// ------------------------------------------------------------------------------ //

/*
2. Inverse Pyramid Star Pattern

            * * * * * 
             * * * * 
              * * * 
               * * 
                * 
    */

function inversePyramid(n){
    let str = '';
    for(let i=0; i<=n; i++){
        for(let j=1; j<=i; j++){
            str += " ";
        }
        for(let k=1; k<= (n-i); k++){
            str += "* "
        }
        console.log(str)
        str = "";
    }
    
}
inversePyramid(5)

// ------------------------------------------------------------------------------ //

/*
3. Right Triangle Star Pattern

*
* *
* * *
* * * *
* * * * *

*/

function rightTriangle(n){
    var str = '';
    for(var i=1; i<=n; i++){
        for(var j=1; j<=i; j++){
            str += "*";
        }
        str += "\n"
    }
    console.log(str);
}
rightTriangle(5)


// ------------------------------------------------------------------------------ //

/*
4. Left Triangle Star Pattern
           * 
         * * 
       * * * 
     * * * * 
   * * * * * 

*/

function leftTriangle(n){
    var str = '';
    for(var i=1; i<=n; i++){
        for(var j=1; j<=n-i; j++){
            str += " ";
        }
        for(let k=0; k<i; k++){
            str += "*"
        }
        str += "\n"
    }
    console.log(str);
}
leftTriangle(10)


// ------------------------------------------------------------------------------ //


/*
5. Square Star Pattern
*****
*****
*****
*****
*****

*/

function squarePattern(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += "* "
        }
        str += "\n"
    }
    console.log(str);
}
squarePattern(10)


// --------------------------------------------------------------- //

/*
6. Hollow Square Pattern
*****
*   *
*   *
*   *
*****

*/

function hollowSquarePattern(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                str += "*";
            }
            else if (j === 0 || j === n - 1) {
                str += "*";
            }
            else {
                str += " ";
            }
        }
        str += "\n";
    }
    console.log(str);
}
hollowSquarePattern(5)


// --------------------------------------------------------------- //


/*
7. Hollow Triangle Pattern
*
**
* *
*  *
*   *
******

*/

function hollowTriangle(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (i === n) {
                str += "*";
            }
            else if (j == 0 || j == i-1){
                str += "*";
            }
            else {
                str += " ";
            }
        }
        str += "\n";
    }
    console.log(str);
}
hollowTriangle(5)


/* --------------------------------------------------------------- */

/*
8. Diamond Pattern
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

function diamondPattern(n){
    let pattern = "";
    // upside pyramid
    for (let i=0; i<=n; i++){
        // printing spaces
        for(let j=n; j>i; j--){
            pattern += " ";
        }
        // printing star
        for (let k=0; k < (2*i - 1); k++){
            pattern += "*";
        }
        pattern += "\n";
    }
    // downside pyramid
    for(let i=1; i<=n-1; i++){
        // printing spaces
        for(let j=0; j<i; j++){
            pattern += " ";
        }
        // printing stars
        for(let k=2*(n-i)-1; k>0; k--){
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern);
}
diamondPattern(5)


// --------------------------------------------------------------- //

/*
9. Hollow Diamond Pattern
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
*/

function hollowDiamond(n){
    let pattern = "";
    // upper half diamond
    for (let i=0; i<=n; i++){
        // printing spaces
        for(let j=n; j>i; j--){
            pattern += " ";
        }
        // printing star
        for(let k=0; k<2*i-1; k++){
            if(k===0 || k===2*i-2){
                pattern += "*";
            }
            else{
                pattern += " ";
            }
        }
        pattern += "\n";
    }
    // downside diamond
    for(let i=1; i<=n-1; i++){
        // printing spaces
        for(let j=0; j<i; j++){
            pattern += " ";
        }
        // printing star
        for(let k=2*(n-i)-1; k>=1; k--){
            if(k===1 || k===2*(n-i)-1){
                pattern += "*";
            }
            else{
                pattern += " ";
            }
        }
        pattern += "\n";
    }
    console.log(pattern);
}
hollowDiamond(5)


// --------------------------------------------------------------- //


/*
10. Hourglass Star Pattern
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

*/

function hourGlass(n){
    let timeGlass = "";
    // Reversed pyramid pattern
    for(let i=0; i<n; i++){
        // printing spaces
        for(let j=0; j<i; j++){
            timeGlass += " ";
        }
        // printing star
        for(let k=0; k < 2*(n-i) - 1; k++){
            timeGlass += "*";
        }
        timeGlass += "\n";
    }
    // pyramid pattern
    for (let i=2; i<=n; i++){
        // printing spaces
        for (let j=n; j>i; j--){
            timeGlass += " ";
        }
        // printing star
        for(let k=0; k<2*i-1; k++){
            timeGlass += "*";
        }
        timeGlass += "\n";
    }
    console.log(timeGlass);
}
hourGlass(5)


// --------------------------------------------------------------- //

/*
11. Right Pascal Star Pattern
*
**
***
****
*****
****
***
**
*

*/
function rightPascal(n){
    let pattern = "";
    for(let i=1; i<=n; i++){
        for(let j=0; j<i; j++){
            pattern += "*";
        }
        pattern += "\n";
    }
    for(let i=1; i<=n-1; i++){
        for(let j=0; j<n-i; j++){
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern);
}
rightPascal(5)

// --------------------------------------------------------------- //


/*
12. Left Pascal Star Pattern
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
*/

function leftPascal(n){
    let pattern = "";
    for(let i=1; i<=n; i++){
        for(let j=0; j<n-i; j++){
            pattern += " ";
        }
        for(let k=0; k<i; k++){
            pattern += "*";
        }
        pattern += "\n";
    }
    for(let i=1; i<=n-1; i++){
        for(let j=0; j<i; j++){
            pattern += " ";
        }
        for(let k=0; k<n-i; k++){
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern);
}
leftPascal(5);





