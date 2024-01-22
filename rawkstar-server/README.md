# Northwest Naturals Feedback API

## Introduction
Welcome to the Northwest Naturals Feedback API! This backend service is built with Express.js to handle voting and feedback submissions from customers. Additionally, it incorporates JWT authentication to allow administrators to access and analyze the voting results. This REST API is a crucial component of the customer feedback system, providing a secure and efficient way to record and manage votes and comments.

## Features
- **Poll Creation:** Create polls to gather customer votes and feedback.
- **Vote Recording:** The API handles the recording of customer votes on different aspects of Northwest Naturals products and marketing campaigns.
- **Feedback Submission:** Customers can submit detailed feedback through the API, contributing valuable insights.
- **JWT Authentication:** Secure access for administrators to view voting results using JSON Web Tokens (JWT).
- **MongoDB Integration:** Interacts with a MongoDB database for persistent data storage.
- **Express.js Backend:** Utilizes the Express.js framework to create a robust and scalable backend server.
- **RESTful API:** Follows RESTful principles for easy integration and consumption.

## API Endpoints
1. Check API Status
Endpoint: /
Method: GET
Description: Check if the API is running.

3. Create a Poll
Endpoint: /api/createpoll
Method: POST
Description: Create a new poll.

4. Update Poll
Endpoint: /api/update/:Poll
Method: PUT
Description: Update polls with new votes and additional feedback.

5. Retrieve Poll Results by Month
Endpoint: /api/month/:Month
Method: GET
Description: Retrieve voting results and feedback for a specific month.

Logging Middleware Description: Logs details of each incoming request, including method, URL, and timestamp.

## Technologies Used
* Express.js
* MongoDB
* Node.js
