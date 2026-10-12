const gh = (repo: string) => `https://opengraph.githubassets.com/1/jyotishman-dev/${repo}`;
const X = "https://x.com/jyotishman__dev";

export const profile = {
  name: "Jyotishman Pathak",
  avatar: "/profile.png",
  role: "Full Stack Developer | AI Enthusiast",
  status: "Exploring AI agents · Building in public",
  openToWork: true,
  headline: "I'm a backend engineer who ships real-time systems end-to-end, now building autonomous AI agents from first principles.",
  about: [
    "Final-year Electronics and Instrumentation Engineering student (graduating in 2027), focused on web development, backend real-time systems, and AI agents.",
    "Currently interning at NIELIT, building a comparative analysis system for breast cancer prediction with a focus on explainability using XAI and Grad-CAM.",
    "Previously served as the Web Lead at JIST Coding Club, driving technical initiatives and peer learning.",
    "Passionate about founding engineering, contract builds, and shipping products that solve real-world problems.",
  ],
  github: { 
    label: "This is my GitHub", 
    sub: "@jyotishman-dev", 
    blurb: "Real-time systems, AI agents, and contract builds. READMEs with architecture for each.", 
    href: "https://github.com/jyotishman-dev" 
  },
  resume: { 
    label: "This is my Resume", 
    sub: "PDF · Updated recently", 
    blurb: "One page: founding engineer, backend & real-time systems, AI agents, and contract builds.", 
    href: "/jyotishman-resume.pdf" 
  },
  work: [
    {
      company: "NIELIT",
      title: "Machine Learning Intern",
      period: "Aug 2026 – Present",
      blurb: "Developing a comparative machine learning system for breast cancer prediction, with a focus on explainability using XAI and Grad-CAM."
    },
    {
      company: "BlueStock Fintech",
      title: "Backend Engineering Intern",
      period: "July 2025 – Nov 2025",
      blurb: "Built scalable backend APIs to support core system functionality and improve data processing pipelines."
    },
    {
      company: "Freelance / Contract",
      title: "Founding Engineer & Contractor",
      period: "2025 – Present",
      blurb: "Taking end-to-end ownership of contract builds, from architecture design to deploying production-ready real-time systems."
    }
  ],
  cohort: {
    title: "100xDevs · Web Dev + DevOps Bootcamp",
    href: "https://100xdevs.com/",
    sub: "Harkirat Singh's cohort · Remote",
    blurb: "An intensive, project-based bootcamp covering the MERN stack from fundamentals to production. Built and shipped multiple full-stack applications through weekly assignments and hands-on challenges.",
    period: "June 2026 – Present",
    shipped: [
      { label: "Trading app · Full-stack project", href: "https://github.com/jyotishman-dev/trading-app" },
      { label: "Codeforces clone · Backend + WebSockets", href: "https://github.com/jyotishman-dev/codeforces-clone" },
    ],
  },
  projects: [
    { name: "Centralized Exchange", stack: "TypeScript · Bun · Redis", img: "/projects/cex.png", href: "https://github.com/jyotishman-dev/cex" },
    { name: "Browser Agent", stack: "TypeScript · Playwright · OpenAI API", img: gh("browser-agent"), href: "https://github.com/jyotishman-dev/browser-agent" },
    { name: "QuickDuel", stack: "WebSockets · Redis · BullMQ", img: "/projects/quickduel.png", href: "https://github.com/jyotishman-dev/quickduel" },
    { name: "AI Agent CLI", stack: "TypeScript · Bun · OpenAI API", img: gh("ai-agent-cli"), href: "https://github.com/jyotishman-dev/ai-agent-cli" },
    { name: "Screensy", stack: "TypeScript · Next.js · Canvas API", img: "/projects/screensy.png", href: "https://github.com/jyotishman-dev/screensy" },
    { name: "tui-typer", stack: "TypeScript · React · Ink", img: gh("tui-typer"), href: "https://github.com/jyotishman-dev/tui-typer" },
    { name: "SketchSprint", stack: "TypeScript · WebSockets · Canvas API", img: "/projects/sketchsprint.png", href: "https://github.com/jyotishman-dev/sketchsprint" },
    { name: "CanvasDraft", stack: "TypeScript · Next.js · Canvas API", img: "/projects/canvasdraft.png", href: "https://github.com/jyotishman-dev/canvasdraft" },
    { name: "Sphere Events", stack: "Next.js · Tailwind CSS · Motion", img: "/projects/sphere-landing.png", href: "https://github.com/jyotishman-dev/sphere-landing" },
  ],
  featured: {
    name: "Screensy",
    blurb: "Friendly screen recorder: screen share + face cam + custom wallpaper backgrounds, composited and recorded entirely in the browser.",
    badge: "150+ demos shipped with it, and people are using it",
    img: "/projects/screensy.png",
    site: "https://screensy.jyotishman.work/", // Updated to match your domain style
    repo: "https://github.com/jyotishman-dev/screensy",
  },
  blogs: {
    href: "https://medium.com/@jyotishman.pathak", // Update this with your actual Medium/Hashnode link
    blurb: "I write about distributed systems, deploying to real servers, and building in public.",
    posts: [
      { 
        title: "Thinking About Distributed Systems While Riding the Metro", 
        img: "https://cdn-images-1.medium.com/max/1024/1*7GHrViK6fjYxWyVpDTQLXA.jpeg", 
        href: "https://medium.com/@jyotishman.pathak/distributed-systems-metro-ride" // Update with actual link
      },
      { 
        title: "Deploying Apps on VMs / EC2s: A Practical Guide", 
        img: "https://cdn-images-1.medium.com/max/1024/1*FPW5ozx34jnKWTqaVc0omg.png", 
        href: "https://medium.com/@jyotishman.pathak/deploying-apps-on-vms-ec2s" // Update with actual link
      },
    ],
  },
  tweets: [
    { 
      text: "Built a voice-AI agent using @livekit. Handled speech to text, text to speech, voice activity and turn detection, tool calling, and fallbacks on models.", 
      date: "12:54 PM · Sep 9, 2026", 
      likes: 66, 
      href: `${X}/status/2026288780760756676` 
    },
    { 
      text: "Built this platform in 2.5 days using @claudeai as my coding partner. It records and saves my shared screen in beautiful templates in a fraction of a second.", 
      date: "4:03 PM · Aug 21, 2026", 
      likes: 54, 
      href: `${X}/status/2026288780760756676` 
    },
  
  ],
  contact: { 
    email: "mailto:jyotishman.pathak@example.com", // 👈 Bro, yahan apna actual email daal dena
    linkedin: "https://www.linkedin.com/in/jyotishman-pathak/", // 👈 Apna actual LinkedIn URL daal dena
    x: X 
  },
};