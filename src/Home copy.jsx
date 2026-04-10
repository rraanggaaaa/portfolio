import { useEffect, useRef, useState } from 'react';
import {
    Code2,
    Cpu,
    BookOpen,
    Award,
    Mail,
    Phone,
    MapPin,
    Calendar,
    ChevronRight,
    ExternalLink,
    Download,
    Menu,
    X,
    Globe,
    Sparkles,
    Zap,
    CircuitBoard,
    Rocket,
    Layers,
    Eye,
    User,
    Briefcase,
    GraduationCap
} from 'lucide-react';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [selectedProject, setSelectedProject] = useState(null);
    const sectionRefs = useRef({
        home: null,
        about: null,
        experience: null,
        publications: null,
        skills: null,
        certifications: null
    });

    useEffect(() => {
    const observers = {};
    const refs = sectionRefs.current;

    Object.keys(refs).forEach(key => {
        const element = refs[key];

        if (!element) return;

        observers[key] = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(key);
                }
            },
            { threshold: 0.3 }
        );

        observers[key].observe(element);
    });

    return () => {
        Object.values(observers).forEach(observer => observer.disconnect());
    };
}, []);
    // Personal Info
    const personalInfo = {
        name: "DWI RANGGA OKTA ZUHDIYANTO",
        title: "Fullstack Developer & Software Engineer",
        age: "23",
        location: "Jakarta, Indonesia",
        phone: "6281326298750",
        email: "dwiranggaoktaz@gmail.com",
        linkedin: "dwi-rangga-okta-zuhdiyanto",
        gpa: "3.83",
        university: "Universitas Teknologi Yogyakarta",
        graduation: "2025",
        photoUrl: "/api/placeholder/200/200" // Ganti dengan URL foto Anda
    };

    const experiences = [
        {
            company: "PT PERTAMINA HULU ENERGI OSES",
            role: "Team Lead & Fullstack Developer ReactJS",
            period: "Mei 2025 - Desember 2025",
            location: "Jakarta, Indonesia",
            achievements: [
                "Menyusun, merancang, serta mengimplementasikan sistem dari nol",
                "Melakukan koordinasi untuk task anggota tim",
                "Membuat VRP fitur didalam sistem",
                "Merancang kerangka kerja pengembangan web apps",
                "Develop sistem sesuai alur yang diminta user"
            ],
            portfolio: "pheosesxsindis.my.id",
            projectDetails: {
                title: "PHE OSES X SINDIS",
                description: "Sistem manajemen terintegrasi untuk PERTAMINA HULU ENERGI OSES dengan fitur VRP (Vehicle Routing Problem) dan monitoring real-time.",
                technologies: ["ReactJS", "Node.js", "PostgreSQL", "Docker", "Google Maps API"],
                features: [
                    "Vehicle Routing Problem optimization",
                    "Real-time fleet monitoring",
                    "Dashboard analitik",
                    "Manajemen pengguna",
                    "Laporan otomatis"
                ],
                image: "https://i.ibb.co.com/DgsCRCKv/Screenshot-2026-03-02-165539.png",
            }
        },
        {
            company: "PT WESCLIC INDONESIA NEOTECH",
            role: "Fullstack Web Developer Typescript & Laravel",
            period: "Januari 2025 - April 2025",
            location: "Yogyakarta, Indonesia",
            achievements: [
                "Menyusun dan mengimplementasikan ERD menjadi sistem utuh",
                "Menyediakan API untuk digunakan dalam sistem",
                "Melakukan slicing dari desain ke kode frontend responsif",
                "Menyusun dokumentasi kode"
            ],
            portfolio: "wesclic.com",
            projectDetails: {
                title: "Wesclic Indonesia Neotech Platform",
                description: "Pengembangan platform web dengan arsitektur modern menggunakan TypeScript dan Laravel.",
                technologies: ["TypeScript", "Laravel", "MySQL", "REST API", "Tailwind CSS"],
                features: [
                    "Slicing design ke kode responsif",
                    "API development & documentation",
                    "Database design & optimization",
                    "Integration testing"
                ],
                image: "https://i.ibb.co.com/JWf8T1zS/Screenshot-2026-03-02-165813.png"
            }
        },
        {
            company: "PRAKERJA",
            role: "Programmer dan Data Entry",
            period: "Maret 2024 - Juli 2024",
            location: "Yogyakarta, Indonesia",
            achievements: [
                "Mengembangkan website formulir input digital",
                "Komunikasi dengan tim dan pengguna untuk diskusi sistem",
                "Melakukan entry data ke excel dan web sistem"
            ],
            projectDetails: {
                title: "Digital Form Management System",
                description: "Sistem formulir digital untuk memudahkan pencatatan data perusahaan, khususnya untuk pengguna lanjut usia.",
                technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Excel Integration"],
                features: [
                    "Formulir digital interaktif",
                    "Data entry system",
                    "Excel export/import",
                    "User-friendly interface untuk lansia"
                ],
                image: "/api/placeholder/600/400"
            }
        }
    ];

    const publications = [
        {
            title: "Real-Time Location Monitoring and Routine Reminders Based on Internet of Things Integrated with Mobile for Dementia Disorder",
            journal: "Jurnal RESTI (Rekayasa Sistem dan Teknologi Informasi)",
            publisher: "IAI (Ikatan Ahli Informatika Indonesia)",
            year: "2025",
            type: "SINTA 2",
            role: "Penulis Pertama & Perancang Sistem",
            projectDetails: {
                description: "Penelitian dan pengembangan sistem monitoring lokasi real-time dan pengingat rutin untuk penderita demensia menggunakan IoT dan mobile.",
                technologies: ["IoT", "Mobile Development", "Real-time Tracking", "GPS", "Cloud Database"],
                features: [
                    "Real-time location monitoring",
                    "Routine reminders system",
                    "Mobile app integration",
                    "Emergency alerts",
                    "Caregiver dashboard"
                ],
                image: "/api/placeholder/600/400"
            }
        }
    ];

    const certifications = [
        {
            name: "Introduction to Front-End Development",
            issuer: "META x Coursera",
            year: "2024"
        },
        {
            name: "Programming with Javascript",
            issuer: "META x Coursera",
            year: "2024"
        },
        {
            name: "Cloud Practitioner",
            issuer: "Dicoding",
            year: "2022"
        },
        {
            name: "Data Engineering Professional Certification",
            issuer: "RapidMiner",
            year: "2022"
        },
        {
            name: "Augmented Reality with SparkAR",
            issuer: "META x Hacktiv8",
            year: "2023"
        }
    ];

    const organizations = [
        "PERHIMPUNAN MAHASISWA INFORMATIKA DAN ILMU KOMPUTER NASIONAL REPUBLIK INDONESIA WILAYAH VIII (2023-2024)",
        "HIMPUNAN MAHASISWA TEKNOLOGI INFORMATIKA UTY (2023-2024)",
        "KELOMPOK STUDI PASAR MODAL UTY (2023-2024)"
    ];

    const skills = {
        languages: ["JavaScript", "PHP", "Python", "Kotlin"],
        frontend: ["ReactJS", "React Native", "Tailwind"],
        backend: ["NodeJS", "Laravel"],
        database: ["MySQL", "Database Relational", "Non-Relational", "Cloud Database"],
        tools: ["Docker", "Github", "Hosting", "VPS"],
        other: ["System Analyst", "MS Word", "MS Office", "MS Excel"]
    };

    // Particle animation effect
    const ParticleBackground = () => {
        return (
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10 animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            animationDuration: `${Math.random() * 5 + 3}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>
        );
    };

    // Modal Component
    const ProjectModal = ({ project, onClose }) => {
        if (!project) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
                <div className="relative bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30" onClick={e => e.stopPropagation()}>
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 transition-colors z-10">
                        <X className="w-6 h-6" />
                    </button>

                    {/* Project Image */}
                    <div className="relative h-64 md:h-80">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>

                        <p className="text-gray-300 mb-6">{project.description}</p>

                        {/* Technologies */}
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                        <Zap className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Close Button */}
                        <div className="flex justify-end">
                            <button onClick={onClose} className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-x-hidden">
            <ParticleBackground />

            {/* Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-40 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/30">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Cpu className="w-8 h-8 text-purple-400 animate-pulse" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'Experience', 'Publications', 'Skills', 'Certifications'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        const section = item.toLowerCase();
                                        sectionRefs[section === 'home' ? 'home' :
                                            section === 'experience' ? 'experience' :
                                                section === 'publications' ? 'publications' :
                                                    section === 'skills' ? 'skills' : 'certifications'].current?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 relative group ${activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                                        }`}
                                >
                                    {item}
                                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${activeSection === item.toLowerCase() ? 'scale-x-100' : ''
                                        }`}></span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-300 hover:text-purple-400"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-b border-purple-500/30 py-4">
                            {['Home', 'Experience', 'Publications', 'Skills', 'Certifications'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        const section = item.toLowerCase();
                                        sectionRefs[section === 'home' ? 'home' :
                                            section === 'experience' ? 'experience' :
                                                section === 'publications' ? 'publications' :
                                                    section === 'skills' ? 'skills' : 'certifications'].current?.scrollIntoView({ behavior: 'smooth' });
                                        setIsMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-6 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 pt-24 pb-12">
                {/* Hero Section */}
                <section ref={sectionRefs.home} className="min-h-screen flex items-center justify-center relative py-20">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        {/* Profile Photo */}
                        <div className="relative inline-block">
                            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500/50 ring-4 ring-purple-500/20 animate-pulse">
                                <img
                                    src="https://i.ibb.co.com/yckGpfzC/foto35k-HUHU.jpg"
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full p-2">
                                <User className="w-5 h-5 text-white" />
                            </div>
                        </div>

                        {/* Animated Name */}
                        <div className="relative">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                                    {personalInfo.name}
                                </span>
                            </h1>
                            <div className="absolute -top-6 -right-6 animate-pulse">
                                <Sparkles className="w-8 h-8 text-purple-400" />
                            </div>
                        </div>

                        {/* Title with Typing Effect */}
                        <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-purple-300">
                            <Code2 className="w-6 h-6 animate-bounce" />
                            <span className="font-mono border-r-2 border-purple-400 pr-2 animate-typing">
                                {personalInfo.title}
                            </span>
                        </div>

                        {/* University Info */}
                        <div className="flex items-center justify-center space-x-2 text-gray-400">
                            <GraduationCap className="w-5 h-5" />
                            <span>{personalInfo.university} • IPK {personalInfo.gpa} • {personalInfo.graduation}</span>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {[
                                { icon: <Calendar />, text: `${personalInfo.age} Tahun` },
                                { icon: <MapPin />, text: personalInfo.location },
                                { icon: <Briefcase />, text: "2-3 Years Experience" }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="flex items-center justify-center space-x-2 text-purple-400 group-hover:text-purple-300">
                                        {item.icon}
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            {[
                                { icon: <Mail />, text: "Email", href: `mailto:${personalInfo.email}` },
                                { icon: <Phone />, text: "WhatsApp", href: `https://wa.me/${personalInfo.phone}` },
                                { icon: <Globe />, text: "LinkedIn", href: `https://linkedin.com/in/${personalInfo.linkedin}` },
                                { icon: <Download />, text: "Download CV", href: "/CV_RANGGA.pdf" }
                            ].map((button, index) => (
                                <a
                                    key={index}
                                    href={button.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                                    <span className="relative flex items-center space-x-2">
                                        {button.icon}
                                        <span>{button.text}</span>
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce">
                            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-scroll"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section ref={sectionRefs.experience} className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
                        <Rocket className="w-8 h-8 mr-3 text-purple-400" />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Professional Experience
                        </span>
                    </h2>

                    <div className="space-y-8 relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-transparent"></div>

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:scale-[1.02] ml-16"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-12 top-8 w-4 h-4 rounded-full bg-purple-400 border-4 border-gray-900"></div>

                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="md:w-1/4">
                                        <div className="text-purple-400 font-mono text-sm">{exp.period}</div>
                                        <h3 className="text-xl font-bold text-white mt-2">{exp.company}</h3>
                                        <p className="text-purple-300">{exp.role}</p>
                                        <p className="text-gray-400 text-sm mt-1">{exp.location}</p>
                                    </div>

                                    <div className="md:w-3/4">
                                        <ul className="space-y-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                                                    <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-4 mt-4">
                                            {exp.portfolio && (
                                                <a
                                                    href={`https://${exp.portfolio}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                                                >
                                                    <span>View Live</span>
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}

                                            <button
                                                onClick={() => setSelectedProject(exp.projectDetails)}
                                                className="inline-flex items-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 px-4 py-2 rounded-full transition-colors"
                                            >
                                                <Eye className="w-4 h-4" />
                                                <span>Overview Project</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Publications Section */}
                <section ref={sectionRefs.publications} className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
                        <BookOpen className="w-8 h-8 mr-3 text-purple-400" />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Publications & Research
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {publications.map((pub, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:scale-105"
                            >
                                <div className="absolute -top-3 -right-3 bg-purple-500 text-xs px-3 py-1 rounded-full">
                                    {pub.type}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{pub.title}</h3>
                                <p className="text-purple-300 mb-2">{pub.journal}</p>
                                <p className="text-gray-400 text-sm mb-4">{pub.publisher}, {pub.year}</p>

                                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                                    <Award className="w-4 h-4 text-purple-400" />
                                    <span>{pub.role}</span>
                                </div>

                                <button
                                    onClick={() => setSelectedProject(pub.projectDetails)}
                                    className="inline-flex items-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 px-4 py-2 rounded-full transition-colors"
                                >
                                    <Eye className="w-4 h-4" />
                                    <span>Overview Project</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section ref={sectionRefs.skills} className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
                        <CircuitBoard className="w-8 h-8 mr-3 text-purple-400" />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Technical Skills
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div
                                key={category}
                                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-purple-400 mb-4 capitalize">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm hover:bg-purple-500/30 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Organizations */}
                    <div className="mt-8 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                        <h3 className="text-xl font-bold text-purple-400 mb-4">Organizations</h3>
                        <div className="space-y-2">
                            {organizations.map((org, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <Layers className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{org}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section ref={sectionRefs.certifications} className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
                        <Award className="w-8 h-8 mr-3 text-purple-400" />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-white">{cert.name}</h3>
                                    <span className="text-xs bg-purple-500/30 px-2 py-1 rounded-full text-purple-300">
                                        {cert.year}
                                    </span>
                                </div>
                                <p className="text-purple-300 text-sm">{cert.issuer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer/Contact */}
                <footer className="mt-20 py-8 border-t border-purple-500/30">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <Cpu className="w-6 h-6 text-purple-400" />
                            <span className="text-gray-400">© 2025 Dwi Rangga Okta Zuhdiyanto</span>
                        </div>

                        <div className="flex space-x-6">
                            {[
                                { icon: <Globe className="w-5 h-5" />, href: "#" },
                                { icon: <Globe className="w-5 h-5" />, href: `https://linkedin.com/in/${personalInfo.linkedin}` },
                                { icon: <Mail className="w-5 h-5" />, href: `mailto:${personalInfo.email}` }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Home;