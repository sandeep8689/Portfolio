// Add a certificate only when you have the real document.
// `verifyUrl` stays null until you have a genuine verification link.
export const certifications = [
  {
    id: "sap-code-unnati",
    title: "SAP Code Unnati",
    issuer: "SAP",
    credentialId: "CU26_33259",
    date: null, // add the completion date from the certificate, e.g. "March 2026"
    skills: ["ML", "AI", "Generative AI", "RAG", "Agentic AI", "Analytics", "Deep Learning", "Edge AI", "ABAP"],
    verifyUrl: null,
  },
  {
    id: "ibm-chatbot",
    title: "Build Your First Chatbot",
    issuer: "IBM SkillsBuild",
    credentialId: "MDL-510 (course)",
    date: "6 September 2024",
    skills: ["Chatbots", "Conversational AI"],
    verifyUrl: null,
  },
];

export const certificationsNote =
  "More credentials (Power BI, Simplilearn, SkillUp, Deloitte job simulation) will be added once the certificates are on file.";
