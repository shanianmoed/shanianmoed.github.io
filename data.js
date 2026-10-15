/* =====================================================================
   ALL WEBSITE CONTENT LIVES IN THIS FILE.
   Edit the text between the quotes. Keep commas and brackets as they are.
   ===================================================================== */

window.SITE = {

  /* ---------------- Basic info ---------------- */
  name: "Md Shanian Moed",
  shortTitle: "Lecturer, EEE · AUST",
  role: "Lecturer, Department of Electrical and Electronic Engineering",
  affiliation: "Ahsanullah University of Science and Technology",
  affiliationUrl: "https://www.aust.edu",
  location: "Dhaka, Bangladesh",
  photo: "me.jpg",          // put a square photo named me.jpg in the repo. If missing, initials are shown.

  tagline: "I model materials one atom thick, and the devices built from them.",
  summary:
    "My published work covers three-dimensional coupled optical–electrical modeling of lead-free " +
    "Cs₂AgBiBr₆ double perovskite solar cells in COMSOL Multiphysics, and genetic-algorithm " +
    "optimization for smart-grid demand management and EV charging. I am now extending this toward " +
    "first-principles DFT of two-dimensional materials and device simulation of CNTFETs and GaN HEMTs.",

  // Green status pill under the summary. Set to "" to hide it.
  status: "Seeking funded PhD opportunities",

  cv: "cv.pdf",                                // put your CV in the repo as cv.pdf
  email: "you@example.com",                    // EDIT: your email
  links: {                                     // leave "" to hide a button
    scholar: "https://scholar.google.com/citations?user=WgNzwxEAAAAJ&hl=en",
    orcid: "",
    researchgate: "",
    github: "https://github.com/shanianaca",
    linkedin: ""
  },

  /* ---------------- Numbers strip ----------------
     "auto" values are counted from the lists below. */
  stats: [
    { value: "auto:published", label: "Peer-reviewed papers" },
    { value: "9",              label: "Citations on Google Scholar" },
    { value: "2",              label: "h-index" },
    { value: "auto:areas",     label: "Research areas" }
  ],

  /* Citations per year (Google Scholar). Update now and then. */
  citations: [
    { year: 2023, count: 1 },
    { year: 2024, count: 1 },
    { year: 2025, count: 4 },
    { year: 2026, count: 3 }
  ],
  metricsNote: "Google Scholar h-index 2 · Figures as of October 2026",

  /* ---------------- Research areas ---------------- */
  areas: [
    {
      id: "pv", color: "green",
      title: "Photovoltaic cells",
      text: "Lead-free double perovskites such as Cs₂AgBiBr₆ are stable and non-toxic but held back by " +
            "weak absorption and interface losses. I build 3D coupled optical–electrical models to find " +
            "the device geometry and layer stack that recover that efficiency.",
      topics: ["Lead-free double perovskite cells", "3D optical–electrical coupling",
               "Band alignment and interface losses", "Device-level optimization"]
    },
    {
      id: "tcad", color: "rose",
      title: "COMSOL and TCAD modeling",
      text: "The bridge between materials and devices. I build finite-element multiphysics models that " +
            "couple wave optics, drift–diffusion and heat transfer, from structure to J–V and efficiency.",
      topics: ["Finite-element multiphysics", "Wave optics and carrier transport",
               "Opto-electrical and thermal coupling", "Mesh and convergence studies"]
    },
    {
      id: "dft", color: "violet",
      title: "DFT of 2D materials",
      text: "Graphene-family sheets and transition-metal dichalcogenides such as MoS₂ have band gaps " +
            "that shift with strain, stacking and defects. I use first-principles calculations to map " +
            "those shifts and find the configurations worth building a device around.",
      topics: ["Band structure and density of states", "Strain and defect engineering",
               "Van der Waals heterostructures", "Effective mass and mobility"]
    },
    {
      id: "nano", color: "cyan",
      title: "Nanoelectronics and CNTFETs",
      text: "Carbon-nanotube field-effect transistors switch with ballistic transport and a band gap set by " +
            "chirality. I study how tube diameter, contacts and gate geometry decide whether they beat " +
            "silicon at short channel lengths.",
      topics: ["Chirality-dependent band gap", "Ballistic and quantum transport",
               "Contact resistance", "Short-channel scaling"]
    },
    {
      id: "hemt", color: "amber",
      title: "High-electron-mobility transistors",
      text: "In AlGaN/GaN HEMTs, polarization charge forms a two-dimensional electron gas without doping. " +
            "I am interested in how barrier design, field plates and self-heating shape current, " +
            "breakdown and high-frequency behaviour.",
      topics: ["2DEG and polarization charge", "Breakdown and field plates",
               "Self-heating", "RF figures of merit"]
    },
    {
      id: "grid", color: "blue",
      title: "Smart-grid optimization",
      text: "My earlier work used genetic algorithms to schedule residential loads and electric-vehicle " +
            "charging so that consumers save money without straining the distribution network.",
      topics: ["Demand-side management", "EV charging scheduling",
               "Genetic-algorithm optimization", "Residential load modeling"]
    }
  ],

  /* ---------------- Publications (from Google Scholar) ----------------
     status: "published", "review", "accepted" or "preprint" */
  me: "Moed, M. S.",
  publications: [
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
      kind: "COMSOL Multiphysics · M.Sc. thesis",
      status: "published",
      text: "Three-dimensional opto-electrical and thermal finite-element model of double perovskite " +
            "solar cells, used for device-level optimization of efficiency.",
      tags: ["COMSOL", "Perovskite PV", "Finite element"],
      areas: ["pv", "tcad"],
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S0927024826002825", code: "", data: "" }
    },
    {
      title: "Two-stage GA demand-side management",
      kind: "Optimization model",
      status: "published",
      text: "Genetic-algorithm scheduler that shifts residential loads to cut consumer cost while " +
            "respecting comfort constraints.",
      tags: ["Genetic algorithm", "Demand-side management"],
      areas: ["grid"],
      links: { paper: "https://ieeexplore.ieee.org/abstract/document/9986733/", code: "", data: "" }
    },
    {
      title: "Network-friendly EV charging",
      kind: "Optimization model",
      status: "published",
      text: "Genetic-algorithm charging scheme that schedules electric vehicles to reduce stress on " +
            "the distribution network.",
      tags: ["Genetic algorithm", "Electric vehicles"],
      areas: ["grid"],
      links: { paper: "https://ieeexplore.ieee.org/abstract/document/10010699/", code: "", data: "" }
    }
  ],

  /* ---------------- Experience (newest first) ---------------- */
  experience: [
    {
      start: "Dec 2025", end: "Present",
      title: "Lecturer (Grade-I), Department of EEE",
      org: "Ahsanullah University of Science and Technology (AUST)", orgUrl: "https://www.aust.edu", place: "Dhaka, Bangladesh",
      tags: ["Full-time"],
      points: ["Previously Lecturer (Grade-II), October 2023 to December 2025."]   // EDIT: add courses you teach, students you supervise
    },
    {
      start: "Oct 2022", end: "Oct 2023",
      title: "Lecturer, Department of EEE",
      org: "Southeast University", orgUrl: "", place: "Dhaka, Bangladesh",
      tags: ["Full-time"],
      points: []                                                                    // EDIT: add what you did here
    }
  ],

  /* ---------------- Education (newest first) ---------------- */
  education: [
    {
      start: "2023", end: "2026",
      title: "M.Sc. in Electrical and Electronic Engineering",
      org: "Ahsanullah University of Science and Technology (AUST)", orgUrl: "https://www.aust.edu", place: "Dhaka, Bangladesh",
      tags: ["CGPA 4.00 / 4.00"],
      points: ["Thesis: 3D opto-electrical and thermal modeling of double perovskite solar cells in COMSOL Multiphysics, published in Solar Energy Materials and Solar Cells."]
    },
    {
      start: "2017", end: "2022",
      title: "B.Sc. in Electrical and Electronic Engineering",
      org: "Ahsanullah University of Science and Technology (AUST)", orgUrl: "https://www.aust.edu", place: "Dhaka, Bangladesh",
      tags: ["CGPA 3.932 / 4.00"],
      points: ["Research on genetic-algorithm demand-side management and EV charging, published as two first-author IEEE conference papers."]
    }
  ],

  /* ---------------- Tools and methods ---------------- */
  // EDIT: keep only the tools you actually use
  skills: [
    { group: "Device simulation", items: ["COMSOL Multiphysics", "Silvaco TCAD", "Sentaurus TCAD", "SCAPS-1D"] },
    { group: "First-principles", items: ["Quantum ESPRESSO", "VASP", "VESTA"] },
    { group: "Programming and analysis", items: ["MATLAB", "Python", "Origin", "LaTeX"] }
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
