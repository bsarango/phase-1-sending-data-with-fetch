// Add your code here
function submitData(userName,userEmail){    //two string parameters
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    })
    .then(resp => resp.json())
    .then(data=> {
        const body = document.querySelector("body")
        body.textContent = data.id
    })
    .catch(function (error){
        //alert("request to https://localhost:3000/user failed, reason: Unauthorized Access")
        
        const body = document.querySelector("body")
        body.textContent = error.message
    })
}