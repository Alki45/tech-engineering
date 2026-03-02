import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Sun,
    Battery,
    Network,
    CheckCircle2,
    ShieldCheck,
    Clock,
    ArrowRight,
    Lightbulb,
    Workflow,
    Shield,
    ZapOff,
    Globe,
    Gauge,
    Flame
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
    sun: Sun,
    workflow: Workflow,
    battery: Battery,
    network: Network,
};

const PowerPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/categories/power')
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching power data:', err);
                setLoading(false);
            });
    }, []);

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

    if (loading) {
        return (
            <div className="flex-grow flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-24"
        >
            {/* Hero Section */}
            <section className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 min-h-[450px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        alt={data.title}
                        className="w-full h-full object-cover opacity-40"
                        src={data.hero_image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>

                <div className="relative z-10 p-12 md:p-20 max-w-3xl space-y-8">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-widest backdrop-blur-md">
                        <Zap size={14} className="fill-amber-500" />
                        Infrastructure Layer
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
                        {data.hero_title.split('&').map((p, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <span className="text-primary">&</span>}
                                {p}
                                {i === (data.hero_title.split('&').length - 1) ? null : <br />}
                            </React.Fragment>
                        ))}
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl font-medium max-w-xl">
                        {data.hero_subtitle}
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <Link to="/contact" className="btn-primary">
                            Consult an Engineer
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Quick Info */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: "Uptime Guaranteed", value: "99.99%", icon: ShieldCheck, color: "text-emerald-500" },
                    { label: "Energy Savings", value: "30%+", icon: Lightbulb, color: "text-amber-500" },
                    { label: "Response Time", value: "<2 Hours", icon: Clock, color: "text-blue-500" }
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="glass-card p-10 flex flex-col items-center text-center space-y-4"
                    >
                        <div className={`p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 ${item.color}`}>
                            <item.icon size={32} />
                        </div>
                        <div>
                            <p className="text-4xl font-black dark:text-white">{item.value}</p>
                            <p className="text-sm font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Overview Section */}
            <section className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div variants={itemVariants} className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-primary text-sm font-black uppercase tracking-widest">Reliability by Design</h3>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            {data.overview_title}
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                        {data.overview_text}
                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-2">
                            <p className="text-3xl font-black text-primary">50MW+</p>
                            <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-tight">Project Capacity</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-3xl font-black text-primary">ISO 9001</p>
                            <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-tight">Certified Quality</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                    <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-slate-100 dark:border-white/5 shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1466611653911-95282fc3656d?q=80&w=2940"
                            alt="Sustainable Power"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 size-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="space-y-16">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="section-title">Industrial Power Services</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
                        Sustainable energy architecture for mission-critical operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.services.map((s, idx) => {
                        const Icon = iconMap[s.icon] || Zap;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="glass-card p-12 group transition-all relative overflow-hidden"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="size-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                                        <Icon size={32} />
                                    </div>
                                    <div className="text-4xl font-black text-slate-100 dark:text-slate-800 transition-colors">0{idx + 1}</div>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black dark:text-white">{s.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{s.description}</p>
                                    <ul className="grid grid-cols-1 gap-3 pt-4">
                                        {(s.features || []).map((f, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 size={16} className="text-amber-500" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Reliability <br /> by Design.</h2>
                        <div className="space-y-8">
                            {[
                                { icon: Shield, title: "Zero Defect Policy", desc: "Rigorous ISO-compliant testing on every installation." },
                                { icon: ZapOff, title: "Fail-Safe Redundancy", desc: "Triple-layer backup architectures for critical loads." },
                                { icon: Workflow, title: "Future-Ready Tech", desc: "Interoperable systems that scale with your growth." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <h5 className="font-bold text-xl text-white">{item.title}</h5>
                                        <p className="text-slate-400 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKklC2OguC4k6mQ6NFerUYv7Nn8UBY81Yu0HfZZPGdsH--6n7eh8fh9q8gCDHGSLdtdcpkDqEm8mQ2gcyUbgtJt2nfHgWP9nppZnt97U7JoTtwe-u-tI2ti5fWmWg1mzfdB7HDgEgMPqO8kI8MWSdAcmFAE2KOgwkMKcdhYOzG7p7tQTp-CTPg48pkvJu4acwJkTeFNatiuq04yBkwP0TE3BUGDqZqaJr81JBaXUt6dnZp5MfTcAVfSOI-xycefmxeyW-nq6emDj70"
                                alt="Engineer Work"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Glow decoration */}
                        <div className="absolute -top-10 -right-10 size-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center space-y-10 pb-12">
                <h2 className="section-title">Ready to Energize Your Vision?</h2>
                <div className="flex justify-center flex-wrap gap-4">
                    <Link to="/contact" className="btn-primary py-5 px-12 group">
                        Schedule a Consultation
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="btn-secondary py-5 px-12">
                        View Case Studies
                    </button>
                </div>
            </section>
        </motion.main>
    );
};

export default PowerPage;
