import React from 'react';
import '../Styles/NewsType.css'; 

const NewsTypes = ({ title, description, imageURL, newsURL, source }) => {
  const slicedDescription = description ? description.slice(0, 100) + '...' : '';

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageURL} className="course-image" alt={title} />
          <h5 className="course-title">{title}</h5>
          <p className="course-description">{slicedDescription}</p>
        </div>
        <div className="flip-card-back">
          <span className="course-title-back">{source}</span>
          <a href={newsURL} className="course-button">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsTypes;
