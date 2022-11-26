let object1 = {
    player: 'Ivan Brkic',
    number: 1,
    citizenship:'Croatia',
    current_club:'Neftchi PFC'
}
let count = 0
for(let properties in object1){
    count +=1
}
alert(`There are ${count} properties in object1`)