var courses ={

Name : "Node",
description : "This is node js tutorial series",
cost: 120


}
console.log(courses)
console.log(courses.Name)
console.log(courses.description)


// this keyword

var courseWork = {

getCourses:function(courseName){

    console.log(this)

}
}

courseWork.getCourses("Node Js")



