# NomalyticaTest

## About the Project
NomalyticaTest is an online multiplayer game where players can challenge friends, match up with opponents, or play against AI. The game features a ranking system to track player performance. The project includes a **React frontend** and a **Node.js backend** using Express, MongoDB, and Passport.js for authentication.

## Features
- **User Authentication** – Players can register, log in, and maintain their sessions.
- **Game Modes** – Choose between Friend Play, Match Play, or AI Play.
- **Leaderboard & Rankings** – See how you stack up against other players.
- **Real-time Interactions** – Smooth and dynamic gameplay experience.
- **Secure Sessions** – Keeps users logged in safely.

## Tech Stack
### Frontend
- **React** with React Router for seamless navigation.
- **SCSS** for styling and UI improvements.
- **Custom UI components** for game selection, ranking, and interactions.

### Backend
- **Node.js** with Express.js for handling requests.
- **MongoDB** for storing player data and rankings.
- **Passport.js** for authentication and user management.
- **WebSockets** (if implemented) for real-time gameplay updates.

## How to Set Up
1. **Clone the Repository**
   ```bash
   git clone https://github.com/super0627/NomalyticaTest.git
   cd NomalyticaTest
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   NODE_ENV=development
   PORT=8050
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=S3CRE7-S3SSI0N
   ```
4. **Run the Project**
   - Start the **frontend**:
     ```bash
     npm start
     ```
   - Start the **backend**:
     ```bash
     node app.js
     ```

## What to Expect
- The **homepage** shows game mode options: Friend Play, Match Play, AI Play.
- Users must **log in or register** to play.
- The **game scene** provides an interactive experience with real-time updates.
- The **ranking page** displays the top players.
- Secure **session management** keeps players logged in.

## Project Tasks
### 1. Code Review
- Analyze the code for structure, security, and performance.
- Identify improvements in authentication, API handling, and database queries.

### 2. Understanding & Workflow Submission
- Run the project and verify that the actual execution matches the written code.
- Document how the system flows from login to gameplay to ranking.

### 3. Implement a Simple Function
- Add a new feature, such as a **user statistics tracker** or **game history log**.
- Enhance an existing function for performance improvements.
- Fix minor bugs in the game logic or UI.

## Want to Contribute?
1. **Fork the repository** to your GitHub account.
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make changes**, then commit:
   ```bash
   git commit -m 'Added a new feature'
   ```
4. **Push to GitHub** and open a pull request.

## Need Help?
If you run into issues, open a GitHub **Issue**, or reach out to the maintainers.

---
**Happy Coding!**

