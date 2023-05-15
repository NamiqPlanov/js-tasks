
function removechar(str){
      let str1 = ' '
     for(let index in str){
        if(index ==='0'){
            str1 = str.replace([index,''])
        }
        
     }return str1 

}
console.log(removechar('   hello'))


