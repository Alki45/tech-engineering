import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-slate-900 rounded-[2rem] min-h-[400px] flex items-center group">
            {/* Background Image with Parallax-like effect */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    alt="High-tech server room background"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWtFqZGoimumCprMDiqf8KzIpYB_CtUsQay6KYOXWqj8VmJAIacU3vSMfRgRE1UWNmUqhBTh8AzeyXms4nRwiBLb9vrNSxkjWarCfqnhfp9pYwOMF6A3O7oGps6akqrJ3nXbbsKzP1lq5IjwXfTbBnJZ4fvV0TiLC5vMi9nTWVLJo_SELmZc-mRrq8q-EncoPlG0ktCkk6WkXfY3zDpnKHJOto6S_mPJBnyi1MKa-BjfksCRKzoCF3MuSi8m0-4yudnbKZeKa_EMpA"
                />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10"></div>

            {/* Content Container */}
            <div className="relative z-20 p-8 md:p-16 max-w-4xl w-full flex flex-col items-start gap-6">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest backdrop-blur-md"
                >
                    <Cpu size={14} className="animate-pulse" />
                    Infrastructure Excellence
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter"
                >
                    Advanced <br />
                    <span className="text-gradient">ICT Solutions.</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-300 text-lg md:text-xl font-medium max-w-xl leading-relaxed"
                >
                    Engineering the backbone of digital transformation with precision and high-availability systems.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                >
                    <Link to="/services/ict" className="btn-primary flex items-center gap-2 group/btn">
                        Explore Our Architecture
                        <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 size-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default Hero;
