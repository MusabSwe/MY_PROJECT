import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // to solve when reach last reveiw 
  // we want to return back to the 1st review 
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(0);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // fix setInterval
  // useEffect(() => {
  //   let slider = setIndex(index + 1);
  // });
  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          // nextSlide name should be matching css 
          // to maniuplate with slide of reviwes  
          let position = "nextSlide";
          // to control which slide will display
          // 
          if (personIndex === index) {
            position = 'activeSlide';
          }
          // when the index reach last review then return back to the first review
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }
          return (
            <article key={person.id} className={position} >
              <img src={person.image} alt={person.name} className='person-img' />
              <h4>{person.name}</h4>
              <p className='title'>{person.title}</p>
              <p className='text'>{person.quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}><FiChevronLeft /></button>
        <button className='next' onClick={() => setIndex(index + 1)}><FiChevronRight /></button>
      </div>
    </section>
  )
}

export default App;