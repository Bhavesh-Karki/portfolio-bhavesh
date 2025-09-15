import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="py-5">
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 min-vh-75">
        <div className="text-center text-lg-start">
          <img src={process.env.PUBLIC_URL + '/pic.jpg'} alt="Profile" className="rounded-circle shadow mb-4" style={{ width: 200, height: 200, objectFit: 'cover' }} />
        </div>
        <div className="text-center text-lg-start" style={{maxWidth: '600px'}}>
          <h1 className="fw-bold mb-3 display-5">Hi, I'm Bhavesh</h1>
          <p className="text-muted mb-3 fs-5">Frontend Developer • React and UX-Learner</p>
          <p className="mb-4 fs-6 lh-lg">
            I design and build clean, accessible web interfaces with a focus on
            performance and delightful user experience. I enjoy turning ideas into
            real products, writing readable code, and continuously improving through
            iteration and feedback.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4">
            {['React', 'JavaScript', 'Bootstrap', 'C++', 'Git', 'Python', 'HTML', 'CSS','MYSQL','Java'].map(skill => (
              <span key={skill} className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">{skill}</span>
            ))}
          </div>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
            <a href="mailto:bhavesh@example.com" className="btn btn-primary px-4 py-2"><i className="fi fi-rr-envelope me-2"></i>Contact</a>
            <a href="/resume" className="btn btn-outline-primary px-4 py-2"><i className="fa-solid fa-file-lines me-2"></i>Resume</a>
            <a href="/my-work" className="btn btn-outline-secondary px-4 py-2"><i className="fa-solid fa-briefcase me-2"></i>My Work</a>
          </div>
        </div>
      </div>
    </Container>
  );
}


