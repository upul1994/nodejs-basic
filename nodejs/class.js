'use strict'
function Trainer(){

this.name ="ARC Tutorials"


}
var id =10
console.log(id)


Trainer.prototype.setName=function(name){

this.name =name


}


Trainer.prototype.sayHello=function(){

     console.log(this.name)



}

var myTrainer =new Trainer()
myTrainer.setName("chamara")
myTrainer.sayHello()

/*
// ES6 classes

class Consultant{

constructor(name){
this.name =name

}

setName(name){
 this.name =name

}

sayHello(){
    console.log(this.name) 
}


}

//myConsultant =new Consultant("upul") // class object

//myConsultant.sayHello()

myConsultant = new Consultant() // class object
myConsultant.setName("ARC")
myConsultant.sayHello()

*/

class course{

  getAllCourses(a){

    this.courseName  =a
    console.log(this.courseName)
  }

  setCourse(){

    var c1 ="Physics"
    c1 ="Hello " +c1
    this.getAllCourses(c1)   // this keyword using to access a method inside the class

  }
}

var c =new course()
c.setCourse()




class course1{

    getAllCourses(){
  
      this.courseName  ="Statistics"
      
    }
  
    setCourse(){
  
      var c1 =this.courseName   // this keyword using to access a variable inside the class
      c1="Hello " +c1
      console.log(c1)
      
  
    }
  }
  
  var c =new course1()
  c.getAllCourses() // call to the function
  c.setCourse()








  







