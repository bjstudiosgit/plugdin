import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Book from './pages/Book';
import HowItWorksPage from './pages/HowItWorksPage';
import FAQPage from './pages/FAQPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  const { pathname } = useLocation();
  const isBook = pathname.startsWith('/book');

  return (
    <>
      <ScrollToTop />
      {!isBook && <Navbar />}
      {isBook && (
        <nav className="navbar">
          <a href="/" className="navbar-logo">
            <span className="logo-bolt">⚡</span>
            <span>Plugd<span style={{ color: 'var(--brand-primary)' }}>In</span></span>
          </a>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Questions? <a href="tel:01612345678" style={{ color: 'var(--brand-primary)' }}>0161 234 5678</a>
          </span>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
