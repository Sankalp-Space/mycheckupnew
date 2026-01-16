export const testPackages = [
  {
    slug: "winter-special-offer-with-free-cardiac-screening",
    name: "Winter Special Offer with Free Cardiac Screening",
    subtitle: "Seasonal package with heart health add-on",
    price: 1699,
    mrp: 3499,
    reportTime: "24-48 hours",
    sampleType: "Blood",
    fasting: "8-10 hours",
    tags: ["Most Booked"],
    highlights: [
      "Heart health screening",
      "Home sample collection",
      "Doctor verified reports",
    ],
  },
  {
    slug: "fit-india-full-body-checkup-essential",
    name: "Fit India Full Body Checkup Essential",
    subtitle: "Baseline full body screening for everyday wellness",
    price: 1299,
    mrp: 2699,
    reportTime: "24 hours",
    sampleType: "Blood",
    fasting: "Not required",
    tags: ["Best Value"],
    highlights: [
      "Essential vitals coverage",
      "Lifestyle markers",
      "NABL certified labs",
    ],
  },
  {
    slug: "annual-full-body-checkup-advance",
    name: "Annual Full Body Checkup Advance",
    subtitle: "Comprehensive annual wellness panel",
    price: 2199,
    mrp: 3999,
    reportTime: "24-48 hours",
    sampleType: "Blood",
    fasting: "10-12 hours",
    tags: ["Doctor Recommended"],
    highlights: [
      "Advanced hormone screening",
      "Metabolic and cardiac markers",
      "Detailed health insights",
    ],
  },
];

export const tests = [
  {
    slug: "thyroid-test",
    name: "Thyroid Profile Test",
    shortDescription: "Thyroid health screening for T3, T4, and TSH.",
    price: 499,
    mrp: 799,
    tags: ["Most Booked", "Best Value"],
    sampleType: "Blood",
    reportTime: "24 hours",
    fasting: "Not required",
    parametersCount: 3,
    includes: ["T3", "T4", "TSH"],
    overview: {
      about:
        "This test helps evaluate thyroid gland function and hormone balance.",
      whyImportant: [
        "Detects hypo or hyperthyroidism early",
        "Supports energy, weight, and mood monitoring",
        "Guides hormone management plans",
      ],
    },
    whatsIncluded: {
      listTitle: "Includes (3 parameters):",
      items: ["T3", "T4", "TSH"],
    },
    preparation: [
      "No special preparation needed unless advised by your doctor.",
      "Share ongoing medications with the phlebotomist.",
    ],
    whoShouldTake: [
      "People with fatigue, weight changes, or hair loss",
      "Anyone on thyroid medication monitoring",
      "Routine health checkups",
    ],
    faqs: [
      {
        question: "When will I receive my report?",
        answer: "Reports are usually delivered within 24 hours.",
      },
      {
        question: "Is fasting required?",
        answer: "Fasting is not required for this test.",
      },
    ],
  },
  {
    slug: "tsh-3rd-generation",
    name: "TSH 3rd Generation Test",
    shortDescription: "Highly sensitive TSH screening for thyroid function.",
    price: 399,
    mrp: 699,
    tags: ["Doctor Recommended"],
    sampleType: "Blood",
    reportTime: "24 hours",
    fasting: "Not required",
    parametersCount: 1,
    includes: ["TSH Level"],
    overview: {
      about:
        "A precise TSH test to monitor thyroid activity and hormone balance.",
      whyImportant: [
        "Helps detect early thyroid imbalance",
        "Useful for therapy monitoring",
        "Supports hormonal health tracking",
      ],
    },
    whatsIncluded: {
      listTitle: "Includes (1 parameter):",
      items: ["TSH Level"],
    },
    preparation: [
      "No fasting required.",
      "Inform the team about any thyroid medication.",
    ],
    whoShouldTake: [
      "People with suspected thyroid issues",
      "Patients adjusting thyroid medication",
      "Annual wellness screening",
    ],
    faqs: [
      {
        question: "Is this test different from a full thyroid profile?",
        answer: "This test measures only TSH, while a profile includes T3 and T4.",
      },
    ],
  },
  {
    slug: "prolactin-test",
    name: "Prolactin Test",
    shortDescription: "Measures prolactin levels to assess hormonal balance.",
    price: 549,
    mrp: 899,
    tags: ["Best Value"],
    sampleType: "Blood",
    reportTime: "24-48 hours",
    fasting: "Not required",
    parametersCount: 1,
    includes: ["Prolactin Level"],
    overview: {
      about:
        "This test measures prolactin hormone levels for reproductive health insights.",
      whyImportant: [
        "Supports fertility assessments",
        "Helps identify hormonal imbalance",
        "Useful for menstrual irregularities",
      ],
    },
    whatsIncluded: {
      listTitle: "Includes (1 parameter):",
      items: ["Prolactin Level"],
    },
    preparation: [
      "Avoid stress and intense exercise before sample collection.",
      "Follow your clinician's instructions on timing.",
    ],
    whoShouldTake: [
      "Individuals with fertility concerns",
      "People with irregular periods",
      "Anyone advised by a clinician",
    ],
    faqs: [
      {
        question: "What sample type is used?",
        answer: "This test requires a blood sample.",
      },
    ],
  },
  {
    slug: "testosterone-total-test",
    name: "Testosterone Total Test",
    shortDescription: "Checks total testosterone levels for hormonal balance.",
    price: 649,
    mrp: 999,
    tags: ["Most Booked"],
    sampleType: "Blood",
    reportTime: "24 hours",
    fasting: "Not required",
    parametersCount: 1,
    includes: ["Total Testosterone"],
    overview: {
      about:
        "Evaluates total testosterone levels to support hormonal and metabolic health.",
      whyImportant: [
        "Assesses hormonal imbalance",
        "Supports reproductive health insights",
        "Monitors treatment effectiveness",
      ],
    },
    whatsIncluded: {
      listTitle: "Includes (1 parameter):",
      items: ["Total Testosterone"],
    },
    preparation: [
      "Sample is usually collected in the morning.",
      "Follow any medication guidance from your doctor.",
    ],
    whoShouldTake: [
      "Individuals with low energy or libido",
      "People monitoring hormone therapy",
      "Clinician-recommended screening",
    ],
    faqs: [
      {
        question: "When is the best time to take this test?",
        answer: "Morning collection is preferred for accurate levels.",
      },
    ],
  },
  {
    slug: "anti-mullerian-hormone-amh-test",
    name: "Anti Mullerian Hormone (AMH) Test",
    shortDescription: "Assesses ovarian reserve and fertility planning.",
    price: 799,
    mrp: 1299,
    tags: ["Doctor Recommended"],
    sampleType: "Blood",
    reportTime: "24-48 hours",
    fasting: "Not required",
    parametersCount: 1,
    includes: ["AMH Level"],
    overview: {
      about:
        "AMH testing helps evaluate ovarian reserve for fertility insights.",
      whyImportant: [
        "Supports fertility planning",
        "Guides treatment options",
        "Tracks reproductive health status",
      ],
    },
    whatsIncluded: {
      listTitle: "Includes (1 parameter):",
      items: ["AMH Level"],
    },
    preparation: [
      "No fasting required.",
      "Share any fertility medications with the lab team.",
    ],
    whoShouldTake: [
      "Individuals planning pregnancy",
      "Patients undergoing fertility treatment",
      "Clinician-advised hormonal screening",
    ],
    faqs: [
      {
        question: "Is this test suitable for any day in the cycle?",
        answer: "Yes, AMH can usually be tested on any day.",
      },
    ],
  },
];
