export interface ResourceArticle {
  slug: string;
  title: string;
  category: 'Site Surveys' | 'Solar Design' | 'Permitting' | 'Interconnection' | 'Solar Operations';
  readTime: string;
  publishedDate: string;
  summary: string;
  keyTakeaways: string[];
  contentHtml: string;
  author: string;
  authorRole: string;
}

export const resourcesData: ResourceArticle[] = [
  {
    slug: 'solar-site-survey-checklist',
    title: 'Solar Site Survey Checklist: The Complete EPC Operational Standard',
    category: 'Site Surveys',
    readTime: '8 min read',
    publishedDate: 'August 14, 2026',
    author: 'Marcus Vance',
    authorRole: 'VP of Field Engineering',
    summary: 'A standardized, step-by-step field verification checklist designed to eliminate missing photos, incorrect busbar ratings, and costly design rework for residential and commercial solar EPCs.',
    keyTakeaways: [
      'Complete 360-degree elevation and boundary photo documentation prevents AHJ variance holds.',
      'Documenting main service panel dead-front interior details (bus rating, breaker rating, manufacturer label) is mandatory for 120% rule calculations.',
      'Attic structural verification must document rafter spacing, truss type, lumber dimensions, and roof decking condition.',
      'Battery energy storage surveys require precise NFPA 855 clearance verification and gateway conduit pathways.'
    ],
    contentHtml: `
      <h2>1. Property & Roof Plane Inspection</h2>
      <p>The foundation of any solar permit plan set is accurate physical roof geometry and structural condition data. In-field surveyors must verify satellite estimations against physical on-site measurements.</p>
      <ul>
        <li><strong>Roof Material & Layers:</strong> Asphalt shingle (3-tab vs architectural), clay/concrete tile (S-tile, flat tile, W-tile), standing seam metal, corrugated metal, or flat membrane (TPO/EPDM/Modified Bitumen). Document exact layer count—more than 2 shingle layers requires structural reroofing considerations.</li>
        <li><strong>Pitch Verification:</strong> Measure slope using a digital angle finder or pitch gauge on every azimuth plane considered for solar modules.</li>
        <li><strong>Obstruction Mapping:</strong> Exact X/Y dimensions from eaves and ridges for all plumbing stink pipes, attic exhaust vents, chimneys, skylights, satellite dishes, and HVAC curb equipment.</li>
        <li><strong>Roof Condition Assessment:</strong> Document granular loss, cracked tiles, soft spots, ponding evidence, and remaining estimated lifespan (&lt;5 years requires reroof notification).</li>
      </ul>

      <h2>2. Electrical Main Service Panel (MSP) Verification</h2>
      <p>Electrical oversights account for over 45% of solar change orders and AHJ revisions. The surveyor must remove the panel dead-front (where safety protocols allow) and record complete nameplate specifications.</p>
      <ul>
        <li><strong>Service Equipment Label:</strong> Manufacturer (Square D, Eaton, Siemens, Cutler-Hammer, GE), Catalog/Model #, Enclosure Type (NEMA 3R).</li>
        <li><strong>Main Breaker & Busbar Rating:</strong> Amperage of the Main Disconnect (e.g., 100A, 125A, 150A, 200A, 400A) and the physical busbar rating (e.g., 125A, 200A, 225A).</li>
        <li><strong>Feed Configuration:</strong> Overhead service drop vs. underground lateral service feed. Document conductor gauge and material (Copper vs Aluminum) if visible.</li>
        <li><strong>Interconnection Viability:</strong> Check available breaker slots for a dedicated backfeed breaker (NEC 705.12), verify feasibility of supply-side tap (NEC 705.11), or flag if a Main Panel Upgrade (MPU) is unavoidable.</li>
        <li><strong>Grounding & Bonding:</strong> Verify grounding electrode conductor (GEC) connection to ground rod, ufer ground, or metallic water pipe.</li>
      </ul>

      <h2>3. Structural & Attic Inspection</h2>
      <p>Structural engineering stamps require physical confirmation of framing members to satisfy local building department wind and snow load calculations.</p>
      <ul>
        <li><strong>Rafter / Truss Details:</strong> Document rafter size (2x4, 2x6, 2x8), on-center spacing (16" O.C., 24" O.C.), and span lengths.</li>
        <li><strong>Roof Decking:</strong> Plywood vs. OSB thickness (typically 7/16" or 1/2"), or skip sheathing (common on older tile/shake homes).</li>
        <li><strong>Deflection / Water Damage:</strong> Inspect for sagging rafters, dry rot, active leaks, or compromised truss plates.</li>
      </ul>

      <h2>4. Battery Energy Storage System (BESS) Site Check</h2>
      <p>When battery storage (Tesla Powerwall, Enphase IQ Battery, SolarEdge Home Battery, FranklinWH) is included in the project scope, strict clearance compliance is mandatory.</p>
      <ul>
        <li><strong>NFPA 855 Clearance Boundaries:</strong> Verify 3 feet minimum clearance from doors and windows, and 3 feet spacing between adjacent battery enclosures.</li>
        <li><strong>Wall Structural Integrity:</strong> Verify stud location, masonry, or concrete anchor points capable of supporting 250–400 lb unit weight.</li>
        <li><strong>Conduit Pathway:</strong> Document continuous conduit routing between the battery location, system controller/gateway, and the main electrical service.</li>
      </ul>
    `
  },
  {
    slug: 'required-solar-site-survey-photos',
    title: 'Required Solar Site Survey Photos: The Complete 36-Photo Field Standard',
    category: 'Site Surveys',
    readTime: '6 min read',
    publishedDate: 'August 18, 2026',
    author: 'Sarah Lin',
    authorRole: 'Director of QA & CAD Operations',
    summary: 'A definitive photo standard for field surveyors. How to capture every critical perspective, label, clearance, and structural angle required for one-touch CAD design and immediate permit approval.',
    keyTakeaways: [
      'Missing or unreadable panel labels cause 60% of second-truck site revisits.',
      'Contextual shots must accompany close-up macro shots to provide spatial reference for draftspersons.',
      'All 4 exterior building elevations and property setbacks must be captured for AHJ fire setback verification.',
      'Georeferenced timestamps on all photos ensure audit compliance with utility interconnection teams.'
    ],
    contentHtml: `
      <h2>The Core 36-Photo Breakdown</h2>
      <p>A high-quality survey package contains zero ambiguous images. Our coordinated surveyors follow a standardized 36-shot sequence that ensures CAD designers have complete spatial clarity.</p>

      <h3>Group A: Property & Site Context (Photos 1–8)</h3>
      <ul>
        <li><strong>Photo 1–4:</strong> Four full exterior building elevations (Front, Rear, Left, Right) taken from sufficient distance to show rooflines and grade.</li>
        <li><strong>Photo 5–6:</strong> Street view showing property address numbers and overhead utility pole or pad-mounted transformer.</li>
        <li><strong>Photo 7–8:</strong> Driveway, equipment access pathways, and ground-mount property perimeter (if applicable).</li>
      </ul>

      <h3>Group B: Roof Surfaces & Obstructions (Photos 9–18)</h3>
      <ul>
        <li><strong>Photo 9–12:</strong> Wide shots of every roof plane designated for solar modules showing whole plane geometry.</li>
        <li><strong>Photo 13:</strong> Digital pitch gauge resting on each active plane displaying exact angle/pitch.</li>
        <li><strong>Photo 14:</strong> Macro close-up of roofing material showing shingle/tile profile and grain condition.</li>
        <li><strong>Photo 15–17:</strong> Close-up measurements of all vents, skylights, chimneys, valleys, and ridges showing tape measure against edge.</li>
        <li><strong>Photo 18:</strong> Gutters, eaves, and fascia detail to evaluate roof attachment bracket clearance.</li>
      </ul>

      <h3>Group C: Electrical Service & Meter (Photos 19–28)</h3>
      <ul>
        <li><strong>Photo 19:</strong> Wide contextual shot showing MSP location relative to building corner, gas meter, and windows (minimum 3 ft gas clearance check).</li>
        <li><strong>Photo 20:</strong> Exterior closed MSP cover showing utility meter face and digital display/dials.</li>
        <li><strong>Photo 21:</strong> Utility meter rating label and serial number.</li>
        <li><strong>Photo 22:</strong> MSP door opened showing breaker directory schedule card.</li>
        <li><strong>Photo 23:</strong> Full interior dead-front shot showing all branch breakers.</li>
        <li><strong>Photo 24:</strong> Macro shot of Main Breaker amp rating stamp (e.g. 200A).</li>
        <li><strong>Photo 25:</strong> Macro shot of Manufacturer Nameplate sticker (Bus rating, model number, UL listing).</li>
        <li><strong>Photo 26:</strong> Top/Bottom service entrance wire gutters showing conduit knockouts and spare breaker slots.</li>
        <li><strong>Photo 27:</strong> Subpanel interior and feeder breaker (if applicable).</li>
        <li><strong>Photo 28:</strong> Grounding electrode conductor (GEC) connection to ground rod or water main.</li>
      </ul>

      <h3>Group D: Attic & Structural Framing (Photos 29–33)</h3>
      <ul>
        <li><strong>Photo 29:</strong> Attic access opening and contextual overview of framing layout.</li>
        <li><strong>Photo 30:</strong> Tape measure across rafter/truss depth and thickness (e.g. 2x6 measuring 1.5" x 5.5").</li>
        <li><strong>Photo 31:</strong> Tape measure between rafters displaying on-center spacing (16" or 24" O.C.).</li>
        <li><strong>Photo 32:</strong> Underside of roof decking showing sheathing material and nail penetration.</li>
        <li><strong>Photo 33:</strong> Ridge beam, purlins, collar ties, or structural bracing.</li>
      </ul>

      <h3>Group E: Battery & Inverter Proposed Locations (Photos 34–36)</h3>
      <ul>
        <li><strong>Photo 34:</strong> Proposed inverter / system gateway wall with tape measure showing width and height clearance.</li>
        <li><strong>Photo 35:</strong> Proposed battery wall showing floor-to-ceiling elevation and adjacent doorways.</li>
        <li><strong>Photo 36:</strong> Planned conduit run path connecting equipment to main electrical service.</li>
      </ul>
    `
  },
  {
    slug: 'electrical-panel-survey-guide-120-percent-rule',
    title: 'Main Service Panel & Busbar Survey Guide: Demystifying the 120% Rule & Interconnection',
    category: 'Solar Design',
    readTime: '7 min read',
    publishedDate: 'August 22, 2026',
    author: 'Marcus Vance',
    authorRole: 'VP of Field Engineering',
    summary: 'An engineer’s field guide to calculating solar backfeed capacity using NEC 705.12(B), identifying busbar ratings, evaluating supply-side taps, and avoiding unexpected Main Panel Upgrades (MPU).',
    keyTakeaways: [
      'The 120% Rule formula: (Busbar Rating x 1.2) - Main Breaker Rating = Maximum allowable solar PV backfeed.',
      'A 200A Bus with a 200A Main Breaker allows up to 40A of solar backfeed (32A continuous inverter output = 7.68 kW AC).',
      'De-rating the main breaker from 200A to 175A on a 200A bus unlocks up to 65A of solar backfeed without an expensive MPU.',
      'Documenting busbar manufacturer ratings (not just the main breaker handle) is critical for structural and electrical engineering stamps.'
    ],
    contentHtml: `
      <h2>The NEC 705.12(B) 120% Rule Explained</h2>
      <p>Under National Electrical Code (NEC) Section 705.12(B), the sum of all power source overcurrent devices (the utility main breaker + the solar backfeed breaker) cannot exceed 120% of the panelboard busbar ampacity rating.</p>
      
      <div style="background: #F1F5F9; padding: 1.5rem; border-left: 4px solid #D97706; margin: 1.5rem 0; border-radius: 4px;">
        <h4 style="margin-bottom: 0.5rem; font-family: var(--font-mono);">FORMULA:</h4>
        <p style="font-family: var(--font-mono); font-size: 1rem; color: #0F172A; margin: 0;"><strong>Max Solar Backfeed Breaker = (Busbar Amp Rating × 1.20) − Main Breaker Amp Rating</strong></p>
      </div>

      <h2>Common Residential Panel Scenarios</h2>
      <table class="specs-table" style="margin: 1.5rem 0;">
        <thead>
          <tr>
            <th>Bus Rating</th>
            <th>Main Breaker</th>
            <th>120% Bus Capacity</th>
            <th>Max Solar Breaker</th>
            <th>Max Continuous AC KW</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>100A</strong></td>
            <td>100A</td>
            <td>120A</td>
            <td>20A</td>
            <td>3.84 kW (16A AC)</td>
          </tr>
          <tr>
            <td><strong>125A</strong></td>
            <td>100A</td>
            <td>150A</td>
            <td>50A</td>
            <td>9.60 kW (40A AC)</td>
          </tr>
          <tr>
            <td><strong>200A</strong></td>
            <td>200A</td>
            <td>240A</td>
            <td>40A</td>
            <td>7.68 kW (32A AC)</td>
          </tr>
          <tr>
            <td><strong>225A</strong></td>
            <td>200A</td>
            <td>270A</td>
            <td>70A</td>
            <td>13.44 kW (56A AC)</td>
          </tr>
          <tr>
            <td><strong>200A (De-rated)</strong></td>
            <td>175A</td>
            <td>240A</td>
            <td>65A (use 60A)</td>
            <td>11.52 kW (48A AC)</td>
          </tr>
        </tbody>
      </table>

      <h2>Field Verification Requirements</h2>
      <p>When our site surveyors inspect an electrical service, they verify:</p>
      <ul>
        <li><strong>Opposite End Placement:</strong> The solar backfeed breaker must be installed at the opposite end of the busbar from the utility input feed to prevent localized busbar overheating.</li>
        <li><strong>Supply-Side Tap Feasibility:</strong> If backfeed is constrained and the utility allows NEC 705.11 line-side taps, the surveyor documents the distance and wire space between the meter socket and the main service disconnect.</li>
        <li><strong>Center-Fed Panels:</strong> In center-fed panels (common in legacy 1970s–1990s installations), the 120% rule generally cannot be applied for opposite-end backfeed, often necessitating a meter-main replacement or feeder-tap box.</li>
      </ul>
    `
  },
  {
    slug: 'what-solar-designers-need-from-site-surveys',
    title: 'What Solar CAD Designers Need from Field Site Surveys for One-Touch Design',
    category: 'Solar Design',
    readTime: '6 min read',
    publishedDate: 'August 25, 2026',
    author: 'Sarah Lin',
    authorRole: 'Director of QA & CAD Operations',
    summary: 'A detailed bridge between field operations and engineering desks. The exact dimensions, obstruction coordinates, structural offsets, and wire pathways required to produce permit-ready plan sets on the first pass.',
    keyTakeaways: [
      'CAD designers need exact eave-to-ridge and rake-to-rake dimensions to calibrate 3D photogrammetry models.',
      'IFC fire code setbacks (typically 36" ridge and 18"-36" valley/eave pathways) must be marked relative to roof access points.',
      'Conduit run lengths and elevation drops must be documented to calculate voltage drop and conduit fill compliance.',
      'Standardized survey inputs reduce CAD drafting revisions from an industry average of 28% to under 3%.'
    ],
    contentHtml: `
      <h2>The Cost of Incomplete Survey Data</h2>
      <p>In high-volume solar EPC operations, every engineering revision costs an average of $250–$450 in drafting labor, delayed permit submittals, and extended project cycle times. The bridge between the field surveyor and the CAD drafter is where profitability is either secured or lost.</p>

      <h2>The 5 Pillars of CAD-Ready Field Data</h2>
      
      <h3>1. Dimensioned Roof Geometry & Pitch</h3>
      <p>While aerial imagery (Nearmap, EagleView, Google Solar API) provides preliminary estimates, physical measurements confirm true rafter span lengths and exact roof plane tilt angles required for solar production modeling (PVWatts, Aurora, HelioScope).</p>

      <h3>2. Obstruction Coordinates with Dimensional Bounding</h3>
      <p>Drafters do not just need to know that a vent exists; they need the exact distance from the nearest ridge, eave, and rake, plus the physical height of the obstruction to calculate winter shading shadow lines.</p>

      <h3>3. Fire Code Setback Classifications</h3>
      <p>Depending on the local AHJ (International Fire Code IFC 2018 / 2021 / 2024), setbacks vary:</p>
      <ul>
        <li><strong>Single Ridge Homes:</strong> 36" pathway from the ridge on panels facing solar arrays.</li>
        <li><strong>Hip Roofs:</strong> 36" clear access pathways on multiple roof planes.</li>
        <li><strong>Eave Access:</strong> 36" wide clear space along driveway or side-yard ladder placement areas.</li>
      </ul>

      <h3>4. Electrical Single-Line Diagram (SLD) Parameters</h3>
      <p>Electrical drafters need clear input data for the Single Line Diagram:</p>
      <ul>
        <li>Service entrance conductor size and insulation type (THHN, XHHW, USE-2).</li>
        <li>Existing subpanel loads and feeder breaker ratings.</li>
        <li>Rapid Shutdown (RSD) device placement according to NEC 690.12.</li>
      </ul>

      <h3>5. Wire Run Distance & Voltage Drop Estimates</h3>
      <p>Surveyors must record estimated conduit run distances from array junction boxes to the inverter/combiner, and from inverter to the MSP. A distance exceeding 80–100 feet requires drafters to upsize conductors from #10 AWG to #8 AWG to keep AC voltage drop under the 2% threshold.</p>
    `
  },
  {
    slug: 'solar-permitting-ahj-requirements-guide',
    title: 'Solar Permitting & AHJ Requirements: Avoiding Common Rejection Triggers',
    category: 'Permitting',
    readTime: '9 min read',
    publishedDate: 'August 28, 2026',
    author: 'Marcus Vance',
    authorRole: 'VP of Field Engineering',
    summary: 'How solar site survey accuracy directly dictates building and electrical permit approval speed across strict municipal AHJs throughout California, Texas, Florida, Arizona, and the Northeast.',
    keyTakeaways: [
      'Over 70% of permit rejections stem from discrepancies between field conditions and submitted plan sets.',
      'Structural calculations must match actual rafter sizes and span tables (IRC Table R802.5.1).',
      'SolarApp+ automated permitting mandates verified field input data before submission.',
      'Documenting working clearance in front of electrical equipment (30" wide, 36" deep, 6\'6" high) satisfies NEC 110.26.'
    ],
    contentHtml: `
      <h2>The Municipal Permitting Landscape</h2>
      <p>Across the United States, there are over 18,000 Authorities Having Jurisdiction (AHJs), each enforcing varying editions of the National Electrical Code (NEC 2017, 2020, or 2023), International Residential Code (IRC), and local fire amendments.</p>

      <h2>The Top 5 Permitting Rejection Triggers</h2>
      
      <h3>1. Rafter Size & Structural Load Discrepancies</h3>
      <p>If a plan set assumes 2x6 rafters at 16" O.C., but the AHJ field inspector finds 2x4 rafters at 24" O.C., the permit is immediately revoked, and structural reinforcement (sistering rafters) is demanded before PTO.</p>

      <h3>2. NEC 110.26 Electrical Working Space Violations</h3>
      <p>AHJ electrical plan checkers verify that the main service panel has clear working space: 30 inches wide, 36 inches depth, and 6 feet 6 inches headroom. Obstructions like air conditioner compressors, gas lines, or permanent fencing within this zone trigger immediate plan rejection.</p>

      <h3>3. Fire Setback Non-Compliance</h3>
      <p>Fire marshals require strict adherence to pathway regulations. If the site survey fails to record that a chimney or valley cuts into the required 36" access path, the entire solar module layout must be re-engineered after plan review.</p>

      <h3>4. Missing or Illegible Equipment Labels</h3>
      <p>When the surveyor provides blurry or illegible nameplate photos, the engineering team cannot guarantee busbar ratings, leading to permit revisions requesting clarification on interconnection methods.</p>

      <h3>5. SolarApp+ Fast-Track Alignment</h3>
      <p>As more AHJs adopt SolarApp+ automated permitting, plan sets are approved in minutes—provided field inputs match the online declaration exactly. Accurate survey data is the prerequisite for automated permitting success.</p>
    `
  },
  {
    slug: 'from-ntp-to-pto-solar-operations-lifecycle',
    title: 'From NTP to PTO: The Solar Operations Lifecycle Explained for High-Growth EPCs',
    category: 'Solar Operations',
    readTime: '10 min read',
    publishedDate: 'August 30, 2026',
    author: 'David Sterling',
    authorRole: 'Chief Operations Officer',
    summary: 'A deep operational breakdown of the solar project milestone pipeline from Notice to Proceed (NTP) to Permission to Operate (PTO). How site survey cycle times determine project cash flow velocity.',
    keyTakeaways: [
      'Site survey is Milestone 1: every day of survey delay directly pushes back engineering, permitting, and construction.',
      'Coordinated third-party survey dispatch eliminates surveyor scheduling bottlenecks and regional dead zones.',
      'Achieving under 72-hour survey turnaround compresses total NTP-to-Install timelines from 45 days to under 21 days.',
      'Clean survey packages accelerate Milestone 2 (Permit Ready) and Milestone 3 (Installation NTP) release.'
    ],
    contentHtml: `
      <h2>The Solar EPC Milestone Pipeline</h2>
      <p>In residential and commercial solar execution, operational speed is directly tied to capital velocity. The lifecycle from contract signing to final revenue recognition follows 8 core milestones:</p>

      <div style="margin: 2rem 0;">
        <ol style="padding-left: 1.5rem; line-height: 2;">
          <li><strong>M1: Site Survey & Feasibility Verification</strong> — Complete field data collection of roof, electrical, structural, and battery conditions.</li>
          <li><strong>M2: CAD Design & Single-Line Plan Set</strong> — Generation of full architectural, structural, and electrical drawings.</li>
          <li><strong>M3: Engineering Stamp & AHJ Permit Submittal</strong> — Structural/Electrical PE stamps and municipal building permit application.</li>
          <li><strong>M4: Utility Interconnection Application</strong> — Initial interconnection request submitted to local electric utility (Net Metering / NEM 3.0 / Export Tariff).</li>
          <li><strong>M5: Notice to Proceed (NTP) & Material Procurement</strong> — Permit approval received, equipment staged, installation scheduled.</li>
          <li><strong>M6: Physical Installation & Commissioning</strong> — Roof racking, modules, inverter, battery, conduit, and rapid shutdown installation.</li>
          <li><strong>M7: Municipal AHJ Final Inspection</strong> — Building and electrical inspector on-site signoff.</li>
          <li><strong>M8: Utility Interconnection & PTO (Permission to Operate)</strong> — Utility bi-directional meter set, final PTO letter issued, system energized, final funding release.</li>
        </ol>
      </div>

      <h2>Why Site Survey is the Critical Path Bottleneck</h2>
      <p>If an EPC takes 10 to 14 days just to schedule and complete a site survey, the entire project timeline stretches beyond customer expectations, resulting in cancellation rates climbing by up to 18%. By streamlining site survey coordination with a 48–72 hour turnaround SLA, EPCs compress the front-end pipeline, moving directly to CAD design within days of contract execution.</p>
    `
  },
  {
    slug: 'utility-interconnection-process-and-meter-requirements',
    title: 'Utility Interconnection Process & Meter Requirements: Navigating Tier 1, 2, and C&I Applications',
    category: 'Interconnection',
    readTime: '8 min read',
    publishedDate: 'September 1, 2026',
    author: 'Marcus Vance',
    authorRole: 'VP of Field Engineering',
    summary: 'A comprehensive operational guide to utility interconnection applications, bi-directional net meters, transformer capacity evaluations, and technical documentation required by major US utilities.',
    keyTakeaways: [
      'Tier 1 applications (typically ≤10 kW to ≤25 kW) qualify for streamlined, fast-track interconnection review.',
      'Utility service meter socket specifications (lever bypass, ringless, 4-jaw vs 5-jaw) must be documented in the field.',
      'Utilities require precise single-line diagrams showing AC disconnect switch locations within sight of the meter.',
      'Pre-surveying utility transformer ratings prevents unexpected grid upgrade charges on commercial solar projects.'
    ],
    contentHtml: `
      <h2>The Interconnection Landscape</h2>
      <p>Every grid-tied solar and storage installation must obtain an Interconnection Agreement with the local electric utility before generating power. Whether dealing with investor-owned utilities (PG&E, SCE, Con Edison, FPL, Duke Energy) or municipal electric co-ops, interconnection review hinges on accurate site documentation.</p>

      <h2>Key Field Elements for Interconnection Approval</h2>
      <ul>
        <li><strong>Utility Meter Number & Service ID:</strong> The physical meter number, barcode, and digital display must be documented to match the utility account bill.</li>
        <li><strong>External AC Disconnect Proximity:</strong> Most utilities mandate a lockable, knife-blade visible AC disconnect switch located within 10 feet of the utility meter, accessible to utility lineworkers 24/7 without entering locked gates.</li>
        <li><strong>Utility Service Type:</strong> 120/240V Single Phase (Residential standard), 120/208V 3-Phase 4-Wire (Common commercial), or 277/480V 3-Phase (Industrial/Large Commercial).</li>
        <li><strong>Service Entrance Conductor Size:</strong> Documenting the feeder wire gauge ensures the utility transformer has adequate backfeed capacity without triggering localized voltage spikes.</li>
      </ul>
    `
  },
  {
    slug: 'battery-storage-site-survey-guide-clearances-routing',
    title: 'Battery Storage Site Survey Guide: NFPA 855 Clearances, Gateway Placement, & Conduit Routing',
    category: 'Solar Operations',
    readTime: '7 min read',
    publishedDate: 'September 3, 2026',
    author: 'Sarah Lin',
    authorRole: 'Director of QA & CAD Operations',
    summary: 'How to survey residential and commercial battery storage installations. Essential spatial clearances, indoor/outdoor AHJ code rules, thermal runaway protections, and backup subpanel wiring paths.',
    keyTakeaways: [
      'NFPA 855 Standard for the Installation of Stationary Energy Storage Systems sets strict separation distances.',
      'Batteries must maintain 3 feet of clearance from windows, doors, and other ESS units unless certified for closer spacing.',
      'Surveying backup load panels requires auditing every essential circuit breaker (refrigeration, lighting, well pump, medical).',
      'Physical wall framing must be verified for shear capacity to support wall-mounted battery units.'
    ],
    contentHtml: `
      <h2>The Growing Role of Energy Storage in Solar Operations</h2>
      <p>With time-of-use (TOU) utility rates and export tariff shifts (like California NEM 3.0), solar-plus-storage represents over 70% of new solar installations. Surveying battery energy storage systems (BESS) requires specialized field protocols far beyond traditional PV-only audits.</p>

      <h2>Critical Survey checkpoints for ESS Installations</h2>
      
      <h3>1. NFPA 855 Spatial Clearances</h3>
      <ul>
        <li><strong>Openings into Buildings:</strong> 36 inches minimum distance from any operable window, door, or ventilation intake.</li>
        <li><strong>Unit Separation:</strong> 36 inches of spacing between adjacent battery enclosures unless UL 9540A large-scale fire testing permits closer placement.</li>
        <li><strong>Vehicle Impact Protection:</strong> If installed in a residential garage, verify if AHJ requires physical concrete-filled steel bollards or elevated wall mounting (&gt;36" above floor).</li>
      </ul>

      <h3>2. System Controller & Gateway Placement</h3>
      <p>The microgrid interconnection device (e.g. Tesla Backup Gateway, Enphase System Controller, SolarEdge Backup Interface) must be positioned adjacent to the main electrical service to facilitate whole-home or partial-home microgrid islanding.</p>

      <h3>3. Critical Loads Subpanel Survey</h3>
      <p>For partial-home backup designs, the surveyor must photograph the existing electrical panel directory and inventory branch circuits to determine which breakers will be relocated to the backup load center.</p>
    `
  }
];
