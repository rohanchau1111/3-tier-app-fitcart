import React from 'react';
import './ContentBox.css';

const DeleteContentBox = ({ onSubmit, content }) => {
  const [record] = React.useState(content);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const handleSubmit = () => {
    onSubmit(record.id);
  };

  return (
    <div className="content-box product-card">
      <div className="product-emoji">🏋️</div>
      <div className="product-name">{record.exercise}</div>
      <div className="product-price">
        <span className="price-symbol">⚖</span> {record.weight}
        <span className="price-unit"> kg</span>
      </div>
      <div className="product-date">📅 {formatDate(record.date)}</div>
      <br />
      <button className="delete-btn" onClick={handleSubmit}>🗑️ Remove from Cart</button>
    </div>
  );
};

export default DeleteContentBox;
