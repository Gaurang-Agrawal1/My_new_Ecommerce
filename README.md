
# Cap - Commerce 


> [!IMPORTANT]
> Cap -Commerce Do 2 Step Verification By Sending Otp on your Registered Mail ID .

### Please [Check Deployment Here ](https://my-new-ecommerce-drab.vercel.app/).


## Table of Contents
- Project Overview
- Features
- Technologies Used
- Installation
- Running the Project
- Connecting to MongoDB
- Using NodeMailer
- API Endpoints
- Project Structure
- Screenshots
- License

## Project Overview
It is E-commerce website Developed using MERN Stack

### Authentication Using Node.js API
- A Node.js API built with Express.js for user authentication, including signup, login, and profile management.
- It utilizes MongoDB for data storage and JWT for secure authentication.

### Node.js Project with MongoDB and NodeMailer
- Includes email confirmation functionality using NodeMailer.
- This task demonstrates how to send confirmation emails upon user signup, providing a complete user authentication and verification workflow.

## Features

### 1:
- User signup with username, email, and password
- Password hashing for enhanced security
- User login with JWT token generation
- Protected user profile endpoint
- Input validation

### 2:
- User authentication (signup, login, profile)
- Sending confirmation emails upon signup
- JWT token generation and validation
- Input validation and password hashing



## Tech Stack Used


| Rank | Languages , Framework & Database|
|-----:|-----------|
|     1| React
|     2| Express.js    |
|     3| Node.js       |
|     4| MongoDB       |
|     5| Bootstrap     |
|     6| Tailwind Css  |
|     7| Mongoose      |
|     8| NodeMailer    |
|     9| JSON Web Tokens (JWT)  |
|     10|  bcrypt       |


![image](https://github.com/user-attachments/assets/acf61524-98a0-4ee3-ad20-58960b453123)

## Installation
To set up the project on your local machine, follow these steps:

- Clone the Repository:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

- Install Dependencies:

```bash
npm install
```

### Running the Project
- Set Up Environment Variables:

Create a .env file in the root directory and add the following variables:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NODEMAILER_USER=your-email@example.com
NODEMAILER_PASS=your-email-password
```

- Start the Server:

```bash
npm start
```

The server will run on http://localhost:8080 by default.

## Connecting to MongoDB
- Ensure you have a MongoDB URI set in your .env file.
- This URI should point to your MongoDB instance.
- If you don't have a MongoDB cluster, you can create one at MongoDB Atlas.

### Using NodeMailer
NodeMailer is used to send emails from your Node.js application.

Follow these steps to configure it:

- Install NodeMailer:

```bash
npm install nodemailer
```
- Configure NodeMailer:

## Project Structure

```arduino
Cap-Commerce/
├── Client/
│   ├── public/
│   ├── src/
│   │   ├── controllers/
│   │   ├── Context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── Styles/
│   ├── .env
│   ├── package-lock.json
│   └── package.json
└── Server/
    ├── config/
    │   └── User.js
    ├── controllers/
    │   └── auth.js
    ├── helpers/
    │   └── home.ejs
    ├── middleware/
    │   └── home.ejs
    ├── models/
    │   └── home.ejs
    ├── routes/
    │   └── home.ejs  
    ├── .env
    ├── node_modules
    ├── app.js
    ├── package.json
    └── README.md
```

### Sign Up Page

![Sing Up page ](https://github.com/user-attachments/assets/d1789fad-8628-488b-a676-8b60c05049db)


### Login Page    



![Login Page](https://github.com/user-attachments/assets/df142210-7537-4024-88bd-c21ac680883f)


### Home Page



![Home 1](https://github.com/user-attachments/assets/24971b09-5627-494b-aaa9-7ac217e08200)
======================================================
![Products](https://github.com/user-attachments/assets/1471b7a6-554c-4122-96a6-cbfbda000c03)



### Categories


![All categories](https://github.com/user-attachments/assets/1fe5f232-fab3-439a-8a07-b4b03086ab15)



### Product Page 


![Products details](https://github.com/user-attachments/assets/6789606c-8b6a-465f-89b6-14b932776fa2)



### Cart Page 



![Cart and Payment Gateway](https://github.com/user-attachments/assets/22e8302d-d594-43a5-91e9-c047ec222c13)



### Order  Tracking



![Order Tacking](https://github.com/user-attachments/assets/6c359ac4-a146-4e39-b5ab-2ca2f67f893b)



### About Us



![About Us page](https://github.com/user-attachments/assets/abfd0bad-5687-4186-aa05-c6dbf986b2b3)



### Privacy Policy



![Privacy Policy page](https://github.com/user-attachments/assets/0e156523-12df-4672-a27a-c297f04b93eb)


### Contact Us 



![Contact Us page](https://github.com/user-attachments/assets/00742a06-9c72-4c79-85af-8b27880869c6)


### Footer



![Footer](https://github.com/user-attachments/assets/84856e72-bf23-4f01-8327-ed225a93ac36)



### ADMIN PAGES


### ALL Products  Visible to Admin Only



![All Product Page for admin](https://github.com/user-attachments/assets/7530a014-7abe-4d11-b427-100af24840e5)



### Categoty Creation Visible to Admin Only


![Category Creation Page for admin](https://github.com/user-attachments/assets/0ee7e687-f364-4a14-9974-3fbe2a3b5cd6)



### Product Creation Visible to Admin Only



![Product Creation Page for admin](https://github.com/user-attachments/assets/b0489ffe-f12e-4998-b439-199a089f466a)

### Maintain Orders Visible to Admin Only


![Maintain orders page Admin](https://github.com/user-attachments/assets/0c3b86eb-0ade-4163-881e-563329ec5533)


