import React from 'react';
import { Link } from 'react-router-dom';
import {
    Cpu,
    Linkedin,
    Twitter,
    Globe,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 md:py-24 border-t border-slate-900 mt-auto">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
                <div className="col-span-1 md:col-span-1 space-y-8">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="bg-primary p-2 rounded-xl flex items-center justify-center">
                            <Cpu className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-black text-white uppercase tracking-tight">MEETO</span>
                    </Link>
                    <p className="text-sm leading-relaxed font-medium max-w-xs">
                        Pioneering high-end technical engineering and next-generation industrial systems since 2004.
                    </p>
                    <div className="flex gap-4">
                        {[Linkedin, Twitter, Globe].map((Icon, idx) => (
                            <a key={idx} href="#" className="size-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-black uppercase tracking-widest text-xs">Expertise</h4>
                    <ul className="space-y-4 text-sm font-bold">
                        {['ICT Infrastructure', 'Power Distribution', 'Electromechanical', 'Industrial Automation'].map(item => (
                            <li key={item}>
                                <Link to={`/services/${item.toLowerCase().split(' ')[0]}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    {item}
                                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-black uppercase tracking-widest text-xs">Company</h4>
                    <ul className="space-y-4 text-sm font-bold">
                        {[
                            { name: 'About Us', link: '/about' },
                            { name: 'Our Projects', link: '/projects' },
                            { name: 'Contact Hub', link: '/contact' }
                        ].map(item => (
                            <li key={item.name}>
                                <Link to={item.link} className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    {item.name}
                                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-black uppercase tracking-widest text-xs">Direct Support</h4>
                    <div className="space-y-6">
                        {[
                            { icon: MapPin, text: "Nefas Silk Lafto Woreda 12, House Number 205 B, Addis Ababa, Ethiopia" },
                            { icon: Phone, text: "+49 (0) 30 1234 5678" },
                            { icon: Mail, text: "solutions@meeto-eng.com" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 group cursor-pointer">
                                <item.icon size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-sm font-medium group-hover:text-white transition-colors">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.2em] uppercase text-slate-600">
                <p>© 2026 MEETO Engineering PLC. Excellence By Design.</p>
                <div className="flex gap-8">
                    <Link to="/admin" className="hover:text-primary transition-colors">Admin Console</Link>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
