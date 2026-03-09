import React from 'react';
import { motion } from 'framer-motion';
import {
    Award,
    Lightbulb,
    ShieldCheck,
    Users,
    Globe,
    History,
    ArrowRight,
    Linkedin,
    Rocket,
    Target,
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
    {
        name: 'Awlachew Aboye',
        role: 'Chief Executive Officer',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIDOJs3WAYi941ZKQf8y6T8-dvEnRVUu_pKRuq6FOpBac9BWaG9hd8Io_z9lXBPIpFpA0jXcPAH-CyQaA8VCo-W0Jwn4wyXcMOR10nWg7s9lCcFsx7eEobQWNS1Ycl-TF3q90TlFD6pceSDOUtsZx-dhaoka5pdDV1ah1lug8GKh1U4Zl4V5RsK6gWT3Z6abFXmavxwP_wxBcA5VDqp7c32cyimPwQWOXFOU0WmzmbUrMJ7airlvoPwcSBgcrN4vncYa1aHAXXIakb',
    },
    {
        name: 'Elena Vance',
        role: 'Director of Electromechanical Systems',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrh4Z7TCQCzdAE1s_M03EcmvxzHhp9wMClpxW3yPxxKfrv6F0mVGq7kwIMWNswM6pOl_Oyc6c1K3fHGsyl5x22UKoaHEstQezC2RupUzXiR1iMk31LjqGHbV6XEPT8a4lafxz6H89IPlsd4JQ3ZgQ_OHInlDmbloELi9TXIhuuCwga4Rlui-252Bc0gCl0vqxklkSWnJgVk_nQDc8lJmMiJ9CPIIGbFv2D676VU7kkjViC7v1jbEnLGl0muOf33NTc0IwziPPs6ivl',
    },
    {
        name: 'Jonathan Wu',
        role: 'Head of Infrastructure & ICT',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs5CZxSRclJ6_D8utwUGMXJ9SNvEpMVvcNCtv0cJ9tiS273yLe3Bhd4ELdvgFH9yFfy7VSQGYTJGOPsTc8JUJHPflbu1isJlaljxktJ0tzBpNY_p4FuMeA9PKqCH-JF2ksTQ2BwdOydYPYHOF5gMTeIa4lvF_pcQFB_Ibm4Nne8QPnoUooWVTFjj2k_j7-vEvIgdyp9smJ5Bn-Hto-31u_A7uQeEIGauOsG2R7drMTBNRkOGe9ynyMbkosiXeVAIQkwbXJ-thJFJIl',
    },
];

const AboutPage = () => {
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
            <section className="relative rounded-[3rem] overflow-hidden bg-slate-950 min-h-[500px] flex items-center group">
                <div className="absolute inset-0">
                    <img
                        alt="Engineering Legacy"
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuClrNhxBvf8aFn9Y9_afNfRTL9OjxyQ0xuihN8epQrANDDbybcO2QKsNCMmtQEFRxqOc2nxhwlXuBbn1IkDlMCew-77GOXp7N-LYbuSJYV9YRrnlubraAp0YVmCrPCM5mnyBxbpff1pnmk6CX5GVxVUgpIxJsUMPWEo74oREiXnpwJtrhabz35QWpBhrOAjn_CzDT58JR_MQA30XHN7OYP9W33cI8RLeod7nU1cmGM6MiHIDAp8UKir664n0FHNchaSMFnLmL0KEU7Q"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(19, 127, 236, 1) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 p-12 md:p-24 max-w-4xl space-y-8">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Est. 2004
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                        A Legacy of <br />
                        <span className="text-primary italic">Precision.</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl font-medium max-w-xl italic">
                        Engineering the future through two decades of technical mastery and unwavering industrial excellence.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div variants={itemVariants} className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="section-title text-left ml-0">Who We Are</h2>
                    </div>
                    <div className="space-y-6 text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
                        <p>
                            With over 20 years of excellence, MEETO Engineering PLC has evolved from a specialized ICT firm into a global leader in Power and Electromechanical engineering.
                        </p>
                        <p>
                            We bridge the gap between complex engineering challenges and sustainable, high-efficiency solutions. Our multi-disciplinary team integrates cutting-edge Information Technology with robust mechanical systems.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-2">
                            <p className="text-4xl font-black text-primary italic">20+</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Years Excellence</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-black text-primary italic">500+</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Projects Done</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative group p-4 bg-slate-100 dark:bg-slate-900 rounded-[3rem]">
                    <img
                        alt="Industrial Engineering Team"
                        className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyVn_zzpjPvKLqm8aYemJcBotmrGp8xpDFqUmMUg6RYwWYQ9x-rrAR7WZV-PhfEBHLr7HBHZEZDBqY-pp6PtOhTt7sV6JKgnXpBZlKiRc-NPWSyqVSa1jX6s8V3s6cDx_jaeJEdPzdcMsZ7oSmhKQJt6AgG-ZM6rL0mMeWLJwOkeoaEJ-Ct-gcqHxX-hyLeEYwcWPgjXM63lItmbvYFzqI4C0TJ9Qq000zAv7DsmKKsNlY9LsLTtsY9yOLlN6Z8huR0JOQNXI3eTWL"
                    />
                    <div className="absolute -bottom-6 -right-6 size-32 bg-primary flex items-center justify-center rounded-3xl rotate-12 group-hover:rotate-0 transition-all duration-500 shadow-2xl">
                        <Award size={40} className="text-white" />
                    </div>
                </motion.div>
            </section>

            {/* Values Grid */}
            <section className="space-y-16">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h2 className="section-title">Core Philosophies</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium italic">Principles that drive every turbine and every line of code.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Rocket, title: 'Innovation', desc: 'Pioneering new methodologies in ICT and power distribution.' },
                        { icon: Target, title: 'Excellence', desc: 'Zero-compromise standards for mechanical and electrical safety.' },
                        { icon: ShieldCheck, title: 'Integrity', desc: 'Building lasting global partnerships through ethical engineering.' },
                    ].map((v, i) => (
                        <motion.div
                            key={v.title}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass-card p-12 text-center group"
                        >
                            <div className="size-20 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <v.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black dark:text-white mb-4">{v.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Leadership Section */}
            <section className="space-y-16">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h2 className="section-title">Executive Leadership</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Guided by experts with decades of hands-on industrial experience.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            className="group space-y-6"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-900">
                                <img
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    src={member.img}
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-4 rounded-2xl flex items-center justify-between border border-white/20 dark:border-slate-700">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase text-slate-500">LinkedIn</p>
                                            <p className="text-xs font-bold dark:text-white">Profile</p>
                                        </div>
                                        <div className="size-10 bg-primary text-white rounded-xl flex items-center justify-center">
                                            <Linkedin size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1 text-center md:text-left">
                                <h3 className="text-2xl font-black dark:text-white tracking-tight">{member.name}</h3>
                                <p className="text-sm font-black uppercase tracking-widest text-primary">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Impact Footer */}
            <section className="bg-primary rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden text-center space-y-12">
                <History size={120} className="absolute -left-12 -bottom-12 text-white/10 -rotate-12" />
                <h2 className="text-4xl md:text-6xl font-black max-w-4xl mx-auto leading-tight">Ready to power the next generation of industry?</h2>
                <div className="flex justify-center flex-wrap gap-4 pt-4">
                    <Link to="/contact" className="px-12 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-slate-50 transition-all">
                        Partner With Us
                    </Link>
                </div>
            </section>
        </motion.main>
    );
};

export default AboutPage;
