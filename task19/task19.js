let object1 = {
    player: 'Ivan Brkic',
    number: 1,
    citizenship:'Croatia',
    current_club:'Neftchi PFC'
}
for (let obj2 in object1){
    console.log(`${obj2}-${object1[obj2]}`)
}