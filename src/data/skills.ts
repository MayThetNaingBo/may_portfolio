export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS", "Dart"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Flask", "Flutter"],
  },
  {
    title: "Databases & Cloud",
    skills: [
      "MySQL",
      "MongoDB",
      "Firebase Firestore",
      "AWS Cloud Deployment",
      "Google Cloud Platform",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Docker", "VS Code", "Visual Studio", "Solidity"],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Power BI",
      "KNIME",
      "Microsoft Excel",
      "pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    title: "Security",
    skills: ["OWASP Top 10", "Application Hardening"],
  },
  {
    title: "Professional Skills",
    skills: [
      "Analytical problem-solving",
      "Time management",
      "Multitasking",
      "Team collaboration",
      "Adaptability in fast-paced environments",
      "Clear workplace communication",
      "Customer-focused communication",
    ],
  },
];