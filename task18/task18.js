// A: consolelog adi dogru deyil. Callback daha uygun olardi. callback1, callback2 kimi adlandira bilersen. 
function add(question,alert,callback1){
    
    if (confirm(question)) alert()
    else callback1()
}
function showAlert(number1,number2){
    number1 = +prompt('Enter first number: ')
    number2 = +prompt('Enter second number: ')
    alert(`a+b=${number1+number2}`)
}
function showConsolelog(number3,number4){
    number3 = +prompt('Enter first number: ')
    number4 = +prompt('Enter second number: ')
    console.log(`a+b=${number3+number4}`)
}
add('Alert or Console log?',showAlert,showConsolelog)

