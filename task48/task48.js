const url = "https://www.swapi.tech/api/people/"
const rootelem = document.querySelector('.root')

axios.get(url).then((resp)=>{
    const user = resp.data.results
    user.forEach((person)=>{
        const h3 = document.createElement('h3')
        h3.textContent = person.name
        rootelem.appendChild(h3)
    })
})