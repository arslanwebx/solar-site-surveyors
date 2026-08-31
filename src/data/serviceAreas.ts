export interface StateServiceArea {
  slug: string;
  name: string;
  code: string;
  status: 'Active Coverage' | 'Regional Expansion';
  turnaroundSla: string;
  metroAreas: string[];
  majorUtilities: string[];
  ahjNuances: string;
  summary: string;
  surveyCapabilities: string[];
}

export const serviceAreasData: StateServiceArea[] = [
  {
    slug: 'california',
    name: 'California',
    code: 'CA',
    status: 'Active Coverage',
    turnaroundSla: '24–48 Hours',
    metroAreas: ['Greater Los Angeles', 'San Francisco Bay Area', 'San Diego County', 'Inland Empire', 'Sacramento Valley', 'Central Valley (Fresno, Bakersfield)'],
    majorUtilities: ['PG&E (Pacific Gas & Electric)', 'SCE (Southern California Edison)', 'SDG&E (San Diego Gas & Electric)', 'SMUD', 'LADWP'],
    ahjNuances: 'Strict Title 24 compliance, NEM 3.0 / Solar Billing Plan battery storage verification, and SolarApp+ automated permitting alignment.',
    summary: 'Our deepest surveyor network coverage across California provides fast-track residential and C&I surveys tailored to NEM 3.0 battery storage configurations and rapid AHJ permit submissions.',
    surveyCapabilities: ['Residential Rooftop & Ground Mount', 'Commercial & Industrial 3-Phase', 'Battery Storage & Gateway Routing', 'Drone Thermal & Photogrammetry', 'NEM 3.0 Service Audit']
  },
  {
    slug: 'texas',
    name: 'Texas',
    code: 'TX',
    status: 'Active Coverage',
    turnaroundSla: '48 Hours',
    metroAreas: ['Dallas-Fort Worth Metroplex', 'Greater Houston', 'Austin Metro', 'San Antonio Metro', 'Rio Grande Valley', 'El Paso'],
    majorUtilities: ['Oncor Electric Delivery', 'CenterPoint Energy', 'AEP Texas (North & Central)', 'Texas-New Mexico Power (TNMP)', 'Austin Energy', 'CPS Energy'],
    ahjNuances: 'Deregulated retail electric market considerations (REP buyback tariffs) and strict hurricane wind load structural verification along the Gulf Coast.',
    summary: 'Comprehensive Texas coverage across all ERCOT deregulated utility territories and municipal co-ops, ensuring accurate structural framing data for high wind zones.',
    surveyCapabilities: ['Residential High-Pitch & Tile', 'Commercial Flat Roof / Ballasted', 'Generator & Battery Transfer Panels', 'Ground Mount Topography Audits', 'Utility Transformer Checks']
  },
  {
    slug: 'florida',
    name: 'Florida',
    code: 'FL',
    status: 'Active Coverage',
    turnaroundSla: '48 Hours',
    metroAreas: ['Miami-Fort Lauderdale-Palm Beach', 'Tampa Bay / St. Petersburg', 'Orlando Metro', 'Jacksonville', 'Fort Myers / Naples', 'Panhandle'],
    majorUtilities: ['FPL (Florida Power & Light)', 'Duke Energy Florida', 'Tampa Electric (TECO)', 'JEA (Jacksonville Electric)', 'OUC (Orlando Utilities)'],
    ahjNuances: 'Florida Building Code (FBC) high-velocity hurricane zone (HVHZ) requirements, rafter uplift anchor inspections, and Tier 1/Tier 2 utility insurance thresholds.',
    summary: 'Specialized Florida field surveying with rigorous HVHZ structural rafter documentation, tile roof assessments, and FPL tier-level interconnection compliance.',
    surveyCapabilities: ['HVHZ Wind-Load Attic Verification', 'Concrete & Clay Tile Survey', 'Whole-Home Battery Backup Clearances', 'Meter Socket & Lever Bypass Audits', 'Commercial 480V Interconnection']
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    code: 'AZ',
    status: 'Active Coverage',
    turnaroundSla: '24–48 Hours',
    metroAreas: ['Phoenix Metropolitan Area (Valley of the Sun)', 'Tucson & Pima County', 'Flagstaff / Prescott', 'Yuma'],
    majorUtilities: ['APS (Arizona Public Service)', 'SRP (Salt River Project)', 'TEP (Tucson Electric Power)', 'UNS Energy'],
    ahjNuances: 'SRP demand-rate requirements, tile roof underlayment assessments, and high-temperature ambient derating calculations for electrical enclosures.',
    summary: 'Year-round site survey dispatch across Phoenix, Tucson, and northern Arizona with specialized attention to SRP interconnection rules and tile roof integrity.',
    surveyCapabilities: ['Tile Roof Lift & Underlayment Checks', 'SRP Demand-Manager Hardware Audits', 'Main Service Panel De-rate Calculations', 'Commercial Carport & Canopy Surveys', 'Attic Heat Mitigation Clearances']
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    code: 'CO',
    status: 'Active Coverage',
    turnaroundSla: '48–72 Hours',
    metroAreas: ['Denver Metro & Front Range', 'Colorado Springs', 'Fort Collins / Loveland', 'Boulder County', 'Pueblo', 'Mountain Corridor'],
    majorUtilities: ['Xcel Energy Colorado', 'Black Hills Energy', 'CORE Electric Cooperative', 'Colorado Springs Utilities', 'Poudre Valley REA'],
    ahjNuances: 'Heavy snow load engineering requirements, high-altitude inverter performance deratings, and cold-climate battery enclosure temperature management.',
    summary: 'Reliable Colorado surveying tailored to Front Range building departments, Xcel Energy standard interconnection rules, and heavy mountain snow-load engineering standards.',
    surveyCapabilities: ['Heavy Snow Load Framing Audits', 'Cold-Weather ESS Enclosure Inspections', 'Steep-Pitch Mountain Roofs', 'Commercial Rooftop Racking Checks', 'Xcel Energy Service Verification']
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    code: 'NV',
    status: 'Active Coverage',
    turnaroundSla: '48 Hours',
    metroAreas: ['Las Vegas Metro & Clark County', 'Henderson', 'Reno-Sparks', 'Carson City'],
    majorUtilities: ['NV Energy (Southern Nevada / Clark County)', 'NV Energy (Northern Nevada / Sierra Pacific)'],
    ahjNuances: 'Clark County Department of Building & Fire Prevention strict setback pathways, NV Energy meter socket specifications, and desert tile roof checks.',
    summary: 'Full Nevada site survey coordination across Clark and Washoe counties, ensuring seamless NV Energy interconnection reviews and Clark County building compliance.',
    surveyCapabilities: ['Clark County Fire Path Setbacks', 'NV Energy Meter Socket Verification', 'Concrete S-Tile Inspections', 'Commercial Flat Roofs', 'Whole-Home Battery Backups']
  },
  {
    slug: 'new-york',
    name: 'New York',
    code: 'NY',
    status: 'Active Coverage',
    turnaroundSla: '48–72 Hours',
    metroAreas: ['New York City (5 Boroughs)', 'Long Island (Nassau & Suffolk)', 'Westchester & Hudson Valley', 'Capital Region (Albany)', 'Central & Western NY (Buffalo, Rochester, Syracuse)'],
    majorUtilities: ['Con Edison (NYC & Westchester)', 'PSEG Long Island', 'National Grid', 'NYSEG', 'Central Hudson', 'Rochester Gas & Electric (RG&E)'],
    ahjNuances: 'NYC Department of Buildings (DOB) and FDNY stringent rooftop clear path regulations, historic masonry structures, and PSEG-LI interconnection guidelines.',
    summary: 'Expert site survey coordination across NYC 5 boroughs, Long Island, and upstate New York, equipped for intricate brownstone roofs, FDNY fire paths, and ConEd meter vaults.',
    surveyCapabilities: ['NYC DOB & FDNY Fire Setbacks', 'Historic Brownstone & Slate Roofs', 'Con Edison Network Interconnection', 'Commercial Flat Roofballast Audits', 'Basement Electrical & Attic Rafter Checks']
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    code: 'NC',
    status: 'Active Coverage',
    turnaroundSla: '48 Hours',
    metroAreas: ['Charlotte Metro', 'Raleigh-Durham (Research Triangle)', 'Greensboro / Winston-Salem', 'Asheville & Western NC', 'Wilmington & Coastal NC'],
    majorUtilities: ['Duke Energy Carolinas', 'Duke Energy Progress', 'Dominion Energy North Carolina', 'NC Electric Cooperatives'],
    ahjNuances: 'Duke Energy interconnection portal standards, coastal wind zone requirements, and agricultural ground mount layouts.',
    summary: 'Rapid residential and commercial site survey execution across the Carolinas with direct alignment to Duke Energy interconnection criteria and coastal hurricane zones.',
    surveyCapabilities: ['Duke Energy Interconnection Specs', 'Coastal Hurricane Setbacks', 'Agricultural & Large Ground Mounts', 'Commercial 3-Phase Industrial Parks', 'Residential Attic & Structural Framing']
  }
];
