const editFormHandler = async function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    const titleEl = document.getElementById('post-title'); // Get the title input element
    const bodyEl = document.getElementById('post-body'); // Get the body textarea element
    const postId = document.getElementById('post-id'); // Get the post ID from an element with the ID 'post-id'
  
    fetch("/api/post/" + postId.value, {
      method: "PUT", // Send a PUT request to update the post
      body: JSON.stringify({
        title: titleEl.value,
        body: bodyEl.value
      }), // Convert the title and body values to a JSON string and include it in the request body
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard"); // Redirect to the dashboard page after updating the post
      })
      .catch(err => console.log(err)); // Log any errors to the console
  };
  
  let editForm = document.querySelector("#edit-post-form");
  if (editForm) {
    editForm.addEventListener("submit", editFormHandler); // Attach the editFormHandler function to the submit event of the edit form if it exists
  }
  
  document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler); // Attach the editFormHandler function to the submit event of the edit form
  