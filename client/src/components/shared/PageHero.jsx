import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({
    title,
    subtitle,
    badge,
    image,
    badgeIcon: BadgeIcon,
    children
}) => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-950 min-h-[400px] md:min-h-[500px] flex items-center group">
            <div className="absolute inset-0">
                <img
                    alt={title}
                    className="w-full h-full object-cover opacity-20 md:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    src={image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-5 md:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(19, 127, 236, 1) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

            <div className="relative z-10 p-6 md:p-24 max-w-4xl space-y-6 md:space-y-8">
                {badge && (
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-3 md:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] backdrop-blur-md">
                        {BadgeIcon && (
                            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-primary"></span>
                            </span>
                        )}
                        {BadgeIcon && <BadgeIcon size={12} className="md:size-[14px] fill-current" />}
                        {badge}
                    </motion.div>
                )}

                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                    {title.split('&').map((p, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <span className="text-primary italic">&</span>}
                            {p}
                            {i === 0 && <br className="hidden md:block" />}
                        </React.Fragment>
                    ))}
                </motion.h1>

                {subtitle && (
                    <motion.p variants={itemVariants} className="text-slate-400 text-base md:text-xl font-medium max-w-xl italic leading-relaxed">
                        {subtitle}
                    </motion.p>
                )}

                {children && (
                    <motion.div variants={itemVariants} className="pt-2 md:pt-4">
                        {children}
                    </motion.div>
                )}
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 size-48 md:size-64 bg-primary/20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default PageHero;
