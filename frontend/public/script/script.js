const fetchimg = (location)=>{
    fetch('/scan?myfile='+location).then((res) => {
        res.json().then((data) => {
            if (data.error)
                display.textContent = data.error
            else {
                display.innerHTML = '<img src="./images/detection.jpg" style="width:500px">'
            }
        })
    })
}

const place = document.getElementById('myfile')
const display = document.getElementById('display')
const form = document.querySelector('form')
const button = document.querySelector('#sub')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    display.innerHTML = ""
    const location = String(place.value).split("\\")[2]
    console.log(location)
    fetchimg(location)
})