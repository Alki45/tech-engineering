import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, Hammer, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const features = [
        {
            icon: ShieldCheck,
            title: '99.9% Uptime SLA',
            desc: 'Guaranteed service availability for mission-critical operations with zero-interruption architectures.'
        },
        {
            icon: Headphones,
            title: '24/7 Technical Support',
            desc: 'Round-the-clock access to our senior engineering teams, ensuring rapid response in real-time.'
        },
        {
            icon: Hammer,
            title: 'Certified Engineering',
            desc: 'Experts certified in Cisco, AWS, Azure, and industry security standards like ISO 27001.'
        }
    ];

    return (
        <section className="py-12 space-y-12">
            <div className="text-center space-y-4">
                <h3 className="section-title">The Strategic Edge</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">Why industrial leaders trust MEETO Engineering for their high-performance infrastructures.</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-6"
            >
                {features.map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex gap-6 items-start p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all group"
                    >
                        <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 shadow-lg shadow-primary/5">
                            <item.icon size={26} />
                        </div>
                        <div className="space-y-2">
                            <h5 className="font-black text-lg dark:text-white flex items-center gap-2">
                                {item.title}
                                <CheckCircle2 size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h5>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WhyChooseUs;
