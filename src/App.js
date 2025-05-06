import React, { useState, useEffect } from 'react';
import './App.css';

// Component imports
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import About from './components/About/About';
// import Skills from './components/Skills/Skills';
// import Experience from './components/Experience/Experience';
// import Education from './components/Education/Education';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Experience /> */}
        {/* <Education /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
