// A: done as 🐉

let backend = {
    'name':'Namiq',
    'age':19
}
const value = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(backend)
    },500)
    setTimeout(()=>{
        rej('Duz ver backend datani')
    },450)
})
/*value.then((info)=>{
    console.log(info)
}).catch((error)=>{
    console.log(error)
    console.log('alinmadi ey user')
})*/

async function getdata(){
    try{
        const info = await value
        console.log(info)
    }
    catch(error){
        console.log(error)
    }
}
getdata()
