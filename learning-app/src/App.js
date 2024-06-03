// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Courses from './components/Courses';
import Lesson from './components/Lesson';
import Home from './components/Home';
// import Quiz from './components/Quiz';
import Progress from './components/Progress';
import Contact from './components/Contact';
import styled from 'styled-components';
import Blog from './components/Blog';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lesson/:id" element={<Lesson />} />
          {/* <Route path="/quiz" element={<Quiz />} /> */}
          <Route path="/progress" element={<Progress />} />
        </Routes>
        <About />
        <Courses />
        <Blog />
        <Contact />
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
