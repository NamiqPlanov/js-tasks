function gmail(str1,str2,str3){
    str2 = prompt( `Enter name before ${str1}: `)
    str1 = '@gmail.com'
    if(str2.length>5){
    return  (str2 + str1)
    }
    else{
        return(`Minimal length of the name before ${str1} must be equal to 5`)
    }
}
alert(gmail())
