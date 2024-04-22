import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './data';
import Spinner from 'react-bootstrap/Spinner';

const Playlist = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
          <Spinner animation='border' variant='danger' />
          &nbsp;&nbsp; Loading .....
        </div>
      ) : (
        <div className="container">
          <h2 className='text-center mt-2'>Projects</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              {projectData.map((project, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <Card style={{ width: '100%', height: '18rem' }}>
                    <Card.Img variant='top' src={project.imgsrc} style={{ height: '10rem' }} />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                      <Card.Title className='text-center'>{project.projectName}</Card.Title>
                      <Button variant='primary'>
                        <a href={project.demo} target='_blank' rel='noopener noreferrer' className='text-decoration-none text-light'>
                          Live Demo
                        </a>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Playlist;
