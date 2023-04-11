const p = document.getElementById('joke')


const url = 'https://icanhazdadjoke.com/'

let getNew = async () => {
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => p.innerText = data.joke);

}