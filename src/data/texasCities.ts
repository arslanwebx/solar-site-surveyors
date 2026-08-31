export interface TexasCity {
  name: string;
  county: string;
  metro: string;
  majorUtility: string;
  turnaroundSla: string;
  surveyTypes: string[];
  keyCoverageNotes: string;
}

export const top20TexasCities: TexasCity[] = [
  {
    name: 'Houston',
    county: 'Harris County',
    metro: 'Greater Houston',
    majorUtility: 'CenterPoint Energy',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery ESS', 'Drone RGB'],
    keyCoverageNotes: 'Full coverage across Harris, Fort Bend, Montgomery, and Brazoria counties. CenterPoint meter socket and flood-zone elevation checks.'
  },
  {
    name: 'San Antonio',
    county: 'Bexar County',
    metro: 'San Antonio Metro',
    majorUtility: 'CPS Energy',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial Flat Roof', 'Battery Storage', 'Attic Rafters'],
    keyCoverageNotes: 'Complete CPS Energy municipal utility alignment, historic district roof checks, and hill country ground-mount layouts.'
  },
  {
    name: 'Dallas',
    county: 'Dallas County',
    metro: 'Dallas-Fort Worth Metroplex',
    majorUtility: 'Oncor Electric Delivery',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery ESS', 'Attic Framing'],
    keyCoverageNotes: 'Deep network throughout Dallas County. Fast-track Oncor interconnection photo standards and steep-pitch shingle audits.'
  },
  {
    name: 'Austin',
    county: 'Travis County',
    metro: 'Austin Metropolitan Area',
    majorUtility: 'Austin Energy / Bluebonnet Electric',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial C&I', 'Whole-Home Backup', 'Drone Photogrammetry'],
    keyCoverageNotes: 'Austin Energy solar rebate documentation standards, complex multi-plane architectural roofs, and battery gateway clearances.'
  },
  {
    name: 'Fort Worth',
    county: 'Tarrant County',
    metro: 'Dallas-Fort Worth Metroplex',
    majorUtility: 'Oncor Electric Delivery',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial Industrial', 'Battery Storage', 'Ground Mount'],
    keyCoverageNotes: 'Extensive coverage across Tarrant, Parker, and Johnson counties. Oncor dead-front MSP busbar verification.'
  },
  {
    name: 'El Paso',
    county: 'El Paso County',
    metro: 'Borderplex Metro',
    majorUtility: 'El Paso Electric (EPE)',
    turnaroundSla: '48 Hours',
    surveyTypes: ['Residential', 'Commercial Flat/Tile', 'Battery Storage', 'Attic Verification'],
    keyCoverageNotes: 'Dedicated West Texas surveyors experienced with EPE interconnection rules, tile underlayment, and stucco MSP penetrations.'
  },
  {
    name: 'Arlington',
    county: 'Tarrant County',
    metro: 'DFW Mid-Cities',
    majorUtility: 'Oncor Electric Delivery',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery Backup', 'Drone Thermal'],
    keyCoverageNotes: 'Rapid dispatch across Arlington, Grand Prairie, and Mansfield with complete rafter spacing and electrical audits.'
  },
  {
    name: 'Corpus Christi',
    county: 'Nueces County',
    metro: 'Coastal Bend',
    majorUtility: 'AEP Texas (Central)',
    turnaroundSla: '48 Hours',
    surveyTypes: ['Residential High-Wind', 'Commercial', 'Battery Storage', 'Corrosion Checks'],
    keyCoverageNotes: 'Coastal Texas windstorm framing checks (TDI certified rafter anchors) and AEP Texas meter documentation.'
  },
  {
    name: 'Plano',
    county: 'Collin County',
    metro: 'North Dallas Metro',
    majorUtility: 'Oncor Electric Delivery',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial Roof/Carport', 'Battery ESS', 'Attic Framing'],
    keyCoverageNotes: 'Collin County high-end residential estates, 200A/400A split service panels, and multi-inverter battery routing.'
  },
  {
    name: 'Lubbock',
    county: 'Lubbock County',
    metro: 'South Plains / West Texas',
    majorUtility: 'Lubbock Power & Light (LP&L / ERCOT)',
    turnaroundSla: '48 Hours',
    surveyTypes: ['Residential', 'Commercial Ag/Industrial', 'Battery Storage', 'Ground Mount'],
    keyCoverageNotes: 'Full LP&L retail choice transition compliance, high-wind shingle audits, and rural West Texas acreage surveys.'
  },
  {
    name: 'Laredo',
    county: 'Webb County',
    metro: 'South Texas Border',
    majorUtility: 'AEP Texas',
    turnaroundSla: '48 Hours',
    surveyTypes: ['Residential', 'Commercial Logistics/Warehouses', 'Battery Storage'],
    keyCoverageNotes: 'South Texas logistics hubs, large commercial flat roofs (TPO/EPDM), and residential tile/stucco audits.'
  },
  {
    name: 'Irving',
    county: 'Dallas County',
    metro: 'DFW Metroplex (Las Colinas)',
    majorUtility: 'Oncor Electric Delivery',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery ESS', 'Attic Rafters'],
    keyCoverageNotes: 'Same-day scheduling capability for Las Colinas and Irving commercial parks and residential developments.'
  },
  {
    name: 'Garland',
    county: 'Dallas County',
    metro: 'East DFW Metro',
    majorUtility: 'Garland Power & Light (GP&L) / Oncor',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial', 'Battery Storage', 'MSP Audits'],
    keyCoverageNotes: 'Municipal GP&L and Oncor split-territory expertise with verified main breaker de-rating feasibility.'
  },
  {
    name: 'Frisco',
    county: 'Collin / Denton County',
    metro: 'North Platinum Corridor',
    majorUtility: 'Oncor / CoServ Electric',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential High-End', 'Commercial C&I', 'Battery Storage', 'Drone RGB'],
    keyCoverageNotes: 'CoServ cooperative and Oncor territory coverage with strict HOA setback measurements and multi-battery wall audits.'
  },
  {
    name: 'McKinney',
    county: 'Collin County',
    metro: 'North DFW Metro',
    majorUtility: 'Oncor / CoServ Electric',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial Rooftop', 'Battery Backup', 'Attic Framing'],
    keyCoverageNotes: 'Historical downtown and modern master-planned communities. Complete rafter spans and subpanel documentation.'
  },
  {
    name: 'Amarillo',
    county: 'Potter / Randall County',
    metro: 'Texas Panhandle',
    majorUtility: 'Xcel Energy (SPS)',
    turnaroundSla: '48 Hours',
    surveyTypes: ['Residential', 'Commercial Ag/Industrial', 'Battery ESS', 'High-Wind Checks'],
    keyCoverageNotes: 'Panhandle high-wind and heavy hail roof assessments with Xcel Southwestern Public Service interconnection standards.'
  },
  {
    name: 'Grand Prairie',
    county: 'Dallas / Tarrant County',
    metro: 'DFW Central Corridor',
    majorUtility: 'Oncor Electric Delivery',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial Industrial', 'Battery Storage', 'Attic Framing'],
    keyCoverageNotes: 'Industrial warehouse flat roofs, residential retrofits, and 120% rule calculations on legacy 100A/200A panels.'
  },
  {
    name: 'Brownsville',
    county: 'Cameron County',
    metro: 'Rio Grande Valley (RGV)',
    majorUtility: 'Brownsville PUB / AEP Texas',
    turnaroundSla: '48 Hours',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery Storage', 'Hurricane Setbacks'],
    keyCoverageNotes: 'Deep South Texas and coastal RGV coverage. High-humidity electrical connection and windstorm roof inspections.'
  },
  {
    name: 'Killeen',
    county: 'Bell County',
    metro: 'Central Texas (Fort Cavazos)',
    majorUtility: 'Oncor / Bartlett Electric Coop',
    turnaroundSla: '48 Hours',
    surveyTypes: ['Residential', 'Commercial Rooftop', 'Battery ESS', 'Attic Verification'],
    keyCoverageNotes: 'Central Texas military and suburban residential corridors with rapid turnarounds for local solar installers.'
  },
  {
    name: 'Denton',
    county: 'Denton County',
    metro: 'North DFW Metro',
    majorUtility: 'Denton Municipal Electric (DME) / CoServ',
    turnaroundSla: '24–48 Hours',
    surveyTypes: ['Residential', 'Commercial Flat/Shingle', 'Battery Storage', 'Attic Framing'],
    keyCoverageNotes: 'DME municipal interconnection documentation, university corridor commercial audits, and CoServ residential territory.'
  }
];

export const texasUtilityCoverage = [
  { name: 'Oncor Electric Delivery', territory: 'DFW, North & Central Texas', share: 'Deregulated / Largest ERCOT TDU' },
  { name: 'CenterPoint Energy', territory: 'Greater Houston & Gulf Coast', share: 'Deregulated / Major Metro TDU' },
  { name: 'AEP Texas (North & Central)', territory: 'South Texas, Corpus Christi, West Texas', share: 'Deregulated TDU' },
  { name: 'Texas-New Mexico Power (TNMP)', territory: 'Gulf Coast, North Texas, West Texas', share: 'Deregulated TDU' },
  { name: 'CPS Energy', territory: 'San Antonio & Bexar County', share: 'Largest Municipal Electric Utility' },
  { name: 'Austin Energy', territory: 'Austin & Travis County', share: 'Municipal Electric Utility' },
  { name: 'El Paso Electric (EPE)', territory: 'El Paso & Far West Texas', share: 'Investor-Owned Utility (WECC)' },
  { name: 'CoServ Electric', territory: 'North Texas (Denton, Collin)', share: 'Electric Cooperative' }
];
