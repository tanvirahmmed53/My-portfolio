/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION - TANVIR AHMMED
 * Department of Electrical & Electronic Engineering
 * Daffodil International University (DIU)
 * ============================================================================
 */

const PORTFOLIO_DATA = {
  // Personal Profile
  profile: {
    name: "Tanvir Ahmmed",
    shortName: "Tanvir",
    role: "Electrical & Electronic Engineering (EEE) Student",
    title: "EEE Student | Embedded Systems & Circuit Enthusiast",
    university: "Daffodil International University (DIU)",
    department: "Department of Electrical & Electronic Engineering",
    studentId: "261-33-005",
    batch: "2026 - 2029 (Expected)",
    address: "House no.#31, Road no.#06, Block-E, Mirpur-1, Dhaka-1216, Bangladesh",
    phone: "+8801703478912",
    email: "ahmmedtanvir53@gmail.com",
    universityEmail: "261-33-005@diu.edu.bd",
    dob: "08/10/2006",
    nationality: "Bangladeshi",
    bio: "I am an Electrical & Electronic Engineering student passionate about electronics, embedded systems, Microcontrollers, programming, electrical circuits, and practical engineering projects. I am continuously developing my technical skills through laboratory work, projects, workshops, and self-learning.",
    bannerImage: "assets/img/hero-banner.png",
    portraitImage: "assets/img/tanvir-portrait.png",
    cvPdf: "assets/docs/Tanvir_Ahmmed_CV.pdf"
  },

  // Social & Professional Links
  socialLinks: [
    {
      platform: "Email",
      url: "mailto:ahmmedtanvir53@gmail.com",
      label: "ahmmedtanvir53@gmail.com",
      icon: "mail"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/tanvir-ahmmed-37525b402",
      label: "linkedin.com/in/tanvir-ahmmed-37525b402",
      icon: "linkedin"
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/channel/UCbZAsGrY-M1Gh_22aR3C9bg",
      label: "YouTube Channel",
      icon: "youtube"
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/Tanvir.Ahmmed.53",
      label: "facebook.com/Tanvir.Ahmmed.53",
      icon: "facebook"
    }
  ],

  // Academic Qualifications
  education: [
    {
      degree: "Bachelor of Science in Electrical and Electronic Engineering (B.Sc. in EEE)",
      institution: "Daffodil International University (DIU)",
      location: "DSC, Birulia, Savar, Dhaka, Bangladesh",
      period: "2026 - Present",
      expectedYear: "2029",
      result: "Ongoing",
      medium: "English",
      description: "Undergraduate program covering electrical circuits, electronics, microprocessors, power systems, and control engineering.",
      courses: [
        "Electrical Circuits",
        "Electronics",
        "Electrical Machines",
        "Engineering Mathematics",
        "Power Systems",
        "Control Systems",
        "Programming",
        "Signal Processing",
        "Physics (Electricity & Magnetism)",
        "Microprocessors"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bangabandhu Ideal School and College, Jamalpur",
      location: "Jamalpur, Bangladesh",
      period: "2022 - 2023",
      passingYear: "2024",
      group: "Science",
      result: "GPA 5.00 out of 5.00",
      description: "Higher secondary education in Science group with excellence in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Tirutha Sattaypir High School, Jamalpur",
      location: "Jamalpur, Bangladesh",
      period: "2020 - 2021",
      passingYear: "2022",
      group: "Science",
      result: "GPA 5.00 out of 5.00",
      description: "Secondary school education with excellence in Science and Mathematics."
    }
  ],

  // Technical & Organizational Highlights
  organizations: [
    {
      organization: "IEEE PES DIU Student Branch Chapter",
      designation: "Online Presence Management",
      skillsGained: [
        "Efficient time management and work organization",
        "Strong ability to prioritize tasks and meet deadlines",
        "Strategic planning and attention to detail",
        "Public communication & digital content management"
      ]
    }
  ],

  // Technical Skills
  skills: {
    programming: [
      { name: "C Programming", level: "Core EEE", tag: "C" },
      { name: "HTML5", level: "Foundational", tag: "Web" }
    ],
    electronicsEmbedded: [
      { name: "Arduino", level: "Hands-on", tag: "MCU" },
      { name: "ESP32", level: "Hands-on", tag: "IoT" },
      { name: "Microcontrollers", level: "Academic & Practical", tag: "Hardware" },
      { name: "Sensors & Actuators", level: "Interfacing", tag: "Sensors" },
      { name: "Embedded Systems", level: "Development", tag: "Embedded" }
    ],
    electricalEngineering: [
      { name: "Electrical Circuits", level: "Core EEE", tag: "Circuits" },
      { name: "Circuit Analysis (AC/DC)", level: "Analytical", tag: "Theory & Practice" },
      { name: "Electrical & Electronics Lab", level: "Laboratory Work", tag: "Hardware Testing" },
      { name: "Power Systems", level: "Academic", tag: "Power" },
      { name: "Electrical Machines", level: "Academic", tag: "Machines" }
    ],
    softwareTools: [
      { name: "Arduino IDE", level: "Firmware Tool", tag: "IDE" },
      { name: "Microsoft Office Suite", level: "Word, Excel, PowerPoint", tag: "Productivity" },
      { name: "Cloud Tools & AI Apps", level: "Data & Workflow", tag: "Cloud/AI" }
    ]
  },

  // Technical Interests
  technicalInterests: [
    { name: "Electronics", icon: "cpu", desc: "Semiconductors, analog & digital electronic systems." },
    { name: "Electrical Circuits", icon: "zap", desc: "AC/DC circuit simulation, mesh/nodal analysis, filter design." },
    { name: "Arduino & ESP32", icon: "activity", desc: "Rapid prototyping, embedded C firmware, Wi-Fi/Bluetooth nodes." },
    { name: "Embedded Systems", icon: "layers", desc: "Microcontroller interfacing, timers, interrupts, and peripherals." },
    { name: "Microcontrollers", icon: "hard-drive", desc: "Architecture, registers, ADC/DAC conversions, and GPIO control." },
    { name: "Sensors & Transducers", icon: "radio", desc: "Ultrasonic, temperature, PIR, current, voltage, and light sensors." },
    { name: "Internet of Things (IoT)", icon: "wifi", desc: "Connected sensor telemetry, cloud monitoring, and remote actuation." },
    { name: "C Programming", icon: "code", desc: "Structured programming, memory management, and hardware level coding." },
    { name: "Automation & Robotics", icon: "bot", desc: "Motor drivers, sensor integration, robotic chassis, and automated logic." },
    { name: "Practical Lab Projects", icon: "tool", desc: "Hands-on breadboarding, PCB wiring, soldering, and oscilloscope testing." }
  ],

  // Projects & Lab Works (Separated 7-Segment Counter & KVL/KCL Verification Lab)
  projects: [
    {
      id: "proj-1",
      title: "Design & Implementation of a 7-Segment Digital Counter (Open-Ended Experiment)",
      category: "Digital Electronics Lab",
      categoryKey: "open-ended",
      status: "Verified Lab Experiment",
      featured: true,
      description: "An Open-Ended Laboratory Experiment involving the design, wiring, and testing of a digital counter circuit driving a 7-segment display for sequential numeric counting.",
      components: [
        "7-Segment Display (Common Cathode/Anode)",
        "Digital Counter IC / BCD Decoder",
        "555 Timer Clock Pulse Generator Circuit",
        "Current Limiting Resistors (330Ω / 1kΩ)",
        "Breadboard & Jumper Wires",
        "Regulated DC Power Supply (5V)"
      ],
      contribution: "Designed the schematic diagram, assembled the breadboard circuit, connected the counter IC with the 7-segment display decoder, calibrated clock pulse frequency using 555 timer RC values, and verified stable digit transitions.",
      skillsLearned: [
        "Digital Logic & Counter Operation",
        "7-Segment Display Pin Configuration & Decoders",
        "Clock Pulse Timing & Frequency Calibration",
        "Breadboard Hardware Prototyping & Circuit Debugging"
      ],
      image: "assets/img/7 Segmante Digital Counter.jpeg",
      details: {
        objective: "To design, assemble, and experimentally verify an autonomous digital counting system using digital counter ICs and a 7-segment display.",
        circuitSummary: "The circuit uses a clock pulse generated by an astable timing circuit or push-button trigger, which increments the digital counter IC. The BCD/Binary output is decoded and mapped to the 7-segment LED segments (a through g) through series current-limiting resistors to ensure clear numeric display.",
        keyFeatures: [
          "Sequential numeric counting from 0 to 9 with automatic cycle reset",
          "Astable clock pulse generation with adjustable counting speed",
          "Individual segment current limiting for optimal LED brightness and IC protection",
          "Clean breadboard layout with verified noise-free count transitions"
        ]
      }
    },
    {
      id: "proj-2",
      title: "Verification of Kirchhoff's Voltage Law (KVL) & Kirchhoff's Current Law (KCL) (Open-Ended Experiment)",
      category: "Electrical Circuit Lab",
      categoryKey: "circuit-lab",
      status: "Verified Lab Report",
      featured: true,
      description: "An Open-Ended Laboratory Investigation for Electrical Circuit Lab focusing on experimental verification of Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL) in complex multi-loop DC resistive networks.",
      components: [
        "Variable DC Power Supply",
        "Digital Multimeter (DMM)",
        "Precision Resistors (Various Ohm Values)",
        "Single-Strand Connection Wires",
        "Breadboard Board",
        "DC Ammeter & Voltmeter Probes"
      ],
      contribution: "Constructed dual-loop and multi-node DC circuits on breadboard, measured voltage drops across individual branch resistors, recorded branch currents, performed theoretical mesh and nodal equations, and evaluated experimental percentage error.",
      skillsLearned: [
        "Kirchhoff's Voltage Law (KVL) Loop Equations",
        "Kirchhoff's Current Law (KCL) Nodal Conservation",
        "Precision Instrument Probing & Measurement",
        "Theoretical vs Experimental Error Analysis"
      ],
      image: "assets/img/Circuit Lab.jpg",
      pdfReport: "assets/docs/Open Ended Experiment For Electrical CIrcuit Lab.pdf",
      pdfTitle: "Open Ended Experiment For Electrical Circuit Lab Report (PDF)",
      details: {
        objective: "To experimentally measure branch voltages and currents in resistive networks to prove that algebraic sum of voltages in any closed loop equals zero (KVL) and algebraic sum of currents entering any node equals zero (KCL).",
        circuitSummary: "Constructed multi-mesh resistive networks connected to regulated DC sources. Measured individual resistor voltage drops with high-impedance digital voltmeters and inserted digital ammeters into individual branches to verify conservation laws.",
        keyFeatures: [
          "Complete theoretical calculations alongside experimental Multimeter measurement tables",
          "Verification of algebraic loop summation (∑V = 0) across multiple closed loops",
          "Verification of nodal current distribution (∑I_in = ∑I_out) at circuit junction nodes",
          "Comprehensive laboratory report documenting experimental methodology and conclusion"
        ]
      }
    }
  ],

  // Workshops & Certifications
  workshops: [
    {
      id: "ws-1",
      title: "IEEE PES DIU Student Branch Chapter — Online Presence Management",
      organizer: "IEEE Power & Energy Society (PES) DIU Student Branch Chapter",
      period: "2026 - Present",
      status: "Official Role",
      type: "Student Leadership & Executive Team",
      location: "Daffodil International University, Savar, Dhaka",
      description: "Appointed as Online Presence Management for the IEEE PES DIU Student Branch Chapter. Leading online communications, digital campaigns for power engineering seminars, technical workshops, and chapter events.",
      skills: [
        "Online Presence Management",
        "Technical Seminar Coordination",
        "Team Leadership & Public Communication",
        "Strategic Planning & Execution"
      ],
      certificateAvailable: true,
      certificateFile: "assets/img/Online Presence Management.jpg",
      certificateTitle: "IEEE PES Online Presence Management Appointment"
    },
    {
      id: "ws-2",
      title: "IEEE Power & Energy Society (PES) Certification & Participation",
      organizer: "IEEE Power & Energy Society (PES)",
      period: "2026",
      status: "Verified Certificate",
      type: "Professional Engineering Society Certification",
      location: "Daffodil International University",
      description: "Official certification recognizing active engagement, technical contributions, and organizational excellence within the IEEE Power & Energy Society student branch network.",
      skills: [
        "Power Systems Knowledge",
        "Professional Engineering Ethics",
        "Technical Workshop Organization",
        "Global IEEE Networking"
      ],
      certificateAvailable: true,
      certificateFile: "assets/img/IEEE PES Certificate.png",
      certificateTitle: "IEEE Power & Energy Society Certificate"
    },
    {
      id: "ws-3",
      title: "IEEE Industry Applications Society (IAS) Certification",
      organizer: "IEEE Industry Applications Society (IAS)",
      period: "2026",
      status: "Verified Certificate",
      type: "Technical Society Certification",
      location: "Daffodil International University",
      description: "Official certificate of recognition from the IEEE Industry Applications Society, highlighting technical participation in industrial electronics and electrical applications.",
      skills: [
        "Industrial Electronics Fundamentals",
        "Industry Applications Insight",
        "Engineering Teamwork & Presentation",
        "Applied Technology Standards"
      ],
      certificateAvailable: true,
      certificateFile: "assets/img/IEEE IAS Certificate.png",
      certificateTitle: "IEEE Industry Applications Society Certificate"
    },
    {
      id: "ws-4",
      title: "Hands-on Technical Engineering Workshop",
      organizer: "Department of EEE / IEEE Student Branch, DIU",
      period: "2026",
      status: "Completed",
      type: "Technical Engineering Training",
      location: "DIU Campus, Savar",
      description: "Practical engineering training on circuit hardware assembling, equipment measurements, and project prototyping techniques.",
      skills: [
        "Practical Hardware Assembly",
        "Circuit Troubleshooting",
        "Instrument Handling",
        "Engineering Teamwork"
      ],
      certificateAvailable: true,
      certificateFile: "assets/img/Workshop.jpg",
      certificateTitle: "Technical Engineering Workshop"
    },
    {
      id: "ws-5",
      title: "Robotics & Automation Foundations Training",
      organizer: "Robotics & Automation Wing, DIU",
      period: "2026",
      status: "Completed",
      type: "Robotics Workshop",
      location: "Daffodil International University",
      description: "Introductory bootcamp on robotic mechanisms, microcontrollers, sensor integration, and motor driving logic.",
      skills: [
        "Robotics Fundamentals",
        "Sensor Interfacing",
        "Motor Drivers & Actuation",
        "Microcontroller Logic"
      ],
      certificateAvailable: true,
      certificateFile: "assets/img/Start Robotics.jpg",
      certificateTitle: "Robotics Workshop Session"
    }
  ],

  // Personal Blog & Photo Journal (Strictly ordered per user instruction)
  journal: [
    {
      id: "journal-1",
      title: "Orientation Spring 2026 — Stepping into Daffodil International University",
      date: "Spring 2026",
      location: "Daffodil International University, Birulia, Savar",
      tags: ["Orientation", "DIU", "EEE Student"],
      image: "assets/img/Orientation Spring 2026 PhotoShot.jpg",
      story: "Attending the official Orientation ceremony for Spring 2026 at Daffodil International University. A memorable beginning to my undergraduate engineering journey, meeting fellow peers and faculty."
    },
    {
      id: "journal-2",
      title: "Tanvir Ahmmed — EEE Undergraduate Journey at DIU",
      date: "January 2026",
      location: "Daffodil Smart City Campus",
      tags: ["Tanvir Ahmmed", "Campus Life", "DIU"],
      image: "assets/img/20260124_111559.jpg",
      story: "Standing proud on the green campus of Daffodil International University, dedicated to continuous learning and building practical engineering skills."
    },
    {
      id: "journal-3",
      title: "First Semester Milestone — Celebrating Final Class with Faculty & Peers",
      date: "2026",
      location: "Daffodil International University, Birulia",
      tags: ["1st Semester", "Faculty & Peers", "EEE Journey"],
      image: "assets/img/First Semester Last Class.jpg",
      story: "A proud milestone concluding our 1st semester in the Department of Electrical & Electronic Engineering at DIU with respected faculty members and classmates."
    },
    {
      id: "journal-4",
      title: "Electrical & Electronic Engineering Circuit Lab Experiments",
      date: "2026",
      location: "DIU EEE Circuit Laboratory",
      tags: ["Circuit Lab", "Hardware", "DIU EEE"],
      image: "assets/img/Circuit Lab.jpg",
      story: "Performing circuit measurements, verifying KVL/KCL, connecting power supplies, and testing multi-branch circuits with multimeters and oscilloscopes in the EEE lab."
    },
    {
      id: "journal-5",
      title: "Engineering Chemistry Laboratory Session",
      date: "2026",
      location: "DIU Chemistry Laboratory",
      tags: ["Chemistry Lab", "Science", "Academics"],
      image: "assets/img/Chemistry Lab.jpg",
      story: "Hands-on chemical analysis, material testing, and laboratory experiments exploring material properties relevant to electronic components and semiconductors."
    },
    {
      id: "journal-6",
      title: "Research & Focused Study at DIU Central Library",
      date: "2026",
      location: "DIU Central Library, DSC, Savar",
      tags: ["DIU Library", "Study", "Academic Life"],
      image: "assets/img/DIU Library Main.jpeg",
      story: "Spending quiet, focused study hours exploring circuit theory, engineering textbooks, and academic papers at the DIU Central Library."
    },
    {
      id: "journal-7",
      title: "Academic Focus & Everyday Engineering Moments",
      date: "December 2025",
      location: "Dhaka, Bangladesh",
      tags: ["Personal Story", "Student Life", "EEE"],
      image: "assets/img/WhatsApp Image 2025-12-18 at 3.47.39 PM.jpeg",
      story: "Reflecting on the dedication and preparation that went into securing GPA 5.00 in HSC and SSC, now transitioning those study habits into tackling challenging engineering problems."
    }
  ],

  // References
  references: [
    {
      name: "Md. Emrul Kayes",
      title: "Deputy General Manager (DGM)",
      organization: "Grameen Bank",
      location: "Head Office: Mirpur-2, Dhaka-1216, Bangladesh",
      phone: "+8801711523733",
      email: "bo.north@grameenbank.org.bd"
    },
    {
      name: "Md. Abu Hannan",
      title: "Lecturer in Physics",
      organization: "Jamalpur Ideal School and College",
      location: "Jamalpur, Bangladesh",
      phone: "+8801723888015",
      email: ""
    }
  ]
};

// Export for browser script usage
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
