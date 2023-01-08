const array = [10,20,'hello','goodbye',56,45,'jabir']
const sort = (arr=[])=>{
    const sort1=(a,b)=>{
        if(typeof a ==='number' && typeof b ==='string'){
            return -1
        }
        if(typeof a ==='string' && typeof b ==='number'){
            return 1
        }
        if(typeof a ==='string' && typeof b ==='string'){
            return a.charCodeAt(0) - b.charCodeAt(0)
        }return a-b
    }
    const answer = array.sort(sort1)
   return(answer)
}
console.log(sort(array))