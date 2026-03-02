import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Briefcase,
  Mail,
  Info,
  Users,
  Cpu,
  Zap,
  Settings,
  Sun,
  Moon,
  ChevronRight,
  Hammer
} from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import ICTPage from './pages/ICTPage';
import PowerPage from './pages/PowerPage';
import ElectromechanicalPage from './pages/ElectromechanicalPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import IndustrialAutomationPage from './pages/IndustrialAutomationPage';
import Footer from './components/Footer';

const SiteHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">MEETO Engineering PLC</span>
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Precision & Innovation</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' },
            { to: '/careers', label: 'Careers' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-6"
          >
            <div className="flex flex-col gap-4">
              {[
                { to: '/', label: 'Home', icon: Home },
                { to: '/about', label: 'About Us', icon: Info },
                { to: '/projects', label: 'Our Projects', icon: Briefcase },
                { to: '/careers', label: 'Join Us', icon: Users },
                { to: '/contact', label: 'Contact', icon: Mail },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{item.label}</span>
                  </div>
                  <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const MobileBottomNav = () => {
  const location = useLocation();
  const path = location.pathname;
  const navItems = [
    { to: '/', icon: Home, label: 'Home', match: (p) => p === '/' },
    { to: '/services/ict', icon: Settings, label: 'Services', match: (p) => p.startsWith('/services') },
    { to: '/projects', icon: Briefcase, label: 'Projects', match: (p) => p === '/projects' },
    { to: '/contact', icon: Mail, label: 'Contact', match: (p) => p === '/contact' },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 flex justify-around items-center h-20 md:hidden px-2 pb-safe">
        {navItems.map((item) => {
          const isActive = item.match(path);
          return (
            <Link
              key={item.to}
              to={item.to}
              className="relative flex flex-col items-center justify-center gap-1.5 w-full h-full"
            >
              <div className={`relative p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
                <item.icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <motion.div
                    layoutId="navTab"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="h-20 md:hidden"></div>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display transition-colors duration-300 selection:bg-primary/30">
          <SiteHeader />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/services/ict" element={<ICTPage />} />
              <Route path="/services/power" element={<PowerPage />} />
              <Route path="/services/electromechanical" element={<ElectromechanicalPage />} />
              <Route path="/services/industrial-automation" element={<IndustrialAutomationPage />} />
            </Routes>
          </main>
          <Footer />
          <MobileBottomNav />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
