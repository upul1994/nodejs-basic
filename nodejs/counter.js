// Modules and require()


var counter =function (arr) {
    return "There are "+arr.length+" elements in this array."
} 

module.exports =counter


var x =require("./staff")
console.log(x.count(["April","september"]))

var x =require("./staff")
console.log(x.name)




function getUserContacts() {
    console.log("Return Contacts")
}

try {
  console.log("get user info")  
} catch (e) {
    console.log("errors in getting user info")
}
finally{
   console.log("Return user")
}


// using promises

var user = new Promise((resolve,reject)=>{

    console.log("Getting user info")
    resolve("successfull")
    //reject("Failed to return user")
    }).then((data)=>{
        getUserContacts()
    
    }).catch((e)=>{
        console.log(e)
    })   
       






   
