# Node JS Express PostgreSQL Application for Image Uploads on Cloudinary

This is a simple Node JS Express application that uses PostgreSQL database to store image information and Cloudinary API to upload images. The application features REST API for image upload, delete and retrieve, and a web interface for viewing uploaded images.

## Installation

To run this app on your local machine, follow these steps:

1. Clone this repository: `git clone https://github.com/FREDVUNI/node-express-cloudinary.git`
2. Install dependencies: `npm install`
3. Set up your PostgreSQL database by running the SQL script located in `database/init.sql`
4. Create a `.env` file in the root directory of the project and add your Cloudinary API keys and PostgreSQL database URL. Use the `.env.example` file as a template.
5. Start the server: `npm start`
6. Open the app in your browser at `http://localhost:3000`

## Technologies Used

- Node JS
- Express
- PostgreSQL
- Cloudinary
- Multer
- HTML
- CSS

## Credits

- This app was created by [FREDVUNI](https://github.com/FREDVUNI).
- The Cloudinary API documentation was used for implementing image upload, delete and retrieve.
- The database schema was inspired by [Knex PostgreSQL Starter](https://github.com/miroslavpejic85/knex-postgresql-starter).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
