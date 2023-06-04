const loginFormHandler = async function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    const usernameEl = document.querySelector("#username-input-login"); // Get the username input element
    const passwordEl = document.querySelector("#password-input-login"); // Get the password input element
  
    fetch("/api/user/login", {
      method: "POST", // Send a POST request to the server for user login
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }), // Convert the username and password values to a JSON string and include it in the request body
      headers: { "Content-Type": "application/json" }
    })
      .then(function(response) {
        if (!response.ok) {
          console.log(err); // Log any errors to the console
          return;
        }
        alert("You have successfully logged in."); // Display a success message to the user
        document.location.replace("/dashboard"); // Redirect to the dashboard page after successful login
      })
      .catch(err => console.log(err)); // Log any errors to the console
  };
  
  document.querySelector("#login-form").addEventListener("submit", loginFormHandler); // Attach the loginFormHandler function to the submit event of the login form
  