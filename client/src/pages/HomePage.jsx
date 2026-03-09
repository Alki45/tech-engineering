import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Cpu,
    Zap,
    Settings,
    Rocket,
    ArrowRight,
    ShieldCheck,
    Globe,
    Clock,
    Send,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    CheckCircle2
} from 'lucide-react';

const HomePage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0">
                    <img
                        alt="Engineering background"
                        className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuqyhDQAZllG0s4U5SZhjDLRaYUiPQMUbhxIt1hUCtiPAXC_M0VU3joQWkCUh0-a6zi-NtPJiOxBrQG3mRbaV1YLxCWv2E8gywYLaSUwjVe3_GRFel7bYlgvK6wd1OEW4DX9Y0v067BpbVZsdNnt4wr8tu_dPNB5GwWZbF-6qwzRkRQUzEbnEbvI167narZed72x4nW-Xuqzoc_JCh1UKB_8u8fSvFBdcq9UZGVkjEdL3YJMWFjutmlY3_c4NuMsRXvhuMQendZ4IM"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950 to-slate-950"></div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(19, 127, 236, 1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full py-32">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-4xl space-y-12"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Pioneering Engineering Excellence
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] uppercase"
                        >
                            Future <br />
                            <span className="text-gradient">Engineered.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl font-medium italic">
                            Delivering state-of-the-art ICT, Power, and Electromechanical systems for the world's most demanding infrastructures.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-8">
                            <Link to="/services/ict" className="btn-primary group">
                                Explore Solutions
                                <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                Book Now
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating elements decoration */}
                <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-primary/20 blur-[150px] rounded-full -mr-32 -mb-32"></div>
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 right-20 hidden lg:block"
                >
                    <div className="glass p-8 rounded-[3rem] border-white/5 shadow-2xl space-y-6 max-w-xs rotate-3">
                        <div className="size-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                            <Cpu className="text-white size-8" />
                        </div>
                        <p className="text-sm font-bold text-slate-300">"The standard of innovation in heavy industry."</p>
                        <div className="h-0.5 w-12 bg-primary/30"></div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="relative z-10 -mt-12 max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 glass rounded-3xl shadow-2xl shadow-primary/10 border border-white/10"
                >
                    {[
                        { value: '150+', label: 'Projects Delivered', icon: CheckCircle2 },
                        { value: '24/7', label: 'Support Available', icon: Clock },
                        { value: '12+', label: 'Strategic Hubs', icon: Globe },
                        { value: '99.9%', label: 'Systems Uptime', icon: ShieldCheck },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center space-y-2">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <stat.icon size={24} />
                            </div>
                            <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-black tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto w-full">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Our Core Expertise
                    </motion.h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        Tailored engineering solutions designed for modern industrial and corporate infrastructures.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Globe,
                            title: 'ICT Solutions',
                            desc: 'Robust networking, cybersecurity, and cloud infrastructure designed for global enterprises.',
                            link: '/services/ict',
                            color: 'text-blue-500',
                            bgColor: 'bg-blue-500/10',
                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQqR7J7wVvQX2L_Bf3pG1iH8D7w1j9o-hQeA6u4mK3vO8Z6Z-M4rL0mMeWLJwOkeoaEJ-Ct-gcqHxX-hyLeEYwcWPgjXM63lItmbvYFzqI4C0TJ9Qq000zAv7DsmKKsNlY9LsLTtsY9yOLlN6Z8huR0JOQNXI3eTWL'
                        },
                        {
                            icon: Zap,
                            title: 'Power & Energy',
                            desc: 'Sustainable and reliable energy distribution, from smart grids to industrial-scale backup systems.',
                            link: '/services/power',
                            color: 'text-amber-500',
                            bgColor: 'bg-amber-500/10',
                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClrNhxBvf8aFn9Y9_afNfRTL9OjxyQ0xuihN8epQrANDDbybcO2QKsNCMmtQEFRxqOc2nxhwlXuBbn1IkDlMCew-77GOXp7N-LYbuSJYV9YRrnlubraAp0YVmCrPCM5mnyBxbpff1pnmk6CX5GVxVUgpIxJsUMPWEo74oREiXnpwJtrhabz35QWpBhrOAjn_CzDT58JR_MQA30XHN7OYP9W33cI8RLeod7nU1cmGM6MiHIDAp8UKir664n0FHNchaSMFnLmL0KEU7Q'
                        },
                        {
                            icon: Settings,
                            title: 'Electromechanical',
                            desc: 'Expert design and maintenance of precision mechanical systems and electrical controls.',
                            link: '/services/electromechanical',
                            color: 'text-emerald-500',
                            bgColor: 'bg-emerald-500/10',
                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyVn_zzpjPvKLqm8aYemJcBotmrGp8xpDFqUmMUg6RYwWYQ9x-rrAR7WZV-PhfEBHLr7HBHZEZDBqY-pp6PtOhTt7sV6JKgnXpBZlKiRc-NPWSyqVSa1jX6s8V3s6cDx_jaeJEdPzdcMsZ7oSmhKQJt6AgG-ZM6rL0mMeWLJwOkeoaEJ-Ct-gcqHxX-hyLeEYwcWPgjXM63lItmbvYFzqI4C0TJ9Qq000zAv7DsmKKsNlY9LsLTtsY9yOLlN6Z8huR0JOQNXI3eTWL'
                        },
                        {
                            icon: Cpu,
                            title: 'Automation',
                            desc: 'Advanced industrial automation and robotic solutions to optimize production efficiency.',
                            link: '/services/industrial-automation',
                            color: 'text-primary',
                            bgColor: 'bg-primary/10',
                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIDOJs3WAYi941ZKQf8y6T8-dvEnRVUu_pKRuq6FOpBac9BWaG9hd8Io_z9lXBPIpFpA0jXcPAH-CyQaA8VCo-W0Jwn4wyXcMOR10nWg7s9lCcFsx7eEobQWNS1Ycl-TF3q90TlFD6pceSDOUtsZx-dhaoka5pdDV1ah1lug8GKh1U4Zl4V5RsK6gWT3Z6abFXmavxwP_wxBcA5VDqp7c32cyimPwQWOXFOU0WmzmbUrMJ7airlvoPwcSBgcrN4vncYa1aHAXXIakb'
                        },
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card group flex flex-col items-start overflow-hidden hover-card"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                                <div className={`absolute bottom-4 left-4 size-12 rounded-xl ${service.bgColor} ${service.color} flex items-center justify-center backdrop-blur-md border border-white/10`}>
                                    <service.icon size={24} strokeWidth={2.5} />
                                </div>
                            </div>
                            <div className="p-8 space-y-4">
                                <h3 className="text-2xl font-black dark:text-white uppercase tracking-tighter">{service.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium line-clamp-3">{service.desc}</p>
                                <Link to={service.link} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:gap-4 transition-all">
                                    Full Specification <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto rounded-[3rem] bg-slate-900 border border-slate-800 p-12 md:p-20 text-center space-y-10 relative overflow-hidden"
                >
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                            Ready to modernize <br /> your <span className="text-primary">infrastructure?</span>
                        </h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
                            Join dozens of industrial leaders who trust MEETO Engineering PLC for their mission-critical operations.
                        </p>
                        <div className="flex justify-center pt-4">
                            <Link to="/contact" className="btn-primary py-5 px-12 text-lg">
                                Book a Consultation
                                <Send size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Decorative gradients */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -ml-20 -mt-20"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -mr-32 -mb-32"></div>
                </motion.div>
            </section>
        </div>
    );
};

export default HomePage;
