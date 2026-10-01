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
    "Senior backend engineer building AI accessibility agents at BrowserStack covering 40+ WCAG criteria. I ship open-source tools in Rust that people install from Homebrew, and contribute upstream to Grafana Tempo and Lima.",
  resumeUrl: "/resume.pdf",
  summary:
    "Senior Software Engineer at BrowserStack, building AI accessibility agents covering 40+ WCAG criteria across web, mobile, and design, and owning their reliability: evals, rollouts, Kafka, Kubernetes. Previously led ERP integrations and core platform development at Procol. Open-source contributor to Grafana Tempo, Lima, CocoIndex, Maybe Finance and Ruby for Good. Creator of Vortix (700+ GitHub stars, in Homebrew core), kitz, Mercury and ApprovalEngine.",
  avatarUrl: "/me.jpg",
  skills: [
    "Go",
    "Rust",
    "Ruby",
    "Python",
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
    "LangChain",
    "LangGraph",
    "Langfuse",
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
      title: "Senior Software Engineer - Backend (AI)",
      logoUrl: "/bstack.png",
      start: "Dec 2024",
      end: "Present",
      description:
        "Architected and built BrowserStack's AI accessibility agents - Issue Detection, Remediation, and Design A11y Color Contrast Agent on the Spectra™ rule engine, covering 40+ WCAG criteria across web, mobile, and design. Designed multi-model LLM inference pipelines (Gemini, GPT-4, Claude) with semantic DOM chunking, achieving 87.69% heading detection accuracy. Built App A11y Issue Detection Agent, reducing false-positives by 64% and cutting P90 latency from 20s to 10.1s. Led TestOps observability integration across 7 AI features with Redis-based phased rollout and K8s Kafka consumers with auto-scaling.",
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
        "Led a team of 3 to productise ERP integrations (SAP, Oracle), turning them into a paid add-on that raised the per-customer contract price 25% and won enterprise clients. Core engineer on the Lighthouse and Checkmate team, responsible for architectural decisions and quality assurance. Designed a form system as the core data source layer for all Procol microservices. Developed Flexi data source and view, inspired by Notion, eliminating repetitive development. Set up RSpec testing framework achieving 52% code coverage. Launched internationalization, time zone localization, approval flows, and reporting. Tech Stack: Ruby on Rails, PostgreSQL.",
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
    timezone: "Mumbai, India · Remote anywhere or EU relocation",
    workAuth: "Indian Citizen",
    visaRequired: true,
    salary: "Competitive - let's discuss",
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
        "Terminal UI for WireGuard and OpenVPN - real-time throughput/latency monitoring, IPv6/DNS leak detection, kill switch, and geo-location tracking. 700+ GitHub stars, 31 forks; shipped via Homebrew core and crates.io. Spun out the animation engine into a standalone widget, ratatui-flip-panel, also published on crates.io.",
      technologies: ["Rust", "Ratatui", "WireGuard", "OpenVPN"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/vortix" },
        { type: "Crates.io", href: "https://crates.io/crates/vortix" },
        { type: "Widget", href: "https://crates.io/crates/ratatui-flip-panel" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/vortix/refs/heads/main/assets/demo.gif",
    },
    {
      title: "kitz",
      href: "https://github.com/Harry-kp/kitz",
      dates: "Jul 2026 - Present",
      active: true,
      description:
        "Terminal UI for AWS MSK Kafka with native IAM auth (SASL OAUTHBEARER / SigV4) - hot-switch between environments without restarting, live topic and consumer-group inspection, event peeking with pretty-printed JSON, and a `kitz doctor` command that diagnoses connectivity layer by layer.",
      technologies: ["Rust", "Kafka", "AWS MSK", "Ratatui"],
      links: [{ type: "GitHub", href: "https://github.com/Harry-kp/kitz" }],
      video: "",
    },
    {
      title: "Mercury",
      href: "https://github.com/Harry-kp/mercury",
      dates: "Feb 2026 - Present",
      active: true,
      description:
        "A blazing-fast API client for purists - 5 MB binary, 50ms cold start (vs Postman's 300 MB / 3s). Keyboard-driven workflows, collection management, and environment variables. Zero Electron overhead.",
      technologies: ["Rust", "TUI", "HTTP", "REST"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/mercury" },
        { type: "Website", href: "https://harry-kp.github.io/mercury/" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/mercury/master/website/static/img/screenshot.png",
    },
    {
      title: "Bijli Saathi (UPPCL Pro)",
      href: "https://github.com/Harry-kp/uppcl-pro-app",
      dates: "Apr 2026 - Present",
      active: true,
      description:
        "Android app for UPPCL smart meters, English and Hindi - bill and balance on the first screen, in-app bill payment, usage forecasting and one-tap outage complaints. Built on a reverse-engineered FastAPI proxy handling ALTCHA proof-of-work, RSA-OAEP + AES-256-GCM encryption and JWT auth. v0.1 released; Play Store launch in progress.",
      technologies: ["React Native", "Expo", "TypeScript", "FastAPI"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/uppcl-pro-app" },
        { type: "APK", href: "https://github.com/Harry-kp/uppcl-pro-app/releases/latest" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/uppcl-pro/main/docs/screenshots/home-dark.png",
    },
    {
      title: "ApprovalEngine",
      href: "https://github.com/Harry-kp/approval_engine",
      dates: "Jun 2026 - Present",
      active: true,
      description:
        "Multi-tenant approval workflows for Rails, as a mountable engine - an immutable Approval → Track → Step ledger, dynamic JSON-Logic routing, consensus (any / all / majority / N), sequential layers plus parallel scatter-gather, time-bound delegation, and a transactional outbox. Consensus-aware rejection, and SLA timeouts that never auto-approve (silence isn't consent). No Redis or Sidekiq required. Published on RubyGems.",
      technologies: ["Ruby", "Rails", "PostgreSQL", "RubyGems"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/approval_engine" },
        { type: "RubyGems", href: "https://rubygems.org/gems/approval_engine" },
      ],
      video: "",
    },
    {
      title: "AFK",
      href: "https://github.com/Harry-kp/afk",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Break reminder for developers who forget to blink - follows the 20-20-20 rule with fullscreen reminders, statistics dashboard, health exercises, and global shortcuts. Under 5 MB, built with Tauri + Rust.",
      technologies: ["Rust", "Tauri", "React", "TypeScript", "Tailwind CSS"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/afk" },
        { type: "Website", href: "https://afk-app.vercel.app" },
      ],
      video:
        "https://raw.githubusercontent.com/Harry-kp/afk/main/landing/assets/demo.gif",
    },
    {
      title: "A2A Trace",
      href: "https://github.com/Harry-kp/a2a-trace",
      dates: "2025",
      active: true,
      description:
        "Visual debugger for Google's A2A protocol - provides real-time tracing and visualization of inter-agent communication flows. Helps debug complex multi-agent orchestrations by capturing task lifecycle, message payloads, and agent state transitions.",
      technologies: ["Go", "A2A Protocol", "Agents", "Visualization"],
      links: [
        { type: "GitHub", href: "https://github.com/Harry-kp/a2a-trace" },
      ],
      video: "",
    },
  ],
};

export type { Work as WorkExperience, Education, Project };

