import React from 'react'

function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>About Us</h1>
      <p>
        This website is a simple React project created to practice building components 
        and structuring pages. The About page gives visitors a quick overview of who we are 
        and what this site is about.
      </p>
      
      <section style={{ marginTop: '20px' }}>
        <h2>Our Mission</h2>
        <p>
          To learn, experiment, and grow skills in web development while keeping things simple 
          and beginner-friendly.
        </p>
      </section>

      <footer style={{ marginTop: '40px', fontSize: '14px', color: 'gray' }}>
        © 2026 My Website
      </footer>
    </div>
  )
}

export default About