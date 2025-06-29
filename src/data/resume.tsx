import { Icons } from "@/components/icons";

export const DATA = {
  name: "Harshit Chaudhary",
  initials: "HC",
  url: "https://harrykp.tech",
  location: "Gurugram, Haryana, India",
  locationLink: "",
  description:
    "Software Engineer with knack of rails.",
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
    "AWS"
  ],
  contact: {
    email: "chaudharyharshit9@gmail.com",
    tel: "+91-9650782602",
    social: {
      GitHub: {
        url: "https://github.com/Harry-kp",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/harshit-chaudhary-4ab0a01aa/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/Harshitc007",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://www.youtube.com/channel/UCYrIyQDF2t29T49KM0IYb1A",
        icon: Icons.youtube,
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
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
        "Designed and implemented an API for a Parking Management System. Used Swagger for clear API documentation. Restricted API access to authorized individuals using JWT Authentication. Conducted unit testing, fixed bugs, and managed new functionalities.",
    },
  ],
  education: [
    {
      school: "Ajay Kumar Garg Engineering College",
      href: "https://www.akgec.ac.in/",
      degree: "Bachelor of Technologyin Computer Science",
      logoUrl: "/akg.png",
      start: "2018",
      end: "2022",
    }
  ],
  projects: [
    {
      title: "Nebula",
      href: "https://okayrai.harrykp.live/",
      dates: "May 2025 - Present",
      active: true,
      description:
        "OkayrAI is an AI-powered career advancement platform I developed that helps professionals track achievements, generate data-driven performance reviews, and secure promotions. The platform features smart work logging, OKR tracking, AI-generated reports. Built with Next.js, TypeScript, Prisma, and integrated with OpenAI for personalized career insights.",
      technologies: [
        "NextJS",
        "Postgres",
        "OpenAI",
        "Gemini"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Harry-kp/okayri",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Nebula",
      href: "https://github.com/Harry-kp/nebula",
      dates: "Aug 2024 - Aug 2024",
      active: true,
      description:
        "Developed a Go-based command-line torrent client for downloading files, featuring HTTP tracker support and piece management.",
      technologies: [
        "Golang"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Harry-kp/nebula",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/2fe05664-7e27-4ccf-b0bc-be45a54a3078",
    },
    {
      title: "CheggPy",
      href: "https://github.com/Harry-kp/cheggpy",
      dates: "Feb 2024 - April 2024",
      active: true,
      description:
        "CheggPy is a Python package I developed to simplify interactions with the Chegg API for Chegg Experts. It automates tasks such as logging in, fetching, and analyzing questions based on keywords. CheggPy also offers customizable timeouts, a clear interface, and can be installed and used with simple commands via pip.",
      technologies: [
        "Python",
        "pip"
      ],
      links: [
        {
          type: "PyPi",
          href: "https://pypi.org/project/cheggpy/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Harry-kp/cheggpy",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Tutorial",
          href: "https://www.youtube.com/watch?v=hZee5E0L9KQ",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/0cf7f8fa-3805-4068-beab-a1510bb4c256",
    }
    ,
    {
      title: "DevStrologer",
      href: "https://devstrologer.harrykp.live/",
      dates: "Aug 2024 - Aug 2024",
      active: true,
      description:
        "DevStrologer is a fun app that combines horoscopes with developer personalities. It uses user input to generate personalized 'Dev Horoscopes' for tech enthusiasts. Built with Shadcn, Next.js, and powered by Gemini API.",
      technologies: [
       "NextJs", "Shadcn", "Gemini AI",""
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Harry-kp/devstrologer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/415480b1-f2aa-420a-96b1-9ce17b4378ce",
    },
    {
      title: "Promptify",
      href: "https://github.com/Harry-kp/promptify",
      dates: "Aug 2024 - Aug 2024",
      active: true,
      description:
        "Built a tool that consolidates text files from a directory into a single file, making it easier to use with AI models for prompting.",
      technologies: [
       "Golang"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Harry-kp/promptify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/11bd8c58-1247-45fa-adb4-f7d4290f9140",
    },
  ],
} as const;
