import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styles/CourseCard.css';

import StockExch from '../Images/StockExch.jpg';
import Algorithm from '../Images/Algorithm.jpg';
import StockExch2 from '../Images/StockExch2.png';
import StockExch3 from '../Images/StockExch3.jpg';
import RealEstate from '../Images/RealEstate.jpg';
import BlockChain from '../Images/BlockChain.jpg';
import Business from '../Images/Business.jpg';

const images = {
  "StockExch.jpg": StockExch,
  "Algorithm.jpg": Algorithm,
  "StockExch2.png": StockExch2,
  "StockExch3.jpg": StockExch3,
  "RealEstate.jpg": RealEstate,
  "BlockChain.jpg": BlockChain,
  "Business.jpg": Business
};

const CourseCard = ({ course }) => {
  if (!course) {
    console.error("Course data is missing");
    return <h1 style={{fontSize:"5.5rem", fontWeight:"100"}}>Error: Course data is missing</h1>;
  }

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={images[course.image]} alt={course.courseName} className="course-image" />
          <h2 className="course-title">{course.courseName}</h2>
          <p className="course-rating">Rating: {course.rating} ★</p>
          <p className="course-description">{course.description}</p>
        </div>
        <div className="flip-card-back">
          <h3 className="course-title-back">{course.courseName}</h3>
          <p className="course-detailed-info">{course.detailedInfo}</p>
          <p className="course-professor">Instructor: {course.professor}</p>
          <Link to={`/courses/${course.id}`} className="course-button">Go to Course</Link>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    detailedInfo: PropTypes.string.isRequired,
    professor: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCard;
