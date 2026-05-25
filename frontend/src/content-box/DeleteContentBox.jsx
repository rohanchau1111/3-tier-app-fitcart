import React from 'react';
import './ContentBox.css';

const DeleteContentBox = ({ onSubmit, content }) => {
  const [record] = React.useState(content);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    onSubmit(record.id);
  };

  return (
    <div className="content-box product-card">
      <div className="product-header">
        <div className="product-emoji">🏋️</div>
        <div className="product-title-block">
          <div className="product-name">{record.exercise}</div>
          <div className="product-rating">
            ★★★★★ <span className="rating-count">(128)</span>
          </div>
        </div>
      </div>
      <div className="product-stats">
        <div className="stat-row">
          <span className="stat-icon">⚖️</span>
          <span className="stat-label">Weight</span>
          <span className="stat-value weight-value">{record.weight} kg</span>
        </div>
        {record.diet && (
          <div className="stat-row">
            <span className="stat-icon">🥗</span>
            <span className="stat-label">Diet</span>
            <span className="stat-value diet-value">{record.diet}</span>
          </div>
        )}
        <div className="stat-row">
          <span className="stat-icon">📅</span>
          <span className="stat-label">Added</span>
          <span className="stat-value date-value">{formatDate(record.date)}</span>
        </div>
      </div>
      <button className="btn-danger" onClick={handleSubmit}>🗑️ Remove from Cart</button>
    </div>
  );
};

export default DeleteContentBox;
