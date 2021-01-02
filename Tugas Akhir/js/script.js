function validateForm(event) {
    alert("A")
    var emails = document.getElementById("email").value
    var uname  = document.getElementById("Username").value
    var pass   = document.getElementById("password").value
    var cpass  = document.getElementById("conf-password").value
    var validpass = false

    if (uname.length < 5) {
        event.preventDefault()
        alert("Username must at least 5 characters!")
    }

    for(let i = 0; i < pass.length; i++){
        if(isNaN(pass.charAt(i)) == false){
            validpass = true
            break
        }
    }

    if (validpass == false) {
        event.preventDefault()
        alert("Wrong password!")
    }

    if(pass != cpass){
        event.preventDefault()
        alert("Password and Confirm Password not match!")
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }