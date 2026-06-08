export interface SectorApplication {
  title: string;
  items: string[];
}

export interface Sector {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  applications: SectorApplication[];
  clients?: string[];
  products: string[];
}

export const sectors: Sector[] = [
  {
    slug: "power-substations",
    name: "Power Substations",
    tagline: "Electrical Testing Solutions for Transmission & Distribution Substations",
    description:
      "Power substations are the nodes of India's electrical grid — stepping voltage up and down, switching power flows, and protecting the network from faults. Every transformer, circuit breaker, protection relay, CT, PT, busbar, and cable must be maintained and tested to the highest standard. Green Watt provides both the instruments and the field expertise that substation engineers need.",
    applications: [
      {
        title: "Transformer Diagnostics",
        items: [
          "Winding resistance testing — detects tap changer contact problems and winding damage",
          "Turns ratio testing (TTR) — verifies ratio accuracy and tap changer sequence",
          "Oil BDV testing — monitors oil dielectric condition",
          "Tan delta testing — insulation ageing assessment for windings and bushings",
          "SFRA — mechanical integrity assessment after through-faults or transportation",
          "Thermal imaging — bushing hot spots and cooler blockage detection",
        ],
      },
      {
        title: "Protection & Relay Testing",
        items: [
          "Kingsine relay test systems for commissioning and periodic testing",
          "IEC 61850 GOOSE and sampled values testing for modern numerical IEDs",
          "CT accuracy and excitation curve verification",
        ],
      },
      {
        title: "Insulation & HV Testing",
        items: [
          "Hipot and VLF testing of cable circuits leaving the substation",
          "Partial discharge surveys of GIS, transformers, and cable sealing ends",
          "Insulation resistance testing of equipment prior to energisation",
        ],
      },
      {
        title: "Metering & Thermal",
        items: [
          "CT/PT analyser for metering transformer accuracy verification",
          "Reference energy meters for installed revenue meter testing",
          "Infrared thermography of all primary plant, busbar connections, and LV switchgear",
        ],
      },
    ],
    clients: ["NTPC", "NPCIL", "NEEPCO", "OHPC", "PGCIL PowerGrid", "PTCUL", "HVNL", "UPPTCL", "BSES", "L&T", "Adani", "Sterlite"],
    products: ["ct-pt-analyzer", "relay-testing-equipment", "transformer-turns-ratio-tester", "winding-resistance-tester", "tan-delta-tester", "sfra-testing", "oil-bdv-tester", "thermal-imagers", "hipot-vlf-testers", "partial-discharge-detectors"],
  },
  {
    slug: "solar-pv-plant",
    name: "Solar PV Plants",
    tagline: "Electrical Testing for Utility-Scale and Commercial Solar PV Plants",
    description:
      "India is one of the world's fastest-growing solar energy markets. Rigorous electrical testing at commissioning, and ongoing performance monitoring during operation, are essential to ensure that solar plants generate the energy they are designed to produce and operate safely throughout their 25-year design life.",
    applications: [
      {
        title: "Commissioning Testing (IEC 62446-1)",
        items: [
          "I-V and P-V curve measurement per string using the MCM1600PV analyser",
          "STC-normalised curve comparison against manufacturer's datasheet",
          "Bipolar insulation resistance testing of each string",
          "String combiner box termination thermal check",
        ],
      },
      {
        title: "DC System Testing",
        items: [
          "Cable insulation resistance and earth fault detection",
          "DC fuse and string protection device continuity check",
          "DC array cable thermal imaging",
        ],
      },
      {
        title: "Ongoing O&M Testing",
        items: [
          "Periodic thermal imaging surveys of PV modules",
          "Annual insulation resistance check of DC strings",
          "DC string current monitoring using MDLA-100A-DC data loggers",
          "Performance ratio trending and energy yield analysis",
        ],
      },
    ],
    clients: ["Utility-scale solar developers", "EPC contractors", "O&M service providers", "Solar plant owners and investors"],
    products: ["solar-pv-testing", "insulation-testers", "thermal-imagers", "clamp-meters", "energy-meters"],
  },
  {
    slug: "transmission-line",
    name: "Transmission Lines",
    tagline: "Testing for EHV Overhead Transmission Infrastructure",
    description:
      "India's extra-high-voltage transmission network spans hundreds of thousands of circuit-kilometres of 66 kV to 765 kV overhead lines. Maintaining the integrity of this vast network requires specialised diagnostic tools that can identify developing faults on energised lines without shutdown — and protection testing tools that verify the relay systems which clear faults when they occur.",
    applications: [
      {
        title: "Thermal Imaging of Overhead Lines",
        items: [
          "Airborne thermal surveys using helicopter or drone-mounted IR cameras",
          "Ground-level inspection using long-range telephoto IR cameras (YRH600)",
          "Identification of thermal anomalies at joints, strain clamps, and spacer dampers",
        ],
      },
      {
        title: "UV Corona Detection",
        items: [
          "Ground-based UV patrol for up to 765 kV towers using OFIL DayCor cameras",
          "Helicopter-borne UV survey for rapid long-line inspection",
          "Quantitative corona intensity measurement for severity assessment",
        ],
      },
      {
        title: "Protection Testing at Transmission Substations",
        items: [
          "End-to-end distance relay zone reach and time verification",
          "Pilot protection scheme testing (POTT, DUTT, blocking schemes)",
          "Auto-reclose dead-time and synchronism-check function testing",
          "Power swing blocking and out-of-step tripping verification",
        ],
      },
    ],
    clients: ["PGCIL PowerGrid", "State transmission utilities", "PTCUL", "HVNL", "UPPTCL", "EPC transmission contractors"],
    products: ["thermal-imagers", "gas-detection-cameras", "relay-testing-equipment"],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    tagline: "Electrical Testing for Onshore and Offshore Oil & Gas Facilities",
    description:
      "Oil and gas facilities operate electrical systems in some of the most demanding and hazardous environments — from onshore processing plants with Ex-rated equipment to offshore platforms. Green Watt provides electrical testing instruments and field services that help oil and gas operators maintain electrical safety, equipment reliability, and regulatory compliance.",
    applications: [
      {
        title: "Hazardous Area Equipment Testing",
        items: [
          "Insulation resistance testing of Ex-rated motors, cables, and equipment",
          "Thermal imaging of motor starters, MCC panels, and cable terminations in safe areas",
          "Earth integrity testing of storage tank earthing and bonding systems",
          "Battery and UPS system testing for critical control power",
        ],
      },
      {
        title: "Substation Equipment Testing",
        items: [
          "Transformer diagnostic testing (winding resistance, oil BDV, turns ratio)",
          "Protection relay testing of incoming feeder and transformer protection",
          "CT/PT verification for revenue and protection metering",
          "Partial discharge surveys of HV switchgear and cable systems",
        ],
      },
      {
        title: "Thermal Surveys",
        items: [
          "Thermography of HV and LV switchgear, motor control centres, and panel boards",
          "Cable tray and conduit system thermal assessment",
          "Heat exchanger and process equipment thermal profiling",
        ],
      },
    ],
    products: ["insulation-testers", "thermal-imagers", "tan-delta-tester", "partial-discharge-detectors", "ct-pt-analyzer", "energy-meters"],
  },
  {
    slug: "data-center",
    name: "Data Centres",
    tagline: "Critical Power Infrastructure Testing for Data Centre Facilities",
    description:
      "Data centres depend on uninterrupted power — even a brief outage can cause significant data loss, SLA breaches, and reputational damage. Green Watt provides electrical testing instruments and services that help data centre operators verify the integrity of their critical power infrastructure, from grid connection through to server-room power distribution.",
    applications: [
      {
        title: "UPS and Battery Systems",
        items: [
          "UPS system performance verification — static and dynamic test",
          "Battery internal resistance measurement for battery health assessment",
          "Thermal imaging of battery strings to identify failing cells",
          "Insulation resistance testing of UPS output circuits",
        ],
      },
      {
        title: "Switchgear and Distribution",
        items: [
          "Thermal imaging of main switchboards, busbar trunking, and PDUs",
          "Partial discharge surveys of HV intake switchgear and transformers",
          "Power quality measurement — voltage harmonics, unbalance, and dips",
          "Relay testing of incoming and bus-tie protection panels",
        ],
      },
      {
        title: "Earthing and Bonding",
        items: [
          "Earth resistance measurement of the facility earthing system",
          "Earth continuity testing of raised floor, equipment racks, and cable ladders",
          "TN-S system earth-neutral separation verification",
        ],
      },
    ],
    products: ["thermal-imagers", "insulation-testers", "partial-discharge-detectors", "clamp-meters", "energy-meters"],
  },
  {
    slug: "telecom",
    name: "Telecom & Communications",
    tagline: "Electrical Testing for Telecommunications Infrastructure",
    description:
      "India's telecommunications network spans mobile towers, optical fibre landing stations, internet exchange points, and broadcast facilities. Power is the lifeblood of telecom — a single power failure can disrupt communications for millions of users. Green Watt provides electrical testing instruments and field services to help telecom operators maintain power reliability and meet statutory safety requirements.",
    applications: [
      {
        title: "Tower Earthing and Lightning Protection",
        items: [
          "Earth resistance measurement at each tower base using fall-of-potential method",
          "Clamp-on earth resistance testing for quick periodic checks",
          "Lightning protection continuity testing",
          "Soil resistivity survey for earthing system design or upgrade",
          "Compliance with IS 3043 and TEC earthing standards",
        ],
      },
      {
        title: "Battery and DC Power Systems",
        items: [
          "DC battery system testing — internal resistance and capacity measurement",
          "Thermal imaging of rectifier/charger units and battery banks",
          "Insulation testing of DC feeders and equipment",
        ],
      },
      {
        title: "Substation and Grid Connection",
        items: [
          "Transformer maintenance testing for telecom facility substations",
          "Relay protection testing for incoming feeder and transformer protection",
          "Thermal imaging of HV/LV switchgear",
        ],
      },
    ],
    products: ["insulation-testers", "thermal-imagers", "clamp-meters", "energy-meters"],
  },
  {
    slug: "aerospace",
    name: "Aerospace",
    tagline: "Precision Electrical Testing for Aviation and Aerospace Ground Infrastructure",
    description:
      "Airport ground power systems and aerospace facility electrical infrastructure must meet the most demanding safety and reliability standards in the world. From airfield ground lighting (AGL) systems to aircraft maintenance hangars and air traffic control facilities, Green Watt provides the precision electrical testing instruments and services required to commission and maintain aviation electrical systems to the standards of DGCA, ICAO, and international aviation engineering practice.",
    applications: [
      {
        title: "Airfield Electrical Systems",
        items: [
          "Insulation resistance testing of constant current series AGL circuits",
          "Earth integrity testing of runway and taxiway lighting infrastructure",
          "Cable fault location on buried airfield cable systems",
          "Thermal imaging of AGL power supplies, CCRs, and switching panels",
        ],
      },
      {
        title: "Hangar and Terminal Facilities",
        items: [
          "HV incoming switchgear thermal imaging and PD surveys",
          "Transformer diagnostic testing — oil BDV, ratio, winding resistance",
          "Protection relay testing for facility power distribution",
          "Energy metering verification for aviation fuel and facility usage",
        ],
      },
      {
        title: "Aircraft Ground Power",
        items: [
          "GPU (Ground Power Unit) output quality measurement",
          "Grounding and bonding verification for aircraft stands",
          "Insulation testing of GPU cables and connections",
        ],
      },
    ],
    products: ["insulation-testers", "thermal-imagers", "relay-testing-equipment", "energy-meters", "clamp-meters"],
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
