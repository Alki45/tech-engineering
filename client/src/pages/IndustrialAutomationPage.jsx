import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    Binary,
    Settings,
    Workflow,
    CheckCircle2,
    ShieldCheck,
    ArrowRight,
    Zap,
    History,
    Dna,
    Activity,
    Box,
    Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Icon Map for dynamic icons
const iconMap = {
    cpu: Cpu,
    binary: Binary,
    settings: Settings,
    workflow: Workflow,
    zap: Zap,
    history: History,
    dna: Dna,
    activity: Activity,
    box: Box,
    layers: Layers,
};

const IndustrialAutomationPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/categories/automation')
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching automation data:', err);
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
            <section className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 min-h-[400px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        alt={data.title}
                        className="w-full h-full object-cover opacity-50"
                        src={data.hero_image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>

                <div className="relative z-10 p-12 md:p-20 max-w-3xl space-y-8">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest backdrop-blur-md">
                        <Activity size={14} className="animate-pulse" />
                        Next-Gen Robotics
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white leading-tight">
                        {data.hero_title.split('&').map((part, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <span className="text-primary">&</span>}
                                {part}
                                {i === 0 && <br />}
                            </React.Fragment>
                        ))}
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl font-medium max-w-xl">
                        {data.hero_subtitle}
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <Link to="/contact" className="btn-primary">
                            Architect Your Solution
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div variants={itemVariants} className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-primary text-sm font-black uppercase tracking-widest">Efficiency Redefined</h3>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            {data.overview_title}
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                        {data.overview_text}
                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-2">
                            <p className="text-3xl font-black text-primary">40%+</p>
                            <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-tight">Throughput Increase</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-3xl font-black text-primary">0.01%</p>
                            <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-tight">Margin of Error</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                    <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-slate-100 dark:border-white/5 shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940"
                            alt="Robotic Arm"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 size-32 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="space-y-16">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="section-title">Core Automation Services</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
                        End-to-end autonomous ecosystems designed to scale with your production needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.services.map((s, idx) => {
                        const Icon = iconMap[s.icon] || Cpu;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="glass-card p-12 group transition-all relative overflow-hidden"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <Icon size={32} />
                                    </div>
                                    <div className="text-4xl font-black text-slate-100 dark:text-slate-800 transition-colors">0{idx + 1}</div>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black dark:text-white">{s.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{s.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {s.features.map((f, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Tech Trust */}
            <section className="border-y border-slate-200 dark:border-slate-800 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
                    {[
                        { icon: ShieldCheck, label: "Safety PLC" },
                        { icon: Layers, label: "Multi-Tier Ops" },
                        { icon: Dna, label: "AI Optimization" },
                        { icon: History, label: "24/7 Monitoring" }
                    ].map((badge, idx) => (
                        <div key={idx} className="space-y-4 group">
                            <div className="flex justify-center text-primary group-hover:scale-110 transition-transform">
                                <badge.icon size={32} strokeWidth={1.5} />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{badge.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center space-y-10 pb-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white">Start Your Autonomous Journey.</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-medium">Let's discuss how robotics can multiply your operational capacity.</p>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    <Link to="/contact" className="btn-primary py-5 px-12 group">
                        Consult an AI Architect
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </motion.main>
    );
};

export default IndustrialAutomationPage;
