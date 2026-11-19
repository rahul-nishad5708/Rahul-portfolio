export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
  description: string;
  primary?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rahul-nishad5708",
    icon: "Github",
    handle: "@rahul-nishad5708",
    description: "Explore 12+ public repositories, open source experiments, and commits.",
    primary: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rahulnishad12/",
    icon: "Linkedin",
    handle: "in/rahulnishad12",
    description: "Professional networking, updates, and certified credential validation.",
    primary: true,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/raahul_12/",
    icon: "Code2",
    handle: "raahul_12",
    description: "435 verified solved algorithmic challenges across Easy, Medium, and Hard.",
    primary: true,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/rahulnishad5708",
    icon: "Twitter",
    handle: "@rahulnishad5708",
    description: "Thoughts on tech, development learning milestones, and product engineering.",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/rahulnishad5708/",
    icon: "Binary",
    handle: "rahulnishad5708",
    description: "Data Structures & Algorithms problem-solving practice.",
  },
];

