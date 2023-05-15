
const arr = [1,2,'hello',5,'bro']
const sort2 = (arr1=[])=>{
    const sort3 = (a,b)=>{
        if(typeof a ==='number'&& typeof b ==='string'){
            return -1
        }
        if(typeof a ==='string' && typeof b ==='number'){
            return 1
        }
        if(typeof a ==='string' && typeof b ==='string'){
            return a.charCodeAt(0)-b.charCodeAt(0)
        }
        return a-b
    }
    const answer2 = arr.sort(sort3)
    return (answer2)
}
console.log(sort2(arr))