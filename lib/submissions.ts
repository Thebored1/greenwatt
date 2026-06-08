export interface Submission {
  id: string;
  name: string;
  company: string | null;
  designation: string | null;
  email: string;
  phone: string | null;
  team: "Sales" | "Support" | "Demo" | null;
  message: string | null;
  is_read: boolean;
  created_at: string; // ISO string
}

// In-memory store — swap this out for a real DB when ready
const MOCK: Submission[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    company: "NTPC Limited",
    designation: "Senior Engineer",
    email: "r.kumar@ntpc.co.in",
    phone: "+91 98110 45678",
    team: "Sales",
    message:
      "We are interested in the Kingsine K3063i relay test set for our 400 kV substation at Sipat. Could you arrange a demonstration and send a formal quotation for 2 units?",
    is_read: true,
    created_at: new Date(Date.now() - 2 * 86400_000).toISOString(),
  },
  {
    id: "2",
    name: "Priya Sharma",
    company: "L&T Power",
    designation: "Project Manager",
    email: "p.sharma@larsentoubro.com",
    phone: "+91 90221 12345",
    team: "Support",
    message:
      "We purchased a CT/PT Analyzer (Gemini model) 6 months ago and are facing issues with the excitation curve plotting software. Can you assist?",
    is_read: false,
    created_at: new Date(Date.now() - 86400_000).toISOString(),
  },
  {
    id: "3",
    name: "Amit Verma",
    company: "PowerGrid Corporation",
    designation: "Maintenance Superintendent",
    email: "a.verma@powergrid.in",
    phone: null,
    team: "Demo",
    message:
      "Please arrange a field demonstration of your SFRA test system at our 765 kV Agra substation. Evaluating transformer diagnostic equipment for our annual maintenance programme.",
    is_read: false,
    created_at: new Date(Date.now() - 3 * 3600_000).toISOString(),
  },
  {
    id: "4",
    name: "Sunita Patel",
    company: "Adani Green Energy",
    designation: "O&M Engineer",
    email: "sunita.patel@adani.com",
    phone: "+91 79401 98765",
    team: "Sales",
    message:
      "We need a solar PV testing equipment (I-V curve tracer) for our 500 MW plant in Rajasthan. Please quote for MCM1600PV with accessories.",
    is_read: false,
    created_at: new Date(Date.now() - 30 * 60_000).toISOString(),
  },
  {
    id: "5",
    name: "Mohammed Ali",
    company: "Sterlite Power",
    designation: "Commissioning Lead",
    email: "m.ali@sterlitepower.com",
    phone: "+91 44231 67890",
    team: "Support",
    message: null,
    is_read: true,
    created_at: new Date(Date.now() - 5 * 86400_000).toISOString(),
  },
  {
    id: "6",
    name: "Deepak Joshi",
    company: null,
    designation: "Independent Consultant",
    email: "deepak.joshi@gmail.com",
    phone: "+91 98765 43210",
    team: "Demo",
    message:
      "I am a consultant working with multiple DISCOMs in UP. Interested in your portable energy meter reference standard for field testing. Can you share technical specs and pricing?",
    is_read: true,
    created_at: new Date(Date.now() - 7 * 86400_000).toISOString(),
  },
  {
    id: "7",
    name: "Kavitha Reddy",
    company: "BSES Rajdhani",
    designation: "Technical Manager",
    email: "k.reddy@bses.in",
    phone: "+91 11234 56789",
    team: "Sales",
    message:
      "We require 5 units of Monster Jaw Clamp Meters and thermal imagers for 33 kV feeder inspection. Please send catalogue and pricing.",
    is_read: false,
    created_at: new Date(Date.now() - 2 * 3600_000).toISOString(),
  },
  {
    id: "8",
    name: "Sanjay Mehta",
    company: "Indian Railways (RDSO)",
    designation: "Research Officer",
    email: "s.mehta@rdso.indianrailways.gov.in",
    phone: "+91 522 345 6789",
    team: null,
    message:
      "Evaluating partial discharge detection equipment for 25 kV OHE inspection. Please provide technical literature on Penta-PD and arrange a presentation at our Lucknow office.",
    is_read: true,
    created_at: new Date(Date.now() - 10 * 86400_000).toISOString(),
  },
];

export async function getSubmissions(filters?: {
  team?: string;
  unread?: boolean;
}): Promise<Submission[]> {
  // TODO: replace with real DB query when storage is chosen
  return MOCK.filter((s) => !filters?.team || s.team === filters.team).filter(
    (s) => !filters?.unread || !s.is_read
  );
}

export async function toggleRead(
  id: string,
  is_read: boolean
): Promise<void> {
  // TODO: replace with real DB update when storage is chosen
  const sub = MOCK.find((s) => s.id === id);
  if (sub) sub.is_read = is_read;
}
