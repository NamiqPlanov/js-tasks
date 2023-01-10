const url = "https://www.themealdb.com/api/json/v1/1/random.php"
const rootelem = document.querySelector('.root')
window.addEventListener('click',()=>{
    axios.get(url).then((resp)=>{
        const meal = resp.data.meals[0]
        console.log(meal)
        
    })
})
