let obj = prompt('Enter any string: ')
Object.prototype.objlength = function(){
    return this.length
}
console.log(obj.objlength())

//------------------------------------------
Object.prototype.firstElem = function(){
    return this[0]
}
console.log(obj.firstElem())

//-----------------------------------------
Object.prototype.lastElem = function(){
    return this.charAt(this.length-1)
}
console.log(obj.lastElem())