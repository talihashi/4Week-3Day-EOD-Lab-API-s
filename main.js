const btn = document.querySelector("button")
const body = document.querySelector("body")

function onClick () {
    console.log("Button clicked")
    axios.get("https://swapi.dev/api/planets/2/").then(promise => {
        let residents = promise.data.residents
        for (let i = 0; i < residents.length; i++) {
                axios.get(residents[i]).then(res => {
                    let newElement = document.createElement("h2")
                    newElement.textContent = res.data.name
                    body.appendChild(newElement)
                })
        }
    

    }).catch(err => {
        alert(err)
    })
}

btn.addEventListener("click", onClick)