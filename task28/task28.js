/*function upperc(str){
    let word = prompt('Enter word: ')
    for(let index in str){
        if(index ==='0'){
            word +=str[index].toUpperCase()
            console.log(word) 
        }else{
            word+=str[index]
            console.log(word) 
        }
    }console.log(word) 
}
upperc()*/
function removechar(str){
      let str1 = ' '
     for(let index in str){
        if(index ==='0'){
            str1 = str.replace([index,''])
        }
        
     }return str1 

}
console.log(removechar('hello'))
