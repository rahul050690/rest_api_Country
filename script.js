let input = document.querySelector("#name")

let center = document.querySelector(".center")
let second = document.querySelector(".second")
function generate(key,value) {
    let keydiv = document.createElement("div")
    keydiv.classList.add("key")
    keydiv.innerHTML = key

    let valuediv = document.createElement("div")
    valuediv.classList.add("value")
    if (key === "flags") {
        let img = document.createElement("img")
        img.src = value
        valuediv.appendChild(img)
    }
    else if (key === "maps") {
        let a = document.createElement("a")
        a.href = value
        a.target = "_blank"
        a.innerHTML = "Click Here to open Google map"
        valuediv.appendChild(a)
    }
    else
        valuediv.innerHTML = value

    let itemsdiv = document.createElement("div")
    itemsdiv.classList.add("items")
    itemsdiv.appendChild(keydiv)
    itemsdiv.appendChild(valuediv)
    second.appendChild(itemsdiv)
}
function getAPIData() {
    let name = "bharat"
    if (input.value !== "") {
        name = input.value
        input.value = ''
    }
    let request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/"+name)
    request.send()

    request.addEventListener("load", () => {
        let data = JSON.parse(request.responseText)

        center.removeChild(second)
        second = document.createElement("div")
        second.classList.add("second")
        center.appendChild(second)

        data.forEach(x => {
            generate("name",x.name.official)
            generate("capital",x.capital)
            generate("flags",x.flags.png)
            generate("area",x.area)
            generate("population",x.population)
            generate("region",x.region)
            generate("subregion",x.subregion)
            generate("continents",x.continents)
            generate("landlocked",x.landlocked)
            generate("independent",x.independent)
            generate("unMembers",x.unMembers)
            generate("borders",x.borders)
            generate("timezone",x.timezone)
            generate("currenices",x.currenices)
            generate("languages",x.languages)
            generate("maps",x.maps.googlemaps)
        });
    })
}
getAPIData()