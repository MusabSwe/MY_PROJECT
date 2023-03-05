import React, { useEffect, useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // useEffect(() => {
  //   let lastIndex = people.length - 1;
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  // }, [index])

  // To check index at the last index and first index when
  // we click either previoues or next
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  // move to the previous person
  const nextPerson = () => {
    // console.log(people.length -1);
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  // move to the next person
  const prePerson = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const randomPerson = () => {
    // Random number between 0 - 3
    let randomIndex = Math.floor(Math.random() * 4);
    setIndex(randomIndex);
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className="person-img" />
        <span className='quote-icon'><FaQuoteRight /></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prePerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>suprise me</button>
    </article>
  )
};

export default Review;