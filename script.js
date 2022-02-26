var images=[
    "https://n.nordstrommedia.com/id/9c4ee6ea-6f6c-4783-bc77-b44935eaa230.jpeg?h=720&w=1608",
    "https://n.nordstrommedia.com/id/d2f24d76-0bef-41b9-9887-a52b5031d227.jpeg?h=720&w=1608",
    "https://n.nordstrommedia.com/id/df5c7535-4a10-4222-a8f9-cd818284e6f3.jpeg?h=720&w=1608",
    ]

    localStorage.setItem("images",JSON.stringify(images))


    function slide(){
        let images=JSON.parse(localStorage.getItem("images"))

        let div=document.getElementById("slideshow")
        let img=document.createElement("img")
        // let div=document.getElementById("deba")
        // img.className="slideimg"
        img.setAttribute("id","slideimg")


        let i=0
        a=setInterval(function(){
            if(i==images.length){
                i=0
            }
            img.src=images[i]
            div.append(img)
            i++
        },3000)
    }
    window.unload=slide()

    var image=[
        "https://n.nordstrommedia.com/id/d874cd09-03e8-4008-a02b-b257eccb88ea.jpeg?h=200&w=1608",
        "https://n.nordstrommedia.com/id/dbed3ea5-c00b-469d-8b7b-6591cabe3659.jpeg?h=200&w=1608"
    ]
    localStorage.setItem("img",JSON.stringify(image))

    function slideone (){
        let images=JSON.parse(localStorage.getItem("image"))

        let div=document.getElementById("slide-one")

        let img=document.createElement("img")
        img.setAttribute("id","slideimg-one")
        var div1=document.createElement("div")
        div1.innerText="debasish"

        let i=0
        b=setInterval(function(){
            if(i==image.length){
                i=0
            }
            img.src=image[i]
            div.append(img)
            i++
        },2000)
      
    }
    window.unload=slideone()




    function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}




function view(){
    location.replace("/viewpageone.html")
}
function viewOne(){
    location.replace("/viewpagetwo.html")
}
function viewTwo(){
    location.replace("/viewpagethree.html")
}


function createAccount() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// signup 

document.querySelector("#submit").addEventListener("click", signUp);

    let userdata = JSON.parse(localStorage.setItem("data")) || []
    function signUp(event) {
        event.preventDefault()
        var name = document.querySelector("#name").value;
        var mobile = document.querySelector("#mobile").value;
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
        // window.location.href = "./login.html"
        }
        
    }


//  login 
document.querySelector("#submit").addEventListener("click",signIn)
    var storeData = JSON.parse(localStorage.getItem("data"))

    function signIn(event){
        event.preventDefault()
        var email = document.querySelector("#emailid").value;
        var password = document.querySelector("#password").value;
            for(var i=0; i<storeData.length; i++){
                if(storeData[i].email == email && storeData[i].passowrd == password){
                    alert("Log In Successfully")
                    // window.location.href = "index.html"
                    return
                }
            }
        alert("Incorrect Username or Password !")
    }




