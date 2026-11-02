// All projects live here. Rules:
//  - Only add `repo` / `demo` when the URL really exists. Missing => the card shows a labelled note.
//  - `status.tone` is one of: live | repo | prototype | concept | private
//  - `features` should list only what is actually implemented.

export const projectFilters = [
  "All",
  "AI/ML",
  "Web Development",
  "Healthcare",
  "Generative AI",
  "Automation",
  "Data Science",
  "Smart Technology",
  "Blockchain",
  "FinTech",
];

export const projects = [
  {
    id: "medassist",
    title: "MedAssist AI",
    icon: "Stethoscope",
    featured: true,
    categories: ["AI/ML", "Healthcare"],
    status: { label: "Working prototype", tone: "live" },
    description:
      "A machine learning-based web application that analyses user-provided symptoms and predicts possible diseases using a trained classification model.",
    features: [
      "Symptom input and processing.",
      "Machine learning-based disease prediction.",
      "Presentation of prediction results.",
      "Integration of the trained model into a web interface.",
    ],
    tech: ["Python", "Random Forest Classifier", "Machine Learning", "Data Preprocessing", "Web Application Integration"],
    demo: "https://infosys-springboard-internship-1.onrender.com/",
    repo: "https://github.com/sandeep8689/Infosys-Springboard-Internship",
    disclaimer:
      "For educational purposes only. This tool does not replace professional medical diagnosis.",
  },
  {
    id: "fake-url",
    title: "Fake URL Detection System",
    icon: "ShieldAlert",
    categories: ["AI/ML"],
    status: { label: "Model built · repo not published", tone: "private" },
    description:
      "A machine learning system designed to identify potentially malicious URLs by analysing URL patterns and extracted character-level features.",
    detail: "Trained on a dataset of 900,000 URLs.",
    features: [
      "URL preprocessing.",
      "Character-level feature extraction.",
      "Classification of potentially suspicious URLs.",
      "Model evaluation.",
    ],
    tech: ["Python", "Machine Learning", "TF-IDF Character N-grams", "Feature Engineering", "Classification"],
  },
  {
    id: "ecg",
    title: "ECG Analyzer",
    icon: "HeartPulse",
    categories: ["AI/ML", "Healthcare"],
    status: { label: "Repository available", tone: "repo" },
    description:
      "A deep learning project exploring convolutional neural networks for ECG analysis and pattern classification.",
    tech: ["Python", "CNN", "Deep Learning", "ECG Data Processing", "Model Evaluation"],
    repo: "https://github.com/sandeep8689/ECG-ANALYZER",
  },
  {
    id: "healthcare-mgmt",
    title: "Digital Healthcare Management System",
    icon: "Activity",
    categories: ["Healthcare", "Web Development", "AI/ML"],
    status: { label: "Live demo available", tone: "live" },
    description:
      "A healthcare application focused on digital patient information management and structured healthcare workflows.",
    tech: ["Python", "Web Development", "Database Integration", "AI/ML components"],
    demo: "https://medinsight-ai-healthcare.vercel.app/",
  },
  {
    id: "automation",
    title: "AI Automation Workflows",
    icon: "Workflow",
    categories: ["AI/ML", "Automation"],
    status: { label: "Experiments · no public repo", tone: "private" },
    description:
      "AI-powered workflow automation experiments designed to connect applications, process information, and reduce repetitive tasks.",
    tech: ["n8n", "API Integrations", "AI Models", "Workflow Automation"],
  },
  {
    id: "rag",
    title: "RAG-Based Question Answering Application",
    icon: "MessageSquare",
    categories: ["Generative AI", "AI/ML", "Web Development"],
    status: { label: "Repository available · no live demo yet", tone: "repo" },
    description:
      "A retrieval-augmented generation application designed to retrieve relevant information and generate context-aware answers.",
    tech: ["Python", "FastAPI", "ChromaDB", "Embeddings", "Groq API", "Supabase", "RAG"],
    repo: "https://github.com/sandeep8689/college-rag-assistant",
  },
  {
    id: "message-classifier",
    title: "Message Classifier",
    icon: "MessageSquare",
    categories: ["AI/ML"],
    status: { label: "GitHub project · add repo link", tone: "repo" },
    description:
      "A machine learning project that classifies text messages into categories using text classification techniques.",
    tech: ["Python", "Machine Learning", "Text Classification"],
    // TODO: paste the real URL from your GitHub, e.g. "https://github.com/sandeep8689/<repo-name>"
    repo: null,
    repoNote: "Repository link to be added",
  },
  {
    id: "learning-story-generator",
    title: "Learning Story Generator",
    icon: "BookOpen",
    categories: ["Generative AI", "AI/ML"],
    status: { label: "GitHub project · add repo link", tone: "repo" },
    description:
      "An AI-powered application that generates short stories to make learning topics easier to understand.",
    tech: ["Python", "Generative AI"],
    // TODO: paste the real URL from your GitHub, e.g. "https://github.com/sandeep8689/<repo-name>"
    repo: null,
    repoNote: "Repository link to be added",
  },
  {
    id: "message-classifier",
    title: "Message Classifier",
    icon: "MessageSquare",
    categories: ["AI/ML", "Data Science"],
    status: { label: "Repository on GitHub", tone: "repo" },
    description:
      "A machine learning project that classifies text messages into categories using text-classification techniques.",
    tech: ["Python", "Machine Learning", "Text Classification"],
    // TODO: paste the exact repo URL below, e.g. "https://github.com/sandeep8689/<repo-name>".
    // Until then the card links to your GitHub profile.
    repo: null,
    onGithub: true,
  },
  {
    id: "learning-story-generator",
    title: "Learning Story Generator",
    icon: "BookOpen",
    categories: ["Generative AI", "AI/ML"],
    status: { label: "Repository on GitHub", tone: "repo" },
    description:
      "An AI-powered project that generates short learning stories to make topics easier to understand.",
    tech: ["Python", "Generative AI"],
    // TODO: paste the exact repo URL (and demo URL if one exists), then edit the description/tech to match.
    repo: null,
    onGithub: true,
  },
  {
    id: "govtcrack",
    title: "GovtCrack",
    icon: "Landmark",
    categories: ["Web Development"],
    status: { label: "Concept", tone: "concept" },
    description:
      "A government-job preparation platform concept intended to help users explore opportunities and access competitive-examination resources.",
    tech: ["React", "Vite", "FastAPI", "Supabase"],
  },
  {
    id: "indoorpath",
    title: "InDoorPath — Smart Indoor Navigation",
    icon: "Navigation",
    categories: ["Smart Technology"],
    status: { label: "Concept", tone: "concept" },
    description:
      "An indoor navigation concept exploring location technologies to guide users through complex indoor environments.",
    tech: ["BLE Beacons", "Wi-Fi Positioning", "QR Checkpoints", "LiDAR", "Augmented Reality"],
  },
  {
    id: "ezypay",
    title: "EZYPAY",
    icon: "Wallet",
    categories: ["Blockchain", "FinTech"],
    status: { label: "Concept", tone: "concept" },
    description:
      "A blockchain wallet concept exploring digital wallet functionality and blockchain-based transactions.",
    tech: ["Blockchain", "Digital Wallet"],
  },
  // Weather Dashboard is parked: add it here once a source repo or demo exists.
];
