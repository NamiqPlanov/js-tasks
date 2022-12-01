function abbreviation(name){
    split = prompt('Enter full name: ')
    var split = name.trim().split(' ')
    
    if(split.length >1){
        console.log(split[0] + ' ' + split[1].charAt(0)  + '.')
    }
    console.log( split[0])
}
abbreviation()