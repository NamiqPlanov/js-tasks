let random_number = +(parseInt((Math.random()*50+1)));
let added = +(prompt('Enter any number: '));
let times  =1 ;
while (added !== random_number) {
    times++;
        if(added > random_number){
           
           added = +prompt('This is more. Enter more little number!')
        }
        else{
            added = +prompt('This is less. Enter bigger number!')
        }
        
} if(times == 1){
            console.log('Yo will get 1000 AZN')
        }
          if(times<=5){
            console.log('You will get 750 AZN')
        }
         else if(6 <= times <= 9){
            console.log('You will get 250 AZN')
        }
        if(times >=10){
            console.log('pay 100 AZN ')
        }
console.log(`${random_number} is found after trying for ${times} times!`)