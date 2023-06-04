const commentFormHandler = async function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Retrieve the values from the input fields
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
    
    if (body) { // Check if the comment body is not empty
      // Send a POST request to the '/api/comment' endpoint with the comment data
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      document.location.reload(); // Reload the page after submitting the comment
    }
  };
  
  // Attach the commentFormHandler function to the submit event of the 'new-comment-form' element
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);
  