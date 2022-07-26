function validate(){
    var password_regex = /^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,20}$/;
    var fn = document.getElementById("first_name").value;
    var ln = document.getElementById("last_name").value;
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("confirm_password").value;
    var gender= document.getElementById('gender').value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phnum= document.getElementById("phnum1").value;
   
    if (fn==null || fn=="") {
      alert("First name can't be blank");
      return false;
    }
    if (ln==null || ln=="") {
      alert("Last name can't be blank");
      return false;
    }
    if(pass==null || pass=="") {
      alert("Password can't be blank");
      return false;
    }
    if(pass.match(password_regex) != pass) {
      alert("The password must conatin atleast one lowercase, one uppercase alphabet, one special character and should be between 6-20 characters");
      return false;
    } 
    if(pass.localeCompare(cpass) != 0) {
      alert("Both Passwords must match");
      return false;
    }
    if(gender==null || gender=="") {
      alert("Date of Birth can't be blank");
      return false;
    }
    if(address==null || address=="") {
      alert("Date of Birth can't be blank");
      return false;
    }
    if(email==null || email=="") {
      alert("Email can't be blank");
      return false;
    }
    if(phnum==null || phnum=="") {
      alert("Phone number can't be blank");
      return false;
    }
    if(phnum_length != 10) {
      alert("Phone number should be of 10 digits");
      return false;
    }
    console.log("Validated");
    return true;
    document.getElementById("shiv").innerHTML = phnum;
}


function getter(){
  var x=document.getElementById("date").value;
  sessionStorage.setItem("NAME", x);
  window.location.href = "Confirmation.html";
  return;
}

function feesgenerate() {
  var no_seats = document.getElementById('seats').value;
  var y = document.getElementById('total');
  var total_charge=parseInt(no_seats)*1200;
  //1200 ki jagah query se value ayegi
  y.innerHTML = total_charge;
}

