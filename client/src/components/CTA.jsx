import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="px-4 py-16 text-center">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-16 shadow-2xl shadow-primary/20 relative overflow-hidden group"
            >
                {/* Decorative background effects */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -ml-20 -mt-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -mr-32 -mb-32"></div>

                <div className="relative z-10 space-y-8">
                    <h3 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tighter">
                        Ready to <span className="text-gradient">Innovate?</span>
                    </h3>
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Let's discuss how our precision engineering and ICT solutions can transform your mission-critical infrastructure.
                    </p>
                    <div className="pt-4 flex justify-center">
                        <Link to="/contact" className="btn-primary py-5 px-10 text-lg group/btn shadow-2xl">
                            Book a Consultation
                            <Calendar size={20} className="group-hover/btn:scale-110 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Floating graphic element */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
                >
                    <ArrowRight size={200} strokeWidth={1} className="text-white rotate-45" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTA;
