// Edit this file to add / remove skills. No percentages — only honest labels.
export const skillLevels = {
  Practising: "border-violet-400/30 bg-violet-500/10 text-violet-200",
  "Project Experience": "border-blue-400/30 bg-blue-500/10 text-blue-200",
  "Working Knowledge": "border-slate-400/25 bg-slate-400/10 text-slate-200",
  Learning: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
};

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    items: [
      { name: "Java", level: "Practising" },
      { name: "Python", level: "Project Experience" },
      { name: "JavaScript", level: "Project Experience" },
      { name: "C", level: "Working Knowledge" },
    ],
  },
  {
    id: "cs",
    title: "Computer Science Fundamentals",
    icon: "Cpu",
    items: [
      { name: "Data Structures & Algorithms", level: "Practising" },
      { name: "Object-Oriented Programming", level: "Practising" },
      { name: "Problem Solving", level: "Practising" },
      { name: "Time & Space Complexity", level: "Practising" },
      { name: "Operating Systems", level: "Working Knowledge" },
      { name: "DBMS", level: "Working Knowledge" },
      { name: "Computer Networks", level: "Working Knowledge" },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    icon: "Globe",
    items: [
      { name: "HTML5", level: "Project Experience" },
      { name: "CSS3", level: "Project Experience" },
      { name: "JavaScript", level: "Project Experience" },
      { name: "React", level: "Project Experience" },
      { name: "Vite", level: "Project Experience" },
      { name: "FastAPI", level: "Project Experience" },
      { name: "Tailwind CSS", level: "Working Knowledge" },
      { name: "Responsive Design", level: "Working Knowledge" },
      { name: "REST APIs", level: "Working Knowledge" },
    ],
  },
  {
    id: "backend",
    title: "Databases & Backend",
    icon: "Database",
    items: [
      { name: "Supabase", level: "Project Experience" },
      { name: "Python Backend", level: "Project Experience" },
      { name: "MySQL", level: "Working Knowledge" },
      { name: "PostgreSQL", level: "Working Knowledge" },
    ],
  },
  {
    id: "ai",
    title: "Artificial Intelligence & ML",
    icon: "Brain",
    items: [
      { name: "Machine Learning", level: "Project Experience" },
      { name: "Random Forest Classification", level: "Project Experience" },
      { name: "Text Classification", level: "Project Experience" },
      { name: "TF-IDF Character N-grams", level: "Project Experience" },
      { name: "Model Training & Evaluation", level: "Project Experience" },
      { name: "RAG", level: "Project Experience" },
      { name: "CNN & Deep Learning", level: "Learning" },
      { name: "Generative AI", level: "Learning" },
      { name: "Embeddings & Vector DBs", level: "Learning" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Wrench",
    items: [
      { name: "Git", level: "Practising" },
      { name: "GitHub", level: "Practising" },
      { name: "VS Code", level: "Practising" },
      { name: "Jupyter Notebook", level: "Working Knowledge" },
      { name: "n8n", level: "Working Knowledge" },
      { name: "Render", level: "Working Knowledge" },
      { name: "Vercel", level: "Working Knowledge" },
      { name: "Power BI", level: "Working Knowledge" },
    ],
  },
];
