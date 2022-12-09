<<<<<<< HEAD
let abbreviation = function(name){
    let splitname = name.trim().split(' ')
    if(splitname.length>1){
        return (splitname[0]+' '+splitname[1].charAt(0)+'.')
=======
// A: done ✅
function abbreviation(name){
    split = prompt('Enter full name: ')
    var split = name.trim().split(' ')
    
    if(split.length >1){
        console.log(split[0] + ' ' + split[1].charAt(0)  + '.')
>>>>>>> 80f799f716018540b54b04355358637b0e7fa4b5
    }
    return splitname[0]
}
<<<<<<< HEAD
console.log(abbreviation('Namiq Planov'))
=======
abbreviation()
>>>>>>> 80f799f716018540b54b04355358637b0e7fa4b5
