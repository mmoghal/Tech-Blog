const newFormHandler = async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const titleEl = document.querySelector('input[name="post-title"]').value; // Get the value of the post title input
    const bodyEl = document.querySelector('textarea[name="post-body"]').value; // Get the value of the post body textarea
    
    const token = localStorage.getItem("token"); // Get the token from the localStorage
    await fetch(`/api/post`, {
      method: "POST", // Send a POST request to create a new post
      body: JSON.stringify({
        title: titleEl,
        body: bodyEl
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}` // Include the token in the request headers for authentication
      }
    });
    
    document.location.replace("/dashboard"); // Redirect to the dashboard page after successful post submission
  };
  
  document.querySelector("#new-post-form").addEventListener("submit", newFormHandler); // Attach the newFormHandler function to the submit event of the new post form
  