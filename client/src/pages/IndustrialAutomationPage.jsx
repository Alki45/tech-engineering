import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    Binary,
    Settings,
    Workflow,
    Zap,
    History,
    Dna,
    Activity,
    Box,
    Layers,
    ArrowRight,
    ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import FeatureShowcase from '../components/shared/FeatureShowcase';
import InfoGrid from '../components/shared/InfoGrid';
import InsightPanel from '../components/shared/InsightPanel';

const IndustrialAutomationPage = () => {
    const coreServices = [
        {
            title: 'Robotic Integration',
            description: 'Custom robotic cells for high-speed pick-and-place, assembly, and precision welding operations.',
            icon: Cpu,
            features: ['Pick-and-Place', 'Assembly', 'Welding']
        },
        {
            title: 'PLC Programming',
            description: 'Advanced logic controller programming and HMI development for seamless industrial orchestration.',
            icon: Binary,
            features: ['Logic Logic', 'HMI Dev', 'SCADA']
        },
        {
            title: 'SCADA Systems',
            description: 'Real-time data acquisition and supervisory control for complete facility transparency.',
            icon: Workflow,
            features: ['Real-time Data', 'Supervisory', 'Monitoring']
        },
        {
            title: 'Edge Computing',
            description: 'Processing critical data at the source to minimize latency and maximize operational speed.',
            icon: Zap,
            features: ['Low Latency', 'Edge AI', 'Fast Processing']
        }
    ];

    const techBadges = [
        { icon: ShieldCheck, label: "Safety PLC" },
        { icon: Layers, label: "Multi-Tier Ops" },
        { icon: Dna, label: "AI Optimization" },
        { icon: History, label: "24/7 Monitoring" }
    ];

    const valueProps = [
        {
            title: 'Autonomous Logic',
            description: 'Self-optimizing routines that adapt to production variances.',
            icon: Binary
        },
        {
            title: 'Predictive Analytics',
            description: 'Anticipate maintenance needs before they impact uptime.',
            icon: Activity
        },
        {
            title: 'Cyber-Physical Security',
            description: 'Hardened communication protocols for critical shop floors.',
            icon: ShieldCheck
        }
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-32 pb-32"
        >
            <PageHero
                badge="Infrastructure Layer"
                badgeIcon={Cpu}
                title="Industrial & Automation"
                subtitle="End-to-end autonomous ecosystems designed to scale with your production needs and multiply operational capacity."
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940"
            >
                <Link to="/contact" className="btn-primary">
                    Architect Your Solution
                    <ArrowRight size={20} />
                </Link>
            </PageHero>

            <div className="max-w-7xl mx-auto px-6 space-y-32">
                <FeatureShowcase
                    badge="Efficiency Redefined"
                    title="Intelligent Autonomy"
                    description="We design and implement comprehensive automation strategies that transform traditional manufacturing into intelligent, autonomous ecosystems. Our systems focus on maximizing throughput while minimizing errors."
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAMR8u978t25zMsc0A8oY0C-mGAnzHj61PjW9iW-H6Kx-1H-8o8zG9H50m1B8u6K"
                    stats={[
                        { label: 'Throughput Increase', value: '40%+' },
                        { label: 'Margin of Error', value: '0.01%' }
                    ]}
                />

                <section className="space-y-16">
                    <div className="space-y-4 text-center">
                        <h2 className="section-title">Core Automation Services</h2>
                        <div className="h-1 w-20 bg-primary/20 rounded-full mx-auto"></div>
                    </div>
                    <InfoGrid items={coreServices} />
                </section>

                <section className="border-y border-slate-200 dark:border-slate-800 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
                        {techBadges.map((badge, idx) => (
                            <div key={idx} className="space-y-4 group">
                                <div className="flex justify-center text-primary group-hover:scale-110 transition-transform">
                                    <badge.icon size={32} strokeWidth={1.5} />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{badge.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <InsightPanel
                    title="Autonomous\nJourney"
                    items={valueProps}
                    image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940"
                />

                <section className="text-center space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white">Start Your Autonomous Journey.</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-medium">Let's discuss how robotics can multiply your operational capacity.</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-4">
                        <Link to="/contact" className="btn-primary py-5 px-12 group">
                            Consult an AI Architect
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default IndustrialAutomationPage;
