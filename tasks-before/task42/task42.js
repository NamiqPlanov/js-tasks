const root = document.querySelector('.root')
let msg = ''
window.addEventListener('keydown',(a)=>{
    msg +=a.key
    if(msg === 'simsimacil'){
        console.log('haladi')
    }
    console.log(msg)
})