export type Project = {
  name: string;
  category: string;
  imageUrl?: string;
  description: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  githubUrl?: string;
  reportUrl?: string;
};

export const projects: Project[] = [
  {
    name: "ConcertHub",
    category: "Full-Stack Web App",
    imageUrl: "/project-images/concerthub.png",
    description:
      "ConcertHub is a full-stack concert ticket booking web application that allows users to browse concerts, select seats, reserve tickets, complete payment, and receive QR-code tickets. It also includes admin features for managing concerts and booking operations.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Socket.io",
      "Cloudinary",
    ],
    highlights: [
      "Implemented JWT authentication with protected user routes and admin access.",
      "Built real-time seat reservation, expiry, cancellation, and dynamic pricing using Socket.io.",
      "Integrated Stripe Checkout and QR-code ticket generation.",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    name: "CCN Carnival",
    category: "Blockchain Project",
    imageUrl: "/project-images/CCN.png",
    description:
      "CCN Carnival is a blockchain-based carnival stall management system with organizer, stall owner, and buyer roles. It supports stall registration, item purchases, donations, refunds, and secure fund withdrawals using smart contracts.",
    stack: ["Solidity", "Smart Contract", "MetaMask", "Sepolia"],
    highlights: [
      "Implemented role-based smart contract logic for organizer, stall owners, and buyers.",
      "Added purchases, donations, refunds, payment records, and withdrawal rules.",
      "Connected the smart contract to a frontend using MetaMask on Sepolia.",
    ],
    githubUrl: "#",
  },
  {
    name: "Aqua-IQ",
    category: "IoT / Cloud Concept",
    imageUrl: "/project-images/aquaIQ.png",
    description:
      "Aqua-IQ is an IoT smart water bottle concept designed for hydration tracking, liquid monitoring, environmental sensing, and real-time safety alerts. The project explores how AWS cloud services can process IoT sensor data and deliver useful notifications.",
    stack: [
      "IoT",
      "AWS IoT Core",
      "AWS Lambda",
      "DynamoDB",
      "Amazon SNS",
      "Bluetooth",
      "Sensors",
    ],
    highlights: [
      "Planned sensors for liquid type, temperature, humidity, UV, and environment monitoring.",
      "Designed a mobile app concept for hydration data, refill locations, and personalized notifications.",
      "Planned AWS services for IoT data processing, storage, alerts, and security.",
    ],
    githubUrl: "#",
  },
  
  {
    name: "Merlion FX",
    category: "Python / Flask Web App",
    imageUrl: "/project-images/merlionfx.png",
    description:
      "Merlion FX is a Flask foreign exchange web application for currency rates, conversion, PayPal sandbox payments, historical charts, forex news, and simple exchange-rate forecasting.",
    stack: [
      "Python",
      "Flask",
      "PayPal Sandbox",
      "Polygon.io API",
      "CBM API",
      "GNews API",
      "Bootstrap",
      "JavaScript",
    ],
    highlights: [
      "Integrated PayPal login, checkout, approval, and payment capture flow.",
      "Fetched real-time FX rates, CBM Myanmar rates, historical charts, and forex news.",
      "Added FX visualization, MMK-to-SGD conversion, result pages, and simple rate forecasting.",
    ],
    githubUrl: "#",
  },
  {
    name: "Arising Starlights",
    category: "Web Application",
    imageUrl: "/project-images/CCA.png",
    description:
      "Arising Starlights is a Theatre CCA web application for admins, members, and public users. It supports role-based access, event registration, notifications, search, profile editing, and public browsing.",
    stack: ["HTML", "CSS", "JavaScript", "Firebase", "Database"],
    highlights: [
      "Added role-based access for member, event, and registration management.",
      "Built public browsing with restricted access to protected features.",
      "Implemented authentication, OTP reset, event registration, notifications, search, and profile editing.",
    ],
    githubUrl: "#",
  },
];