import React from 'react';
import './ContentBox.css';

const CreateContentBox = ({ onSubmit }) => {
  const [exercise, setExercise] = React.useState("");
  const [weight, setWeight] = React.useState(0);
  const [diet, setDiet] = React.useState("");

  const handleSubmit = () => {
    onSubmit(exercise, weight || 0, diet);
    setExercise('');
    setWeight(0);
    setDiet('');
  };

  return (
    <div className="content-box">
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise name"
      />
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(parseInt(e.target.value))}
        placeholder="Body weight (kg)"
      />
      <input
        type="text"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        placeholder="Diet / Nutrition (e.g. High protein)"
      />
      <button onClick={handleSubmit}>🛒 Add to Cart</button>
    </div>
  );
};

export default CreateContentBox;
