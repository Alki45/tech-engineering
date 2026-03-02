import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    MapPin,
    Clock,
    Globe,
    Cpu,
    Zap,
    Network,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Users,
    Award,
    BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const openings = [
    {
        category: 'ICT Engineering',
        icon: Network,
        jobs: [
            { title: 'Senior Network Architect', location: 'Berlin, Germany', type: 'Full-time' },
            { title: 'Cloud Infrastructure Lead', location: 'Remote / US', type: 'Full-time' },
        ],
    },
    {
        category: 'Power Systems & Grid',
        icon: Zap,
        jobs: [
            { title: 'Smart Grid Specialist', location: 'London, UK', type: 'Full-time' },
        ],
    },
    {
        category: 'Electromechanical Design',
        icon: Cpu,
        jobs: [
            { title: 'Lead Robotics Engineer', location: 'Tokyo, Japan', type: 'Full-time' },
        ],
    },
];

const CareersPage = () => {
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
            <section className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 min-h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        alt="Engineering Innovation"
                        className="w-full h-full object-cover grayscale opacity-40"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS1kluYKjToCisrG-5CJQyrFIP6Xonu0VlcjBTR8SpsiBIBXgPW5lkiWkXJekT2YpAja-NenlKzLiFxViPVmE_QQKmgpJcFOFuvXb7oTFhl6Re2sqG7vOAC0OK8Buylo9-mQWZ-Q0yur_O3_iOu5wf3-qeqyaElsWbft1uTcTCVte_SG4wulcDdDmsBcyUfl6J4GWYFeAc7babyNkKC_asX-AC30hLt3PFjSwgUffX7RRQmhnbYW3tIHE7zJnvmCMN4bMyYZIPonBT"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(19, 127, 236, 1) 1px, transparent 0)', backgroundSize: '30px 30px' }}
                    ></div>
                </div>

                <div className="relative z-10 p-12 md:p-20 max-w-4xl space-y-8">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Join the Elite Force
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                        Engineer Your <br />
                        <span className="text-gradient">Future.</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl">
                        Pushing the boundaries of precision and innovation. Join a global team dedicated to solving the world's most complex industrial challenges.
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <a href="#openings" className="btn-primary">
                            Explore Openings
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="space-y-16">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h2 className="section-title">The Engineering Ecosystem</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium italic">Empowering specialists to lead on a global scale.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Cpu, title: 'Cutting-edge Tech', desc: 'Work with quantum-grade sensors and next-gen autonomous systems.' },
                        { icon: BookOpen, title: 'Growth Grants', desc: 'Accelerate your mastery with specialized research and development funds.' },
                        { icon: Globe, title: 'Global Impact', desc: 'solutions that scale across continents and redefine modern infrastructure.' },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="glass-card p-12 group transition-all"
                        >
                            <div className="size-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black dark:text-white mb-4">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Openings Section */}
            <section id="openings" className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 dark:border-slate-800 pb-12">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black dark:text-white tracking-tighter">Current Openings</h2>
                        <p className="text-slate-500 font-mediumitalic">Join the vanguard of technical excellence.</p>
                    </div>
                </div>

                <div className="space-y-16">
                    {openings.map((dept, idx) => (
                        <div key={idx} className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                    <dept.icon size={24} />
                                </div>
                                <h3 className="text-xl font-black dark:text-white uppercase tracking-[0.2em]">{dept.category}</h3>
                                <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
                            </div>

                            <div className="grid gap-6">
                                {dept.jobs.map((job, jIdx) => (
                                    <motion.div
                                        variants={itemVariants}
                                        key={jIdx}
                                        className="group glass-card p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/40 transition-all cursor-pointer"
                                    >
                                        <div className="space-y-3">
                                            <h4 className="text-2xl font-black group-hover:text-primary transition-colors dark:text-white">{job.title}</h4>
                                            <div className="flex gap-6 text-sm font-bold text-slate-500">
                                                <span className="flex items-center gap-2">
                                                    <MapPin size={14} className="text-primary" /> {job.location}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Clock size={14} className="text-primary" /> {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <button className="btn-secondary py-3 px-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                            Apply Now
                                            <ChevronRight size={18} />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Culture/Philosophy */}
            <section className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <p className="text-primary text-sm font-black uppercase tracking-widest italic">The DNA of MEETO Engineering PLC</p>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Precision-Driven <br /> Collaboration.</h2>
                        </div>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed">
                            We believe the best solutions come from extreme precision and radical collaboration. We don't just build systems; we refine technical problem-solving.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: 'Integrity in Engineering', desc: 'Every calculation is scrutinized for maximum safety.' },
                                { icon: Network, title: 'Cross-Domain Synergy', desc: 'Mechanical and software teams work in an integrated loop.' },
                            ].map((item, iIdx) => (
                                <div key={iIdx} className="flex items-start gap-4">
                                    <div className="p-1 rounded-full bg-primary/20 mt-1">
                                        <CheckCircle2 size={16} className="text-primary" />
                                    </div>
                                    <div className="space-y-1">
                                        <span className="font-black text-white block uppercase tracking-widest text-xs">{item.title}</span>
                                        <span className="text-slate-500 text-sm font-medium">{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            alt="Engineering Culture"
                            className="rounded-[2.5rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANCzcQvzbiC18GhDcRvXZ4EtUiVO1zRj9BuqeSigdsmdMMknI9XYaXipIfGJ9Ak7uSka6w2lX-df_qxn7HeO2FAnBjaBAajqh4TmYsFy7SpkuRzgBbfYgtbjaah0d6rKEEpt8z9ertn9_yJ-n7JwKLD_cWsAwwt8lT-wXO5Q1Bwu5mfPy6m2BNylUB3mfgQ5UXNbssy-051cK364yOMNGM3ZsYZIsUOgqr0FC-obBMq9WrPfyYR1okdRTlj8_s2JPvocUIZ5NKeeKU"
                        />
                        <div className="absolute -top-12 -right-12 size-48 bg-primary/20 blur-[80px] rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Selection Process */}
            <section className="space-y-20">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h2 className="section-title">The Selection Process</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Fair, rigorous, and designed to find the perfect technical and cultural match.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden lg:block absolute top-[60px] left-1/4 right-1/4 h-px border-t border-dashed border-primary/30 z-0"></div>
                    {[
                        { step: '01', title: 'Technical Sync', desc: 'Deep dive into your portfolio, background, and methodologies.' },
                        { step: '02', title: 'Collab Hack', desc: 'Meet the squad. Discuss challenges and cross-team solving.' },
                        { step: '03', title: 'Action Plan', desc: 'Tackle a real-world scenario. Show us your precision.' },
                    ].map((s, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="relative z-10 text-center space-y-8"
                        >
                            <div className="size-24 bg-white dark:bg-slate-900 border-4 border-primary rounded-full flex items-center justify-center mx-auto text-2xl font-black text-primary shadow-[0_0_30px_rgba(0,102,255,0.2)]">
                                {s.step}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-black dark:text-white uppercase tracking-widest">{s.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* General Application CTA */}
            <section className="pb-12">
                <motion.div
                    variants={itemVariants}
                    className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-primary text-white text-center relative overflow-hidden shadow-2xl shadow-primary/30"
                >
                    <Users size={200} className="absolute -right-20 -bottom-20 text-white/10 -rotate-12" />
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Ready to lead the change?</h2>
                        <p className="text-lg text-white/80 font-medium max-w-xl mx-auto">
                            Exceptional talent is always welcome. Submit your credentials to our global talent pool even if a specific role isn't open.
                        </p>
                        <button className="px-12 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all shadow-xl">
                            Submit General Application
                        </button>
                    </div>
                </motion.div>
            </section>
        </motion.main>
    );
};

export default CareersPage;
