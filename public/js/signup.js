const signupFormHandler = async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const usernameEl = document.querySelector("#username-input-signup"); // Get the value of the username input
    const passwordEl = document.querySelector("#password-input-signup"); // Get the value of the password input
    const messageContainer = document.querySelector("#signup-message"); // Get the message container element
    
    let response;
    try {
      response = await fetch("/api/user", {
        method: "POST", // Send a POST request to create a new user
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
      });
  
      if (response.ok) {
        // Signup successful
        messageContainer.innerHTML = "Signup complete! You can now login.";
        messageContainer.classList.add("success");
        document.location.replace("/dashboard"); // Redirect to the dashboard page after successful signup
      } else {
        // Signup failed
        const errorData = await response.json();
        throw new Error(errorData.message); // Throw an error with the error message from the response
      }
    } catch (error) {
      console.log(error);
      // Display the error message
      messageContainer.innerHTML = "Error: " + error.message;
      messageContainer.classList.add("error");
  
      // Log the response body
      const responseBody = response ? await response.text() : 'No response';
      console.log("Response body:", responseBody);
    }
  
    if (response.headers.get("Content-Type").includes("application/json")) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    } else {
      // Not a JSON response, handle appropriately
      throw new Error('Server error');
    }
  };
  
  document.querySelector("#signup-form").addEventListener("submit", signupFormHandler); // Attach the signupFormHandler function to the submit event of the signup form
  