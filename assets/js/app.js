async function fetchingData(url) {
    try {
        const respuesta = await fetch(url)
        if (respuesta.ok === false) {
            console.log(new Error("ERROR EN EL SERVIDOR"))
        }
        const data = await respuesta.json()
    } catch (error) {
        console.error("ERROR FETCHING DATA")
    }
}

fetchingData()