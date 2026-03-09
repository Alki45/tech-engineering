import React from 'react';
import { motion } from 'framer-motion';

const InsightPanel = ({
    title,
    items = [],
    image,
    imageAlt = "Insight Panel Image",
    gridItems = []
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
        <section className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8 md:space-y-10">
                    <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">
                        {title.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line} {i === 0 && <br className="hidden md:block" />}
                            </React.Fragment>
                        ))}
                    </h2>
                    <div className="space-y-6 md:space-y-8">
                        {items.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4 md:gap-6 group"
                                >
                                    <div className="size-12 md:size-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        {Icon && <Icon size={20} className="md:size-6" />}
                                    </div>
                                    <div className="space-y-1">
                                        <h5 className="font-bold text-lg md:text-xl text-white">{item.title}</h5>
                                        <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative">
                    {image ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-[4/3] md:aspect-square rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white/5 shadow-2xl"
                        >
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {gridItems.map((gi, i) => {
                                const Icon = gi.icon;
                                return (gi.empty ? <div key={i} className="hidden md:block" /> :
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`aspect-square rounded-xl md:rounded-2xl bg-white/5 flex flex-col items-center justify-center space-y-2 border border-white/10 box-border p-4 md:p-6 text-center ${gi.mt || ''}`}
                                    >
                                        {Icon && <Icon className="text-primary mb-1 md:mb-2 md:size-8" size={24} />}
                                        <p className="text-base md:text-xl font-black text-white">{gi.label}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                    {/* Glow decoration */}
                    <div className="absolute -top-10 -right-10 size-48 md:size-64 bg-primary/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default InsightPanel;
