import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceLeadGen from './pages/ServiceLeadGen';
import ServiceSEO from './pages/ServiceSEO';
import ServiceWebsite from './pages/ServiceWebsite';
import ServiceSocial from './pages/ServiceSocial';
import About from './pages/About';
import Results from './pages/Results';
import Contact from './pages/Contact';
import FounderAniket from './pages/FounderAniket';
import FounderShantanu from './pages/FounderShantanu';
import FounderAkhand from './pages/FounderAkhand';
import BookFreeCall from './pages/BookFreeCall';
import BookingConfirmed from './pages/BookingConfirmed';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import HelpCentre from './pages/HelpCentre';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/lead-generation" element={<ServiceLeadGen />} />
          <Route path="services/seo-mastery" element={<ServiceSEO />} />
          <Route path="services/website-creation" element={<ServiceWebsite />} />
          <Route path="services/social-media" element={<ServiceSocial />} />
          <Route path="about" element={<About />} />
          <Route path="about/aniket-singh" element={<FounderAniket />} />
          <Route path="about/shantanu-singh" element={<FounderShantanu />} />
          <Route path="about/akhand-pratap-singh" element={<FounderAkhand />} />
          <Route path="results" element={<Results />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-free-call" element={<BookFreeCall />} />
          <Route path="booking-confirmed" element={<BookingConfirmed />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="help-centre" element={<HelpCentre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


