# Social Network API

## Overview
The Social-Network API project aims to provide a robust and scalable API for a social media startup. Leveraging the power of MongoDB as a NoSQL database and Mongoose for object modeling, this API enables handling large amounts of unstructured data typical in social networking platforms. By syncing Mongoose models to MongoDB, the server is started seamlessly, ensuring a smooth development experience. The API supports various functionalities essential for a social network, including user management, thoughts (posts), reactions to thoughts, and friend management.

[Walkthough Video](https://youtu.be/IeXJ-ZFQj1o)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Features
<img src="assets\home.png" title="home">
<img src="assets\home.png" title="home">
<img src="assets\home.png" title="home">
<img src="assets\home.png" title="home">

1. **Server Initialization and Database Sync**: The application initializes the server and syncs Mongoose models with the MongoDB database upon invocation.
2. **GET Routes for Users and Thoughts**: API endpoints provide formatted JSON data for fetching users and thoughts, facilitating data retrieval for the front-end.
3. **POST, PUT, and DELETE Routes for Users and Thoughts**: Users can create, update, and delete their profiles and thoughts, enabling full CRUD (Create, Read, Update, Delete) functionality.
4. **Reactions to Thoughts**: API supports creating and deleting reactions to thoughts, allowing users to engage with content through likes, dislikes, etc.
5. **Friend Management**: Users can add or remove friends from their friend list, enhancing social interactions within the platform.
6. **Scalability**: Designed to handle large volumes of unstructured data, the API ensures scalability to accommodate growing user bases and content.
7. **Security Measures**: Incorporates security measures such as authentication and authorization to protect user data and prevent unauthorized access.
8. **Error Handling**: Implements robust error handling mechanisms to provide informative and user-friendly error messages in case of API failures or invalid requests.

## Contributing
Thank you for considering contributing to our project! Follow these steps:

* Fork the repository and clone it to your local machine.
* Create a branch, make your changes, and commit them with a clear message.
* Push your changes to your forked repository.
* Open a pull request on the original repository.

Guidelines
* Follow existing code style and conventions.
* Ensure your code is well-documented.

Pull Requests
* Keep them focused and provide a clear description.
* Reference relevant issues if applicable.

## License
![None License](https://img.shields.io/badge/License-None-brightgreen)
This project is not licensed and is provided as-is without any warranty. You are free to use, modify, and distribute the code as you see fit. However, we do not provide any legal protection or support for this project.

## Questions
For questions about this project, contact [Parker Rappleye](https://github.com/prappleman) via email at parker.rappleye1@gmail.com.
