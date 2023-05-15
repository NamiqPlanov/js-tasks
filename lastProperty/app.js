let last_elem = function (arr) {
    if(arr.length ===0){
        return -1
    }
    else{
        return arr[arr.length-1]
    }

}
console.log(last_elem([1,2,3,4,5]))