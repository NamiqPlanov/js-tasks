let array = ['Namiq','Asad','Daniil','Ali','Turan','Zaur','Eltun']
const hidden= (names)=>{
    let newarray = names.map((array1)=>{
        console.log(array1)
        return array1[0]+array1[1]+'*'.repeat(array1.slice(2,array1.length).length)
    })
    console.log(newarray)
}
hidden(array)


let arr = ['Namiq','Ayxan','Qaqas']
const hid = (names1)=>{
    let newarr = names1.map((arr1)=>{
        console.log(arr1)
        return arr1[0]+arr[1]+'$'
    })
}