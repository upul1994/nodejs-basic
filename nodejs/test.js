/*function sayHelloFromRequire(){

console.log("Hello from require")

}
sayHelloFromRequire() // call to the function 
*/

/*
function getUserInfo(){

   setTimeout(() => {
       console.log("User Info")
   }, 10000);  // 10 seconds

  

} */


// getUserInfo()  // this function call after 10 seconds




/*
setTimeout(() => {
    console.log("After 3 seconds this display")   // print after 3 seconds
}, 3000); // 1s => 1000ms   */

/*
setInterval(() => {
    console.log("Hello World")   // print Hello World, 2 second by 2 second
}, 2000);    // 1s => 1000ms   

*/


var time =0
var timer =setInterval(() => {
    time+=1
    console.log("Hello World")   // print Hello World, 2 second by 2 second
    if(time>5){                  // The loop is stop when time>5
      clearInterval(timer)
    }

}, 2000);












