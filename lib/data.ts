import { Code2, Briefcase, Stethoscope, Palette, Wrench, Zap } from 'lucide-react'

export const programsData = {

  Programming: {
    icon: Code2,
    description: 'Master in-demand programming languages and frameworks',

    miniCourses: [
      { id: 1001, name: 'Python Basics Bootcamp', price: 6999, duration: '4 weeks', skills: ['Variables', 'Loops', 'Functions'] },
      { id: 1002, name: 'Web Development Starter', price: 7999, duration: '4 weeks', skills: ['HTML', 'CSS', 'Git'] },
      { id: 1003, name: 'Intro to Data Analytics', price: 9999, duration: '5 weeks', skills: ['Excel', 'Charts', 'Data Cleaning'] },
      { id: 1004, name: 'Java Fundamentals', price: 6999, duration: '4 weeks', skills: ['OOP', 'Collections'] }
    ],

    courses: [
      { id: 101, name: 'Data Analytics', rating: 4.9, students: 1240, price: 24999, learningPoints: ['EDA','Visualization','ML Basics'], certificateImage: '/certs/data-analytics-cert.png', tools: ['Python','PowerBI'], syllabus: [], career: { roles: ['Data Analyst'], salary: '₹6-12 LPA' }, reviews: [] },

      { id: 102, name: 'Python with Power BI', rating: 4.9, students: 2100, price: 28999, learningPoints: ['Analytics','Dashboards'], certificateImage: '/certs/powerbi-python-cert.png', tools: ['Python'], syllabus: [], career: { roles: ['BI Developer'], salary: '₹7-14 LPA' }, reviews: [] },

      { id: 103, name: 'App Development', rating: 4.8, students: 3500, price: 29999, learningPoints: ['Flutter','Backend'], certificateImage: '/certs/app-dev-cert.png', tools: ['Flutter'], syllabus: [], career: { roles: ['App Developer'], salary: '₹8-16 LPA' }, reviews: [] },

      { id: 104, name: 'Cloud Computing', rating: 4.8, students: 1800, price: 29999, learningPoints: ['AWS','Containers'], certificateImage: '/certs/cloud-cert.png', tools: ['AWS'], syllabus: [], career: { roles: ['Cloud Engineer'], salary: '₹10-22 LPA' }, reviews: [] },

      { id: 105, name: 'Cyber Security', rating: 4.9, students: 1500, price: 9999, learningPoints: ['Ethical Hacking','Security'], certificateImage: '/certs/cyber-security-cert.png', tools: ['Kali Linux'], syllabus: [], career: { roles: ['Security Analyst'], salary: '₹9-18 LPA' }, reviews: [] },

      { id: 106, name: 'MERN Stack', rating: 4.9, students: 5600, price: 28999, learningPoints: ['Mongo','React'], certificateImage: '/certs/mern-cert.png', tools: ['React'], syllabus: [], career: { roles: ['Full Stack Developer'], salary: '₹6-15 LPA' }, reviews: [] },

      { id: 107, name: 'Python Development', rating: 4.8, students: 4200, price: 26999, learningPoints: ['OOP','APIs'], certificateImage: '/certs/python-dev-cert.png', tools: ['Python'], syllabus: [], career: { roles: ['Python Developer'], salary: '₹5-12 LPA' }, reviews: [] },

      { id: 108, name: 'Java Programming', rating: 4.7, students: 3800, price: 27999, learningPoints: ['Spring','Multithreading'], certificateImage: '/certs/java-cert.png', tools: ['Java'], syllabus: [], career: { roles: ['Java Developer'], salary: '₹5-14 LPA' }, reviews: [] },

      { id: 109, name: 'C & C++ Programming', rating: 4.6, students: 2900, price: 23999, learningPoints: ['Pointers','STL'], certificateImage: '/certs/cpp-cert.png', tools: ['C++'], syllabus: [], career: { roles: ['System Engineer'], salary: '₹4-10 LPA' }, reviews: [] },

      { id: 110, name: 'DevOps', rating: 4.9, students: 1900, price: 29999, learningPoints: ['Docker','CI/CD'], certificateImage: '/certs/devops-cert.png', tools: ['Docker'], syllabus: [], career: { roles: ['DevOps Engineer'], salary: '₹10-24 LPA' }, reviews: [] },

      { id: 111, name: 'Full Stack Development', rating: 4.8, students: 6000, price: 29999, learningPoints: ['Frontend','Backend'], certificateImage: '/certs/fullstack-gen-cert.png', tools: ['React'], syllabus: [], career: { roles: ['Full Stack Developer'], salary: '₹6-16 LPA' }, reviews: [] },

      { id: 112, name: 'Data Science', rating: 5.0, students: 2500, price: 29999, learningPoints: ['ML','Deployment'], certificateImage: '/certs/ai-ml-cert.png', tools: ['Python'], syllabus: [], career: { roles: ['Data Scientist'], salary: '₹12-28 LPA' }, reviews: [] }
    ]
  },

  Business: {
    icon: Briefcase,
    description: 'Business & career skills',

    miniCourses: [
      { id: 2001, name: 'Excel Essentials', price: 5999, duration: '3 weeks', skills: ['Formulas','Charts'] },
      { id: 2002, name: 'Marketing Starter', price: 7999, duration: '4 weeks', skills: ['SEO','Social Media'] }
    ],

    courses: [
      { id: 113, name: 'Excel with AI', rating: 4.8, students: 4500, price: 18999, learningPoints: ['Automation'], certificateImage: '/certs/excel-ai-cert.png', tools: ['Excel'], syllabus: [], career: { roles: ['Analyst'], salary: '₹4-9 LPA' }, reviews: [] },

      { id: 114, name: 'Digital Marketing', rating: 4.9, students: 5800, price: 22999, learningPoints: ['SEO','Ads'], certificateImage: '/certs/digital-marketing-cert.png', tools: ['Google Ads'], syllabus: [], career: { roles: ['Digital Marketer'], salary: '₹4-10 LPA' }, reviews: [] },

      { id: 115, name: 'Finance', rating: 4.8, students: 2200, price: 27999, learningPoints: ['Modeling'], certificateImage: '/certs/finance-cert.png', tools: ['Excel'], syllabus: [], career: { roles: ['Financial Analyst'], salary: '₹5-12 LPA' }, reviews: [] },

      { id: 116, name: 'Business Core', rating: 4.7, students: 1500, price: 24999, learningPoints: ['Strategy'], certificateImage: '/certs/business-mgmt-cert.png', tools: [], syllabus: [], career: { roles: ['Manager'], salary: '₹8-18 LPA' }, reviews: [] },

      { id: 117, name: 'Marketing & Sales', rating: 4.8, students: 3100, price: 23999, learningPoints: ['CRM'], certificateImage: '/certs/sales-marketing-cert.png', tools: [], syllabus: [], career: { roles: ['Sales Manager'], salary: '₹6-15 LPA' }, reviews: [] }
    ]
  },

  Design: {
    icon: Palette,
    description: 'Creative design skills',

    miniCourses: [
      { id: 3001, name: 'Figma Quick Start', price: 5999, duration: '3 weeks', skills: ['Layouts','Components'] },
      { id: 3002, name: 'AI Design Tools Intro', price: 7999, duration: '4 weeks', skills: ['Prompt Design','AI Art'] }
    ],

    courses: [
      { id: 118, name: 'UI / UX Design', rating: 4.9, students: 6200, price: 27999, learningPoints: ['Wireframes'], certificateImage: '/certs/ui-ux-cert.png', tools: ['Figma'], syllabus: [], career: { roles: ['UI Designer'], salary: '₹6-18 LPA' }, reviews: [] },

      { id: 125, name: 'UI/UX with AI Tools', rating: 4.9, students: 1800, price: 29999, learningPoints: ['AI UI Workflows'], certificateImage: '/certs/ui-ai-cert.png', tools: ['Figma AI'], syllabus: [], career: { roles: ['AI Designer'], salary: '₹8-20 LPA' }, reviews: [] }
    ]
  },

  Medical: {
    icon: Stethoscope,
    description: 'Healthcare certifications',

    miniCourses: [
      { id: 4001, name: 'Medical Terminology Basics', price: 5999, duration: '3 weeks', skills: ['Anatomy Terms'] }
    ],

    courses: [
      { id: 119, name: 'Medical Coding', rating: 4.8, students: 2100, price: 21999, learningPoints: ['ICD'], certificateImage: '/certs/medical-coding-cert.png', tools: [], syllabus: [], career: { roles: ['Medical Coder'], salary: '₹3-8 LPA' }, reviews: [] },

      { id: 120, name: 'Psychology', rating: 4.9, students: 1800, price: 20999, learningPoints: ['Counseling'], certificateImage: '/certs/psychology-cert.png', tools: [], syllabus: [], career: { roles: ['Counselor'], salary: '₹4-10 LPA' }, reviews: [] }
    ]
  },

  Mechanics: {
    icon: Wrench,
    description: 'Mechanical training',

    miniCourses: [
      { id: 5001, name: 'AutoCAD Basics', price: 6999, duration: '4 weeks', skills: ['Drafting'] }
    ],

    courses: [
      { id: 19, name: 'AutoCAD Design', rating: 4.8, students: 3420, price: 23999, learningPoints: ['2D Drafting'], certificateImage: '/certs/autocad-cert.png', tools: ['AutoCAD'], syllabus: [], career: { roles: [], salary: '' }, reviews: [] },

      { id: 20, name: 'Mechanical Basics', rating: 4.7, students: 2890, price: 24999, learningPoints: ['Thermodynamics'], certificateImage: '/certs/mech-eng-cert.png', tools: [], syllabus: [], career: { roles: [], salary: '' }, reviews: [] },

      { id: 21, name: 'CAD Modeling Pro', rating: 4.9, students: 4120, price: 28999, learningPoints: ['Simulation'], certificateImage: '/certs/cad-cert.png', tools: ['SolidWorks'], syllabus: [], career: { roles: [], salary: '' }, reviews: [] }
    ]
  },

  Freelancing: {
    icon: Zap,
    description: 'Freelance skills',

    miniCourses: [
      { id: 6001, name: 'Freelance Starter Kit', price: 5999, duration: '3 weeks', skills: ['Client Outreach','Portfolio'] }
    ],

    courses: [
      { id: 22, name: 'Digital Marketing Freelance', rating: 4.9, students: 6420, price: 19999, learningPoints: ['Branding'], certificateImage: '/certs/dm-freelance-cert.png', tools: [], syllabus: [], career: { roles: [], salary: '' }, reviews: [] },

      { id: 23, name: 'Finance Consulting', rating: 4.8, students: 3890, price: 28999, learningPoints: ['Advisory'], certificateImage: '/certs/fin-consult-cert.png', tools: [], syllabus: [], career: { roles: [], salary: '' }, reviews: [] },

      { id: 24, name: 'UI/UX Freelancing', rating: 4.9, students: 5340, price: 24999, learningPoints: ['Portfolio'], certificateImage: '/certs/ui-freelance-cert.png', tools: [], syllabus: [], career: { roles: [], salary: '' }, reviews: [] }
    ]
  }
}
