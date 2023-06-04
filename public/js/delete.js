const deletePostHandler = async function(event) {
    console.log("clicked", event); // Log a message to the console when the delete button is clicked
    event.preventDefault(); // Prevents the default behavior of the button
    
    const postId = document.getElementById('post-id'); // Get the post ID from an element with the ID 'post-id'
    
    fetch("/api/post/" + postId.value, {
      method: "DELETE" // Send a DELETE request to the server with the post ID
    })
      .then(function() {
        document.location.replace("/dashboard"); // Redirect to the dashboard page after deleting the post
      })
      .catch(err => console.log(err)); // Log any errors to the console
  };
  
  let deleteButton = document.querySelector("#delete-btn");
  if (deleteButton) {
    deleteButton.addEventListener("click", deletePostHandler); // Attach the deletePostHandler function to the click event of the delete button if it exists
  }
  
  document.querySelector("#delete-btn").addEventListener("click", deletePostHandler); // Attach the deletePostHandler function to the click event of the delete button
  