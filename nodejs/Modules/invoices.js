var invoice =function(){

    console.log("Hello from Invoices")
}

module.exports.myName=invoice

// shared modules

var pages =require("./global")

console.log(pages.pageCount)

var invoices =function(){

 pages.pageCount=20
 console.log("Page count value : "+pages.pageCount)


}
invoices()
module.exports.invoices=invoices

