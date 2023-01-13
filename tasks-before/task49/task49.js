// A: done ✅
async function getData(){
    const value = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    return value.data.meals[0]
}
async function writeData(){
    const written = await getData()
    console.log(written)
}
writeData()
