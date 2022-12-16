// A: done ✅
const now = Date.now()
const birthyear = new Date(2003,11,5)
birthyearanswer = now -birthyear.getTime()
console.log(`years past:${parseInt(birthyearanswer/(365*86400000))}`)
console.log(`months past:${parseInt(birthyearanswer/(30*86400000))}`)
console.log(`days past:${parseInt(birthyearanswer/(1*86400000))}`)
