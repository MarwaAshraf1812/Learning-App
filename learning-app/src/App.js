// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LessonList from './components/LessonList';
import Lesson from './components/Lesson';
import Home from './components/Home';
// import Quiz from './components/Quiz';
import Progress from './components/Progress';
import styled from 'styled-components';

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
          <Route path="/lesson/:id" element={<Lesson />} />
          {/* <Route path="/quiz" element={<Quiz />} /> */}
          <Route path="/progress" element={<Progress />} />
        </Routes>
        <LessonList />
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
