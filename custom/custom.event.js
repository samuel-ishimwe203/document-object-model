
function loginUser(username) {
    const event = new CustomEvent("userLoggedIn",{
        detail: {username}
    });
    document.dispatchEvent(event)
};

document.addEventListener("userLoggedIn",(e)=>{
    const user = e.detail.username
    document.getElementById('welcome').textContent=`Welcome ,${user} `
})
 







