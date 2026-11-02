// Core personal details, links, navigation and site settings.
export const profile = {
  name: "Badavath Sandeep",
  initials: "BS",
  headline: "Software Developer | AI/ML Engineer | Computer Science Engineering Student",
  footerTagline: "Software Developer | AI/ML Engineer",
  location: "Hyderabad, Telangana, India",
  email: "sandeepbadavath3@gmail.com",
  phone: "+91 8309542691",
  objective:
    "To build reliable, useful, and intelligent software applications while continuously improving my engineering and problem-solving abilities.",
  // Put the photo in /public and reference it here. Falls back to "BS" initials if missing.
  photo: "/sandeep.jpg",
  // Scrolling line under the profile card in the hero.
  ticker: ["Software Development", "AI/ML", "Computer Science Engineering", "Java & DSA", "Full-Stack"],
  availability: "Open to SDE & AI/ML internships",

  links: {
    github: "https://github.com/sandeep8689",
    linkedin: "https://www.linkedin.com/in/badavath-sandeep-3863a22b1/",
    leetcode: "https://leetcode.com/u/sandeep_badavath/",
  },
  githubUsername: "sandeep8689",

  hero: {
    pre: "Hi, I'm Sandeep —",
    highlight: "Building Intelligent Software and AI-Powered Solutions.",
    lead: "I'm a final-year Computer Science Engineering student passionate about software development, artificial intelligence, machine learning, and solving challenging programming problems.",
    secondary:
      "I enjoy turning ideas into practical applications, developing machine learning solutions, building web applications, and optimising algorithms through consistent coding practice.",
  },

  // Contact form: leave empty to use the mailto fallback.
  // To get real in-page delivery, create a free form at https://formspree.io
  // and paste its endpoint here, e.g. "https://formspree.io/f/abcdwxyz".
  contactFormEndpoint: "",

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "dsa", label: "DSA & Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ],
};
