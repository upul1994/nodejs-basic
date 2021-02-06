class items {

itemCode =10

getItems(){

    console.log("Get all items")
}

viewItem(){

    const itemValue =this.itemCode*25
    console.log("Final item Value = "+itemValue)
    }


}

module.exports.items=items
