const arr = [10,10,34,46,,false,NaN,46,20,30,45,32,34]
 Array.prototype.isempty = function(){
    return this.lenght === 0 
 }
 console.log(arr.isempty())
//-----------------------------------------------------------------
Array.prototype.removeDuplicates = function(value,index,self){
     return self.indexOf(value) ===index
}
var unique = arr.filter(removeDuplicates())
 console.log(arr.unique)
//-----------------------------------------------------------------------
 Array.prototype.clear = function(){
    return this.splice(0,this.length)
 }
console.log(arr.clear())
//----------------------------------------------------------------------
Array.prototype.removeFalsies = function(){
    this = this.filter(function(n){
        return (n !== undefined && n !== NaN && n!==null && n!==false)
    })
}
console.log(arr.removeFalsies())