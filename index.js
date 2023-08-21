
//For Dismiss msg
let goBack = () => history.back();

// To store data in the local Storage

let storeData = () => {
  let email = document.getElementById("email").value;
  localStorage.setItem("emailAddress", `${email}`);
  }

// To store data from the local Storage
let getData = () => {
  let x = localStorage.getItem("emailAddress");
 document.getElementById("showEmail").innerHTML = x;
}

