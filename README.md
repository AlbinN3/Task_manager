# Task Manager Website

The Task Manager Website is a web application built using Java Spring Boot and MySQL to manage tasks and assignments efficiently. It allows users to create tasks, assign them to team members, track their progress, and mark them as completed.

## Features

- **User Authentication**: Users can login using their credentials.
- **Task Creation**: Users can create new tasks with details such as title, description, priority, due date, and assignee.
- **Task Assignment**: Tasks can be assigned to specific team members.
- **Task Tracking**: Users can track the progress of tasks, view assigned tasks, and update their status.
- **Task Filtering**: Tasks can be filtered based on various criteria such as priority and due date.
- **User Management**: Administrators can manage user accounts, roles, and permissions.

## Technologies Used

- **Java Spring Boot**: Backend framework for building robust and scalable web applications.
- **MySQL**: Relational database management system for storing task and user data.
- **Node.js**: JavaScript runtime environment for executing JavaScript code server-side, used for managing dependencies and running build scripts in the frontend.
- **ReactJS**: JavaScript library for building user interfaces, providing a responsive and interactive frontend experience.
- **HTML/CSS/JavaScript**: Frontend technologies for creating the user interface and enhancing interactivity.
- **Bootstrap**: Frontend framework for designing responsive and mobile-friendly web pages.
- **Maven**: Build automation tool for managing project dependencies and building the application.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Java Development Kit (JDK): Install JDK 21 on your machine.
- Node.js: Install Node.js on your machine. You can download it from nodejs.org.
- MySQL Database: Set up a MySQL database server. You can download MySQL Community Server from mysql.com. Import `taskmanager.sql` file into MySQL.

## Getting Started

To run the Task Manager Website locally, follow these steps:

1. **Clone the Repository**: Clone the project repository to your local machine using the following command:

    ```bash
    git clone https://github.com/yourusername/task-manager.git
    ```

2. **Set up MySQL Database**: Create a MySQL database named `taskmanager` and configure the database connection settings in the `application.properties` file, use the `taskmanager.sql` file to get the structure of the tables.

3. **Build and Run the Backend**: Open the `taskmanager` file in any ide which can run java preferebly intelliJ Idea and install the necessary dependencies and run the `TaskApplication` file.

4. **Build and Run the Frontend**: Open the `taskmanagerui` file in any ide preferebly Visual Studio Code and give the command npm install to install the node modules and then run the npm run command.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
