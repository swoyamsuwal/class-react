import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links - like navbar */}
      <h1>Hello</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      {/* Define Routes - like Laravel route list */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}