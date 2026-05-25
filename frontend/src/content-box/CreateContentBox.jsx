import React from 'react';
import './ContentBox.css';

const CreateContentBox = ({ onSubmit }) => {
  const [exercise, setExercise] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [diet, setDiet] = React.useState("");

  const handleSubmit = () => {
    onSubmit(exercise, parseInt(weight) || 0, diet);
    setExercise('');
    setWeight('');
    setDiet('');
  };

  return (
    <div className="content-box">
      <div className="field-group">
        <label className="field-label"><span>🏋️</span> Exercise Name</label>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="e.g. Bench Press, Running"
        />
      </div>
      <div className="field-group">
        <label className="field-label"><span>⚖️</span> Body Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g. 75"
        />
      </div>
      <div className="field-group">
        <label className="field-label"><span>🥗</span> Diet / Nutrition</label>
        <input
          type="text"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          placeholder="e.g. High protein, Low carb"
        />
      </div>
      <button className="btn-primary" onClick={handleSubmit}>🛒 Add to Cart</button>
    </div>
  );
};

export default CreateContentBox;
