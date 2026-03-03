import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Edit2,
    Trash2,
    Save,
    X,
    LayoutDashboard,
    List,
    Layers,
    Type,
    Image as ImageIcon,
    FileText,
    Zap,
    Cpu,
    CheckCircle2,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const AdminDashboard = () => {
    const [categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('categories');

    // Form States
    const [editingCategory, setEditingCategory] = useState(null);
    const [newCategory, setNewCategory] = useState({
        slug: '', title: '', hero_title: '', hero_subtitle: '', hero_image: '', overview_title: '', overview_text: ''
    });

    const [editingService, setEditingService] = useState(null);
    const [newService, setNewService] = useState({
        category_id: '', title: '', description: '', icon: '', features: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [catsRes, servsRes] = await Promise.all([
                fetch('/api/categories'),
                fetch('/api/services')
            ]);
            const cats = await catsRes.json();
            const servs = await servsRes.json();
            setCategories(cats);
            setServices(servs);
        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            setLoading(false);
        }
    };

    // Category Handlers
    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        const url = editingCategory
            ? `/api/categories/${editingCategory.id}`
            : '/api/categories';
        const method = editingCategory ? 'PUT' : 'POST';
        const data = editingCategory ? editingCategory : newCategory;

        try {
            await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            fetchData();
            setEditingCategory(null);
            setNewCategory({ slug: '', title: '', hero_title: '', hero_subtitle: '', hero_image: '', overview_title: '', overview_text: '' });
        } catch (err) {
            console.error('Error saving category:', err);
        }
    };

    const deleteCategory = async (id) => {
        if (!window.confirm('Are you sure? This will delete the category.')) return;
        try {
            await fetch(`/api/categories/${id}`, { method: 'DELETE' });
            fetchData();
        } catch (err) {
            console.error('Error deleting category:', err);
        }
    };

    // Service Handlers
    const handleServiceSubmit = async (e) => {
        e.preventDefault();
        const url = editingService
            ? `/api/services/${editingService.id}`
            : '/api/services';
        const method = editingService ? 'PUT' : 'POST';
        const data = editingService ? editingService : newService;

        // Ensure features is an array
        const formattedData = {
            ...data,
            features: typeof data.features === 'string' ? data.features.split(',').map(f => f.trim()) : data.features
        };

        try {
            await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formattedData)
            });
            fetchData();
            setEditingService(null);
            setNewService({ category_id: '', title: '', description: '', icon: '', features: '' });
        } catch (err) {
            console.error('Error saving service:', err);
        }
    };

    const deleteService = async (id) => {
        if (!window.confirm('Are you sure?')) return;
        try {
            await fetch(`/api/services/${id}`, { method: 'DELETE' });
            fetchData();
        } catch (err) {
            console.error('Error deleting service:', err);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-6 md:p-12">
            <div className="max-w-7xl mx-auto space-y-12">
                <header className="flex flex-col md:row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                            <LayoutDashboard size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black tracking-tight">Admin Console</h1>
                            <p className="text-slate-500 font-medium">Manage MEETO Engineering service architecture.</p>
                        </div>
                    </div>

                    <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <button
                            onClick={() => setActiveTab('categories')}
                            className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'categories' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-primary'}`}
                        >
                            Categories
                        </button>
                        <button
                            onClick={() => setActiveTab('services')}
                            className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'services' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-primary'}`}
                        >
                            Services
                        </button>
                    </div>
                </header>

                <main>
                    {activeTab === 'categories' ? (
                        <div className="space-y-8">
                            {/* Add/Edit Category Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-card p-8 space-y-6"
                            >
                                <div className="flex items-center gap-3 text-primary uppercase font-black tracking-widest text-xs">
                                    <Plus size={16} />
                                    {editingCategory ? 'Modify Category' : 'Architect New Category'}
                                </div>
                                <form onSubmit={handleCategorySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 flex items-center gap-2"><Type size={14} /> Title</label>
                                            <input
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium"
                                                value={editingCategory ? editingCategory.title : newCategory.title}
                                                onChange={(e) => editingCategory ? setEditingCategory({ ...editingCategory, title: e.target.value }) : setNewCategory({ ...newCategory, title: e.target.value })}
                                                placeholder="e.g. ICT Solutions"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 flex items-center gap-2"><Layers size={14} /> Slug</label>
                                            <input
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium"
                                                value={editingCategory ? editingCategory.slug : newCategory.slug}
                                                onChange={(e) => editingCategory ? setEditingCategory({ ...editingCategory, slug: e.target.value }) : setNewCategory({ ...newCategory, slug: e.target.value })}
                                                placeholder="e.g. ict"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 flex items-center gap-2"><ImageIcon size={14} /> Hero Image URL</label>
                                            <input
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium"
                                                value={editingCategory ? editingCategory.hero_image : newCategory.hero_image}
                                                onChange={(e) => editingCategory ? setEditingCategory({ ...editingCategory, hero_image: e.target.value }) : setNewCategory({ ...newCategory, hero_image: e.target.value })}
                                                placeholder="https://images.unsplash.com/..."
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 flex items-center gap-2"><Zap size={14} /> Hero Title</label>
                                            <input
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium"
                                                value={editingCategory ? editingCategory.hero_title : newCategory.hero_title}
                                                onChange={(e) => editingCategory ? setEditingCategory({ ...editingCategory, hero_title: e.target.value }) : setNewCategory({ ...newCategory, hero_title: e.target.value })}
                                                placeholder="ICT Solutions & Networking"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60">Hero Subtitle</label>
                                            <textarea
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium min-h-[100px]"
                                                value={editingCategory ? editingCategory.hero_subtitle : newCategory.hero_subtitle}
                                                onChange={(e) => editingCategory ? setEditingCategory({ ...editingCategory, hero_subtitle: e.target.value }) : setNewCategory({ ...newCategory, hero_subtitle: e.target.value })}
                                                placeholder="Building the digital bridge..."
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 flex justify-end gap-4">
                                        {editingCategory && (
                                            <button
                                                type="button"
                                                onClick={() => setEditingCategory(null)}
                                                className="btn-secondary py-3 px-8"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                        <button type="submit" className="btn-primary py-3 px-12">
                                            {editingCategory ? 'Update Architecture' : 'Deploy Category'}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>

                            {/* Categories List */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories.map(cat => (
                                    <div key={cat.id} className="glass-card p-6 flex flex-col justify-between group">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                                    ID: {cat.id}
                                                </span>
                                                <div className="flex gap-2">
                                                    <button onClick={() => setEditingCategory(cat)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                                                        <Edit2 size={16} />
                                                    </button>
                                                    <button onClick={() => deleteCategory(cat.id)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-rose-500 hover:bg-rose-500 hover:text-white transition-all">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-black mb-1">{cat.title}</h4>
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-4">/{cat.slug}</p>
                                        </div>
                                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900" />
                                                ))}
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400">0 Services Active</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* Add/Edit Service Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-card p-8 space-y-6"
                            >
                                <div className="flex items-center gap-3 text-primary uppercase font-black tracking-widest text-xs">
                                    <Plus size={16} />
                                    {editingService ? 'Refine Service' : 'Provision New Service'}
                                </div>
                                <form onSubmit={handleServiceSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60">Assign Category</label>
                                            <select
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium appearance-none"
                                                value={editingService ? editingService.category_id : newService.category_id}
                                                onChange={(e) => editingService ? setEditingService({ ...editingService, category_id: e.target.value }) : setNewService({ ...newService, category_id: e.target.value })}
                                                required
                                            >
                                                <option value="">Select a category</option>
                                                {categories.map(cat => (
                                                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60">Service Title</label>
                                            <input
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium"
                                                value={editingService ? editingService.title : newService.title}
                                                onChange={(e) => editingService ? setEditingService({ ...editingService, title: e.target.value }) : setNewService({ ...newService, title: e.target.value })}
                                                placeholder="e.g. Cybersecurity Audit"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60">Icon Key (Lucide)</label>
                                            <input
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium"
                                                value={editingService ? editingService.icon : newService.icon}
                                                onChange={(e) => editingService ? setEditingService({ ...editingService, icon: e.target.value }) : setNewService({ ...newService, icon: e.target.value })}
                                                placeholder="e.g. shield_lock"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60">Description</label>
                                            <textarea
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium min-h-[80px]"
                                                value={editingService ? editingService.description : newService.description}
                                                onChange={(e) => editingService ? setEditingService({ ...editingService, description: e.target.value }) : setNewService({ ...newService, description: e.target.value })}
                                                placeholder="End-to-end threat detection..."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60">Features (Comma separated)</label>
                                            <input
                                                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary font-medium"
                                                value={editingService ? (Array.isArray(editingService.features) ? editingService.features.join(', ') : editingService.features) : newService.features}
                                                onChange={(e) => editingService ? setEditingService({ ...editingService, features: e.target.value }) : setNewService({ ...newService, features: e.target.value })}
                                                placeholder="SIEM Management, Firewall Cluster"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 flex justify-end gap-4">
                                        {editingService && (
                                            <button
                                                type="button"
                                                onClick={() => setEditingService(null)}
                                                className="btn-secondary py-3 px-8"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                        <button type="submit" className="btn-primary py-3 px-12">
                                            {editingService ? 'Sync Service' : 'Authorize Service'}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>

                            {/* Services List (grouped by category) */}
                            <div className="space-y-6">
                                {categories.map(cat => {
                                    const catServices = services.filter(s => s.category_id === cat.id);
                                    if (catServices.length === 0) return null;
                                    return (
                                        <div key={cat.id} className="space-y-4">
                                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 px-4">{cat.title} Layers</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {catServices.map(s => (
                                                    <div key={s.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex justify-between items-start">
                                                        <div>
                                                            <h5 className="font-bold text-lg dark:text-white">{s.title}</h5>
                                                            <p className="text-sm text-slate-500 mb-3">{s.description}</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {s.features.map((f, i) => (
                                                                    <span key={i} className="px-2 py-0.5 rounded-lg bg-primary/5 text-primary text-[10px] font-bold">
                                                                        {f}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <button onClick={() => setEditingService(s)} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                                                                <Edit2 size={14} />
                                                            </button>
                                                            <button onClick={() => deleteService(s.id)} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-rose-500 hover:bg-rose-500 hover:text-white transition-all">
                                                                <Trash2 size={14} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
