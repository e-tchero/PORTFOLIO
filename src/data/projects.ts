export interface Project {
  n: string;
  name: string;
  tag: string;
  desc: string;
  state: string;
  url: string;
}

export const projects: Project[] = [
  {
    n: "01",
    name: "BLACKWING",
    tag: "RUST / REMOTE DESKTOP",
    desc: "A Rust-first remote desktop project exploring controlled, dependable access between devices.",
    state: "IN DEVELOPMENT",
    url: "https://github.com/e-tchero/BLACKWING",
  },
  {
    n: "02",
    name: "AEGIS",
    tag: "PYTHON / SECURITY MONITORING",
    desc: "A security monitoring and analysis project focused on visibility, detection, and investigation workflows.",
    state: "PROJECT",
    url: "https://github.com/e-tchero/AEGIS",
  },
  {
    n: "03",
    name: "NIGHTKRAWLER",
    tag: "RUST / SECURITY TOOLING",
    desc: "A modular Rust security-tooling project developed with an emphasis on engineering discipline and testability.",
    state: "PROJECT",
    url: "https://github.com/e-tchero/NIGHTKRAWLER",
  },
  {
    n: "04",
    name: "HACKFORGE",
    tag: "DEVELOPER / SECURITY UTILITIES",
    desc: "A practical workspace for developing and testing security-focused utilities.",
    state: "PROJECT",
    url: "https://github.com/e-tchero/HACKFORGE",
  },
  {
    n: "05",
    name: "ASHFAMEENA FOODS",
    tag: "BUSINESS / DIGITAL SYSTEMS",
    desc: "Digital presence for Ashfameena Foods, an Abuja-based Nigerian manufacturer and distributor of pap, garri, and related staples.",
    state: "PROJECT",
    url: "https://ashfameenafoods.com",
  },
  {
    n: "06",
    name: "ETCHERO",
    tag: "TECHNOLOGY / SOFTWARE / AUTOMATION",
    desc: "An independent technology initiative focused on digital products, AI tools, and developer utilities.",
    state: "FOUNDER",
    url: "https://etchero.ct.ws",
  },
];

export const links = {
  github: "https://github.com/e-tchero",
  linkedin: "https://www.linkedin.com/in/abdulhameed-aminu",
  etchero: "https://etchero.ct.ws",
};
