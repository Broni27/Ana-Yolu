import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Home from '@/pages/Home';
import Team from '@/pages/Team';
import Services from '@/pages/Services';
import About from '@/pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

