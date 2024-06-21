<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Poem Gallery Frontend</title>
</head>
<body>
  <header>
    <h1>Poem Gallery Frontend</h1>
    <p>A frontend application for managing poems and poets information using React, DaisyUI, Tailwind CSS, and Firebase.</p>
  </header>

  <section>
    <h2>Introduction</h2>
    <p>The Poem Gallery Frontend is a React-based web application that interacts with the Poem Gallery API to display and manage poems and poets information. It utilizes Tailwind CSS for styling and DaisyUI for enhanced UI components.</p>
  </section>

  <section>
    <h2>Technologies Used</h2>
      <ul>
      <li>React - A JavaScript library for building user interfaces.</li>
      <li>DaisyUI - A component library for Tailwind CSS.</li>
      <li>Tailwind CSS - A utility-first CSS framework for rapid UI development.</li>
      <li>Firebase - A platform for building web and mobile applications, providing authentication, database, and hosting services.</li>
      <li>React Quill - A rich text editor component for React applications.</li>
      <li>React Hook Form - A library for managing form state and validation in React applications.</li>
      <li>Swiper - A modern, mobile-friendly slider library for React.</li>
      <li>Recharts - A charting library for React applications, providing customizable charts and graphs.</li>
    </ul>
  </section>

  <section>
    <h2>Features</h2>
    <ul>
       <li>Display Poems: Fetch and display poems from the Poem Gallery API.</li>
      <li>Add Poems: Create new poems using a form with a rich text editor (React Quill).</li>
      <li>Edit Poems: Update existing poems with a form including a rich text editor.</li>
      <li>Delete Poems: Remove poems from the database.</li>
      <li>Authentication: Secure user authentication using Firebase Authentication.</li>
      <li>Slider: Implement sliders for showcasing home slider using Swiper.</li>
      <li>Charts: Visualize data such as poem statistics using Recharts.</li>
    </ul>

  </section>

  <section>
    <h2>Setup Instructions</h2>
    <ol>
      <li>Clone the repository: <code>git clone https://github.com/your-repo.git</code></li>
      <li>Install dependencies: <code>npm install</code></li>
      <li>Set up Firebase:
        <ul>
          <li>Create a Firebase project at <a href="https://console.firebase.google.com/">Firebase Console</a>.</li>
          <li>Enable Firebase Authentication and Firestore.</li>
          <li>Copy Firebase configuration details (apiKey, authDomain, projectId, etc.) to your React project.</li>
        </ul>
      </li>
      <li>Start the development server: <code>npm start</code></li>
    </ol>
  </section>

  <section>
    <h2>Folder Structure</h2>
    <pre>
    .
    ├── public/             # Public assets and index.html
    ├── src/                # Source files
    │   ├── components/     # Reusable components
    │   ├── hooks/          # Custom React hooks
    │   ├── pages/          # Individual pages or views
    │   ├── routes/         # API routes integration
    │   ├── layouts/        # Layout of pages
    │   └── App.js          # Main application component
    ├── .env.local          # Environment variables (Firebase config, API URL)
    ├── package.json        # Project dependencies and scripts
    └── README.md           # Project documentation
    </pre>
  </section>

  <section>
    <h2>Author</h2>
    <p>Created by Ashik Ali Shanto</p>
  </section>

  <footer>
    <p>&copy; 2024 Poem Gallery Frontend. All rights reserved.</p>
  </footer>
</body>
</html>
