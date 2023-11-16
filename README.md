# School Management System

## Overview

The School Management System (SMS) is a dynamic web application tailored for efficient management of educational institutions. Developed using HTML, CSS, and vanilla JavaScript, this system integrates the sleek design principles of Bootstrap 5.0.2, offering an intuitive and responsive user experience. The primary focus of SMS is to centralize and streamline the management of students, teachers, classes, and grades.

## Project Objectives

- Establish a well-organized folder system to enhance project management and scalability.
- Develop a dynamic navigation bar in the main app.js file, utilizing addEventListener to dynamically render content based on user interaction.

## Features

- **Dynamic Navigation Bar**: Implement a responsive and interactive navigation bar, dynamically rendering content and improving user engagement.
- **Interactive Content Rendering**: Enhance user experience by dynamically updating page content through JavaScript event listeners in the main application file (app.js).
- **Separation of Concerns**: Enhance code readability and maintainability by organizing distinct render methods for page components and modals, along with a dedicated helpers folder for auxiliary functions, ensuring a clear separation of functional logic within the project structure.

## File Structure

```
SMS/
│
├── css/ # Main stylesheet
│   └── styles.css
├── img/ # Image files
├── js/
│   ├── components/
│   │   ├── modals/ # Modal components
│   │   │   ├── renderClassModal.js
│   │   │   ├── renderStudentModal.js
│   │   │   └── renderTeacherModal.js
│   │   ├── teacher.js
│   │   ├── student.js
│   │   ├── class.js
│   │   ├── dashboard.js
│   │   ├── navbar.js
│   │   └── footer.js
│   ├── data/
│   │   ├── data.js # Data management
│   │   └── initData.js # Initial data setup function
│   ├── helpers/ # Helper functions
│   │   └── utilize.js
│   └── app.js # Core JavaScript file
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
