import React from 'react';

const styles = {
  photo: {
    margin: '0px 4rem 0px 0px',
  },
  text: {
    display: 'inline',
    wordWrap: 'wrap',
  },
  pageTitle: {
    fontSize: '42px',
    textAlign: 'center'
  }
};

export default function AboutMe() {
  console.log('AboutMe plugged in');
  return (
    <div className='container mt-5 mb-5'>
      <h1 style={styles.pageTitle} className='mt-4 mb-4'>About Me</h1>
      <div className='d-flex'>
        <img className='mr-4 mt-4' style={styles.photo} src='https://res.cloudinary.com/dfamiaufc/image/upload/ar_1:1,b_rgb:ffffff,bo_0px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_300/v1651018512/Portfolio/Devon-Faria-Headshot_qgmho4.jpg'></img>
        <p className='mt-4'>I am a 30 year old professional living in Asheville, NC currently looking for opportunities for junior    developers. With over a decade of experience in customer service in both real estate and non-profit, I offer unique perspectives to design, accesibility, and the customer experience.
          <br></br>
          <br></br>
          Through a virtual coding Bootcamp and additional courses offered through Udemy, I can navigate HTML, CSS, and Javascript. Proficiency in front-end design is my main focus, however I continue to learn more about backend development and databasing.
          <br></br>
          <br></br>
          I look forward to being an integral part of a thriving developer team. My past experience shows that I excel in challenging environments and adapt quickly to changes in industry standards and tools. Efficiency, proficiency, and maturity is required to lead effectively in any shared workspace. I look forward to showing you how I can contribute to your business' next endeavor.
        </p>
      </div>
    </div>
  )
};