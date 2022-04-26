import React from 'react';

const styles = {
  photo: {
    margin: '0px 4rem 0px 0px',
  },
  text: {
    display: 'inline',
    wordWrap: 'wrap',
  }
};

export default function AboutMe() {
  console.log('AboutMe plugged in');
  return (
    <div className='container mt-5 mb-5'>
      <h1 className='mt-4'>About Devon Faria</h1>
      <div className='d-flex'>
        <img className='mr-4 mt-4' style={styles.photo} src='https://ichef.bbci.co.uk/news/640/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg'></img>
        <p className='mt-4'>I am a 30 year old professional living in Asheville, NC currently looking for opportunities for junior    developers. With over a decade of experience in customer service in both real estate and non-profit, I offer unique perspectives to design, accesibility, and the customer experience.

          Through a virtual coding Bootcamp and additional courses offered through Udemy, I can navigate HTML, CSS, and Javascript. Proficiency in front-end design is my main focus, however I continue to learn more about backend development and databasing.

          I look forward to being an integral part of a thriving developer team. My past experience shows that I excel in challenging environments and adapt quickly to changes in industry standards and tools. Efficiency, proficiency, and maturity is required to lead effectively in any shared workspace. I look forward to showing you how I can contribute to your business' next endeavor.
        </p>
      </div>
    </div>
  )
};