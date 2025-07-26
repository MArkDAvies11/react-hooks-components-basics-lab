import React from 'react';
//import './App.css'; // Assuming you have an App.css for styling

// Navbar Component (provided)
function Navbar() {
  return (
    <nav>
      {/* Navbar content */}
      <h1>My Portfolio</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

// Home Component (provided)
function Home() {
  return (
    <div id="home">
      {/* Home content */}
      <h2>Welcome to My Portfolio!</h2>
      <p>This is a place to showcase my work.</p>
    </div>
  );
}

// About Component (to be created)
function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>This is where you can tell people about yourself.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
