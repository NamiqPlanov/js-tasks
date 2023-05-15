const radius = document.getElementById('radius')
const circle = document.getElementById('circle')
const btn = document.getElementById('draw')
const root = document.querySelector('.root')
const pi = 3
// A: cevrenin olculeri deyishmir
btn.onclick = ()=>{
    const rad = radius.value
    circle.style.width = rad
    circle.style.height = rad
    const p1 = document.createElement('div')
    p1.textContent = `length of curve is ${2*pi*parseInt(rad)/2}  sm`
    root.appendChild(p1)
    const p2 = document.createElement('div')
    p2.textContent = `Area of a circle is ${pi*parseInt(rad)*parseInt(rad)} sm`
    root.appendChild(p2)
}
