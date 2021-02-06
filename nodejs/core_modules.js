// read data in text document
/*
var fs =require("fs")  // fs is built-in module

fs.readFile("text.txt","utf8",(err,data)=>{    // encode using utf8

    console.log(data)
})  */

// write data to the text document

/*
var fs =require("fs")
fs.writeFile("text.txt","Hello World",()=>{
    console.log()
})*/


// url module

var url =require("url")

const urlLink = "http://localhost:50/get"

var urlObj =url.parse(urlLink)   

console.log(urlObj.port)
console.log(urlObj.query)
console.log(urlObj.pathname)




// events module

// Event Emitter

var events =require("events")

var myEmitter =new events.EventEmitter()


myEmitter.on("someEvents",(msg)=>{
    console.log(msg)
})

myEmitter.on("showMyName",(msg)=>{
    console.log(msg) 
})

//myEmitter.emit("someEvents","chamara")
//myEmitter.emit("showMyName","upul")

// using util module

var util = require("util")
var person = function(name){
    this.name =name
}

util.inherits(person,events.EventEmitter)

var ashen =new person('Ashen')
var ishanka =new person('Ishanka')
var sciker =new person('Sciker')

var people =['ashen','ishanka','sciker']

people.forEach((person)=>{
   person.on("run",(msg)=>{
       console.log(person.name+' run :'+msg)

   })
})

ashen.emit("run","ado")
ishanka.emit("run","aibn")









// reading and writing files

// read file


var fs =require("fs")
var readMe =fs.readFileSync("mytxt.txt","utf8")  // using readFileSync method

console.log(readMe)


/*
var fs1 =require("fs")
fs1.readFile("mytxt.txt","utf8",(err,data)=>{    // using readFile method, this method is asynchronous method
 console.log(data)

})

console.log("upul chamara") */

/*
var fs2 =require("fs")

fs2.readFile("mytxt.txt","utf8",(err,data)=>{
   fs2.writeFile("writeMe.txt",data,(err)=>{
          console.log("write successfull")
   })
})
*/


// write file


//fs.writeFileSync("writeMe.txt","upul chamara")   // using writeFileSync method



// delete files

/*
var fs =require('fs')
fs.unlink("mytxt.txt",(err)=>{}) 

*/


// creating and removing directories


// create a directory

/*
var fs =require("fs")
fs.mkdirSync("Hello")  */    //create the Hello directory


// remove directory

/*
var fs = require("fs")
fs.rmdirSync("Hello")  // remove the Hello directory
*/

// using mkdir() and rmdir()


// mkdir() method

var fs = require("fs")
fs.mkdir("hello",(err)=>{
  console.log("The folder has been created successfully")
})

// rmdir()  method

var fs =require("fs")

fs.rmdir("hello",(err)=>{
    console.log("The folder has been deleted successfully")
})

/*
var fs =require("fs")

// In this case create the directory,create text document in side this directory and read the text inside this text document

fs.mkdir("staff",()=>{
    fs.writeFile("staff/new.txt","Hello bro",()=>{
        fs.readFile("staff/new.txt","utf8",(err,data)=>{
            console.log(data)
        })
    })
})  */


// In this case create Test directory,read text from mytxt.txt text document and next write text into text.txt text document inside the Test directory

var fs = require("fs")
fs.mkdir("Test",()=>{
    fs.readFile("mytxt.txt","utf8",(err,data)=>{
       fs.writeFile("Test/test.txt",data,()=>{})
    })
})





































