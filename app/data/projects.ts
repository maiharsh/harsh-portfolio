import type { ProjectData } from "../types/Project.types";

export const projects: ProjectData[] = [
  {
    slug: "railx",
    heading: "Railx",
    subheading: "Railway ticket booking platform",
    image: "/projects/Railx.webp",
    description:
      "RailX is a full-stack railway ticket booking platform that helps passengers discover trains, book tickets, manage journeys, and receive notifications, while also providing administrators with a dashboard to manage trains, schedules, and bookings.",
    tech: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "JWT Authentication",
      "Session Handling",
    ],
    filler: "with a focus on clean architecture and real-world usability.",
    features: [
      "Next.js frontend for passenger and admin interfaces",
      "Express REST APIs for authentication, booking lifecycle, payments, cancellations, and admin operations",
      "MongoDB collections managed via Mongoose models",
      "QR code generation, PDF ticket generation, and notification/email utilities",
    ],
    links: {
      github: "https://github.com/maiharsh/Railx",
    },
  },
  {
    slug: "business-analysis-agent",
    heading: "Business Analysis Agent",
    subheading: "An AI-driven decision intelligence platform",
    image: "/projects/BAA.jpeg",
    description:
      "Business Analysis Agent is an AI-driven platform that continuously monitors business data, activates specialized agents, and delivers human-readable executive insights to support data-driven decisions.",
    tech: [],
    filler: "focusing on reliability and organized data handling.",
    features: [
      "Continuously monitors business data",
      "Activates only the required agents",
      "Produces human-readable executive insights",
      "Supports natural-language decision queries",
    ],
    links: {
      github: "https://github.com/maiharsh/Business-Analysis-Agent",
    },
  },
  {
    slug: "driver-drowsiness-detection-system",
    heading: "Driver Drowsiness Detection System",
    subheading: "Real-time face and eye detection using webcam",
    image: "/projects/DDS.jpeg",
    description:
      "It monitors a driver's eye movements through a webcam feed and detects signs of drowsiness based on the Eye Aspect Ratio (EAR) method.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "SciPy"],
    filler: "with a focus on real-time performance and driver safety.",
    features: [
      "Real-time face and eye detection using webcam input",
      "Eye Aspect Ratio (EAR) based drowsiness monitoring",
      "Automatic alert generation on prolonged eye closure",
      "Facial landmark tracking using MediaPipe Face Mesh",
    ],
    links: {
      github: "https://github.com/maiharsh/Driver-Drowsiness-Detection-System",
    },
  },
  {
    slug: "UPCOMING",
    heading: "UPCOMING",
    subheading: "Will be added soon!",
    image: "/projects/coming-soon.webp",
    description:
      "WORK IN PROGRESS",
    tech: ["TBA"],
    filler: "Stay tuned for an exciting new project that I'm currently working on, which will be added to this portfolio soon!",
    features: [
      "Feature 1: TBA",
    ],
    links: {
      github: "https://github.com/maiharsh",
    },
  },
];