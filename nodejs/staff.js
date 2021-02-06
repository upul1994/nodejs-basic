// module patterns

var counter =function (arr) {
    return "There are "+arr.length+" elements in this array."
}

var getMyBirthday =function(day,month,year) {
    return `The birthday is ${day} and month is ${month} and year is ${year}.`  // In this case we put `` ,not ''
}

//module.exports =counter
//module.exports =getMyBirthday

// To export multiple variables

module.exports.count=counter
module.exports.birthdaytxt =getMyBirthday

var name ="Upul chamara"
module.exports.name =name


// second method

module.exports.mybirthday =function(date,month,year){
  return `My birthday is ${date},${month},${year}.`
}


// third method
/*
module.exports={
                           //In this case we create object to exports 
    count:counter,     
    birthdaytxt:getMyBirthday,
    name:name
} */
 





