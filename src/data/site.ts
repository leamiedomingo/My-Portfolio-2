export const site = {
  name: "Leamie Sulapas Domingo",
  location: "Butuan City, Philippines",
  tagline: "Student | Web Developer | Research Analyst",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "/avatar.jpg",
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "" as string | undefined,
  email: "leamie.domingo@carsu.edu.ph",
  calendlyUrl: "leamie-domingo-carsu",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://www.linkedin.com/in/leamie-sulapas-domingo-324041413/",
  github: "https://github.com/leamiedomingo",
  instagram: "https://www.instagram.com/just_lea432?igsh=aGc0MTQ4a201amJp",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] = [];

export const about = `I am a BS Information Systems student at Caraga State University with hands-on experience in database development, web development, research, and system analysis. My technical work includes building a Corporate Payroll and Tax Compliance System with privacy-compliant database design under RA 10173, and a personal portfolio website deployed via Vercel.

I also co-authored a research manuscript on AI Governance Readiness and ChatGPT usage practices in higher education using the UTAUT framework. Beyond academics, I have served as a Documentation Officer for the LGU and participated in youth leadership programs through the Sangguniang Kabataan.

I am continuously growing my skills across frontend development, database management, and research — driven by a genuine interest in building systems that are efficient, compliant, and meaningful.`; 

export const experience = [
  { role: "Database Developer", company: "CCIS-CSU", year: "2026" },
  { role: "Research Analyst", company: "CCIS-CSU", year: "2026" },
  { role: "Web Developer", company: "CCIS-CSU", year: "2025-2026" },
  { role: "BS Information System", company: "Caraga State University", year: "2023" },
  {
    role: "Seminar Participant",
    company: "Sangguniang Kabataan",
    year: "2024",
  },
  { role: "Research Assistant", company: "CCIS-CSU", year: "2026" },
  { role: "System Analyst", company: "BSIS-CSU", year: "2026" },
  { role: "Documentation Officer", company: "LGU", year: "2022-2024" },
  { role: "Hello World", company: "Started my coding journey", year: "2021" },
];

export const techStack = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  modeling: [
    "3D Modeling",
    "Blender",
    "Animation",
    "Texture Editing",
    "Unity Game Engine",
    "C#",
  ],
};

export const projects = [
  { name: "Corporate Payroll & Tax Compliance System", description: "Full-stack database system", url: "https://payroll-tax-system.leamiedomingo.vercel.app", domain: "payroll-tax-system.leamiedomingo.vercel.app" },
  { name: "AI Governance Readiness Research", description: "Academic research manuscript", url: "https://ai-governance-research.leamiedomingo.vercel.app", domain: "ai-governance-research.leamiedomingo.vercel.app" },
  { name: "Personal Portfolio Website", description: "A clean, minimal personal portfolio built from scratch", url: "https://leamiedomingo.vercel.app", domain: "leamiedomingo.vercel.app" },
  { name: "Car Rental Management System", description: "Built a car rental system", url: "https://car-rental-system.leamiedomingo.vercel.app", domain: "car-rental-system.leamiedomingo.vercel.app" },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "TESDA NC Certificates",
    issuer: "TESDA",
    href: "#",
  },
  {
    name: "SQL and Database Basics",
    issuer: "SoloLearn",
    href: "#",
  },
  {
    name: "Cybersecurity Certificate",
    issuer: "Sangguniang Kabataan-CARAGA",
    href: "#",
  },
];

export const recommendations = [
  { quote: "Information systems are the backbone of modern organizations, enabling efficiency, innovation, and competitive advantage.", author: "James O'Brien", title: "Professor & Author" },
  { quote: "Every business is a software company. You have to start thinking and operating like a digital company.", author: "Satya Nadella", title: "CEO, Microsoft" },
  { quote: "Information is the oil of the 21st century, and analytics is the combustion engine.", author: "Peter Sondergaard", title: "Senior Vice President, Gartner Research" },
  { quote: "The goal of information technology is to automate and accelerate the flow of information to improve decision-making.", author: "Bill Gates", title: "Co-Founder, Microsoft" },
  { quote: "Data is not information, information is not knowledge, knowledge is not understanding, understanding is not wisdom.", author: "Clifford Stoll", title: "Astronomer & Author" },
  { quote: "An information system is not just technology — it is people, processes, and data working together.", author: "Kenneth Laudon", title: "Professor, New York University" },
  { quote: "Without data, you're just another person with an opinion.", author: "W. Edwards Deming", title: "Statistician & Management Consultant" },
  { quote: "The internet is becoming the town square for the global village of tomorrow.", author: "Bill Gates", title: "Co-Founder, Microsoft" },
];

export const memberships = [
  {
    name: "Information System Student Society - Caraga State University",
    href: "https://psite.org/",
  },
];
