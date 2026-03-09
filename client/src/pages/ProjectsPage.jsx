import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase,
    ExternalLink,
    Search,
    Filter,
    ChevronRight,
    Zap,
    Network,
    Settings,
    Target,
    BarChart3
} from 'lucide-react';

const projects = [
    {
        id: 1,
        category: 'Power & Energy',
        icon: Zap,
        title: 'National Smart Grid Integration',
        status: 'ACTIVE',
        description: 'Achieved 99.9% grid stability through advanced IoT integration and real-time monitoring across 15 provincial hubs. Implementation of automated load balancing algorithms significantly reduced power loss.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxVHgfbWIBbrTYupKinQfTHLeTgquT01xFtBomO-uSarJbutz4jf0C_BeN0RVAGWVd7Gt5_hDdVJj5_JwyyuehwPTfosk9YVQy8SEWkLfiw7MP-EIn9_q6XMtTBr_-miD7-NPHrTDXUyx1ImQHdt8S5s1LHY77qp4P3cDuqpRfgVFR_rZNqJaVH06XIvsY45ghzimRWOVQPZRxYSvpzJDu1f88_Ol3_UHO2diTm0hPCbRDa_NCPxCiku8zJ9GbcjG2Go2cj_6LybTc',
        stats: [{ label: 'Stability', value: '99.9%' }, { label: 'Efficiency', value: '+24%' }],
    },
    {
        id: 2,
        category: 'ICT Infrastructure',
        icon: Network,
        title: 'Hyperscale Data Center Infrastructure',
        status: 'COMPLETED',
        description: 'Complete Tier IV facility design and execution. Features advanced liquid cooling systems and high-density power distribution units supporting 25kW per rack average load.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxLztfDCiEaR4JRsv6BKzEV694q7ZdxY5a2Kj1GPfXDGBcUxjUW5SbrIIB_oMU3k4aJ_QOexpqYbpszsRSkyybgMiVoIGpH4AIxNYKK4Ah5hMII5mygVDEG_VdOJ5k-rWCsZvj9vd7MK44x3mG3gBAM1DuFHIp8kzQlUowyUAOR-gb9qAAxnjjxlVdH84QUNeFU7Acf83IHm6STKxMARmRATaLErR78PkYaSuzy7wmzW_GFkkKHFwZEeyAiLi3HSO3Tvu49hqn3Rhx',
        stats: [{ label: 'PUE Rating', value: '1.12' }, { label: 'Density', value: 'Hyperscale' }],
    },
    {
        id: 3,
        category: 'Electromechanical',
        icon: Settings,
        title: 'Automated Manufacturing Line',
        status: 'ACTIVE',
        description: 'Precision-engineered assembly line for aerospace component fabrication. Integrates 6-axis robotic arms with sub-millimeter accuracy and AI-driven quality inspection systems.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv0u0CSDjgcdDX9SusYgnZ-SfaVcoWCU1cYoP4qOUmwTZANjSBSAF86HNiSgLvb8O7l0nfvSFhx5atOWXtS3khqvOVGPkj5YQYPoNZkQtllSuDAdsn5s7BlpafyLk3Kc12tp_lm-uN3tGFIhkiN_EAjBFEV_86O7qGrWgyt8U-vmTIdFOobzlMGmA1PzquBgU-6ND36MwNQXTcADjcvPzaqqAcxrZ3rufXlpVxBQLALOmLScuBrTV5uDwdsFDabE0I6D_1_OJQRtun',
        stats: [{ label: 'Precision', value: '0.05mm' }, { label: 'Automation', value: 'Level 5' }],
    },
    {
        id: 4,
        category: 'ICT Infrastructure',
        icon: Network,
        title: 'Regional Fiber Backbone Expansion',
        status: 'COMPLETED',
        description: 'Deployment of 2,400km of high-capacity dark fiber across rugged terrain. Project involved specialized horizontal directional drilling and underground facility engineering.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFvghT4jvOZ0y4GG6o6uy2X0oemIpxzD7qwzFzRNO1KI1swmonxNNq2nIcIzBEr_0Sg_arblRpKa0nWfnbnfh8NXV0fIOStSX75FjEv1oULLnqVo7-KStulx-KUVWiT3YYHH8oyqhGY8XE-o8RIivt2suVJkeGKcZIEsic2paVmwU7pNFvBfH72fDIvsI6-G5joIaNuQ8BxXmeRd4HyEVFNZJRb2iFADxzw9a0H_J0oWgT01QZVWuEdQhj-gpJOwLzkLFr8iPlS3_M',
        stats: [{ label: 'Coverage', value: '2.4k km' }, { label: 'Throughput', value: '400 Gbps' }],
    },
];

const categories = ['All Projects', 'Power & Energy', 'ICT Infrastructure', 'Electromechanical'];

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');

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

    const filtered = activeFilter === 'All Projects'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-12 pb-24"
        >
            {/* Hero Section */}
            <section className="relative rounded-[3rem] overflow-hidden bg-slate-950 min-h-[500px] flex items-center group">
                <div className="absolute inset-0">
                    <img
                        alt="Engineering Portfolio"
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaYBYNuPaRKpQ0KDcg4rgnPmoMudwQsLXPtSgonthu1bFS6Gi6ijm-PsujnK5PbzkmUqQHsnbs_TfpXZ8XKTAt0ycPMzH0IWuf5PIhijQMwRBbaFrW8z98Ssb1MCZUtGl8SucM_BwuV2xJqEHgJbnxKQXSJmwD6Z3THPqQyY1PVcw2Mtpo5_3bdKoK6NZ1gq6K3tpA-0nLpr7kgxcDQgj5p9n__l-pX7Kr6lDmuzuvxKp0DEcifzIe-AOPb6xrZ-cLgOgnYtCKtwCU"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(19, 127, 236, 1) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 p-12 md:p-24 max-w-4xl space-y-8">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Portfolio Overview
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                        Engineering <br />
                        <span className="text-primary italic">Excellence.</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl font-medium max-w-xl italic">
                        Delivering high-precision infrastructure and innovative industrial solutions across global sectors.
                    </motion.p>
                </div>
            </section>

            {/* Filter Section */}
            <div className="sticky top-18 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-y border-slate-200 dark:border-slate-800 transition-all">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8 py-2">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`h-11 px-6 rounded-2xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeFilter === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                                    }`}
                            >
                                {cat === 'All Projects' && <Briefcase size={16} />}
                                {cat === 'Power & Energy' && <Zap size={16} />}
                                {cat === 'ICT Infrastructure' && <Network size={16} />}
                                {cat === 'Electromechanical' && <Settings size={16} />}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects list */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-12">
                    <AnimatePresence mode='popLayout'>
                        {filtered.map((project, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                key={project.id}
                                className="group grid md:grid-cols-2 gap-8 items-stretch glass-card p-4 md:p-8 hover:shadow-2xl hover:shadow-primary/5 border border-slate-200 dark:border-slate-800"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] aspect-video md:aspect-auto">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8 }}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-xl border border-white/20 ${project.status === 'ACTIVE' ? 'bg-primary text-white' : 'bg-slate-900/60 text-white'}`}>
                                            {project.status}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between py-6 md:px-4">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                                                <project.icon size={14} />
                                                {project.category}
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-black dark:text-white leading-tight">{project.title}</h3>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex gap-8 pt-4">
                                            {project.stats.map(stat => (
                                                <div key={stat.label} className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                                                    <p className="text-2xl font-black text-primary">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-10 mt-auto border-t border-slate-100 dark:border-slate-800">
                                        <button className="btn-primary py-4 px-8 group">
                                            Case Study
                                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <button className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-400 hover:text-primary transition-all">
                                            <ExternalLink size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Stats Footer Section */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="glass-card p-12 bg-slate-900 border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Precision", value: "99.99%", icon: Target },
                        { label: "Success Rate", value: "100%", icon: BarChart3 },
                        { label: "Global Presence", value: "24+", icon: Briefcase },
                        { label: "Engineering Hours", value: "1M+", icon: Settings }
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-white/5 rounded-2xl text-primary">
                                <s.icon size={24} />
                            </div>
                            <p className="text-3xl font-black text-white">{s.value}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default ProjectsPage;
