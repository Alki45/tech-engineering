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
import IndustrialAutomationPage from './pages/IndustrialAutomationPage';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';

const SiteHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="glass rounded-[2rem] px-8 py-4 flex items-center justify-between shadow-2xl shadow-primary/10 border-white/10 dark:border-slate-800/50">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2.5 rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 group-hover:rotate-[360deg] transition-all duration-700">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">MEETO</span>
              <span className="text-[8px] font-black text-primary tracking-[0.3em] uppercase opacity-70">Engineering PLC</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-[10px] font-black uppercase tracking-widest transition-all duration-300 relative group ${isActive ? 'text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-primary'
                    }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="size-12 rounded-2xl bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center border border-white/20 dark:border-slate-700/50 shadow-inner"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden size-12 rounded-2xl bg-primary text-white hover:bg-primary-dark transition-all duration-500 flex items-center justify-center shadow-xl shadow-primary/20"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] lg:hidden bg-slate-950/95 backdrop-blur-2xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-xl">
                    <Cpu className="text-white w-6 h-6" />
                  </div>
                  <span className="text-xl font-black text-white uppercase tracking-tight">MEETO</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="size-14 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  { to: '/', label: 'Home', icon: Home },
                  { to: '/about', label: 'About Us', icon: Info },
                  { to: '/projects', label: 'Our Projects', icon: Briefcase },
                  { to: '/contact', label: 'Contact', icon: Mail },
                ].map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.to}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all group"
                    >
                      <div className="flex items-center gap-6 text-white">
                        <item.icon size={24} className="opacity-50 group-hover:opacity-100" />
                        <span className="text-2xl font-black uppercase tracking-tighter">{item.label}</span>
                      </div>
                      <ChevronRight size={24} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-primary rounded-[2.5rem] text-white flex justify-between items-center group overflow-hidden relative">
              <Zap className="absolute -right-6 -top-6 size-32 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-2">Need Help?</p>
                <h3 className="text-xl font-black leading-tight">Get Technical <br /> Support Now</h3>
              </div>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="relative z-10 size-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-2xl transition-transform active:scale-90">
                <Mail size={24} />
              </Link>
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
              <Route path="/services/ict" element={<ICTPage />} />
              <Route path="/services/power" element={<PowerPage />} />
              <Route path="/services/electromechanical" element={<ElectromechanicalPage />} />
              <Route path="/services/industrial-automation" element={<IndustrialAutomationPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
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
