import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Network,
    ShieldCheck,
    CloudDownload,
    Database,
    CheckCircle2,
    Headphones,
    Hammer,
    ArrowRight,
    Calendar,
    Layers,
    Server,
    Lock,
    Cpu,
    Shield,
    Cloud,
    HardDrive,
    Clock
} from 'lucide-react';

const iconMap = {
    hub: Network,
    shield_lock: Shield,
    cloud_done: Cloud,
    storage: HardDrive,
};

const ICTPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/categories/ict')
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching ICT data:', err);
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
            {/* Hero / Header Section */}
            <section className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 min-h-[400px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        alt={data.title}
                        className="w-full h-full object-cover opacity-50"
                        src={data.hero_image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                </div>

                <div className="relative z-10 p-12 md:p-20 max-w-3xl space-y-6">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        Infrastructure Layer
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white leading-tight">
                        {data.hero_title.split('&').map((p, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <span className="text-primary">&</span>}
                                {p}
                                {i === 0 && <br />}
                            </React.Fragment>
                        ))}
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl font-medium max-w-xl">
                        {data.hero_subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div variants={itemVariants} className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-primary text-sm font-black uppercase tracking-widest">The Foundation of Enterprise</h3>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            {data.overview_title}
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                        {data.overview_text}
                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-2">
                            <p className="text-3xl font-black text-primary">99.9%</p>
                            <p className="text-xs uppercase font-black text-slate-400 tracking-tighter">Uptime Guarantee</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-3xl font-black text-primary">Zero</p>
                            <p className="text-xs uppercase font-black text-slate-400 tracking-tighter">Data Loss Incidents</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                    <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 border border-slate-200 dark:border-slate-800">
                        <img
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2866"
                            alt="Network Hub"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-8 -left-8 size-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="section-title">Core ICT Services</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">Our comprehensive suite of services covers every layer of the modern technical stack.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.services.map((s, idx) => {
                        const Icon = iconMap[s.icon] || Network;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="glass-card p-8 group hover:border-primary/50 transition-all"
                            >
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Icon size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-3 dark:text-white">{s.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{s.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Why Us Section */}
            <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black leading-tight">Elite Engineering <br /> Standard.</h2>
                        <div className="space-y-6">
                            {[
                                { icon: CheckCircle2, title: 'Compliance Ready', text: 'Solutions that meet ISO 27001 and GDPR standards.' },
                                { icon: Headphones, title: 'Level 3 Support', text: 'Direct access to senior architects 24/7/365.' },
                                { icon: Hammer, title: 'Rapid Deployment', text: 'Minimized downtime with automated provisioning.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="p-2 rounded-lg bg-white/10 text-primary shrink-0 h-fit">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg">{item.title}</h5>
                                        <p className="text-slate-400 text-sm font-medium">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square rounded-2xl bg-white/5 flex flex-col items-center justify-center space-y-2 border border-white/10 box-border p-6 text-center">
                            <Layers className="text-primary mb-2" size={32} />
                            <p className="text-xl font-black">Scalable</p>
                        </div>
                        <div className="aspect-square rounded-2xl bg-white/5 flex flex-col items-center justify-center space-y-2 border border-white/10 box-border p-6 text-center mt-8">
                            <ShieldCheck className="text-primary mb-2" size={32} />
                            <p className="text-xl font-black">Secure</p>
                        </div>
                        <div className="aspect-square rounded-2xl bg-white/5 flex flex-col items-center justify-center space-y-2 border border-white/10 box-border p-6 text-center -mt-8">
                            <Clock className="text-primary mb-2" size={32} />
                            <p className="text-xl font-black">Fast</p>
                        </div>
                        <div className="aspect-square rounded-2xl bg-white/5 flex flex-col items-center justify-center space-y-2 border border-white/10 box-border p-6 text-center">
                            <Cpu className="text-primary mb-2" size={32} />
                            <p className="text-xl font-black">Smart</p>
                        </div>
                    </div>
                </div>

                {/* Glow decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            </section>

            {/* Final CTA */}
            <section className="pb-12 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white">Ready for the Next Phase?</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-medium">Let's build a foundation that supports your most ambitious goals.</p>
                </motion.div>

                <div className="flex justify-center flex-wrap gap-4">
                    <button className="btn-primary py-4 px-10">
                        Schedule a Demo
                        <Calendar size={20} />
                    </button>
                    <button className="btn-secondary py-4 px-10">
                        Download brochure
                    </button>
                </div>
            </section>
        </motion.main>
    );
};

export default ICTPage;
