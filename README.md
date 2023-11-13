# School Management System

## Overview

The School Management System (SMS) is a dynamic web application tailored for efficient management of educational institutions. Developed using HTML, CSS, and vanilla JavaScript, this system integrates the sleek design principles of Bootstrap 5.0.2, offering an intuitive and responsive user experience. The primary focus of SMS is to centralize and streamline the management of students, teachers, classes, and grades.

## Project Objectives

- Implement an organized folder structure for efficient project management.
- Develop separate JavaScript and CSS directories for modular code organization.
- Create specific JavaScript components for different functionalities like teacher, student, and class management.
- Initiate a dynamic navigation bar with interactive content rendering.
- Plan for the integration of LocalStorage for enhanced data persistence.
- Ensure responsive design for optimal performance across various devices.

## Features

- **Organized Folder Structure**: A clean and structured directory, ensuring easy navigation and management of project files.
- **Modular JavaScript Components**: Separate files for teachers, students, classes and dasboard within a 'components' directory, facilitating focused development and maintenance.
- **Dynamic Data Handling**: Dummy data in `data.js`, with an `initData.js` function to set up initial application states.
- **Responsive Navigation Bar**: A user-friendly navigation bar that dynamically updates content, enhancing the user experience.
- **Consistent Layout**: The layout keeps the navigation bar and footer constant across different pages for a seamless user interface.
- **LocalStorage Integration (Planned)**: Future implementation for robust and persistent data storage.

## File Structure

```
SMS/
│
|-- img # Image file
├── css/
│ └── styles.css # Main stylesheet
├── js/
│ ├── components/
│ │ ├── teacher.js
│ │ ├── student.js
│ │ ├── class.js
│ │ ├── dashboard.js
│ │ ├── navbar.js
│ │ └── footer.js
│ ├── data/
│ │ ├─- data.js # Data management
│ │ └── initData.js # Initial data setup function
│ └── app.js # Core JavaScript file
└── index.html # Main entry point
└── README.md # Documentation

```

## Future Plans

- Complete the LocalStorage integration for data management.
- Enhance the dynamic content rendering for an improved user interface.
- Create a separate services layer for each component that manages all localStorage operations.
- Extend the responsive design for a broader range of devices.
- Develop a mobile version of the system for accessibility on various devices.

This README provides a comprehensive overview of the School Management System, detailing its current functionalities and outlining the roadmap for future developments.
