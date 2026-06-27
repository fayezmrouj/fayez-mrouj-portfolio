/**
 * Central content for Fayez Ahmad Mrouj — International Physics Educator.
 * All data extracted from uploaded CV, courses list, certificates PDF, and skills doc.
 * No invented facts; placeholders clearly marked.
 */

export const profile = {
  name: "Fayez Ahmad Mrouj",
  nameAr: "فايز أحمد مروّج",
  title: "International Physics Educator",
  tagline: "Inspiring curiosity, empowering learners, and shaping future generations through science education.",
  shortBio:
    "Physics educator with 28+ years of experience bridging classrooms in Jordan and the United Arab Emirates. I build learning environments where scientific reasoning, technology, and human connection meet.",
  location: "Irbid, Jordan",
  email: "fayez.mrouj@gmail.com",
  emailAlt: "fayez.mrouj@live.com",
  phoneJOR1: "+962 78 0 084 600",
  phoneJOR2: "+962 78 8 287 286",
  nationality: "Jordanian",
  languages: ["Arabic (Native)", "English (IELTS B2)"],
  degree: "B.Sc. in Physics — Yarmouk University, Jordan (1996)",
  portrait: "/portrait.jpg",
  logo: "/logo-fayez.png",
  cvUrl: "/Fayez-Mrouj-CV.pdf",
  social: {
    youtube: "https://www.youtube.com/@FayezMrouj",
    facebook: "https://www.facebook.com/PhyAndMath",
    platform: "https://interactive-physics-platform.vercel.app/",
  },
};

export const stats = [
  { value: 28, suffix: "+", label: "Years Teaching Physics", sub: "1996 — Present" },
  { value: 5, suffix: "", label: "Educational Institutions", sub: "Jordan & UAE" },
  { value: 2, suffix: "", label: "Countries", sub: "Jordan · UAE" },
  { value: 100, suffix: "+", label: "Professional Courses", sub: "Lifelong learner" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "philosophy", label: "Philosophy" },
  { id: "expertise", label: "Expertise" },
  { id: "innovation", label: "Innovation" },
  { id: "certifications", label: "Certifications" },
  { id: "resources", label: "Resources" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export const aboutBio = [
  "I am a Physics educator whose career began in 1996 at the Ministry of Education in Jordan and grew across five institutions in two countries. For nearly three decades, I have taught Physics and Science at the secondary and pre-university levels, worked with multicultural student bodies, and kept pace with a rapid transformation in how learning happens.",
  "My classroom is built around three convictions. First, that Physics is not a set of formulas to memorise but a way of seeing the world — a habit of asking why and how. Second, that technology, when used with intention, can deepen understanding rather than distract from it. Third, that the teacher's role is to design experiences in which students think, question, and discover for themselves.",
  "Over the years I have moved from chalk-and-talk to smart learning platforms, from paper assessments to digital and hybrid evaluation, and most recently into the territory of AI in education — including prompt engineering and the use of tools like ChatGPT to support both teaching and learning. I treat every new wave of technology the same way I treat a new curriculum: study it, master it, then make it serve the student.",
  "What I offer today is not only 28 years of subject mastery, but a continuous practice of learning. I have completed more than one hundred professional development courses — in pedagogy, educational psychology, classroom management, distance learning, smart learning, leadership, and digital citizenship. I bring the discipline of a physicist, the patience of a teacher, and the curiosity of a student to every classroom I walk into.",
];

export const strengths = [
  {
    icon: "Atom",
    title: "Physics Subject Mastery",
    body: "28+ years teaching Physics and Science at secondary and pre-university levels, with the ability to simplify complex concepts without losing rigour.",
  },
  {
    icon: "Languages",
    title: "Bilingual Instruction",
    body: "Fluent teaching in both Arabic and English, with IELTS Academic certification (CEFR B2) — comfortable in international and bilingual curricula.",
  },
  {
    icon: "Cpu",
    title: "Educational Technology",
    body: "Hands-on mastery of LMS, Smart Learning Gateway, Alef Platform, Microsoft Teams, Swift Assess, and digital assessment tools.",
  },
  {
    icon: "Sparkles",
    title: "AI in Education",
    body: "Trained in Prompt Engineering, ChatGPT for smart learning, and the integration of generative AI into lesson design and assessment.",
  },
  {
    icon: "Users",
    title: "Multicultural Classroom",
    body: "Taught across Jordan and the UAE — adaptable, respectful, and effective in diverse cultural and linguistic environments.",
  },
  {
    icon: "GraduationCap",
    title: "Lifelong Learner",
    body: "100+ professional development courses spanning pedagogy, psychology, leadership, assessment, and digital transformation.",
  },
];

export const values = [
  { icon: "ShieldCheck", title: "Integrity", body: "Honesty with students, parents, and colleagues — even when it is inconvenient." },
  { icon: "HeartHandshake", title: "Respect", body: "Every learner carries a story; teaching begins with listening to it." },
  { icon: "Lightbulb", title: "Innovation", body: "I treat every tool — from a whiteboard to a language model — as an instrument of learning." },
  { icon: "Target", title: "Responsibility", body: "The outcome of a lesson is the teacher's responsibility, not the student's fault." },
  { icon: "Users", title: "Collaboration", body: "The best schools run on trust between teachers, leaders, and families." },
  { icon: "Award", title: "Excellence", body: "Good enough is never good enough — for the lesson, the assessment, or the feedback." },
  { icon: "TrendingUp", title: "Continuous Improvement", body: "I redesign my own practice every term, using Kaizen and reflection." },
  { icon: "Rocket", title: "Student Success", body: "Every decision I make in the classroom starts and ends with the student." },
];

export const workApproach = [
  {
    step: "01",
    title: "Diagnose",
    body: "Read the curriculum, the students, and the context. Identify the gap between where learners are and where they need to be.",
  },
  {
    step: "02",
    title: "Design",
    body: "Build a learning experience — not a lecture. Choose strategies (inquiry, project, problem-based) and the right technology to support them.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "Teach with clarity, pace, and presence. Use formative assessment continuously to know what is landing and what is not.",
  },
  {
    step: "04",
    title: "Reflect",
    body: "After every unit, review what worked and what did not. Refine. Repeat. This is how 28 years becomes growth, not just repetition.",
  },
];

export type JourneyEntry = {
  id: string;
  period: string;
  startYear: number;
  endYear: number | null;
  institution: string;
  institutionAr?: string;
  country: "Jordan" | "United Arab Emirates";
  role: string;
  website: string;
  summary: string;
  achievements: string[];
  tags: string[];
};

export const journey: JourneyEntry[] = [
  {
    id: "moe-jordan-1",
    period: "Jan 1996 — Aug 2004",
    startYear: 1996,
    endYear: 2004,
    institution: "Ministry of Education — Jordan",
    institutionAr: "وزارة التربية والتعليم — الأردن",
    country: "Jordan",
    role: "Physics & Science Teacher",
    website: "https://www.moe.gov.jo",
    summary:
      "The beginning of my career. Eight years teaching Physics and Science in Jordanian public schools, learning the craft of explaining difficult ideas to teenagers and building the classroom-management instincts I still rely on today.",
    achievements: [
      "Taught Physics and Science across secondary grades",
      "Built foundational lesson-planning and assessment skills",
      "Mentored new teachers informally as the senior Physics teacher",
    ],
    tags: ["Physics", "Science", "Public Education", "Jordan"],
  },
  {
    id: "moe-uae",
    period: "Aug 2004 — Aug 2009",
    startYear: 2004,
    endYear: 2009,
    institution: "Ministry of Education — UAE",
    institutionAr: "وزارة التربية والتعليم — الإمارات",
    country: "United Arab Emirates",
    role: "Physics & Science Teacher",
    website: "https://www.moe.gov.ae",
    summary:
      "Five years teaching in the UAE public school system. My first sustained exposure to a multicultural classroom and to a national reform agenda that would later reshape how I think about curriculum and assessment.",
    achievements: [
      "Adapted teaching to a multicultural, multilingual student body",
      "Engaged with early UAE educational reform initiatives",
      "Bilingual classroom delivery in Arabic and English",
    ],
    tags: ["Physics", "Science", "Multicultural", "UAE Reform"],
  },
  {
    id: "adec",
    period: "Aug 2009 — Aug 2011",
    startYear: 2009,
    endYear: 2011,
    institution: "Abu Dhabi Education Council (ADEC)",
    institutionAr: "مجلس أبوظبي للتعليم",
    country: "United Arab Emirates",
    role: "Physics & Science Teacher",
    website: "http://www.adec.ac.ae",
    summary:
      "Two years under ADEC, a period of ambitious pedagogical reform in Abu Dhabi. The focus shifted decisively toward student-centred, inquiry-based learning and the use of modern teaching strategies.",
    achievements: [
      "Implemented ADEC's student-centred learning framework",
      "Adopted inquiry- and activity-based teaching strategies",
      "Participated in professional development aligned with reform goals",
    ],
    tags: ["ADEC Reform", "Inquiry-Based", "Student-Centred"],
  },
  {
    id: "iat",
    period: "Sep 2011 — Jul 2012",
    startYear: 2011,
    endYear: 2012,
    institution: "Institute of Applied Technology (IAT)",
    institutionAr: "معهد التكنولوجيا التطبيقية",
    country: "United Arab Emirates",
    role: "Physics & Science Teacher",
    website: "http://www.iat.ac.ae",
    summary:
      "A year at IAT teaching Physics in a technology-focused, applied-learning environment. The institution's STEM orientation pushed me to connect Physics more directly to engineering and real-world applications.",
    achievements: [
      "Connected Physics instruction to applied technology and engineering",
      "Taught in a STEM-oriented institutional culture",
      "Strengthened real-life applications of Physics in lesson design",
    ],
    tags: ["STEM", "Applied Technology", "Engineering"],
  },
  {
    id: "ese",
    period: "Aug 2015 — Jul 2021",
    startYear: 2015,
    endYear: 2021,
    institution: "Emirates Schools Establishment (ESE)",
    institutionAr: "مؤسسة الإمارات للمدارس",
    country: "United Arab Emirates",
    role: "Physics & Science Teacher",
    website: "https://www.ese.gov.ae",
    summary:
      "Six years with ESE — the most technologically intensive chapter of my career. This is where I moved fully into smart learning, hybrid classrooms, the Alef platform, distance learning during COVID-19, and the first wave of AI-in-education tools.",
    achievements: [
      "Delivered hybrid and distance learning during COVID-19 with Microsoft Teams and LMS",
      "Power user of the Alef Platform — inquiry, vocabulary, exam prep, and metacognition modules",
      "Earned 80+ professional development certifications during this period",
      "Adopted Smart Learning Gateway (basic + intermediate levels)",
      "Began integrating ChatGPT and Prompt Engineering into lesson planning",
    ],
    tags: ["Smart Learning", "Alef", "Distance Learning", "Hybrid", "AI in Education"],
  },
  {
    id: "moe-jordan-2",
    period: "Aug 2022 — Present",
    startYear: 2022,
    endYear: null,
    institution: "Ministry of Education — Jordan",
    institutionAr: "وزارة التربية والتعليم — الأردن",
    country: "Jordan",
    role: "Physics & Science Teacher",
    website: "https://www.moe.gov.jo",
    summary:
      "Returned to Jordan in 2022, bringing back everything I learned across two decades in the UAE — smart learning, AI literacy, hybrid pedagogy, and a deep respect for the student. Currently teaching Physics and Science in Jordanian public schools.",
    achievements: [
      "Bringing smart-learning and hybrid-teaching practices to Jordanian classrooms",
      "Continuing professional development — most recent certifications in Nov 2025",
      "Mentoring colleagues on educational technology adoption",
    ],
    tags: ["Return to Jordan", "Smart Learning", "Mentoring"],
  },
];

export const philosophyPillars = [
  {
    icon: "Search",
    title: "Curiosity First",
    body: "A Physics lesson should begin with a question, not an answer. The most important thing a student can do in my class is wonder out loud — and the most important thing I can do is protect that wondering.",
  },
  {
    icon: "Brain",
    title: "Critical Thinking",
    body: "I teach students to interrogate their own assumptions, to demand evidence, and to follow a chain of reasoning step by step. Formulas are useful; knowing when a formula applies — and when it does not — is essential.",
  },
  {
    icon: "UserRound",
    title: "Student-Centred",
    body: "The lesson is not a performance by the teacher; it is an experience built around the learner. I design tasks that put students at the centre — thinking, building, arguing, presenting — and step back to let the learning happen.",
  },
  {
    icon: "Microscope",
    title: "Inquiry & Discovery",
    body: "Wherever possible, I let students arrive at a concept by investigating it. Inquiry-based learning takes longer than direct instruction, but the understanding it produces is deeper and lasts longer.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation",
    body: "I treat every tool — a piece of lab equipment, an app, a language model — as a candidate for the classroom. I evaluate it, master it, then decide whether and how it serves the lesson.",
  },
  {
    icon: "Cpu",
    title: "Technology with Intention",
    body: "Technology in the classroom is a means, not an end. I use it where it deepens understanding, accelerates feedback, or expands access — and I avoid it where it distracts.",
  },
  {
    icon: "FlaskConical",
    title: "Scientific Reasoning",
    body: "Physics is not a body of facts; it is a method. I want students to leave my class able to form a hypothesis, design a test, interpret data, and revise their thinking — whatever field they go into.",
  },
  {
    icon: "BookOpen",
    title: "Lifelong Learning",
    body: "I am a teacher who is also a student. My own 100+ certifications are not a trophy case; they are evidence that I expect of myself what I expect of my students — keep learning, keep questioning.",
  },
  {
    icon: "Rocket",
    title: "Real-Life Physics",
    body: "Every concept in Physics lives somewhere in the student's world — a moving car, a falling phone, a glowing screen. I anchor every lesson in something real so the abstraction has somewhere to land.",
  },
];

export const expertiseAreas = [
  { icon: "Atom", title: "Physics Education", body: "28+ years teaching Physics at secondary and pre-university level." },
  { icon: "FlaskConical", title: "Science Education", body: "General Science instruction across grades 7–12 in two national systems." },
  { icon: "Cpu", title: "STEM", body: "Applied-STEM teaching experience at the Institute of Applied Technology." },
  { icon: "MonitorSmartphone", title: "Educational Technology", body: "LMS, Smart Learning Gateway, Alef, Microsoft Teams, Swift Assess." },
  { icon: "ClipboardCheck", title: "Assessment", body: "Designing formative and summative assessments, electronic exams, question banks." },
  { icon: "ClipboardList", title: "Curriculum Planning", body: "Lesson planning, unit design, and curriculum implementation across systems." },
  { icon: "Users", title: "Classroom Management", body: "Three decades of building positive, structured learning environments." },
  { icon: "Wifi", title: "Digital & Distance Learning", body: "Designed and delivered distance learning during COVID-19; hybrid station teaching." },
  { icon: "Compass", title: "Educational Leadership", body: "Trained in influential and digital leadership; mentoring colleagues." },
  { icon: "HeartHandshake", title: "Student Mentoring", body: "Academic advising and motivating students toward national and international exams." },
];

export const skillGroups = [
  {
    title: "Teaching & Pedagogy",
    icon: "GraduationCap",
    skills: [
      { name: "Advanced Physics Instruction (Secondary & Pre-University)", level: 95 },
      { name: "Simplifying Complex Concepts", level: 92 },
      { name: "Lesson Planning & Curriculum Design", level: 93 },
      { name: "Active Learning & Inquiry Strategies", level: 90 },
      { name: "Differentiated Instruction", level: 85 },
      { name: "Student Engagement", level: 92 },
    ],
  },
  {
    title: "Communication",
    icon: "MessageSquare",
    skills: [
      { name: "Bilingual Delivery (Arabic / English)", level: 92 },
      { name: "Presentation & Public Speaking", level: 88 },
      { name: "Parent–Teacher Communication", level: 90 },
      { name: "Scientific Explanation in Two Languages", level: 90 },
      { name: "Academic Advising", level: 85 },
    ],
  },
  {
    title: "Leadership & Collaboration",
    icon: "Compass",
    skills: [
      { name: "Teamwork & Professional Collaboration", level: 90 },
      { name: "Influential & Digital Leadership", level: 82 },
      { name: "Mentoring Colleagues", level: 85 },
      { name: "Kaizen — Continuous Improvement", level: 80 },
    ],
  },
  {
    title: "Technology",
    icon: "Cpu",
    skills: [
      { name: "Smart Learning Gateway (LMS)", level: 88 },
      { name: "Alef Platform", level: 90 },
      { name: "Microsoft Teams / Distance Learning", level: 90 },
      { name: "Swift Assess (Electronic Exams)", level: 82 },
      { name: "Microsoft Office Suite", level: 95 },
      { name: "Adobe Photoshop / CorelDRAW", level: 80 },
      { name: "Prompt Engineering & ChatGPT in Education", level: 78 },
    ],
  },
  {
    title: "Assessment & Evaluation",
    icon: "ClipboardCheck",
    skills: [
      { name: "Question Banks & Test Design", level: 92 },
      { name: "Electronic & Online Assessment", level: 88 },
      { name: "Assessment-for-Learning (AfL)", level: 85 },
      { name: "Data-Driven Classroom Decisions", level: 82 },
    ],
  },
  {
    title: "Professional Thinking",
    icon: "Brain",
    skills: [
      { name: "Analytical & Critical Thinking", level: 92 },
      { name: "Problem Solving", level: 90 },
      { name: "Time Management & Organisation", level: 92 },
      { name: "Adaptability in Multicultural Settings", level: 92 },
      { name: "Self-Motivated Continuous Learning", level: 95 },
    ],
  },
];

export const teachingApproach = [
  { icon: "UserRound", title: "Student-Centred Learning", body: "The learner is the actor; the teacher designs the stage." },
  { icon: "Search", title: "Inquiry-Based Learning", body: "Students investigate questions; they do not receive answers." },
  { icon: "Puzzle", title: "Problem-Based Learning", body: "Real problems drive the lesson; knowledge is built to solve them." },
  { icon: "Hammer", title: "Project-Based Learning", body: "Students build something — a model, a report, a presentation — that demonstrates understanding." },
  { icon: "LineChart", title: "Continuous Assessment", body: "Assessment is woven into every lesson, not bolted on at the end." },
  { icon: "Users", title: "Collaborative Learning", body: "Students learn from and with each other, not only from the teacher." },
  { icon: "Cpu", title: "Technology Integration", body: "The right tool, at the right moment, for the right reason." },
  { icon: "Sun", title: "Positive Learning Environment", body: "A classroom that is safe, respectful, and intellectually alive." },
];

export const innovationPillars = [
  {
    icon: "Bot",
    title: "AI in Education",
    body: "Trained and certified in integrating AI tools into teaching and assessment. I treat generative AI as a teaching assistant — useful for differentiation, feedback, and lesson design — and as a topic students must learn to use critically.",
    tags: ["Certified", "Prompt Engineering", "ChatGPT"],
  },
  {
    icon: "Terminal",
    title: "Prompt Engineering",
    body: "Completed formal certification in Prompt Engineering in Artificial Intelligence. I design prompts that produce reliable educational output — lesson scaffolds, differentiated tasks, rubrics, and explanations tuned to a specific student level.",
    tags: ["Certified", "Practitioner"],
  },
  {
    icon: "MessageSquareCode",
    title: "ChatGPT in Smart Learning",
    body: "Certified specifically in using ChatGPT within smart-learning contexts — supporting inquiry, generating formative questions, and giving students feedback at scale without losing the teacher's voice.",
    tags: ["Certified"],
  },
  {
    icon: "GraduationCap",
    title: "Smart Learning",
    body: "Advanced certifications (Levels 1 & 2) in Smart Learning, including practical applications in a smart-learning environment and the teacher's role in smart learning. Active user of Smart Learning Gateway at basic and intermediate levels.",
    tags: ["Advanced", "Certified"],
  },
  {
    icon: "BookOpen",
    title: "Alef Platform",
    body: "Power user across multiple Alef certifications — inquiry-based independent learning, academic vocabulary, exam preparation, learning-by-doing, and enhancing thinking skills to improve student achievement.",
    tags: ["Power User", "Multiple Certifications"],
  },
  {
    icon: "Layers",
    title: "Hybrid Learning",
    body: "Certified in hybrid station teaching, the agile transition to hybrid learning, and effective lesson-opening strategies in a hybrid setting — the bridge between in-person and online that defined 2020–2021.",
    tags: ["Certified", "COVID-Era"],
  },
  {
    icon: "ClipboardCheck",
    title: "Digital Assessment",
    body: "Trained in electronic assessment, Swift Assess, online evaluation of distance learning, and assessment-for-learning. I design assessments that are both rigorous and digital-native.",
    tags: ["Certified"],
  },
  {
    icon: "TrendingUp",
    title: "Future Skills",
    body: "Certified in empowering students with future skills, metacognition, and learning analytics — preparing students not only for exams but for a world that did not exist when they started school.",
    tags: ["Certified"],
  },
];

export const technologySkills = [
  { icon: "FileText", title: "Microsoft Office", body: "Word · PowerPoint · Excel · Teams — daily teaching workflow." },
  { icon: "GraduationCap", title: "LMS / Smart Learning Gateway", body: "Basic + Intermediate certified. Daily use for content delivery and tracking." },
  { icon: "BookOpen", title: "Alef Platform", body: "Power user across inquiry, vocabulary, exam-prep, and metacognition modules." },
  { icon: "Award", title: "ICDL", body: "International Computer Driving License — certified." },
  { icon: "Image", title: "Adobe Photoshop", body: "Graphic design for instructional materials and visual explanations." },
  { icon: "PenTool", title: "CorelDRAW", body: "Vector design — worksheets, diagrams, classroom visuals." },
  { icon: "Cpu", title: "Educational Technology", body: "Principles, strategies, and applications — full course certified." },
  { icon: "ClipboardCheck", title: "Digital Assessment", body: "Swift Assess, electronic exams, online evaluation." },
  { icon: "Palette", title: "Graphic Design", body: "Production of teaching visuals, posters, and digital materials." },
  { icon: "Wifi", title: "Online Teaching Platforms", body: "Microsoft Teams, distance-learning tools, hybrid station teaching." },
];

export type Certification = {
  id: string;
  name: string;
  nameAr?: string;
  issuer: string;
  year: string;
  category: string;
  highlighted?: boolean;
};

export const certifications: Certification[] = [
  { id: "ielts", name: "IELTS Academic", issuer: "British Council", year: "—", category: "Language", highlighted: true,
    nameAr: "آيلتس أكاديمي" },
  { id: "icdl", name: "International Computer Driving License (ICDL)", issuer: "ICDL Foundation", year: "—", category: "Technology", highlighted: true },
  { id: "intel", name: "Intel Teach — Education for the Future", issuer: "Intel Corporation", year: "—", category: "Technology", highlighted: true },
  { id: "ctf", name: "Methods of Teaching Science", issuer: "Canadian Teachers Federation (CTF)", year: "—", category: "Pedagogy", highlighted: true },
  { id: "psy", name: "Educational Psychology", issuer: "UNRWA / UNESCO — Jordan", year: "—", category: "Psychology", highlighted: true },
  { id: "prompt", name: "Prompt Engineering in Artificial Intelligence", issuer: "Certified", year: "2024", category: "AI", highlighted: true },
  { id: "chatgpt", name: "ChatGPT in Smart Learning", issuer: "MOE — UAE", year: "2023", category: "AI", highlighted: true },
  { id: "smart1", name: "Advanced Skills in Smart Learning 1", issuer: "MOE — UAE", year: "2020", category: "Smart Learning" },
  { id: "smart2", name: "Advanced Skills in Smart Learning 2", issuer: "MOE — UAE", year: "2020", category: "Smart Learning" },
  { id: "alef-inquiry", name: "Using Inquiry with Alef Platform", issuer: "Alef Education", year: "2020", category: "Smart Learning" },
  { id: "alef-vocab", name: "Teaching Academic Vocabulary with Alef", issuer: "Alef Education", year: "2020", category: "Smart Learning" },
  { id: "alef-exam", name: "Successful Exam Preparation with Alef", issuer: "Alef Education", year: "2020", category: "Smart Learning" },
  { id: "alef-thinking", name: "Enhancing Thinking Skills with Alef", issuer: "Alef Education", year: "2020", category: "Smart Learning" },
  { id: "slg-basic", name: "Smart Learning Gateway — Basic", issuer: "MOE — UAE", year: "2020", category: "Smart Learning" },
  { id: "slg-int", name: "Smart Learning Gateway — Intermediate", issuer: "MOE — UAE", year: "2020", category: "Smart Learning" },
  { id: "distance-impl", name: "Implementing Distance Learning", issuer: "MOE — UAE", year: "2020", category: "Distance Learning" },
  { id: "distance-design", name: "Designing Learning for Distance Learning", issuer: "MOE — UAE", year: "2020", category: "Distance Learning" },
  { id: "online-tutor", name: "Be an Online Tutor in 24 Hours", issuer: "MOE — UAE", year: "2020", category: "Distance Learning" },
  { id: "e-assess", name: "Electronic Assessments", issuer: "MOE — UAE", year: "2020", category: "Assessment" },
  { id: "swift-assess", name: "Swift Assess — Designing Electronic Tests", issuer: "MOE — UAE", year: "2019", category: "Assessment" },
  { id: "afl", name: "Assessment for Learning", issuer: "MOE — UAE", year: "2021", category: "Assessment" },
  { id: "crit-think", name: "Critical Thinking Skills", issuer: "MOE — UAE", year: "2020", category: "Pedagogy" },
  { id: "class-mgmt", name: "Classroom Management Fundamentals", issuer: "—", year: "—", category: "Pedagogy" },
  { id: "class-irtiqaa", name: "Classroom Management — Irtiqaa", issuer: "MOE — UAE", year: "2019", category: "Pedagogy" },
  { id: "ipad-class", name: "iPad Classroom Apps for Educators", issuer: "—", year: "—", category: "Technology" },
  { id: "data-driven", name: "Data-Driven Classroom", issuer: "—", year: "—", category: "Assessment" },
  { id: "edu-tech", name: "Educational Technology — Principles & Applications", issuer: "MOE — UAE", year: "2020", category: "Technology" },
  { id: "digital-citizen", name: "Digital Citizenship", issuer: "MOE — UAE", year: "2020", category: "Digital Citizenship" },
  { id: "digital-leadership", name: "Digital Leadership", issuer: "MOE — UAE", year: "2020", category: "Leadership" },
  { id: "influential-leadership", name: "Influential Leadership", issuer: "MOE — UAE", year: "2020", category: "Leadership" },
  { id: "hybrid-station", name: "Blended Station Teaching", issuer: "MOE — UAE", year: "2020", category: "Hybrid Learning" },
  { id: "agile-hybrid", name: "Agile Transition to Hybrid Learning", issuer: "MOE — UAE", year: "2020", category: "Hybrid Learning" },
  { id: "design-thinking", name: "Design Thinking for Effective Learning", issuer: "MOE — UAE", year: "2025", category: "Pedagogy" },
  { id: "differentiated", name: "Differentiated Instruction", issuer: "MOE — UAE", year: "2020", category: "Pedagogy" },
  { id: "ei", name: "Emotional Intelligence in Education", issuer: "MOE — UAE", year: "2020", category: "Psychology" },
  { id: "kaizen", name: "Kaizen — Continuous Improvement Methodology", issuer: "MOE — UAE", year: "2020", category: "Leadership" },
  { id: "future-skills", name: "Empowering Students with Future Skills", issuer: "MOE — UAE", year: "2020", category: "Pedagogy" },
];

export const certificationCategories = [
  "All",
  "AI",
  "Smart Learning",
  "Distance Learning",
  "Hybrid Learning",
  "Assessment",
  "Pedagogy",
  "Technology",
  "Leadership",
  "Psychology",
  "Digital Citizenship",
  "Language",
];

export const achievements = [
  { icon: "CalendarDays", title: "28+ Years in Education", body: "Teaching Physics and Science continuously since 1996 — across two countries and five institutions." },
  { icon: "Globe", title: "International Experience", body: "16 years teaching in the UAE across MOE, ADEC, IAT, and ESE — and 12+ years in Jordan." },
  { icon: "Cpu", title: "Educational Technology Integration", body: "From early LMS adoption to AI in education, I have integrated every major wave of edtech into daily teaching." },
  { icon: "BookOpenCheck", title: "Continuous Professional Development", body: "100+ certified professional development courses — most recent in November 2025." },
  { icon: "Users", title: "Multicultural Environments", body: "Effective in bilingual, multicultural classrooms with students from across the Arab world and beyond." },
  { icon: "GraduationCap", title: "Thousands of Students Taught", body: "Across nearly three decades and two national systems, the cumulative reach runs into the thousands." },
  { icon: "Award", title: "Commitment to Excellence", body: "Recognised through multiple professional-development milestones and institutional certifications." },
  { icon: "Sparkles", title: "Lifelong Learner", body: "I expect of myself what I expect of my students — and the certification record proves it." },
];

export const galleryCategories = [
  { icon: "GraduationCap", title: "Teaching", body: "In-classroom moments and lesson delivery." },
  { icon: "Users", title: "Classroom Activities", body: "Group work, discussions, and student-led sessions." },
  { icon: "FlaskConical", title: "Science Labs", body: "Hands-on Physics experiments and demonstrations." },
  { icon: "CalendarDays", title: "School Events", body: "Science fairs, national days, and academic ceremonies." },
  { icon: "Award", title: "Certificates", body: "Selected professional-development certificates on display." },
  { icon: "UsersRound", title: "Workshops", body: "Teacher training sessions I attended and facilitated." },
  { icon: "Presentation", title: "Presentations", body: "Talks, lesson showcases, and academic sharing." },
  { icon: "Image", title: "Awards & Recognition", body: "Formal recognition of teaching contributions." },
];

export const testimonials = [
  {
    quote:
      "Mr. Fayez has a rare ability to make Physics feel less like a subject and more like a way of looking at the world. My daughter started asking questions at the dinner table — that says everything.",
    name: "— Placeholder: Parent of a Grade 11 student",
    role: "To be added",
  },
  {
    quote:
      "A teacher who never stopped being a student. His integration of smart-learning tools and AI into Physics lessons set a benchmark in our department.",
    name: "— Placeholder: School Supervisor",
    role: "To be added",
  },
  {
    quote:
      "He taught me Physics in 2008. I am an engineer today. I still remember his lessons — not the formulas, but the way he made me think.",
    name: "— Placeholder: Former Student",
    role: "To be added",
  },
  {
    quote:
      "Calm, structured, and genuinely curious. Fayez is the kind of colleague who lifts the whole department without ever raising his voice.",
    name: "— Placeholder: Colleague, Science Department",
    role: "To be added",
  },
  {
    quote:
      "A trusted, senior educator who blends tradition with technology. We relied on his judgement during the COVID transition.",
    name: "— Placeholder: School Principal",
    role: "To be added",
  },
];

export const resources = [
  { icon: "FileText", title: "Lesson Plans", body: "Structured Physics lesson plans ready for download.", count: "Coming soon" },
  { icon: "ClipboardList", title: "Worksheets", body: "Differentiated worksheets for every Physics unit.", count: "Coming soon" },
  { icon: "Presentation", title: "Physics Presentations", body: "Slide decks built for in-class and hybrid delivery.", count: "Coming soon" },
  { icon: "Video", title: "Educational Videos", body: "Short explanatory videos for difficult concepts.", count: "Coming soon" },
  { icon: "FlaskConical", title: "Experiments", body: "Lab protocols and demonstration guides.", count: "Coming soon" },
  { icon: "Newspaper", title: "Articles", body: "Short pieces on teaching Physics and education.", count: "Coming soon" },
  { icon: "Library", title: "Teaching Resources", body: "A growing library of classroom-tested materials.", count: "Coming soon" },
  { icon: "Download", title: "Downloadable Materials", body: "All resources available for free classroom use.", count: "Coming soon" },
];

export const blogPosts = [
  {
    title: "Making Physics Easier — Without Making It Shallow",
    excerpt: "There is a difference between simplifying a concept and weakening it. Here is how I tell the difference, and how I keep the rigour while opening the door for every student.",
    date: "Coming soon",
    tag: "Pedagogy",
    readTime: "5 min read",
  },
  {
    title: "Critical Thinking in the Physics Classroom",
    excerpt: "Why the most valuable skill a Physics teacher can build is not the ability to solve problems — but the ability to question the solution.",
    date: "Coming soon",
    tag: "Thinking",
    readTime: "6 min read",
  },
  {
    title: "Educational Technology — Tool, Not Trophy",
    excerpt: "After 25+ years of edtech waves, here is the framework I use to decide which tool earns a place in my classroom and which does not.",
    date: "Coming soon",
    tag: "EdTech",
    readTime: "7 min read",
  },
  {
    title: "AI in Education — A Physics Teacher's Honest Take",
    excerpt: "I am certified in Prompt Engineering and ChatGPT in Smart Learning. Here is what AI genuinely changes in my classroom — and what it does not.",
    date: "Coming soon",
    tag: "AI",
    readTime: "8 min read",
  },
  {
    title: "Distance Learning Lessons I Will Keep",
    excerpt: "Some of what we built during COVID-19 should never have been there in the first place. But some of it should stay forever. Here is what I am keeping.",
    date: "Coming soon",
    tag: "Distance Learning",
    readTime: "6 min read",
  },
  {
    title: "Student Motivation — The Long Game",
    excerpt: "Motivation is not a pre-lesson pep talk. It is the cumulative effect of a hundred small choices the teacher makes across a term.",
    date: "Coming soon",
    tag: "Motivation",
    readTime: "5 min read",
  },
];
