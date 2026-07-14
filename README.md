# User Directory App

A responsive React application that demonstrates how to fetch data from an external API, build forms using controlled components, and implement real-time search functionality.

This project was completed as part of a self-study React assignment focused on understanding three fundamental React concepts:

- Fetching data from an API
- Building forms
- Using controlled components

---

## Project Overview

The application retrieves user information from the JSONPlaceholder API and displays it in a clean, searchable directory. Users can search the directory in real time, add their own users locally, and remove users they have created.

The project demonstrates how React state, hooks, and reusable components work together to build an interactive user interface.

---

## Features

### API Data Fetching

- Fetches user data from the JSONPlaceholder API
- Retrieves data from `https://jsonplaceholder.typicode.com/users`
- Displays each user's name, email, and company
- Automatically loads data when the application starts

### Live Search

- Search users by name
- Instant filtering as you type
- Case-insensitive search
- Displays **"No users found"** when no matching users exist

### Add New Users

- Add users using a controlled form
- New users appear immediately without refreshing the page
- Form validation prevents empty submissions

### Delete Users

- Delete only manually added users
- Original API users remain unchanged

### User Experience

-  Dark and Light Mode toggle
-  Responsive design for desktop, tablet, and mobile
-  Fast and interactive user interface

---

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API

---

## React Concepts Demonstrated

This project demonstrates:

- Functional Components
- React Hooks (`useState`, `useEffect`)
- Controlled Components
- Event Handling
- Conditional Rendering
- Component Reusability
- State Management
- Props
- Array Methods (`map()` and `filter()`)
- API Integration

---

## Project Structure

```text
src/
│
├── App.jsx
├── UserCard.jsx
├── NewUserForm.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## How It Works

### Fetching Users

When the application loads, `useEffect()` fetches user data from the JSONPlaceholder API and stores it in React state using `useState()`.

### Searching

The search input is a controlled component. Every keystroke updates the `searchTerm` state, and the displayed users are filtered instantly using JavaScript's `filter()` method.

### Adding Users

Users can enter a name and email address through a controlled form. Submitted users are stored locally and displayed immediately at the top of the directory.

### Deleting Users

Only manually created users can be deleted. This keeps the original API data unchanged while demonstrating state updates and event handling.

---
## Linting

This project uses Oxlint, which came bundled with the Vite React template. 
It checks that React hooks are used correctly (rules-of-hooks) and warns 
if a file exports something alongside a component that could break fast 
refresh. Config is in `.oxlintrc.json`.

---
## Installation



Navigate into the project:

```bash
cd react-user-directory-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Live Demo


https://reactuserdirectory.netlify.app/

---

## Loom Presentation

https://www.loom.com/share/a254635a92374880bade3227ec34d22d
---

## Documentation

### Research Report

This repository also contains a research report that discusses:

- Fetching Data
- Forms
- Controlled Components

See **RESEARCH-REPORT.md**.

### Design Decisions

Implementation decisions, challenges, and future improvements are documented in **DECISIONS.md**.

---

## Challenges

One of the main challenges was ensuring the **"No users found"** message only appeared under the correct conditions while accounting for API users, manually added users, and different search states.

---

## Learning Outcomes

This project helped strengthen my understanding of:

- Fetching data from APIs
- React Hooks
- Controlled Components
- State Management
- Component-based architecture
- Conditional Rendering
- Responsive web design

---

## Future Improvements

Potential enhancements include:

- Edit user details
- Save users using Local Storage
- Connect to a real backend API
- Loading spinner
- Error handling
- User avatars
- Pagination
- Sorting users alphabetically

---

## Author

**Sijabulile Ncube**
date Created:13/07/2026

Software Developer passionate about building responsive, user-friendly web applications while continuously expanding my knowledge of React and modern JavaScript. 