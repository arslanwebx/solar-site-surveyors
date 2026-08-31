export interface GlossaryTerm {
  slug: string;
  term: string;
  category: 'Electrical' | 'Permitting & AHJ' | 'Solar Operations' | 'Financial & Utility' | 'Design & Engineering';
  shortDefinition: string;
  fullDefinition: string;
  operationalContext: string;
  relatedTerms?: string[];
}

export const glossaryData: GlossaryTerm[] = [
  {
    slug: 'ahj',
    term: 'AHJ (Authority Having Jurisdiction)',
    category: 'Permitting & AHJ',
    shortDefinition: 'The local municipal building department, city, county, or fire authority responsible for enforcing building, structural, and electrical codes.',
    fullDefinition: 'The Authority Having Jurisdiction (AHJ) is the governmental organization, office, or individual responsible for enforcing the requirements of a code or standard, or for approving equipment, materials, an installation, or a procedure for solar PV and energy storage systems.',
    operationalContext: 'Solar site surveyors must accurately record building framing, electrical panel configurations, and roof setbacks so that permit plan sets satisfy the specific local AHJ amendments (e.g. NEC 2020 vs 2023, IFC fire setback rules).',
    relatedTerms: ['Permitting', 'SolarApp+', 'Plan Set']
  },
  {
    slug: 'pto',
    term: 'PTO (Permission to Operate)',
    category: 'Solar Operations',
    shortDefinition: 'Formal written authorization from the local electric utility allowing the solar customer and EPC to energize the PV/storage system and export power to the grid.',
    fullDefinition: 'Permission to Operate (PTO) is the final operational milestone in the grid-interconnection lifecycle. It is issued after the municipal building department has signed off on the final inspection and the utility has approved all single-line drawings, test reports, and installed a bi-directional meter.',
    operationalContext: 'PTO is the trigger milestone for final EPC funding release, customer billing kickoff, and loan disbursement. Delays in site survey data quality create downstream delays that push out final PTO by weeks.',
    relatedTerms: ['Interconnection', 'NTP', 'Bi-directional Meter']
  },
  {
    slug: 'ntp',
    term: 'NTP (Notice to Proceed)',
    category: 'Solar Operations',
    shortDefinition: 'Formal milestone signal indicating that initial engineering, customer financing, and preliminary approvals are satisfied, allowing procurement and field survey/installation to proceed.',
    fullDefinition: 'Notice to Proceed (NTP) is an operational milestone used in solar EPC project management to demarcate when a project transitions from the sales pipeline into active engineering and field operations.',
    operationalContext: 'High-performing solar EPCs dispatch site surveys immediately upon NTP to prevent scheduling bottlenecks and accelerate CAD drafting turnaround.',
    relatedTerms: ['PTO', 'Site Survey', 'EPC Operations']
  },
  {
    slug: 'msp',
    term: 'MSP (Main Service Panel)',
    category: 'Electrical',
    shortDefinition: 'The primary electrical distribution panelboard that receives power from the electric utility meter and distributes it to branch circuits throughout the property.',
    fullDefinition: 'The Main Service Panel (MSP) houses the main service disconnect (main breaker), the utility service entrance conductors, neutral/ground buses, and all primary branch circuit breakers. In solar installations, the MSP is the primary point of interconnection for backfed solar PV power and energy storage gateways.',
    operationalContext: 'A critical role of the site surveyor is removing the dead-front (safely) to capture busbar manufacturer ratings, main breaker ampacity, available breaker slots, and conduit entry paths.',
    relatedTerms: ['MPU', 'Busbar Rating', '120% Rule', 'Backfeed Breaker']
  },
  {
    slug: 'mpu',
    term: 'MPU (Main Panel Upgrade)',
    category: 'Electrical',
    shortDefinition: 'The complete replacement or upgrade of an existing main electrical panelboard (e.g., from 100A to 200A or 225A) to accommodate additional solar backfeed or EV/battery loads.',
    fullDefinition: 'A Main Panel Upgrade (MPU) involves replacing the electrical service panel, meter socket, service entrance conductors, grounding electrode system, and coordination with the utility for a temporary power disconnect/reconnect.',
    operationalContext: 'Accurate site surveys identify early whether an MPU is truly required or if alternative methods (such as main breaker de-rating or supply-side taps) can save the customer $2,500–$4,500 and eliminate a 3–6 week utility service delay.',
    relatedTerms: ['MSP', '120% Rule', 'De-rating', 'Supply-Side Tap']
  },
  {
    slug: '120-percent-rule',
    term: '120% Rule (NEC 705.12)',
    category: 'Electrical',
    shortDefinition: 'NEC code calculation allowing the sum of utility main breaker and solar backfeed breakers to equal up to 120% of the panel busbar rating.',
    fullDefinition: 'National Electrical Code (NEC) Section 705.12(B) dictates that when a backfed solar breaker is installed at the opposite end of the busbar from the utility source, the sum of the overcurrent devices supplying power cannot exceed 120% of the busbar ampacity rating: (Bus Rating x 1.2) - Main Breaker = Max Solar Breaker.',
    operationalContext: 'Surveyors must accurately record the busbar rating (e.g. 225A bus with a 200A main allows a 70A solar breaker) so electrical drafters can size the inverter output without triggering unwarranted MPU change orders.',
    relatedTerms: ['Busbar Rating', 'MSP', 'Backfeed Breaker', 'De-rating']
  },
  {
    slug: 'busbar-rating',
    term: 'Busbar Rating',
    category: 'Electrical',
    shortDefinition: 'The maximum continuous current carrying capacity (in Amperes) of the copper or aluminum conductive bars within an electrical panelboard.',
    fullDefinition: 'The busbar rating specifies the ampacity designed into the internal distribution bars of an electrical panel. It is distinct from the Main Breaker rating (e.g. a panel can have a 200A Main Breaker mounted on a 225A-rated bus).',
    operationalContext: 'Capturing the manufacturer label inside the MSP is the only way to prove busbar rating to AHJ plan checkers without defaulting to a conservative 1-to-1 assumption.',
    relatedTerms: ['MSP', '120% Rule', 'MPU']
  },
  {
    slug: 'interconnection',
    term: 'Interconnection',
    category: 'Financial & Utility',
    shortDefinition: 'The physical, technical, and legal connection between a solar PV generation/storage facility and the local electric distribution utility grid.',
    fullDefinition: 'Interconnection governs the engineering requirements, protection settings, anti-islanding protocols, and metering agreements necessary for distributed solar systems to operate in parallel with the electric utility.',
    operationalContext: 'Accurate documentation of utility meter serial numbers, meter socket configurations, disconnect switch locations, and service transformer specs ensures fast-track interconnection approval.',
    relatedTerms: ['PTO', 'Bi-directional Meter', 'Net Metering']
  },
  {
    slug: 'solar-site-survey',
    term: 'Solar Site Survey',
    category: 'Solar Operations',
    shortDefinition: 'An on-site comprehensive physical audit of a property’s roof condition, structural framing, electrical distribution, shading, and energy storage layout.',
    fullDefinition: 'A Solar Site Survey is the critical discovery phase in solar project development. It gathers verified physical measurements, high-resolution georeferenced photographs, and electrical equipment specifications required to produce permit-ready CAD design plan sets and engineering stamps.',
    operationalContext: 'Our core service coordinates professional, standardized site surveys across nationwide markets to eliminate operational delays for solar EPCs and installers.',
    relatedTerms: ['CAD', 'AHJ', 'MSP', 'Engineering Stamp']
  },
  {
    slug: 'cad',
    term: 'CAD (Computer-Aided Design)',
    category: 'Design & Engineering',
    shortDefinition: 'Software and drafting workflows used to create accurate 2D/3D solar layout drawings, single-line electrical diagrams, and permit plan sets.',
    fullDefinition: 'Computer-Aided Design in solar refers to the technical drafting of architectural roof layouts, electrical single-line diagrams, structural attachment details, and hazard placards using platforms like AutoCAD, HelioScope, and Aurora Solar.',
    operationalContext: 'High-quality site survey packages provide all dimensional coordinates and electrical nameplates needed for one-touch CAD drafting without follow-up questions or revisions.',
    relatedTerms: ['Engineering Stamp', 'Single-Line Diagram', 'Solar Site Survey']
  },
  {
    slug: 'engineering-stamp',
    term: 'Engineering Stamp (PE Stamp)',
    category: 'Design & Engineering',
    shortDefinition: 'Official certification and seal from a licensed Professional Engineer (PE) verifying that structural and electrical solar designs comply with building codes.',
    fullDefinition: 'An Engineering Stamp is applied by a state-licensed structural or electrical PE certifying that the proposed solar installation does not exceed roof load capacities (dead, live, wind, and snow loads) and that electrical designs comply with NEC standards.',
    operationalContext: 'Structural engineers require documented rafter dimensions (2x4, 2x6), on-center spacing (16" vs 24"), and lumber span lengths recorded during the attic survey.',
    relatedTerms: ['CAD', 'AHJ', 'Plan Set']
  },
  {
    slug: 'backfeed-breaker',
    term: 'Backfeed Breaker',
    category: 'Electrical',
    shortDefinition: 'A dedicated circuit breaker in the electrical panel through which electricity generated by solar inverters is fed into the building electrical busbar.',
    fullDefinition: 'A backfeed breaker is a branch circuit overcurrent protection device (OCPD) that receives AC electrical power from the solar inverter(s) and injects it onto the main service panel busbar, following NEC 705.12 location and hold-down rules.',
    operationalContext: 'Surveyors verify that a dual-pole slot is physically available at the opposite end of the busbar or identify which minor branch circuits can be consolidated with tandem breakers.',
    relatedTerms: ['120% Rule', 'MSP', 'Busbar Rating']
  },
  {
    slug: 'disconnect',
    term: 'AC / DC Disconnect Switch',
    category: 'Electrical',
    shortDefinition: 'A manually operable external safety switch that isolates solar power circuits from the utility grid or battery storage system.',
    fullDefinition: 'Disconnect switches allow emergency responders, utility lineworkers, and maintenance technicians to physically break the circuit and verify zero voltage using a visible-blade, lockable disconnect enclosure.',
    operationalContext: 'Surveyors document clear pathway access and distances between the utility meter and proposed disconnect switch location to comply with utility tariffs.',
    relatedTerms: ['Interconnection', 'Rapid Shutdown', 'MSP']
  },
  {
    slug: 'net-metering',
    term: 'Net Metering (NEM)',
    category: 'Financial & Utility',
    shortDefinition: 'A utility billing mechanism that credits solar energy system owners for the electricity they add to the electric grid.',
    fullDefinition: 'Net Energy Metering (NEM) tracks net kilowatt-hour consumption. Excess solar energy generated during peak sunshine flows onto the grid, running the bi-directional meter backward and generating financial credits for the customer.',
    operationalContext: 'Interconnection teams require utility account numbers, 12-month kWh usage history from utility bills, and exact meter serial numbers documented during site survey.',
    relatedTerms: ['Interconnection', 'PTO', 'Bi-directional Meter']
  },
  {
    slug: 'battery-storage',
    term: 'Battery Energy Storage System (BESS)',
    category: 'Solar Operations',
    shortDefinition: 'Rechargeable electrochemical storage units (e.g. Lithium Iron Phosphate or NMC) that store excess solar energy for backup power or peak-shaving.',
    fullDefinition: 'A Battery Energy Storage System (BESS) consists of battery modules, an integrated battery management system (BMS), bidirectional inverter/charger, and microgrid gateway that enables grid-independent backup power during outages.',
    operationalContext: 'Site surveys for BESS must document NFPA 855 spatial clearances (3ft from doors/windows), structural wall mounting strength, conduit pathways, and critical load breaker assignments.',
    relatedTerms: ['MSP', 'Interconnection', 'Solar Site Survey']
  },
  {
    slug: 'pv',
    term: 'PV (Photovoltaic)',
    category: 'Design & Engineering',
    shortDefinition: 'The direct conversion of light into electricity at the atomic level using semiconductor materials like monocrystalline silicon.',
    fullDefinition: 'Photovoltaics refers to solar cells and modules that absorb photons of sunlight and release electrons, generating a direct current (DC) electrical flow.',
    operationalContext: 'Surveyors document roof plane dimensions, azimuth, pitch, and shading vectors to optimize PV array layout efficiency.',
    relatedTerms: ['Solar Site Survey', 'CAD', 'Production Estimate']
  },
  {
    slug: 'ppw',
    term: 'PPW (Price Per Watt)',
    category: 'Financial & Utility',
    shortDefinition: 'The standardized industry metric used to compare solar installation pricing, calculated as total system cost divided by total DC wattage.',
    fullDefinition: 'Price Per Watt ($/W) allows EPCs and financiers to evaluate cost structure across residential and commercial projects regardless of system capacity.',
    operationalContext: 'Operational efficiencies—like eliminating site survey revisits and streamlining CAD turnarounds—directly compress EPC soft costs, lowering overall PPW.',
    relatedTerms: ['EPC Operations', 'Production Estimate']
  },
  {
    slug: 'ppa',
    term: 'PPA (Power Purchase Agreement)',
    category: 'Financial & Utility',
    shortDefinition: 'A financial arrangement where a third-party developer owns and maintains the solar system on a customer property, and the customer purchases the generated power at a fixed rate.',
    fullDefinition: 'In a solar Power Purchase Agreement (PPA), the customer pays only for the kilowatt-hours produced by the system, avoiding upfront capital costs while the EPC and financing partner retain tax credits and depreciation.',
    operationalContext: 'PPA financiers require rigorous milestone documentation, starting with third-party verified site survey packages, before approving installation NTP funding.',
    relatedTerms: ['Solar Lease', 'NTP', 'PTO']
  },
  {
    slug: 'rapid-shutdown',
    term: 'Rapid Shutdown (NEC 690.12)',
    category: 'Electrical',
    shortDefinition: 'Safety standard requiring solar PV conductors within and outside the array boundary to drop to safe voltage levels within 30 seconds of system shutdown.',
    fullDefinition: 'NEC 690.12 mandates that upon initiating rapid shutdown (via inverter switch, utility disconnect, or emergency button), conductors outside the array boundary must drop to 30V or less within 30 seconds, protecting first responders fighting structural fires.',
    operationalContext: 'Surveyors record the proposed location of rapid shutdown initiation switches and module-level power electronics (MLPE) configurations.',
    relatedTerms: ['Disconnect', 'MSP', 'AHJ']
  },
  {
    slug: 'production-estimate',
    term: 'Production Estimate',
    category: 'Design & Engineering',
    shortDefinition: 'The calculated forecast of annual kilowatt-hour (kWh) electricity generation from a proposed solar energy system based on location, tilt, azimuth, and shading.',
    fullDefinition: 'Solar production estimates use meteorological irradiance data and mathematical shading models (PVsyst, PVWatts, HelioScope) to forecast monthly and annual energy output.',
    operationalContext: 'Accurate field pitch measurements and on-site horizon/tree obstruction scans prevent overestimating production, protecting EPCs from performance warranty disputes.',
    relatedTerms: ['Solar Site Survey', 'CAD', 'PV']
  }
];
