document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnFetch').addEventListener('click', sendReq)

    sessionStorage.setItem('MyUniqueUserToken', JSON.stringify(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c))
})

let sendReq = (e) => {
    const inputID = document.getElementById("inputID");

    const id = parseInt(inputID.value.trim());

    if (isNaN(id) || id <= 0) {
    alert("Digite um número positivo!");
    return;
    }

    let url = `https://jsonplaceholder.typicode.com/posts/${id}`

    let token = JSON.parse(sessionStorage.getItem('MyUniqueUserToken'))

    let h = new Headers()
    h.append('Authentication', 'Bearer ${token}')


    let req = new Request(url, {
        method: 'GET',
        mode: 'cors',
        headers: h
    })

    fetch(req)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        JSON.stringify(data)

        let title = document.getElementById('title')
        let body = document.getElementById('body')

        title.innerHTML = data.title
        body.innerHTML = data.body
    })
    .catch(err => console.error(err.message))
}

//Créditos: https://www.youtube.com/watch?v=Ju5FGcyifEA