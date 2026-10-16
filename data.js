/* =====================================================================
   ALL WEBSITE CONTENT LIVES IN THIS FILE.
   Edit the text between the quotes. Keep commas and brackets as they are.
   ===================================================================== */

window.SITE = {

  /* ---------------- Basic info ---------------- */
  name: "Md Shanian Moed",
  shortTitle: "Lecturer, EEE · AUST",
  role: "Lecturer, Dept. of EEE",
  affiliation: "Ahsanullah University of Science and Technology",
  affiliationUrl: "https://www.aust.edu",
  location: "Dhaka, Bangladesh",
  photo: "me.jpg",          // put a square photo named me.jpg in the repo. If missing, initials are shown.

  tagline: "I model materials one atom thick, and the devices built from them.",
  summary:
    "COMSOL/TCAD device modeling, perovskite photovoltaics and plasmonic biosensors. " +
    "Moving into DFT of 2D materials, CNTFETs and GaN HEMTs.",

  // Green status pill under the summary. Set to "" to hide it.
  status: "Seeking funded PhD opportunities",

  cv: "cv.pdf",                                // put your CV in the repo as cv.pdf
  email: "shanian.aca@gmail.com",
  links: {                                     // leave "" to hide a button
    scholar: "https://scholar.google.com/citations?user=WgNzwxEAAAAJ&hl=en",
    orcid: "",
    researchgate: "",
    github: "https://github.com/shanianmoed",
    linkedin: ""
  },

  /* ---------------- Numbers strip ----------------
     "auto" values are counted from the lists below. */
  stats: [
    { value: "auto:published", label: "papers" },
    { value: "9",              label: "citations" },
    { value: "2",              label: "h-index" },
    { value: "auto:areas",     label: "research interests" }
  ],

  /* Citations per year (Google Scholar). Update now and then. */
  citations: [
    { year: 2023, count: 1 },
    { year: 2024, count: 1 },
    { year: 2025, count: 4 },
    { year: 2026, count: 3 }
  ],
  metricsNote: "Scholar · Oct 2026",

  /* ---------------- Research areas ---------------- */
  areas: [
    {
      id: "pv", color: "green",
      title: "Photovoltaic cells",
      topics: ["lead-free perovskites", "3D opto-electrical", "interface losses"]
    },
    {
      id: "tcad", color: "rose",
      title: "COMSOL and TCAD modeling",
      topics: ["FEM multiphysics", "wave optics", "drift–diffusion", "thermal"]
    },
    {
      id: "dft", color: "violet",
      title: "DFT of 2D materials",
      topics: ["band structure", "strain & defects", "vdW heterostructures"]
    },
    {
      id: "nano", color: "cyan",
      title: "Nanoelectronics and CNTFETs",
      topics: ["chirality", "ballistic transport", "short-channel scaling"]
    },
    {
      id: "hemt", color: "amber",
      title: "High-electron-mobility transistors",
      topics: ["AlGaN/GaN 2DEG", "breakdown", "self-heating", "RF"]
    },
    {
      id: "bio", color: "teal",
      title: "Plasmonic biosensing",
      topics: ["SPR", "HfO₂ layers", "ML optimization", "cancer screening"]
    },
    {
      id: "grid", color: "blue",
      title: "Smart-grid optimization",
      topics: ["demand-side management", "EV charging", "genetic algorithms"]
    }
  ],

  /* ---------------- Publications (from Google Scholar) ----------------
     status: "published", "review", "accepted" or "preprint" */
  me: "Moed, M. S.",
  publications: [
    {
      title: "Reinventing plasmonic biosensing: Novel machine learning optimization of HfO₂-assisted architectures for colorectal cancer screening",
      authors: "Moed, M. S.; et al.",          // EDIT: full author list
      venue: "Electron", publisher: "", year: 2026,
      status: "review", type: "Journal", rank: "",
      areas: ["bio"], selected: true,
      links: { doi: "", preprint: "", code: "", data: "", bibtex: "" }
    },
    {
      title: "Three-dimensional finite-element-based coupled optical-electrical modeling of Cs₂AgBiBr₆ double perovskite solar cells: Device-level optimization for enhanced efficiency",
      authors: "Moed, M. S.; Siddiquee, A. A.; Kashem, M. T. B.",
      venue: "Solar Energy Materials and Solar Cells, vol. 304, 114441", publisher: "Elsevier", year: 2026,
      status: "published", type: "Journal", rank: "",
      areas: ["pv", "tcad"], selected: true,
      links: {
        doi: "https://www.sciencedirect.com/science/article/pii/S0927024826002825",
        preprint: "https://arxiv.org/abs/2602.15759",
        code: "", data: "", bibtex: ""
      }
    },
    {
      title: "A consumer-friendly demand side management technique for residential loads supported by two stage genetic algorithm-based optimization",
      authors: "Moed, M. S.; Mahmud, S.; Aziz, T.; Abdullah-Al-Nahid, S.; Khan, T. A.",
      venue: "2022 Global Energy Conference (GEC), pp. 229–234", publisher: "IEEE", year: 2022,
      status: "published", type: "Conference", rank: "",
      areas: ["grid"], selected: true,
      links: { doi: "https://ieeexplore.ieee.org/abstract/document/9986733/", preprint: "", code: "", data: "", bibtex: "" }
    },
    {
      title: "A genetic algorithm based network friendly charging scheme for electric vehicles",
      authors: "Moed, M. S.; Alam, T.; Khan, T. A.; Abdullah-Al-Nahid, S.; Aziz, T.",
      venue: "2022 International Conference on Green Energy, Computing and Sustainable Technology (GECOST), pp. 423–427", publisher: "IEEE", year: 2022,
      status: "published", type: "Conference", rank: "",
      areas: ["grid"], selected: true,
      links: { doi: "https://ieeexplore.ieee.org/abstract/document/10010699/", preprint: "", code: "", data: "", bibtex: "" }
    }
  ],

  /* ---------------- Simulation and code projects ---------------- */
  projects: [
    {
      title: "3D model of Cs₂AgBiBr₆ solar cells",
      kind: "COMSOL · M.Sc. thesis",
      status: "published",
      text: "3D opto-electrical-thermal FEM model for device-level optimization.",
      tags: ["COMSOL", "Perovskite PV", "Finite element"],
      areas: ["pv", "tcad"],
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S0927024826002825", code: "", data: "" }
    },
    {
      title: "Two-stage GA demand-side management",
      kind: "Optimization model",
      status: "published",
      text: "GA scheduler that shifts residential loads to cut cost.",
      tags: ["Genetic algorithm", "Demand-side management"],
      areas: ["grid"],
      links: { paper: "https://ieeexplore.ieee.org/abstract/document/9986733/", code: "", data: "" }
    },
    {
      title: "Network-friendly EV charging",
      kind: "Optimization model",
      status: "published",
      text: "GA charging schedule that eases distribution-network load.",
      tags: ["Genetic algorithm", "Electric vehicles"],
      areas: ["grid"],
      links: { paper: "https://ieeexplore.ieee.org/abstract/document/10010699/", code: "", data: "" }
    }
  ],

  /* ---------------- Experience (newest first) ---------------- */
  experience: [
    {
      start: "Dec 2025", end: "Present",
      title: "Lecturer (Grade-I), EEE",
      org: "AUST", orgUrl: "https://www.aust.edu", place: "Dhaka",
      tags: [],
      points: ["Grade-II, Oct 2023 – Dec 2025."]   // EDIT: add courses you teach, students you supervise
    },
    {
      start: "Oct 2022", end: "Oct 2023",
      title: "Lecturer, EEE",
      org: "Southeast University", orgUrl: "", place: "Dhaka",
      tags: [],
      points: []                                                                    // EDIT: add what you did here
    }
  ],

  /* ---------------- Education (newest first) ---------------- */
  education: [
    {
      start: "2023", end: "2026",
      title: "M.Sc. in EEE",
      org: "AUST", orgUrl: "https://www.aust.edu", place: "Dhaka",
      tags: ["CGPA 4.00/4"],
      points: ["Thesis: 3D modeling of double perovskite solar cells in COMSOL."]
    },
    {
      start: "2017", end: "2022",
      title: "B.Sc. in EEE",
      org: "AUST", orgUrl: "https://www.aust.edu", place: "Dhaka",
      tags: ["CGPA 3.932/4"],
      points: ["Thesis: GA-based demand-side management and EV charging."]
    }
  ],

  /* ---------------- Tools and methods ---------------- */
  // EDIT: keep only the tools you actually use
  skills: [
    { group: "Device simulation", items: ["COMSOL Multiphysics", "Silvaco TCAD", "Sentaurus TCAD", "SCAPS-1D"] },
    { group: "First-principles", items: ["Quantum ESPRESSO", "VASP", "VESTA"] },
    { group: "Programming", items: ["MATLAB", "Python", "Origin", "LaTeX"] }
  ],

  /* ---------------- Teaching and talks (set to [] to hide) ---------------- */
  teaching: [
    // { title: "Course code and name", text: "One-line description", url: "#" }
  ],

  /* ---------------- Awards, service, memberships (set to [] to hide) ---------------- */
  awards: [
    // { group: "Awards and scholarships", items: [ { title: "Award name", meta: "Awarding body · 2024" } ] },
    // { group: "Memberships", items: [ { title: "IEEE Member", meta: "2022 – Present" } ] }
  ]
};
