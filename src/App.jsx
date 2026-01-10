import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import { trackPageView } from './utils/analytics';
import './index.css';

// Lazy load pages for better performance (code splitting)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Careers = lazy(() => import('./pages/Careers'));
const JobApplication = lazy(() => import('./pages/JobApplication'));
const Contact = lazy(() => import('./pages/Contact'));
const GetInTouch = lazy(() => import('./pages/GetInTouch'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));

// Loading fallback for lazy-loaded components
const PageLoader = () => (
  <div className="page-loader">
    <div className="loading-spinner"></div>
  </div>
);

// Analytics wrapper component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname, document.title);
  }, [location]);

  return null;
}

function AppContent() {
  return (
    <>
      <AnalyticsTracker />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="careers" element={<Careers />} />
            <Route path="careers/apply/:position" element={<JobApplication />} />
            <Route path="contact" element={<Contact />} />
            <Route path="get-in-touch" element={<GetInTouch />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="disclaimer" element={<Disclaimer />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
