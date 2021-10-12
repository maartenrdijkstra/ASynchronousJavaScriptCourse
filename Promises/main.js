fetch('https://reqres.in/api/users/1', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "User 2837"
    })
})
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))


