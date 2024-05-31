import React from 'react';
import '../App.css';
import learningSvg from '../assets/learning.svg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="content-text">
          <h2 className="home-title">Welcome to Make Your Career</h2>
          <p className="home-description">
            Explore our lessons and quizzes to enhance your skills and track your progress.
          </p>
          <div className="home-buttons">
            <a href="/lessons" className="home-button">Start Learning</a>
          </div>
        </div>
        <div className="content-image">
          <img src={learningSvg} alt="Learning" className="home-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
