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
  url: "https://harrykp.tech",
  location: "Gurugram, Haryana, India",
  locationLink: "",
  description: "Software Engineer with knack of rails.",
  // Add your resume URL here - can be "/resume.pdf" (local) or a Google Drive/Dropbox link
  resumeUrl: "/resume.pdf",
  summary:
    "Backend Software Engineer specializing in AI at BrowserStack. I have a proven track record of leading teams in integrating complex ERP systems and enhancing product capabilities in Procurement Domain. Solved more than 700 problems on LeetCode. Open Source Contributor at Maybe, LeetCode and RubyForGood",
  avatarUrl: "/me.jpg",
  skills: [
    "Golang",
    "Ruby",
    "Rails",
    "Python",
    "Postgres",
    "Docker",
    "C++",
    "Kubernetes",
    "NodeJS",
    "AWS",
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
      company: "Browserstack",
      badges: [],
      href: "https://www.browserstack.com/",
      location: "Mumbai",
      title: "Software Engineer-Backend[AI]",
      logoUrl: "/bstack.png",
      start: "Dec 2024",
      end: "Present",
      description:
        "Implemented and scaled AI features in the Test Management Product using LLMs like Claude, OpenAI embedding, and Kubernetes for deployment and monitoring.",
    },
    {
      company: "Procol",
      badges: [],
      href: "https://www.procol.io/",
      location: "Gurugram, Haryana",
      title: "Senior Software Engineer",
      logoUrl: "/procol.png",
      start: "Jun 2022",
      end: "Dec 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production.",
    },
    {
      company: "Hashedin By Deloitte",
      href: "https://hashedin.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/hashedin.png",
      start: "Jan 2022",
      end: "Jun 2022",
      description:
        "Designed and implemented an API for a Parking Management System. Used Swagger for clear API documentation. Restricted API access to authorized individuals using JWT Authentication.",
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
      title: "AFK",
      href: "https://afk-app.vercel.app",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "A minimal macOS break reminder for developers who forget to blink. Features fullscreen break overlays, customizable intervals, and respects your flow with smart pause detection.",
      technologies: ["Tauri", "Rust", "React", "TypeScript"],
      links: [
        { type: "Website", href: "https://afk-app.vercel.app" },
        { type: "Download", href: "https://github.com/Harry-kp/afk-releases/releases/latest" },
      ],
      video: "https://github.com/Harry-kp/afk-releases/releases/download/v1.0.0/demo.mp4",
    },
    {
      title: "Vortix",
      href: "https://github.com/Harry-kp/vortix",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "A terminal UI for WireGuard and OpenVPN with real-time telemetry and leak guarding. Features include advanced throughput/latency monitoring, IPv6/DNS leak detection, kill switch, and geo-location tracking.",
      technologies: ["Rust", "Ratatui", "WireGuard", "OpenVPN"],
      links: [
        { type: "Github", href: "https://github.com/Harry-kp/vortix" },
        { type: "Crates.io", href: "https://crates.io/crates/vortix" },
      ],
      video: "https://raw.githubusercontent.com/Harry-kp/vortix/refs/heads/main/assets/demo.gif",
    },
    
    {
      title: "Nebula",
      href: "https://github.com/Harry-kp/nebula",
      dates: "Aug 2024",
      active: true,
      description:
        "Go-based command-line torrent client for downloading files, featuring HTTP tracker support and piece management.",
      technologies: ["Golang"],
      links: [{ type: "Github", href: "https://github.com/Harry-kp/nebula" }],
      video:
        "https://github.com/user-attachments/assets/2fe05664-7e27-4ccf-b0bc-be45a54a3078",
    },
    {
      title: "CheggPy",
      href: "https://github.com/Harry-kp/cheggpy",
      dates: "Feb 2024 - Apr 2024",
      active: true,
      description:
        "Python package to simplify interactions with the Chegg API. Automates logging in, fetching, and analyzing questions based on keywords.",
      technologies: ["Python", "pip"],
      links: [
        { type: "PyPi", href: "https://pypi.org/project/cheggpy/" },
        { type: "Github", href: "https://github.com/Harry-kp/cheggpy" },
      ],
      video:
        "https://github.com/user-attachments/assets/0cf7f8fa-3805-4068-beab-a1510bb4c256",
    },
    {
        title: "OkayrAI",
        href: "https://okayrai.harrykp.live/",
        dates: "May 2025 - Present",
        active: true,
        description:
          "AI-powered career advancement platform that helps professionals track achievements, generate data-driven performance reviews, and secure promotions.",
        technologies: ["NextJS", "Postgres", "OpenAI", "Gemini"],
        links: [{ type: "Github", href: "https://github.com/Harry-kp/okayri" }],
        video: "",
      },
    {
      title: "DevStrologer",
      href: "https://devstrologer.harrykp.live/",
      dates: "Aug 2024",
      active: true,
      description:
        "Fun app combining horoscopes with developer personalities. Generates personalized 'Dev Horoscopes' for tech enthusiasts.",
      technologies: ["NextJS", "Shadcn", "Gemini AI"],
      links: [
        { type: "Source", href: "https://github.com/Harry-kp/devstrologer" },
      ],
      video:
        "https://github.com/user-attachments/assets/415480b1-f2aa-420a-96b1-9ce17b4378ce",
    },
    {
      title: "Promptify",
      href: "https://github.com/Harry-kp/promptify",
      dates: "Aug 2024",
      active: true,
      description:
        "Tool that consolidates text files from a directory into a single file for easier AI prompting.",
      technologies: ["Golang"],
      links: [
        { type: "Source", href: "https://github.com/Harry-kp/promptify" },
      ],
      video:
        "https://github.com/user-attachments/assets/11bd8c58-1247-45fa-adb4-f7d4290f9140",
    },
  ],
};

export type { Work as WorkExperience, Education, Project };

