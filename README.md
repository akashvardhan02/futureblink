**MERN Email Sequence Manager - Future Blink**:

---

# Future Blink - MERN Email Sequence Manager

The **Future Blink Email Sequence Manager** is a MERN-based web app designed for creating and managing email marketing sequences using a visual flowchart interface. With an intuitive UI and powerful backend, it helps users efficiently design, edit, and visualize email campaigns.

## Features

- **Visual Flowchart Interface**: Design email sequences with an easy-to-use flowchart view.
- **Customizable Nodes**: Modify each flowchart node with specific parameters like email content and timing.
- **Sequence Management**: Save, load, update, and delete sequences.
- **RESTful Backend**: Efficiently handle CRUD operations via REST APIs.
- **Secure Access**: Authentication and authorization for data privacy and user control.

## Tech Stack

- **Frontend**: React, React Flow, and Bootstrap
- **Backend**: Node.js, Express.js, MongoDB, and Mongoose

## Environment Variables

In the backend `.env` file, set up:

- `PORT`: Port number (e.g., 3000)
- `MONGODB_URL`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication
- `NODE_ENV`: `development` or `production`

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/akashvardhan02/futureblink.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd futureblink
   ```
3. **Install Dependencies**:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```
4. **Start the Application**:
   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd ../frontend
   npm run dev
   ```
5. **View the Application**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

This README provides a quick overview and setup instructions for the **Future Blink** project.
