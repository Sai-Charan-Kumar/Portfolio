# React Portfolio

## Setup and Run Instructions

To run this project locally, follow these steps:

1. **Install Frontend Dependencies**: Ensure you have Node.js installed, then run the following in your terminal:
   ```bash
   npm install
   ```
2. **Install Backend Dependencies**: Open a second terminal and navigate to the server directory:
   ```bash
   cd server
   npm install
   ```
3. **Run Development Server**: Start the local server to view the portfolio:
   ```bash
   npm run dev
   ```
4. **Start the backend** : From the server directory, start the Express backend:
   ```bash
   npm start
   ```
5. **Production Build**: Generate the production-ready build files:
   ```bash
   npm run build
   ```
   (Outputs to the `dist` directory by default).

## Storage Approach

According to the assignment guidelines, this backend utilizes an in-memory JavaScript array for storing project data and contact form submissions.

Note: Since the data is stored in memory, it will be reset whenever the backend server is restarted.

## Component Tree Structure

This project follows a logical component structure utilizing React Router for navigation:

```text
App
├── Navbar (Contains Theme Toggle button)
├── Routes
│   ├── Home (Landing page with 1s loading delay)
│   ├── About (Biography info section)
│   ├── Projects
│   │   └── ProjectList (Intermediate prop-drilling)
│   │       └── ProjectCard (Reusable layout with togglable details)
│   ├── ProjectDetails (Dynamic route page)
│   ├── Skills
│   ├── Contact (Validated ContactForm)
│   └── NotFound (Catch-all 404 Route)
└── Footer
```
## API Endpoints

Note: The `GET /api/contact` endpoint is intentionally unauthenticated and open for assignment evaluation purposes.

| **Endpoint**        |**Method**| **Description** | **Sample Response / Body** |
|---------------------|----------|-----------------|----------------------------|
| `/`                 | GET      | API health check | `{ "status": "ok" }` |
| `/api/projects`     | GET      | Fetches all projects | `[ { "id": "1", "title": "Project One", ... } ]` |
| `/api/projects/:id` | GET      | Fetches a single project matching the given ID | `{ "id": "1", "title": "Project One", ... }` |
| `/api/projects/:id` | GET      | Invalid ID (Failure) | **404:** `{ "error": "Project not found" }` |
| `/api/contact`      | POST     | Submits contact form | **Body:** `{ "name": "A", "email": "a@b.com", "message": "Hi" }`<br>**Response:** `{ "success": true }` |
| `/api/contact`      | POST     | Invalid email format (Failure) | **400:** `{ "error": "Invalid email format." }` |
| `/api/contact`      | GET      | Lists all stored contact submissions | `[ { "name": "A", "email": "a@b.com", ... } ]` |

## State Lifting Explanation

- **Theme State (`theme`)**: The dark/light theme state is explicitly lifted to the highest visual node (`App.jsx`). This top-tier placement is critically necessary so that the state can be accessed concurrently by layout containers (like passing to `Navbar` for the toggle event control) and passed directly via deep prop drilling to children (e.g. `Projects` -> `ProjectList` -> `ProjectCard`). Furthermore, keeping it located inside `App.jsx` allows immediate lifecycle control over modifying `<body className="light-mode">`.

## useEffect Hooks Implemented

1. **Simulated Loading Status (`Home.jsx`)**: It is implemented by `useEffect` loaded with an empty dependency array (`[]`), and g a `setTimeout()` timeout of 1000ms simulating data requests. Includes a `return () => clearTimeout(timer);` cleanup procedure to stop timers if the component unmounts unpredictably.
2. **Persistent Settings Configuration (`App.jsx`)**: Uses `useEffect` triggered by `[theme]` changes to overwrite cache stored inside `localStorage`. Effectively safeguards theme choices upon subsequent browser returning visits, restoring standard preferences flawlessly.

## AI usage info

Used for CSS fixes and inclusion of dark/light theme, useEffect.
