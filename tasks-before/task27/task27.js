function delete1(arr,target){
    let temp = []
    for (let elem of arr){
        if (elem!==target){
            temp.push(elem)
        }
    }
    return temp
}
console.log(delete1([1,2,3,4],2))
