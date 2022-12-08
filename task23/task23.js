let abbreviation = function(name){
    let splitname = name.trim().split(' ')
    if(splitname.length>1){
        return (splitname[0]+' '+splitname[1].charAt(0)+'.')
    }
    return splitname[0]
}
console.log(abbreviation('Namiq Planov'))