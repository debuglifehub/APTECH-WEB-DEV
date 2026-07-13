function validateForm() {
  
  let name = document.getElementById("name")

if(name==""){
  alert("Please enter your name")
  return false;
}

let password = document.getElementById("password")

if(password.length < 8){
  alert("Password must be at least 8 Characters")
  return false;
}

return true;
}


console.log(password.length)