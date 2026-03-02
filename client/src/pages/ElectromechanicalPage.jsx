import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Settings,
    Cpu,
    Wind,
    Layers,
    CheckCircle2,
    ShieldCheck,
    PenTool,
    FastForward,
    ArrowRight,
    Workflow,
    Box,
    Binary
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
    wind: Wind,
    settings: Settings,
    layers: Layers,
    box: Box,
};

const ElectromechanicalPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/categories/electromechanical')
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching electromechanical data:', err);
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
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-widest backdrop-blur-md">
                        Advanced Robotics
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white leading-tight">
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
                            Consult an Expert
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div variants={itemVariants} className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-primary text-sm font-black uppercase tracking-widest">Engineering Perfection</h3>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            {data.overview_title}
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                        {data.overview_text}
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                    <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-slate-100 dark:border-white/5 shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2940"
                            alt="Precision Engineering"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                    </div>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="space-y-16">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="section-title">Core Engineering Capabilities</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                        End-to-end electromechanical solutions from concept to high-precision fabrication.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.services.map((s, idx) => {
                        const Icon = iconMap[s.icon] || Settings;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="glass-card p-12 group transition-all relative overflow-hidden"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="size-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                                        <Icon size={32} />
                                    </div>
                                    <div className="text-4xl font-black text-slate-100 dark:text-slate-800 transition-colors">0{idx + 1}</div>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black dark:text-white">{s.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{s.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {(s.features || []).map((f, i) => (
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

            {/* Engineering Precision Panel */}
            <section className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-primary text-sm font-black uppercase tracking-widest">The Design Philosophy</h3>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Engineering <br /> Perfection.</h2>
                        </div>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed">
                            Our design process utilizes cutting-edge CAD modeling and iterative prototyping to ensure flawless execution in every component we build.
                        </p>
                        <div className="space-y-8">
                            {[
                                { icon: PenTool, title: "CAD / CAM Design", desc: "3D modeling with advanced thermal and structural simulation." },
                                { icon: FastForward, title: "Rapid Prototyping", desc: "Digital concepts to functional steel in record-breaking timeframes." },
                                { icon: Workflow, title: "Integration Testing", desc: "End-to-end stress testing before final site commissioning." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-xl text-white">{item.title}</h5>
                                        <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative perspective-1000">
                        <motion.div
                            animate={{ rotateY: [0, 5, 0], rotateX: [0, -5, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/20 to-transparent border border-white/10 p-12 flex items-center justify-center relative shadow-2xl"
                        >
                            <div className="grid grid-cols-2 gap-4 w-full">
                                {[Box, Cpu, Binary, Layers].map((Icon, i) => (
                                    <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                                        <Icon className="text-primary/50" size={48} strokeWidth={1} />
                                    </div>
                                ))}
                            </div>
                            {/* Decorative floating labels */}
                            <div className="absolute top-10 right-10 bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary/30 text-[10px] font-black text-white uppercase tracking-widest">
                                Tolerance: ±0.001mm
                            </div>
                            <div className="absolute bottom-20 -left-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                                ISO 9001 Certified
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 border-y border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: ShieldCheck, title: "Compliance", desc: "Global standards adherence." },
                        { icon: CheckCircle2, title: "Zero Faults", desc: "Excellence in every weld." },
                        { icon: ArrowRight, title: "24/7 Ops", desc: "Reliability in downtime." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-6 justify-center md:justify-start">
                            <item.icon className="text-primary" size={40} strokeWidth={1} />
                            <div>
                                <h4 className="font-black dark:text-white uppercase tracking-widest text-sm">{item.title}</h4>
                                <p className="text-xs text-slate-500 font-bold">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center space-y-10 pb-12">
                <h2 className="section-title">Ready to Automate?</h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-medium">Our senior engineers are ready to architect your custom industrial solution.</p>
                <div className="flex justify-center flex-wrap gap-4">
                    <Link to="/contact" className="btn-primary py-5 px-12">
                        Schedule a Technical Call
                    </Link>
                    <button className="btn-secondary py-5 px-12">
                        Our Machine Gallery
                    </button>
                </div>
            </section>
        </motion.main>
    );
};

export default ElectromechanicalPage;
