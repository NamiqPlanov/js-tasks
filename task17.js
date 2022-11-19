function ask(question,man,woman){
    if (confirm(question)) man()
    else woman()
}
function showMan(name){
    name = prompt('What is your name and surname?')
    alert(`hello Mr ${name}`)
}
function showWoman(name1){
    name1 = prompt('What is your name and surname?')
    alert(`hello Mrs ${name1}`)
}
ask('Man or woman?',showMan,showWoman)