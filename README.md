# Tech Blog

A CMS-style blog site where users can create, read, update, and delete blog posts. Users can also leave comments on the blog posts.

## Application Image

![alt Image of the application](https://github.com/mmoghal/tech-blog/tree/main/public/images/tech.png)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine.
2. Install the required dependencies by running the following command:
   ```
   npm install
   ```
3. Set up the database by executing the SQL script in the `db/schema.sql` file.
4. Configure the database connection by adding your credentials in the `.env` file.
5. Optionally, seed the database with sample data by running the following command:
   ```
   npm run seed
   ```

## Usage

1. Start the application by running the following command:
   ```
   npm start
   ```
2. Open your web browser and visit `http://localhost:3001` to access the Tech Blog.

## Features

- User authentication: Sign up, sign in, and sign out functionalities.
- User authorization: Only logged-in users can create, update, and delete their own blog posts.
- Homepage: Displays existing blog posts with titles and creation dates.
- Blog post detail page: Shows the title, contents, creator's username, and creation date. Allows users to leave comments.
- Dashboard: Displays the user's own blog posts and provides options to add new posts or update/delete existing posts.
- Comment functionality: Users can leave comments on blog posts, which are displayed with the comment creator's username and creation date.

## Technologies

- Node.js
- Express.js
- Sequelize ORM
- Handlebars.js
- MySQL
- HTML/CSS

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Questions

If you have any questions, feel free to reach out:

- GitHub: [mmoghal](https://github.com/mmoghal/tech-blog)
- Email: mmoghal29@gmail.com
