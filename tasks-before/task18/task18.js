
function add(question,alert1,console1){
    if (confirm(question)) alert1()
    else console1()
}
function ask1(a,b){
    a = +prompt('enter a:')
    b = +prompt('enter b:')
    alert(`a+b=${a+b}`)
}
function ask2(c,d){
    c = +prompt('enter c:')
    d = +prompt('enter d:')
    console.log(`c+d=${c+d}`)
}
add('Alert or console?',ask1,ask2)


