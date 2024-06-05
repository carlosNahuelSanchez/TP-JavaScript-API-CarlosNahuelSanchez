//Extraer a los datos de la API con manejo de errores
async function fetchingData(url) {
    try {
        const respuesta = await fetch(url)
        console.log(respuesta)
        if (respuesta.ok === false) {
            console.log(new Error("ERROR EN EL SERVIDOR"))
        }
        let data = await respuesta.json()
        renderFox(data);
    } catch (error) {
        console.error("ERROR FETCHING DATA")
    }
}

//Renderizar los datos en el HTML
async function renderFox(data) {
    const imageFox = document.createElement("div")
    imageFox.innerHTML = `
    <div class ="grid text-center">
        <div class="g-col-6"><img src="${data.image}" class = "img-fluid m-2" width="800" height="auto" ></div>
    </div>`
    document.body.appendChild(imageFox)
}

//Llamar a la extraccion de datos
fetchingData("https://randomfox.ca/floof/")
fetchingData("https://randomfox.ca/floof/")
fetchingData("https://randomfox.ca/floof/")
fetchingData("https://randomfox.ca/floof/")

