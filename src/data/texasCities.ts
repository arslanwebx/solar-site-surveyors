export interface TexasCity {
  slug: string;
  name: string;
  county: string;
  metro: string;
  keyCoverageNotes: string;
  surveyTypes: string[];
}

export const top20TexasCities: TexasCity[] = [
  {
    slug: 'houston',
    name: 'Houston',
    county: 'Harris County',
    metro: 'Greater Houston',
    keyCoverageNotes: 'Comprehensive field coverage across Harris, Fort Bend, Montgomery, and Brazoria counties.',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery ESS', 'Drone Aerial']
  },
  {
    slug: 'san-antonio',
    name: 'San Antonio',
    county: 'Bexar County',
    metro: 'San Antonio Metro',
    keyCoverageNotes: 'Active surveyor coverage across Bexar, Comal, and Guadalupe counties with ground-mount and rooftop audits.',
    surveyTypes: ['Residential', 'Commercial Flat Roof', 'Battery Storage', 'Attic Rafters']
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    metro: 'Dallas-Fort Worth Metroplex',
    keyCoverageNotes: 'Dense surveyor dispatch across Dallas County, steep-pitch shingle audits, and multi-story structural checks.',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery ESS', 'Attic Framing']
  },
  {
    slug: 'austin',
    name: 'Austin',
    county: 'Travis County',
    metro: 'Austin Metropolitan Area',
    keyCoverageNotes: 'Complete coverage across Travis, Williamson, and Hays counties, including complex multi-plane roof audits.',
    surveyTypes: ['Residential', 'Commercial C&I', 'Whole-Home Backup', 'Drone Photogrammetry']
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant County',
    metro: 'Dallas-Fort Worth Metroplex',
    keyCoverageNotes: 'Extensive coverage across Tarrant, Parker, and Johnson counties with complete electrical and structural audits.',
    surveyTypes: ['Residential', 'Commercial Industrial', 'Battery Storage', 'Ground Mount']
  },
  {
    slug: 'el-paso',
    name: 'El Paso',
    county: 'El Paso County',
    metro: 'Borderplex Metro',
    keyCoverageNotes: 'Dedicated West Texas field surveyors experienced with tile underlayment, flat roofs, and stucco penetrations.',
    surveyTypes: ['Residential', 'Commercial Flat/Tile', 'Battery Storage', 'Attic Verification']
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    county: 'Tarrant County',
    metro: 'DFW Mid-Cities',
    keyCoverageNotes: 'Rapid dispatch across Arlington, Grand Prairie, and Mansfield with full rafter spacing and electrical checks.',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery Backup', 'Drone Thermal']
  },
  {
    slug: 'corpus-christi',
    name: 'Corpus Christi',
    county: 'Nueces County',
    metro: 'Coastal Bend',
    keyCoverageNotes: 'Coastal Texas windstorm framing checks, hurricane rafter anchor inspections, and corrosion assessments.',
    surveyTypes: ['Residential High-Wind', 'Commercial', 'Battery Storage', 'Corrosion Checks']
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin County',
    metro: 'North Dallas Metro',
    keyCoverageNotes: 'Collin County high-end residential estates, 200A/400A split service panels, and multi-inverter battery routing.',
    surveyTypes: ['Residential', 'Commercial Roof/Carport', 'Battery ESS', 'Attic Framing']
  },
  {
    slug: 'lubbock',
    name: 'Lubbock',
    county: 'Lubbock County',
    metro: 'South Plains / West Texas',
    keyCoverageNotes: 'High-wind shingle audits, agricultural solar arrays, and rural West Texas acreage site surveys.',
    surveyTypes: ['Residential', 'Commercial Ag/Industrial', 'Battery Storage', 'Ground Mount']
  },
  {
    slug: 'laredo',
    name: 'Laredo',
    county: 'Webb County',
    metro: 'South Texas Border',
    keyCoverageNotes: 'South Texas logistics hubs, large commercial flat roofs (TPO/EPDM), and residential tile/stucco audits.',
    surveyTypes: ['Residential', 'Commercial Logistics/Warehouses', 'Battery Storage']
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas County',
    metro: 'DFW Metroplex (Las Colinas)',
    keyCoverageNotes: 'Prompt scheduling across Las Colinas, Irving commercial parks, and residential master-planned developments.',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery ESS', 'Attic Rafters']
  },
  {
    slug: 'garland',
    name: 'Garland',
    county: 'Dallas County',
    metro: 'East DFW Metro',
    keyCoverageNotes: 'East Dallas County coverage with verified main breaker de-rating checks and attic framing measurements.',
    surveyTypes: ['Residential', 'Commercial', 'Battery Storage', 'MSP Audits']
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin / Denton County',
    metro: 'North Platinum Corridor',
    keyCoverageNotes: 'North Texas master-planned communities with strict setback measurements and multi-battery wall audits.',
    surveyTypes: ['Residential High-End', 'Commercial C&I', 'Battery Storage', 'Drone RGB']
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin County',
    metro: 'North DFW Metro',
    keyCoverageNotes: 'Historical downtown and modern residential subdivisions with complete rafter spans and subpanel documentation.',
    surveyTypes: ['Residential', 'Commercial Rooftop', 'Battery Backup', 'Attic Framing']
  },
  {
    slug: 'amarillo',
    name: 'Amarillo',
    county: 'Potter / Randall County',
    metro: 'Texas Panhandle',
    keyCoverageNotes: 'Panhandle high-wind and hail roof assessments with comprehensive structural framing documentation.',
    surveyTypes: ['Residential', 'Commercial Ag/Industrial', 'Battery ESS', 'High-Wind Checks']
  },
  {
    slug: 'grand-prairie',
    name: 'Grand Prairie',
    county: 'Dallas / Tarrant County',
    metro: 'DFW Central Corridor',
    keyCoverageNotes: 'Industrial warehouse flat roofs, residential retrofits, and electrical service audits on legacy 100A/200A panels.',
    surveyTypes: ['Residential', 'Commercial Industrial', 'Battery Storage', 'Attic Framing']
  },
  {
    slug: 'brownsville',
    name: 'Brownsville',
    county: 'Cameron County',
    metro: 'Rio Grande Valley (RGV)',
    keyCoverageNotes: 'Deep South Texas and coastal RGV coverage with high-humidity electrical checks and windstorm roof inspections.',
    surveyTypes: ['Residential', 'Commercial C&I', 'Battery Storage', 'Hurricane Setbacks']
  },
  {
    slug: 'killeen',
    name: 'Killeen',
    county: 'Bell County',
    metro: 'Central Texas (Fort Cavazos)',
    keyCoverageNotes: 'Central Texas residential and commercial corridors with reliable scheduling for regional solar installers.',
    surveyTypes: ['Residential', 'Commercial Rooftop', 'Battery ESS', 'Attic Verification']
  },
  {
    slug: 'denton',
    name: 'Denton',
    county: 'Denton County',
    metro: 'North DFW Metro',
    keyCoverageNotes: 'University corridor commercial audits and northern DFW residential rooftop and ground-mount surveys.',
    surveyTypes: ['Residential', 'Commercial Flat/Shingle', 'Battery Storage', 'Attic Framing']
  }
];

export const texasUtilityCoverage = [
  { name: 'Oncor Electric Delivery', territory: 'DFW, North & Central Texas', share: 'Largest ERCOT TDU' },
  { name: 'CenterPoint Energy', territory: 'Greater Houston & Gulf Coast', share: 'Major Metro TDU' },
  { name: 'AEP Texas (North & Central)', territory: 'South Texas, Corpus Christi, West Texas', share: 'Statewide TDU' },
  { name: 'Texas-New Mexico Power (TNMP)', territory: 'Gulf Coast, North Texas, West Texas', share: 'Regional TDU' },
  { name: 'CPS Energy', territory: 'San Antonio & Bexar County', share: 'Municipal Electric Utility' },
  { name: 'Austin Energy', territory: 'Austin & Travis County', share: 'Municipal Electric Utility' },
  { name: 'El Paso Electric (EPE)', territory: 'El Paso & Far West Texas', share: 'Investor-Owned Utility' },
  { name: 'CoServ Electric', territory: 'North Texas (Denton, Collin)', share: 'Electric Cooperative' }
];
