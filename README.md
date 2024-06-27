# Full Stack E-Learning Web Application

The eLearning Platform is a web application designed to provide users with access to a variety of online courses. Users can enroll in courses, track their progress, participate in discussions, submit assignments, and receive certifications upon completion. The platform supports both students and instructors, allowing instructors to create and manage courses while providing students with a robust learning environment.


## Table of Contents
1. [Technology Stack](#technology-stack)
2. [Features](#features)
3. [Project Architecture](#project-architecture)
4. [Folder Structure](#folder-structure)
5. [Database Models](#models)
6. [API Endpoints](#api-documentation)
7. [Backend Setup](#backend)
8. [Frontend Setup](#frontend)


## Technology Stack
1. Frontend: React.js
2. Backend: Node.js with Express.js
3. Database: MongoDB
4. Authentication: JWT (JSON Web Tokens) and Bcrypt
5. Styling: Tailwind CSS and React-Bootstrap

## Features
1. User Profile Managment
2. User Authentication and Autherization
3. Course Managment

## Project Architecture
1. Frontend (React.js)
    - Component-based architecture
    - State management using Context API or Redux
    - Routing using React Router
    - API integration with Axios or Fetch API

2. Backend (Node.js and Express.js)
    - RESTful API endpoints
    - Middleware for authentication and error handling
    - Mongoose for MongoDB interactions

3. Database (MongoDB)
    - Schemas for users, courses, enrollments, and more
    - Relationships handled through Mongoose

## Folder Structure
sample project structure
```
/elearning-platform
│
├── /backend
│   ├── /config         # Configuration files (DB, JWT, etc.)
│   ├── /controllers    # Route controllers
│   ├── /models         # Mongoose schemas
│   ├── /routes         # API routes
│   ├── /middlewares    # Middleware functions
│   └── server.js       # Entry point for the backend
│
├── /frontend
│   ├── /public         # Public assets
│   ├── /src
│   │   ├── /components # Reusable React components
│   │   ├── /pages      # Page components
│   │   ├── /context    # Context API for state management
│   │   ├── /utils      # Utility functions
│   │   ├── App.js      # Main App component
│   │   └── index.js    # Entry point for the frontend
│
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── README.md           # Project documentation
└── package.json        # Node.js dependencies and scripts

```

## Database Models
### User Model Attributes
1. Basic Information
    - user_id: Unique identifier for the user.
    - username: The user's chosen display name.
    - email: The user's email address.
    - password: Encrypted password for account security.
    - full_name: Full name of the user.
    - profile_picture: URL or path to the user's profile picture.
    - role: Role of the user (e.g., student, instructor, admin).

2. Personal Information
    - date_of_birth: The user's date of birth.
    - gender: The user's gender.
    - location: The user's geographical location.

3. Contact Information
    - phone_number: The user's phone number.
    - address: The user's address.

4. Educational Background
    - highest_education: The highest level of education attained by the user.
    - current_institution: The institution the user is currently affiliated with, if any.

5. Course Information
    - enrolled_courses: List of courses the user is currently enrolled in.
    - completed_courses: List of courses the user has completed.
    - instructed_courses: List of courses the user is teaching (for instructors).
    - wishlist_courses: List of courses the user is interested in but not yet enrolled in.

6. Progress and Performance
    - course_progress: Progress in each course (e.g., percentage completed).
    - quiz_scores: Scores of quizzes taken within the courses.
    - assignments_submitted: List of assignments submitted along with their statuses and grades.

7. Activity and Engagement
    - login_history: Timestamps of user logins.
    - activity_log: Detailed log of user activities on the platform.
    - discussion_posts: Posts made by the user in course discussion forums.
    - messages: Private messages exchanged with other users.

8. Preferences and Settings
    - language_preference: Preferred language for the platform.
    - notification_preferences: User's preferences for receiving notifications (e.g., email, SMS).
    - theme: Preferred theme or layout of the platform (e.g., dark mode).

9. Feedback and Reviews
    - course_reviews: Reviews and ratings given by the user for courses.
    - feedback: Feedback provided by the user regarding the platform.



## API Endpoints
1. User Routes
    - POST /api/users/register - Register a new user
    - POST /api/users/login - Authenticate a user and return a JWT
    - GET /api/users/profile - Get user profile information (authenticated)
    - PUT /api/users/profile - Update user profile information (authenticated)

2. Course Routes
    - GET /api/courses - Get all courses
    - POST /api/courses - Create a new course (instructor only)
    - GET /api/courses/:id - Get a specific course
    - PUT /api/courses/:id - Update a course (instructor only)
    - DELETE /api/courses/:id - Delete a course (instructor only)

3. Enrollment Routes
    - POST /api/enrollments - Enroll in a course
    - GET /api/enrollments - Get enrolled courses (authenticated)


## Backend Setup
1. Clone the repository

    ```git clone https://github.com/Sam21sop/e-learning-app.git```

2. Navigate to the backend directory
    
    ```cd backend```

3. Install dependencies
    
    ```npm install```

4. Run the backend server
    
    ```npm run server```

## Frontend Setup
1. Navigate to the main dir/folder
    
    `cd ../`

2. Install dependencies
    
    ```npm install```

3. Run the frontend server
    
    ```npm run dev```
    