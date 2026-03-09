import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Send,
    MapPin,
    Phone,
    Mail,
    Globe,
    HelpCircle,
    MessageSquare,
    Linkedin,
    Twitter,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', company: '', details: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Inquiry submitted! We will be in touch shortly.');
        setForm({ name: '', email: '', company: '', details: '' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-24"
        >
            {/* Hero Section */}
            <section className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 min-h-[400px] flex items-center">
                <div className="absolute inset-0">
                    {/* Blueprint decoration background */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(19, 127, 236, 1) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                </div>

                <div className="relative z-10 p-12 md:p-20 max-w-4xl space-y-8">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest backdrop-blur-md">
                        <Globe size={14} /> Global Support Network
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                        Precision Engineering <br />
                        <span className="text-gradient">Starts Here.</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl">
                        Partner with us on your next engineering challenge. Our global team of experts is ready to assist with high-spec manufacturing solutions.
                    </motion.p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Form Section */}
                <motion.div variants={itemVariants} className="glass-card p-10 md:p-14 space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black dark:text-white">Technical Inquiry</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Please outline your project requirements below.</p>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                                <input
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    placeholder="John Doe"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Work Email</label>
                                <input
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    placeholder="j.doe@company.com"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Organization</label>
                            <input
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                placeholder="Global Tech Corp"
                                type="text"
                                required
                                value={form.company}
                                onChange={e => setForm({ ...form, company: e.target.value })}
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Solution Required</label>
                            <textarea
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                                placeholder="Tell us about the project..."
                                rows="5"
                                required
                                value={form.details}
                                onChange={e => setForm({ ...form, details: e.target.value })}
                            />
                        </div>
                        <button
                            className="btn-primary w-full py-5 text-lg"
                            type="submit"
                        >
                            Submit Inquiry
                            <Send size={20} />
                        </button>
                    </form>
                </motion.div>

                {/* Info Section */}
                <div className="space-y-16">
                    <motion.div variants={itemVariants} className="space-y-10">
                        <h2 className="text-3xl font-black dark:text-white flex items-center gap-4">
                            <Globe size={32} className="text-primary" /> Corporate Headquarters
                        </h2>
                        <div className="grid gap-6">
                            {[
                                { city: 'Addis Ababa, Ethiopia', address: 'Nefas Silk Lafto Woreda 12\nHouse Number 205 B\nAddis Ababa, Ethiopia' },
                            ].map((hub) => (
                                <div key={hub.city} className="flex gap-8 px-8 py-10 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all">
                                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black">{hub.city}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed whitespace-pre-line">{hub.address}</p>
                                        <a className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest hover:gap-3 transition-all" href="#">
                                            Open Map <ArrowUpRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-10">
                        <h2 className="text-3xl font-black dark:text-white flex items-center gap-4">
                            <MessageSquare size={32} className="text-primary" /> Direct Channels
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 group hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-primary/20">
                                <Phone size={24} className="text-primary mb-6" />
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                                <p className="text-lg font-black dark:text-white">+1 (800) MEETO-ENG</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 group hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-primary/20">
                                <Mail size={24} className="text-primary mb-6" />
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
                                <p className="text-lg font-black dark:text-white">solutions@meeto-eng.com</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="p-10 rounded-3xl bg-primary text-white space-y-6 relative overflow-hidden shadow-2xl shadow-primary/20">
                        <HelpCircle size={48} className="text-white/20 absolute -right-6 -top-6" />
                        <h3 className="text-2xl font-black leading-tight">Need technical <br /> documentation?</h3>
                        <p className="text-white/80 font-medium">Access our full engineering specification library and case studies.</p>
                        <button className="flex items-center gap-3 font-black uppercase tracking-widest text-xs py-3 px-6 bg-white text-primary rounded-xl hover:bg-slate-100 transition-all shadow-xl">
                            Download Library <ChevronRight size={16} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </motion.main>
    );
};

export default ContactPage;
