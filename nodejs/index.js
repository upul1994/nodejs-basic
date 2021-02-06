var helloFromRequire =require('./test.js') // call to the test.js file


var myInvoice=require("./Modules/invoices")
//myInvoice.myName.invoice()

var y =require("./Modules/global")
console.log("Updated value is = "+y.pageCount)  // update the main value

var x =require("./Modules/users")
console.log(x.userActive)

var myOrders =require("./Modules/orders")

var myOrderClass =new myOrders.orders
myOrderClass.setOrderId(28)

//myInvoice.invoices.invoices

var o =new myOrders.orders1
o.setOrderId(10)


var item =require("./Modules/items")
const itemObj =new item.items  // class object
itemObj.viewItem()


var myModule =require("./counter.js")

var x =myModule(["Ashan","Upul","Nimal","chamara","Vimal","Nadika"]) // pass array as a argument
console.log(x)


var staff =require("./staff")
var y =staff.count(["Banana","Apple","Mango"])  // The value that return from the funcion assign to y variable
console.log(y)

var z =staff.birthdaytxt("20","September","1994") // The value that return from the funcion assign to z variable
console.log(z)

var staff =require("./staff")
console.log(staff.name)

var staff =require("./staff")
var x1 =staff.mybirthday(04,"september",1994)
console.log(x1)



var func =require("./function.js")
var value = func.Info("Upul")
console.log(value)