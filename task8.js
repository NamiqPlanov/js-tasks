let a = +(prompt('Enter first number: '))
let b = +(prompt('Enter second number: '))
let c = +(prompt('Enter last number: '))
if (a > b & a > c){
    console.log(a + ' is maximal number')
}
else if( b > a & b > c) {
    console.log( b + ' is maximal number')
}
else  {
    console.log( c + ' is maximal number')
}