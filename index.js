let conts = []

function storTaska(){
    let string = JSON.stringify(conts)
    localStorage.setItem("conten",string)
}
    document.getElementById("rarer").innerHTML = ""
document.getElementById("but").addEventListener("click",function(){
    document.getElementById("rarer").innerHTML = ""

    let user = document.getElementById("user").value
    let pass = document.getElementById("pass").value

    document.getElementById("user").placeholder = "Username"
    document.getElementById("pass").placeholder= "Password"

    let cont = {
        "username":`${user}`,
        "password":`${pass}`
    }
    if(pass.length >= 8 && user !== ""){
        conts.push(cont)
        storTaska()
    }else{
        document.getElementById("rarer").innerHTML = "Password must not exceed 8"
    }

})


