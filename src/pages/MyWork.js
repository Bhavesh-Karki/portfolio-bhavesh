import React from 'react';
import { Container } from 'react-bootstrap';

export default function MyWork() {
  const allCards = [
    { title: 'FS Practical ', text: 'Applying React.', link: 'https://github.com/Bhavesh-Karki/GoExplore', practical: true },
    { title: 'SocialDock', text: 'This single website can host all of your favorite creators social accounts.', link: '#', category: 'still' },
    { title: 'Youtuber Video Downloader', text: 'Fontend site for youtube video downloader.', link: 'https://github.com/Bhavesh-Karki/YouDownloader', category: 'frontend' },
    { title: 'FlexNFitness', text: 'Fontend site for a your fitness tracking .', link: 'https://github.com/Bhavesh-Karki/FlexNFitness', category: 'frontend' }
  ];
  const [filter, setFilter] = React.useState('all');
  const cards = allCards.filter(c => {
    if (filter === 'all') return true;
    if (filter === 'fs') return !!c.practical;
    if (filter === 'frontend') return c.category === 'frontend';
    if (filter === 'still') return c.category === 'still';
    return true;
  });
  return (
    <Container className="py-5">
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
        <h2 className="mb-0">My Work</h2>
        <div className="btn-group" role="group" aria-label="Work filters">
          <button type="button" className={`btn btn-outline-primary ${filter==='all'?'active':''}`} onClick={() => setFilter('all')}>All</button>
          <button type="button" className={`btn btn-outline-primary ${filter==='fs'?'active':''}`} onClick={() => setFilter('fs')}>FS</button>
          <button type="button" className={`btn btn-outline-primary ${filter==='frontend'?'active':''}`} onClick={() => setFilter('frontend')}>Frontend</button>
          <button type="button" className={`btn btn-outline-primary ${filter==='still'?'active':''}`} onClick={() => setFilter('still')}>Still Working</button>
        </div>
      </div>
      <div className="row g-4">
        {cards.map((c, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-4">
            <div className={`card h-100 ${c.practical ? 'border-success' : ''}`}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{c.title}</h5>
                <p className="card-text flex-grow-1">{c.text}</p>
                {c.practical && <span className="badge bg-success align-self-start mb-2">FS Practical App</span>}
                <a href={c.link} className="btn btn-outline-primary btn-sm mt-auto">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}


