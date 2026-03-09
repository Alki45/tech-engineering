import React from 'react';
import { motion } from 'framer-motion';

const FeatureShowcase = ({
    title,
    badge,
    description,
    stats = [],
    image,
    imageAlt = "Feature Image",
    reverse = false
}) => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <section className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
                variants={itemVariants}
                className={`space-y-6 md:space-y-10 ${reverse ? 'lg:order-2' : ''}`}
            >
                <div className="space-y-3 md:space-y-4">
                    {badge && <h3 className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] font-mono">{badge}</h3>}
                    <h2 className="section-title text-left ml-0">
                        {title}
                    </h2>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                    {description}
                </p>

                {stats.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6 md:gap-12 pt-4 md:pt-6"
                    >
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="space-y-2 md:space-y-3">
                                <p className="text-4xl md:text-5xl font-black text-primary tracking-tighter">{stat.value}</p>
                                <p className="text-[9px] md:text-[10px] uppercase font-black text-slate-400 tracking-[0.1em] md:tracking-[0.2em]">{stat.label}</p>
                                <div className="h-1 w-8 md:w-12 bg-primary/20 rounded-full"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </motion.div>

            <motion.div
                variants={itemVariants}
                className={`relative group ${reverse ? 'lg:order-1' : ''}`}
            >
                <div className="aspect-[4/5] md:aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/10 border-white/5 relative">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 size-48 md:size-64 bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>
            </motion.div>
        </section>
    );
};

export default FeatureShowcase;
