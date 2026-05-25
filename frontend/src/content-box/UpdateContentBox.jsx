import React from 'react';
import './ContentBox.css';

const UpdateContentBox = ({ onSubmit, content }) => {
  const [record, setRecord] = React.useState(content);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    onSubmit(record);
  };

  return (
    <div className="content-box">
      <div className="field-group">
        <label className="field-label"><span>🏋️</span> Exercise Name</label>
        <input
          type="text"
          value={record.exercise}
          onChange={(e) => setRecord({ ...record, exercise: e.target.value })}
          placeholder="Exercise name"
        />
      </div>
      <div className="field-group">
        <label className="field-label"><span>⚖️</span> Body Weight (kg)</label>
        <input
          type="number"
          value={record.weight}
          onChange={(e) => setRecord({ ...record, weight: parseInt(e.target.value) })}
          placeholder="e.g. 75"
        />
      </div>
      <div className="field-group">
        <label className="field-label"><span>🥗</span> Diet / Nutrition</label>
        <input
          type="text"
          value={record.diet || ''}
          onChange={(e) => setRecord({ ...record, diet: e.target.value })}
          placeholder="e.g. High protein"
        />
      </div>
      <div className="date-tag">📅 Added: {formatDate(record.date)}</div>
      <button className="btn-primary" onClick={handleSubmit}>✏️ Update Record</button>
    </div>
  );
};

export default UpdateContentBox;
