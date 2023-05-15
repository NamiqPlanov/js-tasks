function instance(obj,classFunction){
    while(obj!==0){
        if (obj ===null || obj ===undefined || typeof(classFunction)!=='function') return false
        return Object(obj) instanceof classFunction
    }

}
console.log(instance(new Date(), Date))