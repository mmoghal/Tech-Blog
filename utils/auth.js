const authenticateUser = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login"); // If the userId is not found in the session, redirect the user to the login page
    } else {
      next(); // If the userId is found in the session, proceed to the next middleware or route handler
    }
  };
  
  module.exports = authenticateUser; // Export the authenticateUser function to be used in other parts of the application
  