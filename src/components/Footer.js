import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()
  const resumePDF = process.env.PUBLIC_URL + '/resume.pdf'; 
  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Muskan Yadav</h4>
            <p>© {year} Muskan Yadav All rights reserved</p>
           <p className='d-flex'>
              <a href="https://www.instagram.com/shivanshi_404/" target="_blank" rel="noopener noreferrer">
                <i className='fab fa-instagram mr-3'></i> {/* Added mr-3 for margin-right */}
              </a>
              <a href="https://www.linkedin.com/in/muskan-yadav-967110272/" target="_blank" rel="noopener noreferrer">
                <i className='fab fa-linkedin'></i>
              </a>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Contact me for collaborations.</p>
            <p>info@muskanyadav.com</p>
            <p>+91 012345678</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
             <p><a href={resumePDF} target="_blank" rel="noopener noreferrer">Resume</a></p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
