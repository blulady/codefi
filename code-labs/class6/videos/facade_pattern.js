// creating a facade from the implimentation of fetch & the api

function getfetch(url, params ={}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}}`
    }).join('&')
    return fetch(`${url}?${queryString}`, {
        method:"GET",
        headers:{"Content-Type": "application/json"}
    }).then(res => res.json())
}

//need help