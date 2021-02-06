class Orders{

setOrderId(id){
 
    console.log("Orders id received : "+id)

}

showOrders(){

}

viewOrders(){

}


}

module.exports.orders =Orders


var pages =require("./global")

class orders{


setOrderId(id){

console.log("Page count inside the orders : "+pages.pageCount)

}



}

module.exports.orders1=orders

