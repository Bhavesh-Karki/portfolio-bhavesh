import React from 'react';
import { Container } from 'react-bootstrap';

export default function Resume() {
  const items = [
    { role: 'Education', org: 'Pillai College - SY', time: '2024-present', desc: 'BCA (Bachelor of Computer Applications).' },
    { role: 'HSC', org: 'Terna College', time: '2022-24', desc: 'Science.' }
  ];
  return (
    <Container className="py-5" style={{maxWidth: 900}}>
      <h2 className="mb-4">Resume</h2>
      <div className="list-group">
        {items.map((it, i) => (
          <div key={i} className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{it.role} • {it.org}</h5>
              <small className="text-muted">{it.time}</small>
            </div>
            <p className="mb-1">{it.desc}</p>
          </div>
        ))}
      </div>
      <a className="btn btn-primary mt-4" href="#" download>Download PDF</a>
    </Container>
  );
}


