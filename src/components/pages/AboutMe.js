import React from 'react';

// About Me section HTML
export default function AboutMe() {
  return (
    <div className='container mt-5 mb-5'>
      <h1 id='page-title' className='mt-4 mb-4'>About Me</h1>
      <div className='container d-flex'>
        <img className='mr-4 mt-4 mb-4' id='photo' src='https://res.cloudinary.com/dfamiaufc/image/upload/ar_1:1,b_rgb:ffffff,bo_0px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_300/v1651018512/Portfolio/Devon-Faria-Headshot_qgmho4.jpg' alt='devon faria'></img>
        <p className='mt-4'>
          Junior Fullstack Web  Developer with passions for consistent learning, people, and living authentically. Proficiency in Javascript, CSS, and HTML, including experience in both front-end design and backend functionality. My previous web applications used modular frameworks like React and Handlebars, database management tools such as MongoDB and MySQL with their corresponding ORMs, and design frameworks such as Tailwind and Bootstrap. Always adapting to the changing landscape of web development by remaining a lifelong student of computer science and the trends in software technologies.
          <br></br>
          <br></br>
          With 8 years of previous experience in real estate team management, business operations, and programming for non-profits, I have a wealth of input in conversations about leading teams and the strategy behind prioritizing team efforts for maximal returns. For further informatiuon on my previous experience, please visit my resume.
          <br></br>
          <br></br>
          Recent graduate of the 2U Fullstack Web Development Bootcamp, which was a 12-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS. Additionally, I graduated the University of Florida in 2014 with two Bachelors of Arts in Anthropology and Linguistics, and a minor in Arabic.
          <br></br>
          <br></br>
          I look forward to being an integral part of a thriving developer team. My past experience shows that I excel in challenging environments and adapt quickly to changes in industry standards and tools. Efficiency, proficiency, and maturity is required to lead effectively in any shared workspace. I look forward to showing you how I can contribute to your business' next endeavor.
        </p>
      </div>
    </div>
  )
};