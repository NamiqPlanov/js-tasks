const same = function similar(value1,value2,self1,self2){
    return self1.indexOf(value1) === self2.indexOf(value2)
 }
 const arr1 = [1,2,3,4,5,8,9]
 const arr2 = [2,3,4,6,7,10,11]
 let arr3 =null
 const samenumbers = arr3.filter(same)
 console.log(samenumbers)