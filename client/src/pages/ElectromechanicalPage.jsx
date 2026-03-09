import React from 'react';
import { motion } from 'framer-motion';
import {
    Settings,
    Cpu,
    Wind,
    Layers,
    PenTool,
    FastForward,
    Workflow,
    Box,
    Binary,
    ArrowRight,
    CheckCircle2,
    ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import FeatureShowcase from '../components/shared/FeatureShowcase';
import InfoGrid from '../components/shared/InfoGrid';
import InsightPanel from '../components/shared/InsightPanel';

const ElectromechanicalPage = () => {
    const coreServices = [
        {
            title: 'Precision Fabrication',
            description: 'High-tolerance custom metal fabrication and structural engineering for industrial machinery.',
            icon: Settings,
            features: ['CNC Machining', 'Welding', 'Assembly']
        },
        {
            title: 'HVAC Systems',
            description: 'Advanced industrial climate control and ventilation solutions with energy-optimized airflow.',
            icon: Wind,
            features: ['Cooling', 'Airflow', 'Filtration']
        },
        {
            title: 'Material Handling',
            description: 'Automated conveyor systems and sophisticated sorting mechanisms for warehouse logistics.',
            icon: Layers,
            features: ['Conveyors', 'Sorting', 'Logistics']
        },
        {
            title: 'Modular Skids',
            description: 'Pre-integrated, plug-and-play process systems designed for rapid site installation.',
            icon: Box,
            features: ['Pre-fab', 'Compact', 'Scalable']
        }
    ];

    const designProps = [
        {
            title: 'CAD / CAM Design',
            description: '3D modeling with advanced thermal and structural simulation.',
            icon: PenTool
        },
        {
            title: 'Rapid Prototyping',
            description: 'Digital concepts to functional steel in record-breaking timeframes.',
            icon: FastForward
        },
        {
            title: 'Integration Testing',
            description: 'End-to-end stress testing before final site commissioning.',
            icon: Workflow
        }
    ];

    const visualItems = [
        { icon: Box, label: 'Mechanical' },
        { icon: Cpu, label: 'Control', mt: 'mt-8' },
        { icon: Binary, label: 'Logic', mt: '-mt-8' },
        { icon: Layers, label: 'Structure' }
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-32 pb-32"
        >
            <PageHero
                badge="Infrastructure Layer"
                badgeIcon={Settings}
                title="Electro & Mechanical"
                subtitle="High-precision engineering solutions integrating sophisticated mechanical systems with advanced electrical controls."
                image="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2940"
            >
                <Link to="/contact" className="btn-primary">
                    Consult an Expert
                    <ArrowRight size={20} />
                </Link>
            </PageHero>

            <div className="max-w-7xl mx-auto px-6 space-y-32">
                <FeatureShowcase
                    badge="Engineering Perfection"
                    title="Precision Systems"
                    description="Our electromechanical division specializes in the design and manufacture of high-performance industrial components. We combine heavy-duty structural integrity with the delicate precision of modern electronic control systems."
                    image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940"
                    stats={[
                        { label: 'Tolerance', value: '±0.001mm' },
                        { label: 'Standard', value: 'ISO 9001' }
                    ]}
                />

                <section className="space-y-16">
                    <div className="space-y-4 text-center">
                        <h2 className="section-title">Core Engineering Capabilities</h2>
                        <div className="h-1 w-20 bg-primary/20 rounded-full mx-auto"></div>
                    </div>
                    <InfoGrid items={coreServices} iconBgColor="bg-emerald-500/10" iconColor="text-emerald-500" />
                </section>

                <InsightPanel
                    title="Engineering\nPerfection"
                    items={designProps}
                    gridItems={visualItems}
                />

                <section className="py-12 border-y border-slate-200 dark:border-slate-800">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: ShieldCheck, title: "Compliance", desc: "Global standards adherence." },
                            { icon: CheckCircle2, title: "Zero Faults", desc: "Excellence in every weld." },
                            { icon: ArrowRight, title: "24/7 Ops", desc: "Reliability in downtime." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-6 justify-center md:justify-start">
                                <item.icon className="text-primary" size={40} strokeWidth={1} />
                                <div>
                                    <h4 className="font-black dark:text-white uppercase tracking-widest text-sm">{item.title}</h4>
                                    <p className="text-xs text-slate-500 font-bold">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center space-y-10">
                    <h2 className="section-title">Ready to Automate?</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-medium">Our senior engineers are ready to architect your custom industrial solution.</p>
                    <div className="flex justify-center flex-wrap gap-4">
                        <Link to="/contact" className="btn-primary py-5 px-12">
                            Schedule a Technical Call
                        </Link>
                        <button className="btn-secondary py-5 px-12">
                            Our Machine Gallery
                        </button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default ElectromechanicalPage;
