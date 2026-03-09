import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const InfoGrid = ({
    items = [],
    columns = 4,
    iconBgColor = "bg-primary/10",
    iconColor = "text-primary",
    showArrow = true,
    badgeLabel = "Spec Ref"
}) => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

    return (
        <div className={`grid ${gridCols} gap-6 md:gap-8`}>
            {items.map((item, idx) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="glass-card p-6 md:p-10 group flex flex-col items-start gap-4 md:gap-6 border border-slate-200 dark:border-slate-800"
                    >
                        {Icon && (
                            <div className={`size-12 md:size-16 rounded-xl md:rounded-2xl ${iconBgColor} ${iconColor} flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/5`}>
                                <Icon size={24} className="md:size-8" strokeWidth={2.5} />
                            </div>
                        )}
                        <div className="space-y-3 md:space-y-4">
                            <h4 className="font-black text-lg md:text-xl uppercase tracking-tighter dark:text-white">{item.title}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.description}</p>

                            {item.features && (
                                <ul className="grid grid-cols-1 gap-2 pt-1 md:pt-2">
                                    {item.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            <div className="size-1 bg-primary rounded-full"></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="mt-auto pt-4 md:pt-6 w-full border-t border-slate-100 dark:border-slate-800/50 flex justify-between items-center group-hover:border-primary/20 transition-colors">
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">{badgeLabel}: 0{idx + 1}</span>
                            {showArrow && <ArrowRight size={14} className="md:size-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-all" />}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default InfoGrid;
