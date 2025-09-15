import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function useTheme() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return { theme, toggle: () => setTheme(t => (t === 'light' ? 'dark' : 'light')) };
}

function App() {
  const { theme, toggle } = useTheme();
  return (
    <Router>
      <div data-app-root>
      <Navbar expand="md" bg="body-tertiary" className="border-bottom">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Bhavesh</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/my-work">My Work</Nav.Link>
              <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav>
            <button aria-label="Toggle theme" className="btn btn-sm btn-outline-secondary ms-md-3 mt-3 mt-md-0" onClick={toggle}>
              <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main data-app-main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>

      <footer className="mt-5 py-4 border-top bg-body-tertiary">
        <Container className="d-flex justify-content-between align-items-center">
          <span className="text-muted">© {new Date().getFullYear()} Bhavesh Karki</span>
          <div className="links-inline">
            <a aria-label="GitHub" className="text-decoration-none" href="https://github.com/Bhavesh-Karki" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            <a aria-label="Email" className="text-decoration-none" href="mailto:codebybhavesh@gmail.com"><i className="fi fi-rr-envelope"></i></a>
          </div>
        </Container>
      </footer>
      </div>
    </Router>
  );
}

export default App;
