const { name } = require("./staff")

function getCourses(){
 
    console.log("Getting all courses")

}

getCourses()


function getCategoryCourses(id){

console.log("Category id is : "+id)


}

getCategoryCourses(100)


// Anonymous function

// In this anonymous function we pass function as parameter

var getUsers =function(){

  console.log("This is get Users")

}

function displayUsers(funcName){

   funcName()

}

displayUsers(getUsers) // pass the function as parameter


// Arrow function

var getDepartments =(id)=>{

    console.log("Id is = "+id)

}

getDepartments(30)


// Extending function using prototype

/*
function getDepartments(){


}

getDepartments.prototype.getDepartmentById()=function(){

 console.log("prototype extending the function")

}

getDepartmentById()

*/

// anonymous function

myFunc =function() {
  console.log("Function Expressions")
}


function callFunction(fun){
  fun()
}

callFunction(myFunc) // pass the function as argument



// module.exports for function

function personInfo(name){
   return name+" is lives in kaluthara."
}

module.exports.Info=personInfo





// prototypes

function Trainer(name){
  this.name =name

}

Trainer.prototype.setName =function(name){
  this.name =name
}

Trainer.prototype.sayHello =function(){
  console.log(this.name)
}

var myTrainer =new Trainer()
myTrainer.setName("upul chamara")
myTrainer.sayHello()

















