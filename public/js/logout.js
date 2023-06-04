const logoutHandler = function() {
    fetch("/api/user/logout", {
      method: "POST", // Send a POST request to the server for user logout
      headers: { "Content-Type": "application/json" }
    })
    .then(function() {
      alert("You have successfully logged out."); // Display a success message to the user
      document.location.replace("/login"); // Redirect to the login page after successful logout
    })
    .catch(err => console.log(err)); // Log any errors to the console
  };
  
  document.querySelector("#logout-link").addEventListener("click", logoutHandler); // Attach the logoutHandler function to the click event of the logout link
  