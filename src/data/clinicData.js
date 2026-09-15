const clinicData = {
  // Clinic Basic Information
  clinicName: "AIM Multispeciality Clinic",
  tagline: "सही इलाज, स्वस्थ जीवन की पहचान!",
  shortDescription:
    "AIM Multispeciality Clinic provides quality healthcare with experienced doctors, modern facilities and patient-focused care.",

  // Contact Information
  phone: "9506012020",
  alternatePhone: "8874797293",
  email: "aimclinic@gmail.com",

  address:
    "Civil Lines, Kanpur Nagar, Uttar Pradesh - 208001",

  emergency:
    "9506012020",

  // Timing
  timings: {
    mondayToSaturday: "09:00 AM - 08:00 PM",
    sunday: "10:00 AM - 02:00 PM",
    emergency: "24 × 7"
  },

  // About
  about: {
    title: "About AIM Multispeciality Clinic",

    description:
      "AIM Multispeciality Clinic is committed to providing reliable, affordable and patient-focused healthcare services. Our experienced medical professionals provide proper consultation, diagnosis and treatment in a comfortable environment.",

    points: [
      "Experienced Doctors",
      "Modern Medical Facilities",
      "Affordable Treatment",
      "Patient-Centered Care"
    ]
  },

  // Services
  services: [
    {
      id: 1,
      icon: "bi-person-heart",
      title: "General Physician",
      description:
        "General health consultation, diagnosis and treatment."
    },

    {
      id: 2,
      icon: "bi-heart-pulse",
      title: "Cardiology",
      description:
        "Heart health consultation and basic cardiac care."
    },

    {
      id: 3,
      icon: "bi-eye",
      title: "Eye Care",
      description:
        "Eye checkups, consultation and treatment guidance."
    },

    {
      id: 4,
      icon: "bi-emoji-smile",
      title: "Dental Care",
      description:
        "Basic dental consultation and oral healthcare."
    },

    {
      id: 5,
      icon: "bi-person-standing",
      title: "Pediatric Care",
      description:
        "Healthcare and consultation services for children."
    },

    {
      id: 6,
      icon: "bi-capsule",
      title: "Pharmacy",
      description:
        "Medicines and healthcare products for patients."
    }
  ],

  // Doctors
  doctors: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      qualification: "MBBS, MD",
      specialization: "General Physician",
      experience: "12+ Years Experience",
      image: "/doctor1.jpg"
    },

    {
      id: 2,
      name: "Dr. Priya Sharma",
      qualification: "MBBS, MS",
      specialization: "Women's Health",
      experience: "10+ Years Experience",
      image: "/doctor2.jpg"
    },

    {
      id: 3,
      name: "Dr. Amit Verma",
      qualification: "MBBS, MD",
      specialization: "Pediatrician",
      experience: "8+ Years Experience",
      image: "/doctor3.jpg"
    }
  ],

  // Facilities
  facilities: [
    {
      id: 1,
      icon: "bi-hospital",
      title: "Modern Clinic",
      description:
        "Clean and comfortable healthcare environment."
    },

    {
      id: 2,
      icon: "bi-cpu",
      title: "Modern Equipment",
      description:
        "Well-equipped facilities for better diagnosis."
    },

    {
      id: 3,
      icon: "bi-clock",
      title: "24×7 Emergency",
      description:
        "Emergency assistance available for patients."
    },

    {
      id: 4,
      icon: "bi-wifi",
      title: "Digital Services",
      description:
        "Easy online appointment and patient support."
    }
  ],

  // Statistics
  stats: [
    {
      number: "10+",
      title: "Years Experience"
    },

    {
      number: "25K+",
      title: "Happy Patients"
    },

    {
      number: "15+",
      title: "Medical Experts"
    },

    {
      number: "10+",
      title: "Healthcare Services"
    }
  ],

  // Gallery
  gallery: [
    {
      image: "/clinic1.jpg",
      title: "Clinic Reception"
    },

    {
      image: "/clinic2.jpg",
      title: "Consultation Room"
    },

    {
      image: "/clinic3.jpg",
      title: "Medical Facility"
    },

    {
      image: "/clinic4.jpg",
      title: "Waiting Area"
    },

    {
      image: "/clinic5.jpg",
      title: "Healthcare Services"
    },

    {
      image: "/clinic6.jpg",
      title: "Clinic Staff"
    }
  ],

  // News / Updates
  news: [
    {
      id: 1,
      date: "2026",
      title: "Free Health Checkup Camp",
      description:
        "Free basic health checkup camp for local residents."
    },

    {
      id: 2,
      date: "2026",
      title: "New Doctor Consultation",
      description:
        "Specialist doctor consultation services are now available."
    },

    {
      id: 3,
      date: "2026",
      title: "Online Appointment Started",
      description:
        "Patients can now request appointments through our website."
    },

    {
      id: 4,
      date: "2026",
      title: "Health Awareness Program",
      description:
        "Health awareness and preventive care program for families."
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      icon: "bi-person-badge",
      title: "Experienced Doctors",
      description:
        "Qualified and experienced medical professionals."
    },

    {
      icon: "bi-hospital",
      title: "Modern Facilities",
      description:
        "Clean and comfortable medical facilities."
    },

    {
      icon: "bi-heart",
      title: "Patient Care",
      description:
        "Personal attention and patient-focused treatment."
    },

    {
      icon: "bi-wallet2",
      title: "Affordable Treatment",
      description:
        "Quality healthcare at reasonable prices."
    },

    {
      icon: "bi-calendar-check",
      title: "Easy Appointment",
      description:
        "Quick and convenient appointment booking."
    },

    {
      icon: "bi-shield-check",
      title: "Trusted Healthcare",
      description:
        "Reliable healthcare services for you and your family."
    }
  ]
};

export default clinicData;