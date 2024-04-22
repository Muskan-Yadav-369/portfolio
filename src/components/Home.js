import React from 'react';
import "./Home.css";
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{color:"#6c63ff"}}>Muskan Yadav</span></h2>
            <p style={{color:"#666", letterSpacing:".5px", marginTop:10, marginBottom:10}}>
              Hello and welcome to my online portfolio! I am Muskan, a Software Engineer. Here you will find a collection of my work, showcasing my skills and expertise in WEB Development. I am passionate about new innovations in software technology, and I strive to create innovative and impactful solutions for my clients. With a keen eye for detail and a creative approach, I am dedicated to delivering high-quality results that exceed expectations.
              <br />
              <br />
              Feel free to explore my portfolio and get in touch if you have any questions or would like to collaborate on a project. Thank you for visiting!
            </p>
            <div className='btn_div mt-4'>
              <Button variant="danger" style={{letterSpacing:"1px", border:"none", borderRadius:4, background:"#2f2d69", marginRight:24}}>Projects</Button>
              <Button variant="danger" style={{letterSpacing:"1px", border:"none", borderRadius:4, background:"#6c63ff"}}>Youtube</Button>
            </div>
          </div>
          <div className="right_div">
            <img src="portfolio.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
