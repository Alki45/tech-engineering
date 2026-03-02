import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Network,
    ShieldCheck,
    CloudDownload,
    Database,
    ArrowRight,
    Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const iconMap = {
        'hub': Network,
        'shield_lock': ShieldCheck,
        'cloud_done': CloudDownload,
        'storage': Database
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/services');
                if (response.ok) {
                    const data = await response.json();
                    setServices(data);
                } else {
                    throw new Error('Fallback needed');
                }
            } catch (error) {
                // Fallback data if API fails or DB not ready
                setServices([
                    { id: 1, title: 'Enterprise Networking', description: 'High-capacity LAN/WAN solutions with SD-WAN capabilities for seamless global connectivity.', icon: 'hub' },
                    { id: 2, title: 'Cybersecurity', description: 'Zero-trust architecture and real-time threat detection to protect your critical industrial assets.', icon: 'shield_lock' },
                    { id: 3, title: 'Cloud Infrastructure', description: 'Hybrid and multi-cloud environments optimized for low latency and high availability.', icon: 'cloud_done' },
                    { id: 4, title: 'Data Center Management', description: 'End-to-end management of physical and virtualized server assets with optimized cooling and power.', icon: 'storage' }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

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

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-20 space-y-4">
                <Loader2 className="animate-spin text-primary" size={40} />
                <p className="text-sm font-black uppercase tracking-widest text-slate-500">Initializing Systems...</p>
            </div>
        );
    }

    return (
        <section className="space-y-12 py-12">
            <div className="space-y-4">
                <h3 className="section-title text-left ml-0">Core ICT Services</h3>
                <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {services.map((service, idx) => {
                    const Icon = iconMap[service.icon] || Network;
                    return (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 group transition-all relative overflow-hidden flex flex-col items-start gap-6 border-slate-200 dark:border-slate-800"
                        >
                            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Icon size={28} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-black text-xl dark:text-white leading-tight">{service.title}</h4>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <Link to="/services/ict" className="mt-auto flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
                                Details <ArrowRight size={14} />
                            </Link>

                            {/* Interactive number background */}
                            <div className="absolute -bottom-6 -right-4 text-8xl font-black text-slate-100 dark:text-slate-900 group-hover:text-primary/5 transition-colors pointer-events-none">
                                0{idx + 1}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Services;
