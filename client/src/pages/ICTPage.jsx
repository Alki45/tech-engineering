import React from 'react';
import { motion } from 'framer-motion';
import {
    Network,
    ShieldCheck,
    CloudDownload,
    Database,
    Cpu,
    Zap,
    Server,
    Globe
} from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import FeatureShowcase from '../components/shared/FeatureShowcase';
import InfoGrid from '../components/shared/InfoGrid';
import InsightPanel from '../components/shared/InsightPanel';

const ICTPage = () => {
    const coreServices = [
        {
            title: 'Enterprise Networking',
            description: 'High-capacity LAN/WAN solutions with SD-WAN capabilities for seamless global connectivity.',
            icon: Network,
            features: ['SD-WAN', 'Fiber Optics', 'Wireless']
        },
        {
            title: 'Cybersecurity',
            description: 'Zero-trust architecture and real-time threat detection to protect your critical industrial assets.',
            icon: ShieldCheck,
            features: ['Firewalls', 'IDS/IPS', 'Endpoint']
        },
        {
            title: 'Cloud Infrastructure',
            description: 'Hybrid and multi-cloud environments optimized for low latency and high availability.',
            icon: CloudDownload,
            features: ['AWS/Azure', 'OpenStack', 'Hybrid']
        },
        {
            title: 'Data Center Management',
            description: 'End-to-end management of physical and virtualized server assets with optimized cooling and power.',
            icon: Database,
            features: ['Uptime', 'Cooling', 'Monitoring']
        }
    ];

    const valueProps = [
        {
            title: 'Resilient Infrastructure',
            description: '99.99% uptime guaranteed through redundant systems.',
            icon: Zap
        },
        {
            title: 'Scalable Architecture',
            description: 'Modular designs that grow with your industrial demands.',
            icon: Server
        },
        {
            title: 'Global Connectivity',
            description: 'Seamless integration across international sites.',
            icon: Globe
        }
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-32 pb-32"
        >
            <PageHero
                badge="ICT Infrastructure"
                badgeIcon={Cpu}
                title="Digital & Backbone"
                subtitle="Engineering the critical infrastructure that powers modern industrial digital transformation."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAWtFqZGoimumCprMDiqf8KzIpYB_CtUsQay6KYOXWqj8VmJAIacU3vSMfRgRE1UWNmUqhBTh8AzeyXms4nRwiBLb9vrNSxkjWarCfqnhfp9pYwOMF6A3O7oGps6akqrJ3nXbbsKzP1lq5IjwXfTbBnJZ4fvV0TiLC5vMi9nTWVLJo_SELmZc-mRrq8q-EncoPlG0ktCkk6WkXfY3zDpnKHJOto6S_mPJBnyi1MKa-BjfksCRKzoCF3MuSi8m0-4yudnbKZeKa_EMpA"
            />

            <div className="max-w-7xl mx-auto px-6 space-y-32">
                <FeatureShowcase
                    badge="Strategic Overview"
                    title="Intelligent Networking"
                    description="Our industrial networking solutions go beyond simple connectivity. We build mission-critical nerve systems for large-scale facilities, incorporating real-time telemetry and advanced edge computing capabilities."
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAMR8u978t25zMsc0A8oY0C-mGAnzHj61PjW9iW-H6Kx-1H-8o8zG9H50m1B8u6K"
                    stats={[
                        { label: 'Latency Reduction', value: '45%' },
                        { label: 'Site Capacity', value: '10Gbps+' }
                    ]}
                />

                <section className="space-y-16">
                    <div className="space-y-4">
                        <h2 className="section-title">Core ICT Services</h2>
                        <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
                    </div>
                    <InfoGrid items={coreServices} />
                </section>

                <InsightPanel
                    title="Next-Gen ICT\nIndustrial Edge"
                    items={valueProps}
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuD34q7m6R_h97E_w_7-C_00e0S_99e6y-M_K_v7_v7P_q"
                />
            </div>
        </motion.div>
    );
};

export default ICTPage;
