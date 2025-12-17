/**
 * Data & Constants
 * File ini berisi semua data dummy untuk portfolio
 * Mudah di-maintain karena terpisah dari komponen
 */

// ==================== PERSONAL INFO ====================
export const personalInfo = {
  name: 'Wahid Satrio Aji',
  role: 'Frontend Developer',
  tagline: 'Transforming Ideas Into Interactive Web Experiences',
  description:
    'I build modern, responsive, and high-performance web applications using React, TypeScript, and cutting-edge frontend technologies. Let\'s bring your vision to life with clean code and pixel-perfect design.',
  available: true,
  circleText: 'AVAILABLE • FRONTEND • DEVELOPER •',
  roleLabel: 'FRONTEND DEVELOPER', // Label di bawah foto
};

// ==================== FLOATING TECH STACK ====================
// Floating cards dengan icon untuk tech stack
export const floatingTechStack = [
  {
    id: 1,
    name: 'React',
    icon: '⚛️', // React icon
    position: 'top-left', // Posisi floating
  },
  {
    id: 2,
    name: 'TypeScript',
    icon: 'TS', // TypeScript icon
    position: 'top-right',
  },
  {
    id: 3,
    name: 'Tailwind',
    icon: '🎨', // Tailwind icon
    position: 'middle-left',
  },
];

// ==================== HERO STATS ====================
// Stats melayang di sekitar foto
export const heroStats = [
  {
    id: 1,
    value: '2+',
    label: 'Years of Experience',
    position: 'top-right',
  },
  {
    id: 2,
    value: '10+',
    label: 'Finish Project',
    position: 'left',
  },
  {
    id: 3,
    value: '5+',
    label: 'Client',
    position: 'bottom-right',
  },
];

// ==================== RECENT WORKS (untuk Hero) ====================
export const recentWorks = [
  {
    id: 1,
    title: 'Maxis Project',
    letter: 'h',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    url: '#projects',
  },
  {
    id: 2,
    title: 'Wawan Project',
    letter: 'm',
    gradient: 'from-purple-400 via-pink-500 to-rose-500',
    url: '#projects',
  },
  {
    id: 3,
    title: 'Nova Project',
    letter: 'w',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    url: '#projects',
  },
];

// ==================== HERO SECTION DATA (legacy support) ====================
export const heroData = {
  badge: {
    primary: 'Frontend Developer',
    secondary: 'Available for Freelance',
  },
  headline: 'Frontend Developer crafting clean, modern interfaces',
  subheadline:
    'I specialize in React, Tailwind CSS, and delivering pixel-perfect UX for brands and digital companies.',
  description:
    'From UI design to integration and deployment — I help turn your ideas into polished, production-ready web experiences that users love.',
  cta: {
    primary: {
      text: 'Contact Me',
      href: '#contact',
    },
    secondary: {
      text: 'My Works',
      href: '#projects',
    },
  },
};

// ==================== EDUCATION DATA ====================
export const educationData = [
  {
    id: 1,
    institution: 'Universitas Contoh',
    degree: 'S1 Teknik Informatika',
    period: '2019 - 2023',
    description: 'Fokus pada pengembangan web dan software engineering.',
  },
  {
    id: 2,
    institution: 'Dicoding Academy',
    degree: 'Front-End Web Developer Expert',
    period: '2022',
    description: 'Sertifikasi pengembangan frontend dengan React dan PWA.',
  },
];

// ==================== EXPERIENCE DATA ====================
export const experienceData = [
  {
    id: 1,
    company: 'Startup XYZ',
    position: 'Frontend Developer',
    period: '2023 - Present',
    description:
      'Membangun dan maintain aplikasi web menggunakan React, Next.js, dan TailwindCSS. Kolaborasi dengan tim design dan backend untuk deliver fitur baru.',
    techStack: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
  },
  {
    id: 2,
    company: 'Agency ABC',
    position: 'Junior Web Developer',
    period: '2022 - 2023',
    description:
      'Mengembangkan website company profile dan landing page untuk berbagai client. Fokus pada responsive design dan performa.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
];

// ==================== PROJECTS DATA ====================
export const projects = [
  {
    id: 1,
    title: 'Greenify',
    category: 'Environmental Education',
    description:
      'Educational website about waste management featuring a waste calculator that converts trash into money based on type, and a digital marketplace for products made from recycled materials.',
    features: [
      'Waste calculator with price conversion',
      'Digital marketplace for recycled products',
      'Educational content about waste management',
      'Interactive waste classification system'
    ],
    image: '/images/projects/Greenify.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://greenify-rose.vercel.app/',
    githubUrl: 'https://github.com/Strioo/Greenify',
    featured: true,
    color: 'emerald', // For theme accent
  },
  {
    id: 2,
    title: 'Ruang Nusantara',
    category: 'Cultural Exploration',
    description:
      'Cultural exploration platform showcasing Indonesian heritage with categorized articles about various cultural aspects and a comprehensive gallery of Indonesian cultural treasures.',
    features: [
      'Categorized cultural articles',
      'Interactive cultural gallery',
      'Search and filter by culture category',
      'Responsive modern design'
    ],
    image: '/images/projects/RuangNusantara.png',
    techStack: ['SolidJS', 'TailwindCSS'],
    liveUrl: 'https://ruang-nusantara-ten.vercel.app/',
    githubUrl: 'https://github.com/Strioo/RuangNusantara',
    featured: true,
    color: 'orange',
  },
  {
    id: 3,
    title: 'Webdesa Baturaden',
    category: 'Smart Village Portal',
    description:
      'Comprehensive village portal for Baturaden featuring village statistics, UMKM directory with direct contact, AI-powered tourism recommendations, development transparency, real-time reporting system, and AI chatbot for village information.',
    features: [
      'Village statistics dashboard',
      'UMKM directory with direct WhatsApp contact',
      'AI-powered tourism filter and recommendations',
      'Development transparency tracking',
      'Real-time citizen reporting system',
      'AI chatbot for village inquiries',
      'Village profile and information'
    ],
    image: '/images/projects/Webdesa-baturaden.png',
    techStack: ['Next.js', 'TailwindCSS'],
    liveUrl: 'https://webdesa-fe.vercel.app/',
    githubUrl: 'https://github.com/Strioo/webdesa-baturaden',
    featured: true,
    color: 'blue',
  },
  {
    id: 4,
    title: 'Inxora',
    category: 'Software House',
    description:
      'Professional software house company website showcasing services, team expertise, portfolio projects, and client contact information. Modern design highlighting the company\'s capabilities and achievements.',
    features: [
      'Services showcase',
      'Team member profiles',
      'Portfolio gallery',
      'Contact form integration',
      'Modern responsive design'
    ],
    image: '/images/projects/Inxora.png',
    techStack: ['React', 'TailwindCSS'],
    liveUrl: 'https://inxora-fe.vercel.app/',
    githubUrl: 'https://github.com/Strioo/Inxora_fe',
    featured: false,
    color: 'purple',
  },
  {
    id: 5,
    title: 'DevAcademy',
    category: 'E-Learning Platform',
    description:
      'Video-based online course platform built with Laravel and Bootstrap. Features course management, video lessons, student progress tracking, and comprehensive learning management system.',
    features: [
      'Video-based course delivery',
      'Course management system',
      'Student progress tracking',
      'Admin dashboard',
      'User authentication and authorization'
    ],
    image: '/images/projects/DevAcademy.png',
    techStack: ['Laravel', 'Bootstrap'],
    liveUrl: null, // No live demo
    githubUrl: 'https://github.com/Strioo/DevAcademy-static',
    featured: false,
    color: 'indigo',
  },
];

// ==================== CONTACT & SOCIAL DATA ====================
export const contactData = {
  email: 'wahidsatrioaji29@gmail.com',
  phone: '+62 852 8246 7235',
  location: 'Purwokerto, Indonesia',
};

export const socialLinks = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/Strioo',
    icon: 'github',
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wahid-satrio-aji/',
    icon: 'linkedin',
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/dihawt0/',
    icon: 'instagram',
  },
];

// ==================== NAVIGATION DATA ====================
export const navLinks = [
  { id: 1, name: 'Home', href: '#hero' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Projects', href: '#projects' },
  { id: 4, name: 'Contact', href: '#contact' },
];

// ==================== TECH STACK / SKILLS ====================
export const techStack = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TailwindCSS', level: 95 },
  { name: 'TypeScript', level: 75 },
  { name: 'JavaScript', level: 90 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Git', level: 85 },
  { name: 'Figma', level: 70 },
];

// ==================== EDUCATION ====================
export const education = [
  {
    id: 1,
    institution: 'Telkom University Purwokerto',
    period: 'Sep 2023 - Present',
    description: 'Telkom University Purwokerto is a tertiary University managed by the Telkom Education Foundation',
  },
  {
    id: 2,
    institution: 'Telkom School Purwokerto',
    period: 'Jun 2020 - Jun 2023',
    description: 'Telkom School Purwokerto is a private vocational school founded, empowered and operated under the auspices of the Telkom Education Foundation.',
  },
];

// ==================== EXPERIENCE ====================
export const experience = [
  {
    id: 1,
    position: 'Internship',
    company: 'PT Nemolab Nusa Infomedia',
    period: 'Jun 2024 - Nov 2024',
    location: 'Baturaden, Central Java, Indonesia · On-site',
    description: 'Selama magang di PT Nemolab Nusa Infomedia, saya terlibat dalam pengembangan website menggunakan teknologi seperti Laravel dan Bootstrap. Saya juga berkontribusi dalam pembuatan artikel untuk website berbasis WordPress serta desain konten untuk media sosial perusahaan.',
    achievements: [
      'Gained hands-on experience in website development using Laravel and Bootstrap',
      'Contributed to content creation for WordPress-based websites',
      'Designed social media content for company marketing',
    ],
    isComingSoon: false,
  },
  {
    id: 2,
    position: 'Coming Soon',
    company: 'Future Opportunity',
    period: 'TBA',
    location: 'TBA',
    description: '',
    achievements: [],
    isComingSoon: true,
  },
];

// ==================== CERTIFICATES ====================
export const certificates = [
  {
    id: 1,
    name: 'Bootcamp Telkom Digiup Cyber Security',
    issuer: 'PT Telkom Indonesia',
    date: 'November 2024',
    description: 'Sertifikat kompetensi bidang cyber security, meliputi fundamental keamanan jaringan, simulasi serangan siber, serta penggunaan tools keamanan digital. Peserta program resmi dan lulus pelatihan bersertifikat nasional.',
    image: '/images/certificates/digiup.jpg',
  },
  {
    id: 2,
    name: 'Oracle Database Certification',
    issuer: 'Oracle',
    date: 'December 2024',
    description: 'Database management and SQL fundamentals certification from Oracle, covering database design, queries, and administration.',
    image: '/images/certificates/oracle.jpg',
  },
  {
    id: 3,
    name: 'UMK ITFEST Web Development Competition',
    issuer: 'Universitas Muria Kudus',
    date: 'November 2025',
    description: 'Participated in web development competition at UMK ITFEST in Kudus, showcasing technical skills and problem-solving abilities in web development.',
    image: '/images/certificates/umk-itfest.jpg',
  },
];
