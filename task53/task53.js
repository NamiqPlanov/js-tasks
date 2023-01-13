let number = +prompt('Enter anby number: ')

Number.prototype.isPrime = function(){
    if(this%1===0 && this%2===0 && this%this ===0){
        return('Number is not prime, number is composite')
    }
   
    else{
        return('Number is prime')
    }
}
console.log(number.isPrime())

Number.prototype.isEven = function(){
    if(this%2 === 0){
        return ('Number is even')
    }
    else{
        return ('number is odd')
    }
}
console.log(number.isEven())

Number.prototype.isInfinty = function(){
    if(this / 0){
        return('It is infinity')
    }
    else{
        return ('It is not infinity')
    }
}
console.log(number.isInfinty())