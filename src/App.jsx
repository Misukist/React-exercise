import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ text, updateFeedback }) => {
  return (
    <button onClick={() => updateFeedback(text.toLowerCase())}>
      {text}
    </button>
  );
};

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive + '%'} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const updateFeedback = (feedbackType) => {
    // Päivitetään palautteen tyyppi
    const updatedGood = feedbackType === 'good' ? good + 1 : good;
    const updatedNeutral = feedbackType === 'neutral' ? neutral + 1 : neutral;
    const updatedBad = feedbackType === 'bad' ? bad + 1 : bad;

    // Lasketaan total
    const updatedTotal = updatedGood + updatedNeutral + updatedBad;
    setTotal(updatedTotal);

    // Lasketaan keskiarvo ja positiivisten prosenttiosuus
    const updatedAverage = updatedTotal > 0 ? (updatedGood - updatedBad) / updatedTotal : 0;
    setAverage(updatedAverage);
    setPositive(updatedTotal > 0 ? (updatedGood / updatedTotal) * 100 : 0);

    // Päivitetään kaikki tilat
    setGood(updatedGood);
    setNeutral(updatedNeutral);
    setBad(updatedBad);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" updateFeedback={updateFeedback} />
      <Button text="Neutral" updateFeedback={updateFeedback} />
      <Button text="Bad" updateFeedback={updateFeedback} />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
