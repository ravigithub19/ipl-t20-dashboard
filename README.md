# 🏏IPL T20 Dashboard

## Overview
A mobile-first, responsive web application that provides real-time IPL T20 updates—featuring live match info, upcoming matches, points table, and the full season schedule. Built with React.js, JavaScript/TypeScript, and Tailwind CSS.

### 🎨 **User Interface (UI)**

- Mobile-first layout for a seamless small-screen experience.
- Dashboard-inspired layout for live & upcoming match focus.
- IPLT20 website inspiration for players and teams.
- Clean separation of pages:
  - `/live-score`
  - `/points-table`
  - `/teams`
  - `/stadiums`
  - `/results`
  - `/matches`

### 📱 UI Screens

- **Home**: Displays live matches.

- **Points Table**: Shows latest team rankings, wins/losses, NRR.

- **Schedule Page**: Lists all matches in a calendar-like format.

- **Responsive Design**: Optimized for mobile, tablet, and desktop.

## 📁 Project Structure

```bash
├── src/       
    ├── /components
        ├── /images
        ├── Header.jsx
        ├── index.jsx
        ├── loader.jsx
        ├── Navbar.jsx
        ├── Sidebar.jsx
    ├── /contexts
        ├── /ContextProvider.jsx  
    ├── /data
        ├── events.json
        ├── players.json
        ├── pointsTable.json
        ├── stadiums.json
        ├── teamCaptains.json
        ├── teamLogos.json
    ├── /pages
        ├── Events.jsx
        ├── Hero.jsx
        ├── index.jsx
        ├── IPLStandings.jsx
        ├── LiveScore.jsx
        ├── Players.jsx
        ├── Stadiums.jsx
        ├── Teams.jsx
        ├── Upcoming.jsx
    ├── App.css     
    ├── App.jsx     
```

## Installation 

1. Clone the repository:
   ```bash
   git clone https://github.com/ravigithub19/ipl-t20-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ipl-t20-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Contact
For any questions or feedback, please contact:
- Email: [ravisharma50063@gmail.com](mailto:ravisharma50063@gmail.com)
- GitHub: https://github.com/ravigithub19

