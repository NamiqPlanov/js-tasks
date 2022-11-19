let a = +(prompt('Enter value: '));
let b = prompt('(C) or (F): ');
let c = null;
if(b == 'C'){
    c = a *1.8 + 32;
    console.log('Today is '  + c + 'degrees Farenheit');
}
else{
    c = (a - 32)*1.8 ;
    console.log('Today is '  + c + 'degrees Celsius');
}