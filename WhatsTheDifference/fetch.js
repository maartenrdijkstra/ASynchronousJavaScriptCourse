//older way (but newer then xhr)

fetch("user.json").then(response => {
    return response.json();
}).then(user => {
    return user.displayName.toUpperCase();
}).then(displayNameAsUppercase => {
    console.log(displayNameAsUppercase);
}).catch(e => {
    // handle my error
})

// modern way

async function showUserInConsole() {
    // wait for the response to come back
    const response = await fetch("user.json");
    // before running the code here
    const user = await response.json();

    console.log(user);
}

showUserInConsole();
