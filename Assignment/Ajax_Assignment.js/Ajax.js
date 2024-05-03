const Inputform = document.getElementById("Inputform");
const response_submit = document.getElementById("response_submit");

Inputform.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("pwd").value;
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://fakestoreapi.com/auth/login", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // Define a callback function for when the request completes
  xhr.onload = function () {
    if (xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      // console.log(`Login successful ${username} and ${password} "Token": ${response.token}`);
      alert(
        `Login successful username: ${username} and  password:${password} "Token": ${response.token}`
      );
      response_submit.textContent = `Login successful!`;document.body.style.backgroundColor = "#f0f0f0"; // Set background color
      response_submit.style.backgroundColor = "#ff6347"; // Set background color


    } else {
      let error_message =
        xhr.responseText || "You entered wrong username or password";
      // response_submit.textContent = `Login failed: ${error_message}`;
      alert(error_message);
      response_submit.textContent = `Login failed: ${error_message}`;
      response_submit.style.backgroundColor = "#ff6347"; // Set background color

    }
  };
  // Send the request with the login credentials as JSON
  const loginSuccessfully = JSON.stringify({ username, password });
  console.log("loginSuccessfully", loginSuccessfully);
  xhr.send(loginSuccessfully);
});
