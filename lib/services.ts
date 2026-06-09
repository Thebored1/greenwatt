export interface ServiceScope {
  title: string;
  items: string[];
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  scope: ServiceScope[];
  deliverables: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "earth-integrity-testing",
    name: "Earth Integrity Testing",
    tagline: "Earthing System Testing & Verification",
    icon: "⚡",
    description:
      "A properly designed and maintained earthing system is the foundation of electrical safety. Earth integrity testing verifies that the earthing network provides a low-impedance fault current return path, limits touch and step potentials to safe levels, and ensures protective devices operate reliably during an earth fault.",
    scope: [
      {
        title: "Earth Resistance Measurement",
        items: [
          "Fall-of-potential (three-terminal) method for individual earth electrodes and earth mats",
          "Stakeless / clamp-on earth resistance testing for multi-point earthing networks",
          "Selective testing of individual earth electrodes within a combined earth grid",
        ],
      },
      {
        title: "Soil Resistivity Survey",
        items: [
          "Wenner four-pin method across the site footprint",
          "Soil resistivity profile at different electrode spacings to determine soil layer structure",
          "Data used for earth grid design verification or remediation planning",
        ],
      },
      {
        title: "Earth Grid Integrity Verification",
        items: [
          "Continuity testing of buried earth conductors and bonding connections",
          "Step and touch potential measurement at critical locations",
          "Comparison against IEC 60364, IS 3043, and IEEE Std 80 limits",
        ],
      },
      {
        title: "Neutral Earthing Resistor (NER) Testing",
        items: [
          "Resistance and condition check of neutral earthing resistors",
          "High-current injection test for NER performance verification",
        ],
      },
    ],
    deliverables: [
      "Site layout drawing with test point locations",
      "Measured earth resistance values and pass/fail assessment",
      "Soil resistivity profile",
      "Recommendations for remediation where values exceed limits",
      "Photographs of test setup and any identified issues",
    ],
  },
  {
    slug: "energy-meter-testing",
    name: "Energy Meter Testing",
    tagline: "On-Site Revenue Meter Verification & Calibration",
    icon: "📊",
    description:
      "On-site testing and verification of installed revenue-grade and industrial energy meters using portable reference standards, ensuring accuracy and compliance with CEA (Meters) Regulations. Green Watt's team verifies meters in the field without removing them from service, reducing downtime and cost.",
    scope: [
      {
        title: "Revenue Meter Verification",
        items: [
          "Comparison of installed meter against Class 0.05 portable reference standard",
          "Accuracy test at multiple load points (100%, 50%, 25%, 10% of rated current)",
          "Power factor variation test (unity and 0.5 lag)",
          "Starting current and no-load (creep) test",
        ],
      },
      {
        title: "CT/PT Ratio and Burden Verification",
        items: [
          "Verification that installed metering CT and PT ratios match meter nameplate settings",
          "Secondary burden measurement to confirm CT/PT loading is within rated burden",
          "CT accuracy class verification using the CT/PT analyzer",
        ],
      },
      {
        title: "Meter Sealing and Documentation",
        items: [
          "Tamper-evidence sealing of verified meters",
          "Completion of statutory meter test report forms",
          "Updating of utility meter management system records",
        ],
      },
    ],
    deliverables: [
      "Meter test report with as-found and as-left accuracy results",
      "CT/PT verification record",
      "CEA-compliant test certificate",
      "Recommendations for replacement of out-of-tolerance meters",
    ],
  },
  {
    slug: "relay-testing",
    name: "Relay Testing",
    tagline: "Protection Relay Testing & Commissioning Services",
    icon: "🛡️",
    description:
      "The protection relay system is the last line of defence against electrical faults that can destroy assets and endanger lives. Green Watt's relay testing service covers commissioning, periodic maintenance testing, and post-fault investigation of protection relays from simple overcurrent relays to complex numerical IEDs.",
    scope: [
      {
        title: "Commissioning Testing",
        items: [
          "Visual inspection of relay panel wiring against approved drawings",
          "Secondary injection testing of each relay element with advanced relay test equipment",
          "Verification of relay settings against protection coordination study",
          "Binary input and output functional testing",
          "CT and PT circuit continuity, polarity, and burden verification",
          "End-to-end protection scheme testing (POTT, DUTT schemes)",
          "Differential relay percentage-bias characteristic verification",
          "Distance relay characteristic verification (Mho, Quadrilateral)",
        ],
      },
      {
        title: "Periodic Maintenance Testing",
        items: [
          "Secondary injection at key points of each characteristic",
          "Trip circuit integrity and trip coil resistance verification",
          "Battery and DC supply voltage check",
          "Relay flag, target, and indication check",
        ],
      },
      {
        title: "IED (Intelligent Electronic Device) Testing",
        items: [
          "IEC 61850 GOOSE message functional testing using K68i relay test set",
          "Setting file version verification and change management record",
          "Disturbance record retrieval and analysis",
        ],
      },
      {
        title: "Post-Fault Investigation",
        items: [
          "Relay event record and disturbance recorder data extraction and analysis",
          "Assessment of relay operation (correct, overreach, underreach, non-operation)",
          "Recommendations for setting revision",
        ],
      },
    ],
    deliverables: [
      "Relay test report with as-found and as-left settings for each relay",
      "Protection coordination assessment notes",
      "Commissioning certificate or maintenance record",
      "Recommended actions for any out-of-tolerance relays",
    ],
  },
  {
    slug: "thermal-imaging-services",
    name: "Thermal Imaging Surveys",
    tagline: "Infrared Thermography for Electrical Infrastructure",
    icon: "🌡️",
    description:
      "Thermal imaging detects heat generated by resistance increases, overloaded conductors, loose connections, and failing components — before any visible sign of a problem. Green Watt's certified thermographers carry out thermal imaging surveys of HV and LV electrical equipment for utilities, industrial facilities, data centres, and commercial buildings across India.",
    scope: [
      {
        title: "High-Voltage Primary Equipment",
        items: [
          "Power transformers — tank hot spots, bushing top connections, cooler pipework",
          "11 kV, 33 kV, and EHV outdoor switchgear — busbar connections, isolator contacts",
          "GIS — local hot spots on gas compartment enclosures",
          "Transformer LV and HV cable sealing ends and gland plates",
        ],
      },
      {
        title: "LT and MV Secondary Equipment",
        items: [
          "MV/LV switchboards and distribution boards — bus joints, cable lugs, circuit breaker connections",
          "Motor control centres (MCCs) — overloaded motor feeders, contactors",
          "Power factor correction (PFC) capacitor banks",
          "UPS and battery charger output terminals",
          "Control and protection relay panels",
        ],
      },
      {
        title: "Overhead Lines and Structures",
        items: [
          "Transmission and distribution line conductor joints and compression sleeves",
          "Overhead line insulator strings — pollution-induced heating",
          "Overhead earth wire connections",
        ],
      },
      {
        title: "Solar PV Arrays",
        items: [
          "Module-level thermal survey for hot-cell defects, bypass diode failures",
          "String combiner box connection thermal check",
        ],
      },
    ],
    deliverables: [
      "Thermal and visible-light image pairs for every anomaly found",
      "Measured and reference temperatures with delta-T values",
      "Severity classification (Immediate, Urgent, Routine) per NETA/IS standards",
      "Identification of equipment, location, and recommended corrective action",
      "Priority ranking for maintenance scheduling",
    ],
  },
  {
    slug: "partial-discharge-detection",
    name: "Partial Discharge Detection",
    tagline: "On-Site PD Survey Services for HV Assets",
    icon: "🔍",
    description:
      "Partial discharge (PD) is a proven precursor to insulation failure in cables, transformers, switchgear, and rotating machines — and it can be detected long before failure occurs. Green Watt's PD detection service surveys energised HV equipment in service, identifying and locating PD sources without any interruption to supply.",
    scope: [
      {
        title: "Cable PD Surveys",
        items: [
          "HFCT sensors clamped onto cable earth conductors for non-invasive detection",
          "PD pulse propagation analysis along the cable",
          "Defect location by time-domain reflectometry",
        ],
      },
      {
        title: "Switchgear & Transformer Surveys",
        items: [
          "TEV (Transient Earth Voltage) surface contact sensors for metal-clad switchgear",
          "UHF coupler sensors for GIS and large power transformers",
          "Acoustic/ultrasonic sensors for airborne PD source location",
        ],
      },
      {
        title: "Advanced Diagnostics",
        items: [
          "Phase-Resolved PD Pattern (PRPD) analysis for defect classification",
          "Floating discharge, void discharge, and surface discharge identification",
          "Severity assessment and remaining life estimation where applicable",
        ],
      },
    ],
    deliverables: [
      "Phase-resolved PD pattern plots for each measurement point",
      "Defect classification and severity assessment",
      "Estimated remaining life where standard assessment criteria apply",
      "Prioritised action list: immediate, within 12 months, monitor",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
