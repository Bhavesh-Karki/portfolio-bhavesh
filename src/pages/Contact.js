import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="py-5" style={{maxWidth: 800}}>
      <h2 className="mb-4">Contact</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com" />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Give Feedback here." />
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-primary">Send</button>
        </div>
      </form>
      {/* <div className="mt-4">
        <p className="mb-1">Email: <a href="mailto:codebybhavesh@gmail.com">codebybhavesh@gmail.com</a></p>
        <p className="mb-0">GitHub: <a href="https://github.com/Bhavesh-Karki" target="_blank" rel="noreferrer">https://github.com/Bhavesh-Karki</a></p>
      </div> */}
    </Container>
  );
}


