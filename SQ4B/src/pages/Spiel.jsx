import { useState } from "react";
import "/src/App.css";
import Button from "/src/components/Buttons";
import "/src/button.css";
import Navigation from "/src/components/Navigation";

function Spiel() {
  // Array of questions
  const questions = [
    {
      question: "Was ist 1+1?",
      answers: ["1", "2", "3"],
      correctAnswer: "2",
    },
    {
      question: "Was ist die Hauptstadt von Frankreich?",
      answers: ["Berlin", "Paris", "Rom"],
      correctAnswer: "Paris",
    },
    {
      question: "Welches Jahr ist das Jahr der Mondlandung?",
      answers: ["1965", "1969", "1972"],
      correctAnswer: "1969",
    },
  ];

  // State variables
  const [frageIndex, setFrageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [questionAnswered, setQuestionAnswered] = useState(false);

  // Function to evaluate the answer
  function evaluateAnswer(event) {
    const currentQuestion = questions[frageIndex];
    if (event.target.innerText === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setFeedback("Richtig");
    } else {
      setFeedback("Falsch");
    }
    setQuestionAnswered(true); // Mark question as answered
  }

  // Function to proceed to the next question
  function weiter() {
    if (frageIndex < questions.length - 1) {
      // Move to the next question
      setFrageIndex(frageIndex + 1);
      setFeedback(""); // Reset feedback
      setQuestionAnswered(false); // Reset answer state
    } else {
      // End of quiz
      alert(`Quiz beendet! Dein Score ist ${score} von ${questions.length}`);
      // Reset quiz
      setFrageIndex(0);
      setScore(0);
      setFeedback("");
      setQuestionAnswered(false);
    }
  }

  return (
    <>
      <Navigation />
      <div>
        <h1>Willkommen zum WISS-Quiz</h1>
        <h2>{questions[frageIndex].question}</h2>
      </div>
      <div>
        {questions[frageIndex].answers.map((answer, index) => (
          <button
            key={index}
            onClick={evaluateAnswer}
            disabled={questionAnswered} // Disable buttons after answer is clicked
          >
            {answer}
          </button>
        ))}
      </div>
      {questionAnswered && (
        <>
          <p>{feedback}</p>
          <Button click={weiter}>Weiter</Button>
        </>
      )}
    </>
  );
}

export default Spiel;
