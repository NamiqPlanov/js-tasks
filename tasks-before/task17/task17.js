function ask(question,man,woman){
    if (confirm(question)) man()
    else woman()
}
function show1(n){
    n = prompt('name:')
    alert(`hello mr ${n}`)
}
function show2(n2){
    n2 = prompt('enter name:')
    alert(`hello mrs ${n2}`)
}
ask('man or woman?',show1,show2)
