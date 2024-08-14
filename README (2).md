
# T0-Do List

The To-Do List app is a simple yet powerful task management tool designed to help users organize their daily tasks efficiently. This application provides essential functionalities for adding, editing, deleting, and marking tasks as completed. It leverages local storage to persist data across page reloads and integrates a Service Worker for offline capabilities and caching.




## Features

- Add/Edit/Delete Task. 
- Editing task status.
- Persistent Storage.
- Offline Capability.


## File Structure

- index.html - The HTML structure sets up a basic To-Do List application with a title, an input field for adding tasks, and a button to submit them. It includes a placeholder for a list of tasks and references an external stylesheet and JavaScript file for styling and functionality.


- script.js - The script handles adding, editing, and deleting tasks in a To-Do List, with changes saved to and loaded from localStorage. It also registers a service worker for offline functionality.


- style.css - The CSS styles a To-Do List app with a modern design, featuring a gradient background, rounded elements, and styled input and button components. It includes specific styles for task items, with icons for editing and deleting tasks, and changes their appearance when selected or hovered over.


- sw_cached_pages.js - This Service Worker script caches specified assets during installation and manages cache updates by deleting old caches. It also handles fetch requests by attempting to fetch from the network and falling back to cached assets if the network request fails.


- images - this folder contains all the images used in the project
## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arjita-narayan-ab9a36304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)


