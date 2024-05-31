import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import learningSvg from '../assets/learning.svg';

const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-90 py-5">
      <div className="row w-100">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h2 className="txt-primary mb-4">Welcome to Make Your Career</h2>
          <p className="lead text-secondary mb-4">
            Explore our lessons and quizzes to enhance your skills and track your progress.
          </p>
          <a href="/lessons" className="btn btn-primary btn-lg w-50">
            Start Learning
          </a>
        </div>
        <div className="col-lg-6 text-center">
          <img src={learningSvg} alt="Learning" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
