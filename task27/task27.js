function remove(arr,choosen){
    let temp = []
    for(let i =0;i<arr.length;i++){
        if(arr[i]!==choosen){
            temp.push(arr[i])
        }
    }
    return temp
}
console.log(remove([10,12,13],10))
function remove2(arr,choosen){
    let temp = []
    for(let elem of arr){
        if(elem !== choosen){
            temp.push(elem)
        }
    }
    return temp
}
console.log(remove2([10,12,13],10))