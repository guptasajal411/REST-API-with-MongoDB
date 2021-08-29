# REST-API-with-MongoDB
This is my first RESTful API made with Node.js and Express.js. The database for this API will be MongoDB Atlas. I tried to use all best practices and routes for a RESTful API.

### /articles
`GET`, `POST` and `DELETE` requests are supported on `articles`.
Don't do `DELETE` requests on `/articles` until you want to delete ALL articles. Issued in public interest 😂
### /articles/articleName
`GET`, `POST`, `PUT`, `PATCH` and `DELETE` requests are supported on `/articles/articleName`.

Use **[dotenv](https://www.npmjs.com/package/dotenv)** for loading environmental variables. You can create a new `.env` file to store your MongoDB Atlas's username and password as `usernameMongoDB` and `password` respectively.

# Resources
### RESTful API routes reference:
![RESTful API routes](https://user-images.githubusercontent.com/70312106/131220544-bf0733f2-0b98-4f5c-a634-919c2b0a00e9.png)
------
### Types of HTTP Requests made to a REST API:
![image](https://user-images.githubusercontent.com/70312106/131220590-5797b558-6f94-49e4-b7fb-47ed71424e4d.png)
------
### RESTful API routes reference:
![image](https://user-images.githubusercontent.com/70312106/131246209-accb0c29-7189-42ad-8e5a-0a2c1c01237c.png)
