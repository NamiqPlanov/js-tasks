
let abbreviation = function(name){
    let splitname = name.trim().split(' ')
    if(splitname.length>1){
        return (splitname[0]+' '+splitname[1].charAt(0)+'.')
    }
}

// A: done ✅
function abbreviation(name){
    split = prompt('Enter full name: ')
    var split = name.trim().split(' ')
    
    if(split.length >1){
        console.log(split[0] + ' ' + split[1].charAt(0)  + '.')

    }
    return splitname[0]
}

console.log(abbreviation('Namiq Planov'))

abbreviation()

