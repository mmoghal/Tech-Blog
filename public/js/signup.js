const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");
    const messageContainer = document.querySelector("#signup-message");
  
    let response;
    try {
      response = await fetch("/api/user", {
        method: "POST",
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
        document.location.replace("/dashboard");
      } else {
        // Signup failed
        const errorData = await response.json();
        throw new Error(errorData.message);
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
  
  document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
  