import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%", backgroundColor: "#f9f9f9", padding: "20px"}}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Muskan Yadav</h2>
            <h5> Welcome to my personal portfolio website! </h5>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
           

             I am a passionate and dedicated individual who is constantly seeking new challenges and opportunities to grow and develop my skills. Through my work, I strive to create meaningful and impactful experiences that resonate with my audience.

            On this website, you will find examples of my work in design, photography, and writing. I am constantly exploring new avenues and experimenting with different techniques to push the boundaries of my creativity.

            I invite you to explore my portfolio and get in touch if you would like to collaborate on a project or simply connect with a fellow creative enthusiast. Thank you for stopping by and I hope you enjoy your visit!
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="muskan.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
