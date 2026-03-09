import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Sun,
    Battery,
    Network,
    Shield,
    Workflow,
    ShieldCheck,
    Lightbulb,
    Clock,
    ZapOff,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import FeatureShowcase from '../components/shared/FeatureShowcase';
import InfoGrid from '../components/shared/InfoGrid';
import InsightPanel from '../components/shared/InsightPanel';

const PowerPage = () => {
    const coreServices = [
        {
            title: 'Solar Solutions',
            description: 'High-efficiency photovoltaic systems and smart grid integration for industrial-scale renewable energy.',
            icon: Sun,
            features: ['PV Systems', 'Smart Grid', 'Maintenance']
        },
        {
            title: 'Generator Systems',
            description: 'Advanced diesel and gas generator sets with automated transfer switches for mission-critical backup.',
            icon: Workflow,
            features: ['Diesel/Gas', 'ATS Systems', 'Load Balancing']
        },
        {
            title: 'Energy Storage',
            description: 'Industrial-grade UPS and BESS solutions ensuring seamless power transitions and peak shaving.',
            icon: Battery,
            features: ['UPS Systems', 'BESS', 'Peak Shaving']
        },
        {
            title: 'Power Networking',
            description: 'Substation automation and MV/LV distribution networks designed for high availability.',
            icon: Network,
            features: ['Substations', 'MV/LV Dist.', 'SCADA']
        }
    ];

    const valueProps = [
        {
            title: 'Zero Defect Policy',
            description: 'Rigorous ISO-compliant testing on every installation.',
            icon: Shield
        },
        {
            title: 'Fail-Safe Redundancy',
            description: 'Triple-layer backup architectures for critical loads.',
            icon: ZapOff
        },
        {
            title: 'Future-Ready Tech',
            description: 'Interoperable systems that scale with your growth.',
            icon: Workflow
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
                badgeIcon={Zap}
                title="Power & Energy"
                subtitle="Sustainable energy architecture and resilient power systems for mission-critical industrial operations."
                image="https://images.unsplash.com/photo-1466611653911-95282fc3656d?q=80&w=2940"
            >
                <Link to="/contact" className="btn-primary">
                    Consult an Engineer
                    <ArrowRight size={20} />
                </Link>
            </PageHero>

            <div className="max-w-7xl mx-auto px-6 space-y-32">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Uptime Guaranteed", value: "99.99%", icon: ShieldCheck, color: "text-emerald-500" },
                        { label: "Energy Savings", value: "30%+", icon: Lightbulb, color: "text-amber-500" },
                        { label: "Response Time", value: "<2 Hours", icon: Clock, color: "text-blue-500" }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card p-10 flex flex-col items-center text-center space-y-4">
                            <div className={`p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 ${item.color}`}>
                                <item.icon size={32} />
                            </div>
                            <div>
                                <p className="text-4xl font-black dark:text-white">{item.value}</p>
                                <p className="text-sm font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <FeatureShowcase
                    badge="Reliability by Design"
                    title="Sustainable Power"
                    description="We engineer high-capacity power systems that balance extreme reliability with environmental sustainability. Our solutions power everything from data centers to heavy industrial manufacturing plants."
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuDKklC2OguC4k6mQ6NFerUYv7Nn8UBY81Yu0HfZZPGdsH--6n7eh8fh9q8gCDHGSLdtdcpkDqEm8mQ2gcyUbgtJt2nfHgWP9nppZnt97U7JoTtwe-u-tI2ti5fWmWg1mzfdB7HDgEgMPqO8kI8MWSdAcmFAE2KOgwkMKcdhYOzG7p7tQTp-CTPg48pkvJu4acwJkTeFNatiuq04yBkwP0TE3BUGDqZqaJr81JBaXUt6dnZp5MfTcAVfSOI-xycefmxeyW-nq6emDj70"
                    stats={[
                        { label: 'Project Capacity', value: '50MW+' },
                        { label: 'Certified Quality', value: 'ISO 9001' }
                    ]}
                />

                <section className="space-y-16">
                    <div className="space-y-4 text-center">
                        <h2 className="section-title">Industrial Power Services</h2>
                        <div className="h-1 w-20 bg-primary/20 rounded-full mx-auto"></div>
                    </div>
                    <InfoGrid items={coreServices} iconBgColor="bg-amber-500/10" iconColor="text-amber-500" />
                </section>

                <InsightPanel
                    title="Reliability\nBy Design"
                    items={valueProps}
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuDKklC2OguC4k6mQ6NFerUYv7Nn8UBY81Yu0HfZZPGdsH--6n7eh8fh9q8gCDHGSLdtdcpkDqEm8mQ2gcyUbgtJt2nfHgWP9nppZnt97U7JoTtwe-u-tI2ti5fWmWg1mzfdB7HDgEgMPqO8kI8MWSdAcmFAE2KOgwkMKcdhYOzG7p7tQTp-CTPg48pkvJu4acwJkTeFNatiuq04yBkwP0TE3BUGDqZqaJr81JBaXUt6dnZp5MfTcAVfSOI-xycefmxeyW-nq6emDj70"
                />

                <section className="text-center space-y-10">
                    <h2 className="section-title">Ready to Energize Your Vision?</h2>
                    <div className="flex justify-center flex-wrap gap-4">
                        <Link to="/contact" className="btn-primary py-5 px-12 group">
                            Schedule a Consultation
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="btn-secondary py-5 px-12">
                            View Case Studies
                        </button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default PowerPage;
