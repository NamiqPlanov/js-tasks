
/*let abbreviation = function(name){
    let splitname = name.trim().split(' ')
    if(splitname.length>1){
        return (splitname[0]+' '+splitname[1].charAt(0)+'.')
    }
}



function abbrev(name){
    name = prompt('enter fullname:')
    var split = name.trim().split(' ')
    if (split.length>1){
        alert(split[0]+' '+split[1].charAt(0)+".")
    }
    return split[0]
}
abbrev()*/
function abb(name){
    name = prompt('enter your name:')
    splitn = name.trim().split(' ')
    if (splitn.length>1){
        return splitn[0].charAt(0)+'.'+' '+splitn[1].charAt(0)+'.'
    }
}
console.log(abb())



