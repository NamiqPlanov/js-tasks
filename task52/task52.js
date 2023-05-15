let obj = prompt('Enter any string: ')
/*Object.prototype.objlength = function(){
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
console.log(obj.lastElem())*/
Object.prototype.objlength = function(){
    return this.length
}
console.log(obj.objlength())
Object.prototype.notall = function(){
    return this[0]+this[1]+'*'.repeat(obj.slice(2,obj.length).length)
}
console.log(obj.notall())
Object.prototype.gmail=function(){
    if (obj.length<5){
        return('enter string with the length of more than 5!')
    }
    else{
        let gmail1 = '@gmail.com'
        return obj+gmail1
    }
}
console.log(obj.gmail())