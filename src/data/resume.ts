interface Work {
  company: string;
  badges: string[];
  href: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string }[];
  video: string;
}

interface Data {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  resumeUrl: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  contact: {
    email: string;
    tel: string;
    social: Record<string, { url: string; label: string }>;
  };
  work: Work[];
  education: Education[];
  projects: Project[];
  recruiter: {
    timezone: string;
    workAuth: string;
    visaRequired: boolean;
    salary: string;
    leetcode: string;
    leetcodeProblems: number;
  };
}

export const DATA: Data = {
  name: "Harshit Chaudhary",
  initials: "HC",
  url: "https://harrykp.vercel.app",
  location: "Mumbai, India",
  locationLink: "",
  description:
    "Backend engineer building AI accessibility agents at BrowserStack covering 40+ WCAG criteria. I ship open-source tools in Rust and Go, contribute to Grafana Tempo, Maybe Finance & Lima VM, and have solved 700+ problems on LeetCode.",
  resumeUrl: "/resume.pdf",
  summary:
    "Backend Software Engineer at BrowserStack, architecting AI accessibility agents covering 40+ WCAG criteria across web, mobile, and design. Previously led ERP integrations and core platform development at Procol. Passionate about distributed systems, infrastructure automation, and developer tooling. Open-source contributor to Grafana Tempo, Maybe Finance, Lima VM, and RubyForGood with 12 merged PRs across 8 repos. Creator of Vortix (395+ GitHub stars) and AFK — developer tools built in Rust and Tauri.",
  avatarUrl: "/me.jpg",
  skills: [
    "Go",
    "Rust",
    "Ruby",
    "Python",
    "C++",
    "TypeScript",
    "Kubernetes",
    "Docker",
    "Kafka",
    "AWS",
    "GCP",
    "PostgreSQL",
    "Redis",
    "gRPC",
    "Helm",
    "Rails",
    "Prometheus",
    "Grafana",
    "BigQuery",
    "LLM Pipelines",
    "Prompt Engineering",
    "VertexAI",
  ],
  contact: {
    email: "chaudharyharshit9@gmail.com",
    tel: "+91-9650782602",
    social: {
      GitHub: {
        url: "https://github.com/Harry-kp",
        label: "GitHub",
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/harshit-chaudhary-4ab0a01aa/",
        label: "LinkedIn",
      },
      X: {
        url: "https://x.com/Harshitc007",
        label: "X",
      },
      Youtube: {
        url: "https://www.youtube.com/channel/UCYrIyQDF2t29T49KM0IYb1A",
        label: "Youtube",
      },
    },
  },
  work: [
    {
      company: "BrowserStack",
      badges: ["AI"],
      href: "https://www.browserstack.com/",
      location: "Mumbai, India",
      title: "Software Engineer — Backend (AI)",
      logoUrl: "/bstack.png",
      start: "Dec 2024",
      end: "Present",
      description:
        "Architected and built BrowserStack's AI accessibility agents — Issue Detection, Remediation, and Design A11y Color Contrast Agent on the Spectra™ rule engine, covering 40+ WCAG criteria across web, mobile, and design. Designed multi-model LLM inference pipelines (Gemini, GPT-4, Claude) with semantic DOM chunking, achieving 87.69% heading detection accuracy. Built App A11y Issue Detection Agent, reducing false-positives by 64% and cutting P90 latency from 20s to 10.1s. Led TestOps observability integration across 7 AI features with Redis-based phased rollout and K8s Kafka consumers with auto-scaling.",
    },
    {
      company: "Procol",
      badges: ["Backend"],
      href: "https://www.procol.io/",
      location: "Gurugram, India",
      title: "Senior Software Engineer",
      logoUrl: "/procol.png",
      start: "Jun 2022",
      end: "Dec 2024",
      description:
        "Led a team of 3 to productise ERP integrations (SAP, Oracle), resulting in a 25% increase in product value and enterprise client onboarding. Core engineer on the Lighthouse and Checkmate team, responsible for architectural decisions and quality assurance. Designed a form system as the core data source layer for all Procol microservices. Developed Flexi data source and view, inspired by Notion, eliminating repetitive development. Set up RSpec testing framework achieving 52% code coverage. Launched internationalization, time zone localization, approval flows, and reporting. Tech Stack: Ruby on Rails, PostgreSQL.",
    },
    {
      company: "Hashedin by Deloitte",
      href: "https://hashedin.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/hashedin.png",
      start: "Jan 2022",
      end: "Jun 2022",
      description:
        "Designed and shipped a RESTful API for a Parking Management System handling real-time slot allocation and booking. Implemented JWT-based authentication and role-based access control. Created comprehensive API documentation using Swagger/OpenAPI, adopted by the frontend team for rapid integration.",
    },
  ],
  education: [
    {
      school: "Ajay Kumar Garg Engineering College",
      href: "https://www.akgec.ac.in/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/akg.png",
      start: "2018",
      end: "2022",
    },
  ],
  recruiter: {
    timezone: "Mumbai, India (IST/UTC+5:30)",
    workAuth: "Indian Citizen",
    visaRequired: true,
    salary: "$150-180k USD",
    leetcode: "https://leetcode.com/u/Harrykp/",
    leetcodeProblems: 700,
  },
  projects: [
    {
      title: "Vortix",
      href: "https://github.com/Harry-kp/vortix",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Terminal UI for WireGuard and OpenVPN — real-time throughput/latency monitoring, IPv6/DNS leak detection, kill switch, and geo-location tracking. 395+ GitHub stars, published on crates.io.",
      technologies: ["Rust", "Ratatui", "WireGuard", "OpenVPN"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/vortix" },
        { type: "Crates.io", href: "https://crates.io/crates/vortix" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/vortix/refs/heads/main/assets/demo.gif",
    },
    {
      title: "AFK",
      href: "https://github.com/Harry-kp/afk",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Break reminder for developers who forget to blink — follows the 20-20-20 rule with fullscreen reminders, statistics dashboard, health exercises, and global shortcuts. Under 5 MB, built with Tauri + Rust.",
      technologies: ["Rust", "Tauri", "React", "TypeScript", "Tailwind CSS"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/afk" },
        { type: "Website", href: "https://afk-app.vercel.app" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/afk/main/landing/assets/demo.gif",
    },
    {
      title: "Mercury",
      href: "https://github.com/Harry-kp/mercury",
      dates: "Feb 2026 - Present",
      active: true,
      description:
        "A blazing-fast API client for purists — 5 MB binary, 50ms cold start (vs Postman's 300 MB / 3s). Keyboard-driven workflows, collection management, and environment variables. Zero Electron overhead.",
      technologies: ["Rust", "TUI", "HTTP", "REST"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/mercury" },
        { type: "Website", href: "https://harry-kp.github.io/mercury/" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/mercury/master/website/static/img/screenshot.png",
    },
    {
      title: "UPPCL Pro",
      href: "https://github.com/Harry-kp/uppcl-pro",
      dates: "Apr 2026 - Present",
      active: true,
      description:
        "Self-hosted analytics dashboard for UPPCL SMART prepaid electricity meters — reverse-engineered FastAPI proxy handling ALTCHA proof-of-work, RSA-OAEP + AES-256-GCM encryption, and 60-day JWT auth. Features runway forecasting, anomaly detection, cost breakdown, and 1912 complaint tracking. Runs on a Raspberry Pi Zero 2.",
      technologies: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Raspberry Pi"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/uppcl-pro" },
        { type: "Website", href: "https://harry-kp.github.io/uppcl-pro/" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/uppcl-pro/main/docs/screenshots/home-dark.png",
    },
    {
      title: "Nebula",
      href: "https://github.com/Harry-kp/nebula",
      dates: "Aug 2024",
      active: true,
      description:
        "BitTorrent client built from scratch in Go — implements the full protocol: bencode parsing, HTTP tracker communication, peer handshakes, concurrent piece downloads across multiple peers, and SHA-1 integrity verification.",
      technologies: ["Go", "BitTorrent", "Networking", "Concurrency"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/nebula" },
      ],
      video: "",
    },
    {
      title: "OkayrAI",
      href: "https://okayrai.harrykp.live/",
      dates: "May 2025 - Present",
      active: true,
      description:
        "AI-powered career advancement platform — tracks achievements, generates data-driven performance reviews, and builds promotion cases. Uses OpenAI and Gemini for intelligent summarization with PostgreSQL-backed persistence.",
      technologies: ["Next.js", "PostgreSQL", "OpenAI", "Gemini"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/okayri" },
        { type: "Live", href: "https://okayrai.harrykp.live/" },
      ],
      video: "",
    },
    {
      title: "A2A Trace",
      href: "https://github.com/Harry-kp/a2a-trace",
      dates: "2025",
      active: true,
      description:
        "Visual debugger for Google's A2A protocol — provides real-time tracing and visualization of inter-agent communication flows. Helps debug complex multi-agent orchestrations by capturing task lifecycle, message payloads, and agent state transitions.",
      technologies: ["Go", "A2A Protocol", "Agents", "Visualization"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/a2a-trace" },
      ],
      video: "",
    },
    {
      title: "CheggPy",
      href: "https://github.com/Harry-kp/cheggpy",
      dates: "Feb 2024 - Apr 2024",
      active: true,
      description:
        "Published Python package on PyPI — automates Chegg Expert workflows with session management, keyword-based question filtering, and structured data extraction. Installable via pip with a clean CLI interface.",
      technologies: ["Python", "PyPI", "REST API", "Automation"],
      links: [
        { type: "PyPI", href: "https://pypi.org/project/cheggpy/" },
        { type: "GitHub", href: "https://github.com/Harry-kp/cheggpy" },
      ],
      video:
        "https://github.com/user-attachments/assets/0cf7f8fa-3805-4068-beab-a1510bb4c256",
    },
  ],
};

export type { Work as WorkExperience, Education, Project };

