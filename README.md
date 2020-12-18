# Blog-Backend_Image

This application is a simple express server application that serves blog data. This data is stored in a database. The database used here is Mongodb Atlas. The server can be started by running the command 'npm run start'.

The api endpoints of the application allow following functionality:

# Get all blogs:

The api endpoint is designed to get all the blogs present in the database. The api endpoint for this particular operation is : http://localhost:3000/blogs. Here, '/blogs' is an api endpoint for obtaining all the blogs present in the database cloud.

# Get a specific blog with a blogId sent as a route parameter:

Here, the api endpoint is designed in a way that the user can find a particular blog based on the blog Id. Each and every blog in the database has an unique Id. The user will have to provide an Id as an route parameter to search for a particular blog. The api endpoint for this particular operation is: http://localhost:3000/blogs/2rvqpdbpka3n3fhg. Here, '/blogs/:id' is the api endpoint for finding a particular blog. For this particular id '/2rvqpdbpka3n3fhg', the blog which belongs to this Id will be obtained.

# Add blog information for creating a new blog: 

Here, the user can create a new blog. The structure of the blog is fixed and it contains: Blog Title, Blog content, Related links, Blog Banner Image. Here, multer is used for uploading the files as well as the image and hence the data is sent using 'form-data' of postman. The sample example for creating a blog is as follows: 

title: Some Title

content: Some related content to the title

links: link1, link2, link3...(links here is an array. So any number of related links can be provided by the user).

image: (The image has to be choosen from the local machine of the user).

Any extra fields other than the one given in the example will be considered as invalid input.

The url for the same is: http://localhost:3000/blogs. 

# Delete a specific blog corresponding to a blogId sent as a route parameter:

A particular blog can be deleted by passing its Id as an route parameter. The url for the same is: http://localhost:3000/blogs/:id. '/blogs/:id' is the end api endpoint for this application. 

# Hosting:

The application is hosted on heroku and the live link for the same is given below: 

https://blog-backend-image.herokuapp.com/blogs


