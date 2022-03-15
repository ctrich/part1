import { useEffect, useState } from "react";
import Button from "./Button";
import Display from "./Display";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [averageScore, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [score, setScore] = useState(0);

  const incrementGood = () => {
    setScore(score + 1)
    setTotal(total + 1)
    setGood(good + 1);
  }

  const incrementBad = () => {
    setScore(score - 1);
    setTotal(total + 1);
    setBad(bad + 1);
  }

  const incrementNeutral = () => {
    setTotal(total + 1);
    setNeutral(neutral + 1);
  }

  useEffect(() => {
    average();
    positivePercentage();
  }, [total]);

  const average = () => {
    if(!score) {
      return;
    }
    setAverage(score / total);
  }

  const positivePercentage = () => {
    if (!good) {
      return;
    }

    setPositive(good / total);
  }

 
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={incrementGood} text="good"/>
      <Button onClick={incrementNeutral} text="neutral"/>
      <Button onClick={incrementBad} text="bad"/>
      <h2>Statistics</h2>
      {!total ? <div>No feedback given</div> : 
      <table>
        <tbody>
          <Display text="good" count={good} />
          <Display text="neutral" count={neutral} />
          <Display text="bad" count={bad} />
          <Display text="all" count={total} />
          <Display text="average" count={averageScore} />
          <Display text="positive" count={positive} />
        </tbody>
      </table>
      }
      
    </div>
  );
}

export default App;
