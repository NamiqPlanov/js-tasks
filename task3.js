let a = Number(prompt('Enter value: '));
let b = prompt('(K)m or (M)ile: ')
let c ;
if (b == 'K') {
 c = a * 0.62;
 alert ('You drive ' + c + ' miles in a day.');
}
else { 
    c = a / 0.62;
    alert ('You drive ' + c + ' kms in a day.');
}
