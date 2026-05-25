import React from 'react';
import './FitnessAdvisor.css';

const RECOMMENDATIONS = {
  underweight: {
    label: 'Underweight',
    color: '#F59E0B',
    bg: '#FFFBEB',
    border: '#FDE68A',
    icon: '⚡',
    exercises: ['Strength Training', 'Squats', 'Deadlift', 'Push-ups', 'Pull-ups'],
    diet: 'High calorie — protein-rich foods, nuts, dairy, complex carbs, healthy fats',
    tip: 'Build muscle mass with strength training and a calorie surplus.',
  },
  normal: {
    label: 'Normal Weight',
    color: '#059669',
    bg: '#F0FDF4',
    border: '#A7F3D0',
    icon: '✅',
    exercises: ['Running', 'Swimming', 'Cycling', 'HIIT', 'Yoga'],
    diet: 'Balanced — lean proteins, whole grains, fruits, vegetables, healthy fats',
    tip: 'Maintain your fitness with a mix of cardio and strength training.',
  },
  overweight: {
    label: 'Overweight',
    color: '#F97316',
    bg: '#FFF7ED',
    border: '#FED7AA',
    icon: '🔥',
    exercises: ['Brisk Walking', 'Running', 'Cycling', 'HIIT', 'Swimming'],
    diet: 'High protein, low carb — vegetables, lean meats, avoid processed foods',
    tip: 'Focus on cardio with a calorie deficit to reach a healthy weight.',
  },
  obese: {
    label: 'Obese',
    color: '#EF4444',
    bg: '#FEF2F2',
    border: '#FECACA',
    icon: '❗',
    exercises: ['Walking', 'Swimming', 'Yoga', 'Low-impact Cardio', 'Cycling'],
    diet: 'Very low carb, high fiber — vegetables, lean proteins, water-rich foods',
    tip: 'Start with low-impact exercise and gradually increase intensity.',
  },
};

const getCategory = (bmi) => {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25)   return 'normal';
  if (bmi < 30)   return 'overweight';
  return 'obese';
};

const FitnessAdvisor = ({ onApply }) => {
  const [height, setHeight]   = React.useState('');
  const [weight, setWeight]   = React.useState('');
  const [result, setResult]   = React.useState(null);
  const [selected, setSelected] = React.useState(null);

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h < 50 || h > 300 || w < 10 || w > 500) return;
    const bmi = w / ((h / 100) ** 2);
    const cat = getCategory(bmi);
    setResult({ bmi: bmi.toFixed(1), ...RECOMMENDATIONS[cat] });
    setSelected(null);
  };

  const handleApply = (exercise) => {
    if (!result) return;
    setSelected(exercise);
    onApply(exercise, result.diet);
  };

  return (
    <div className="advisor-wrapper">
      <div className="advisor-card">

        {/* Header */}
        <div className="advisor-header">
          <div className="advisor-header-left">
            <span className="advisor-icon">🧮</span>
            <div>
              <h3 className="advisor-title">Fitness Advisor</h3>
              <p className="advisor-subtitle">Get personalised exercise &amp; diet based on your BMI</p>
            </div>
          </div>
          <span className="advisor-badge">AI Powered</span>
        </div>

        {/* Inputs */}
        <div className="advisor-inputs">
          <div className="adv-field">
            <label className="adv-label">📏 Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 175"
              className="adv-input"
            />
          </div>
          <div className="adv-field">
            <label className="adv-label">⚖️ Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 70"
              className="adv-input"
            />
          </div>
          <button className="adv-btn" onClick={calculate}>Calculate BMI</button>
        </div>

        {/* Result */}
        {result && (
          <div className="advisor-result" style={{ borderColor: result.border, background: result.bg }}>

            {/* BMI Score */}
            <div className="bmi-row">
              <div className="bmi-score-block">
                <span className="bmi-number" style={{ color: result.color }}>{result.bmi}</span>
                <span className="bmi-label">BMI</span>
              </div>
              <div className="bmi-category-block">
                <span className="bmi-icon">{result.icon}</span>
                <span className="bmi-category" style={{ color: result.color }}>{result.label}</span>
                <span className="bmi-tip">{result.tip}</span>
              </div>
            </div>

            {/* BMI scale bar */}
            <div className="bmi-bar-track">
              <div className="bmi-bar-fill" style={{
                width: `${Math.min((parseFloat(result.bmi) / 40) * 100, 100)}%`,
                background: result.color
              }} />
              <div className="bmi-scale-labels">
                <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
              </div>
            </div>

            {/* Recommended exercises */}
            <div className="rec-section">
              <p className="rec-title">🏋️ Recommended Exercises <span className="rec-hint">Click to apply to CREATE form</span></p>
              <div className="rec-tags">
                {result.exercises.map((ex) => (
                  <button
                    key={ex}
                    className={`rec-tag ${selected === ex ? 'rec-tag-active' : ''}`}
                    onClick={() => handleApply(ex)}
                    style={selected === ex ? { background: result.color, borderColor: result.color } : {}}
                  >
                    {selected === ex ? '✓ ' : ''}{ex}
                  </button>
                ))}
              </div>
            </div>

            {/* Diet recommendation */}
            <div className="rec-diet">
              <span className="diet-icon">🥗</span>
              <div>
                <p className="diet-title">Recommended Diet</p>
                <p className="diet-text">{result.diet}</p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default FitnessAdvisor;
