let str = prompt('Enter any word or combination of words: ')

String.prototype.Capitalize = function(){
    return this[0].toUpperCase()+this.slice(1,this.length)
}
console.log(str.Capitalize())

String.prototype.removeWhiteSpaces = function(str2){
     str2 = this.replaceAll(' ','')
     return str2
}

console.log(str.removeWhiteSpaces())


//-------------------------------------------------------------
let str2 = 'hello bro12234566'
String.prototype.filterDigits = function(){
    var num = this.match(/\d/g)
    num = num.join(" ")
    return num
}

console.log(str2.filterDigits())