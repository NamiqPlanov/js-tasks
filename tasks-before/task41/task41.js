let array = ['Namiq','Asad','Daniil','Ali','Turan','Zaur','Eltun']
const hidden= (names)=>{
    let newarray = names.map((array1)=>{
        console.log(array1)
        return array1[0]+array1[1]+'*'.repeat(array1.slice(2,array1.length).length)
    })
    console.log(newarray)
}
hidden(array)