function elements(){
    let arr= []
    for(let i=0;i<6;i++){
       arr.push(prompt('Enter element: ')) 
    }
    //A: ehtiyac varmi?     
    for(let j =0;j<arr.length;j++){
        arr[j] = arr[j]
    }
    console.log(arr)
}
elements()
