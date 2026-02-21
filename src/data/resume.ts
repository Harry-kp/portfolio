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
}

export const DATA: Data = {
  name: "Harshit Chaudhary",
  initials: "HC",
  url: "https://harrykp.vercel.app",
  location: "Gurugram, Haryana, India",
  locationLink: "",
  description:
    "Backend engineer building scalable distributed systems and AI-powered products. I ship open-source tools in Rust and Go, contribute to projects like Maybe Finance, and have solved 700+ problems on LeetCode.",
  resumeUrl: "/resume.pdf",
  summary:
    "Backend Software Engineer at BrowserStack building AI-powered test management features at scale. Previously built a custom Kubernetes controller at Procol that automated database provisioning for 2,000+ developers. Passionate about distributed systems, infrastructure automation, and developer tooling. Open-source contributor to Maybe Finance, LeetCode, and RubyForGood. Creator of Vortix (300+ GitHub stars) — a terminal UI for VPN management built in Rust.",
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
    "AWS",
    "PostgreSQL",
    "Redis",
    "gRPC",
    "Rails",
    "System Design",
    "Distributed Systems",
    "LLMs / AI",
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
        "Building AI-powered features for the Test Management platform used by thousands of QA teams globally. Designed and deployed LLM pipelines using Claude and OpenAI embeddings to auto-generate test cases, reducing manual test authoring time. Architected inference services on Kubernetes with auto-scaling to handle variable workloads while keeping latency under SLA targets.",
    },
    {
      company: "Procol",
      badges: ["Infrastructure"],
      href: "https://www.procol.io/",
      location: "Gurugram, India",
      title: "Senior Software Engineer",
      logoUrl: "/procol.png",
      start: "Jun 2022",
      end: "Dec 2024",
      description:
        "Built a custom Kubernetes controller in Go to automate MySQL and ProxySQL provisioning, enabling 2,000+ developers to self-serve production database deployments — reducing setup time from days to minutes. Led the design and integration of ERP systems (SAP, Oracle) for enterprise procurement workflows processing millions in transactions. Owned end-to-end feature development across Ruby on Rails microservices with PostgreSQL, Redis, and Sidekiq.",
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
  projects: [
    {
      title: "Vortix",
      href: "https://github.com/Harry-kp/vortix",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Terminal UI for WireGuard and OpenVPN — real-time throughput/latency monitoring, IPv6/DNS leak detection, kill switch, and geo-location tracking. 340+ GitHub stars, 9 forks, published on crates.io.",
      technologies: ["Rust", "Ratatui", "WireGuard", "OpenVPN"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/vortix" },
        { type: "Crates.io", href: "https://crates.io/crates/vortix" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/vortix/refs/heads/main/assets/demo.gif",
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

