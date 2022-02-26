
document.querySelector("#submit").addEventListener("click", signUp);

let userdata = JSON.parse(localStorage.getItem("data")) || []
function signUp(event) {
    event.preventDefault()
    var name = document.querySelector("#name").value;
    var mobile = document.querySelector("#number").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var obj = {
        name : name,
        mobile : mobile,
        email:email,
        passowrd:password,
    };
    let count = 0;
    for(key in obj){
        if(obj[key].length == 0){
            alert("Please fill up all the field")
            break;
        }
        else{
            count++
        }
    }
    if(count == 4){
    userdata.push(obj)
    console.log(userdata)
    localStorage.setItem("data" , JSON.stringify(userdata));
    alert("Account creation successfully")
    window.location.href = "./login.html"
    }
    
}