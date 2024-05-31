import React, {useState} from "react";
import '../App.css';

const Quiz = () => {
    const [score, setScore] = useState(0);
    return (
        <div className="quizContainer ">
            <h2>Quiz</h2>
            <p>Score: {score}</p>
            <button>More</button>
        </div>
    );
}

export default Quiz;
