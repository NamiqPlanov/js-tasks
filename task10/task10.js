let random_number = +(parseInt((Math.random()*100+1)));
let added = +(prompt('Enter any number: '));
let times = 1;
while (added !== random_number) {
    times++;
        if(added > random_number){
           added = +prompt('This is more. Enter more little number!')
        }
        else{
            added = +prompt('This is less. Enter bigger number!')
        }
}
console.log(`${random_number} is found after trying for ${times} times!`)