/**
 * TTI Master Trackboard: 2028 LA Olympics Earthquake Disaster Simulation
 * 8 Diverse Olympic Casualty Scenarios | 32 Unique Technologies | 4 Options per Case | Generic Names
 */

const PATIENT_STATIONS = [
  {
    id: 1,
    bed: 'BED 01',
    venue: 'Gymnastics Arena (Pauley Pavilion)',
    name: '28M Crush Injury',
    title: '28M Trapped Under Fallen Steel Truss',
    vitals: ['BP: 104/68', 'HR: 112', 'SpO2: 97%'],
    prompt: '28-year-old venue volunteer extricated after 3 hours pinned beneath a steel roof truss. Right forearm compartments are tense and firm; passive finger extension elicits severe pain. Foley drains dark burgundy urine.',
    options: [
      {
        id: 'mdcalc_c1',
        icon: '📱',
        name: 'Evidence-Based Crush Injury Risk Calculator',
        desc: 'Online clinical decision tool predicting acute kidney injury risk in traumatic crush syndrome to guide fluid and bicarbonate resuscitation.',
        url: 'https://www.mdcalc.com/calc/10231/mcmahon-score-rhabdomyolysis',
        impact: 'Calculates McMahon Score from bedside inputs to stratify acute tubular necrosis risk and protocolize aggressive bicarbonate diuresis.'
      },
      {
        id: 'icp_monitor_c1',
        icon: '💉',
        name: 'Digital Intracompartmental Pressure Monitor',
        desc: 'Sterile handheld pressure monitor providing real-time quantitative intramuscular compartment pressures for surgical decision-making.',
        url: 'https://www.stryker.com/us/en/acute-care/products/intracompartmental-pressure-monitor-system.html',
        impact: 'Delivers quantitative delta compartment pressure readings at the bedside to guide emergent fasciotomy consultation.'
      },
      {
        id: 'dax_c1',
        icon: '🎙️',
        name: 'AI Ambient Clinical Documentation System',
        desc: 'Hands-free voice AI automatically capturing hourly fluid logs, urine output, and serial neurovascular exams in real time.',
        url: 'https://www.nuance.com/healthcare/ambient-clinical-intelligence.html',
        impact: 'Transcribes serial intake/output fluid logs and physical exam findings hands-free, allowing the clinician to remain at the bedside.'
      },
      {
        id: 'istat_c1',
        icon: '🧪',
        name: 'Point-of-Care Handheld Blood Analyzer',
        desc: 'Portable cartridge-based analyzer delivering 2-minute bedside potassium, lactate, and blood gas results from whole blood.',
        url: 'https://www.pointofcare.abbott/',
        impact: 'Provides point-of-care potassium and blood gas values in 120 seconds, enabling immediate detection of hyperkalemia before cardiac toxicity occurs.'
      }
    ]
  },
  {
    id: 2,
    bed: 'BED 02',
    venue: 'Olympic Village Utility Hub',
    name: '31F Penetrating Shrapnel',
    title: '31F Shrapnel to Right Flank & Chest',
    vitals: ['BP: 76/40', 'HR: 138', 'SpO2: 90%'],
    prompt: '31-year-old official struck by metal shrapnel from a ruptured gas line. 4cm puncture wound over right flank; diminished breath sounds right hemithorax. Restless, pale, diffuse abdominal rigidity.',
    options: [
      {
        id: 'butterfly_c2',
        icon: '🩻',
        name: 'Handheld AI eFAST Ultrasound',
        desc: 'Semiconductor ultrasound probe with automated free-fluid detection for rapid bedside trauma eFAST exams.',
        url: 'https://www.butterflynetwork.com/iq3',
        impact: 'Detects intraperitoneal fluid in Morrison\'s pouch and absent lung sliding on the right within 20 seconds.'
      },
      {
        id: 'moxi_c2',
        icon: '🤖',
        name: 'Autonomous Hospital Supply Robot',
        desc: 'Autonomous mobile robot navigating hospital corridors to retrieve blood products and trauma supplies without staff.',
        url: 'https://www.diligentrobots.com/moxi',
        impact: 'Dispatched autonomously to retrieve uncrossmatched O-negative blood and supplies, freeing every staff member for direct patient care.'
      },
      {
        id: 'belmont_c2',
        icon: '⚡',
        name: 'High-Flow Blood & Fluid Warming Infuser',
        desc: 'Rapid infusion system delivering warm blood products up to 1000 mL/min with automated air bubble detection.',
        url: 'https://www.belmontmedtech.com/rapid-infuser-ri-2',
        impact: 'Delivers warmed blood products at high flow rates with automated air-bubble safety detection, rapidly correcting hemorrhagic shock.'
      },
      {
        id: 'ezio_c2',
        icon: '🔩',
        name: 'Intraosseous Vascular Access System',
        desc: 'Power-driven needle set providing immediate vascular access into the proximal humerus in under 30 seconds when veins are collapsed.',
        url: 'https://www.teleflex.com/usa/en/product-areas/emergency-medicine/intraosseous-access/arrow-ez-io-system/',
        impact: 'Secures immediate intraosseous access in 20 seconds, allowing rapid blood product infusion when peripheral veins are inaccessible.'
      }
    ]
  },
  {
    id: 3,
    bed: 'BED 03',
    venue: 'SoFi Stadium (Olympic Stadium)',
    name: '64M Sudden Cardiac Arrest',
    title: '64M Pulseless Ventricular Fibrillation',
    vitals: ['BP: 0/0', 'HR: 0 (VFib)', 'SpO2: Unobtainable'],
    prompt: '64-year-old spectator collapses during stadium evacuation. Arrives pulseless and apneic. Cardiac monitor: coarse Ventricular Fibrillation.',
    options: [
      {
        id: 'lucas_c3',
        icon: '🤖',
        name: 'Automated Mechanical CPR Robot',
        desc: 'Robotic chest compression device delivering continuous guideline-consistent 102/min compressions without rescuer fatigue.',
        url: 'https://www.stryker.com/us/en/emergency-care/products/lucas-3.html',
        impact: 'Delivers uninterrupted 102 compressions/min, maintaining coronary perfusion pressure throughout defibrillation cycles without fatigue.'
      },
      {
        id: 'fullcode_c3',
        icon: '⏱️',
        name: 'Smart ACLS Resuscitation Code Tracker',
        desc: 'Mobile app tracking 2-minute CPR intervals, shock cycles, epinephrine dosing, and cardiac rhythm logs in real time.',
        url: 'https://cpr.heart.org/en/resources/full-code-pro-app',
        impact: 'Tracks exact defibrillation intervals, timestamps medication doses, and coordinates resuscitation choreography across the full team.'
      },
      {
        id: 'exo_c3',
        icon: '🩻',
        name: 'Handheld AI Cardiac Ultrasound',
        desc: 'Handheld ultrasound probe with AI-automated ejection fraction and cardiac standstill detection during 5-second pulse pauses.',
        url: 'https://www.exo.inc/iris',
        impact: 'Performs a 5-second subxiphoid cardiac view during rhythm checks to differentiate true cardiac standstill from fine VFib.'
      },
      {
        id: 'cardiologs_c3',
        icon: '📈',
        name: 'AI 12-Lead ECG Analysis Platform',
        desc: 'Deep learning platform detecting acute coronary occlusion and STEMI equivalents on post-ROSC ECGs in real time.',
        url: 'https://cardiologs.com/',
        impact: 'Processes post-resuscitation ECGs through neural networks to detect acute coronary occlusion and auto-alert the catheterization lab.'
      }
    ]
  },
  {
    id: 4,
    bed: 'BED 04',
    venue: 'LA Live Aquatics Center',
    name: '29F Pregnant — Lighting Truss Strike',
    title: '29F Pregnant (30w) — Uterine Tenderness & Shock',
    vitals: ['BP: 74/42', 'HR: 134', 'SpO2: 94%'],
    prompt: '29-year-old spectator at 30 weeks gestation struck across the abdomen by a fallen metal lighting fixture. Uterine tenderness with frequent contractions, moderate vaginal bleeding, faint fetal heart tones. No OBGYN on site.',
    options: [
      {
        id: 'teladoc_c4',
        icon: '📡',
        name: 'Emergency Tele-Obstetric Video Consult',
        desc: 'High-definition mobile video workstation connecting the trauma bay to remote maternal-fetal medicine specialists for live image review.',
        url: 'https://www.teladochealth.com/organizations/hospitals-health-systems/virtual-care-solutions',
        impact: 'Connects directly to an off-site maternal-fetal specialist who reviews real-time ultrasound and guides emergent obstetrical surgical clearance.'
      },
      {
        id: 'fetal_doppler_c4',
        icon: '🩺',
        name: 'Handheld Digital Fetal Doppler',
        desc: 'High-sensitivity pocket Doppler providing real-time digital fetal heart rate display at the bedside.',
        url: 'https://www.huntleigh-diagnostics.com/obstetric-products/sonicaid-one/',
        impact: 'Rapidly displays real-time fetal heart rate to continuously monitor fetal status during maternal resuscitation.'
      },
      {
        id: 'zipline_c4',
        icon: '🚁',
        name: 'Autonomous Medical Blood Delivery Drone',
        desc: 'Autonomous drone system dispatching emergency uncrossmatched blood products from regional depots across disaster-damaged roads.',
        url: 'https://www.flyzipline.com/products',
        impact: 'Bypasses earthquake-damaged roads to deliver uncrossmatched packed red blood cells by autonomous UAV in under 15 minutes.'
      },
      {
        id: 'caption_c4',
        icon: '🩻',
        name: 'AI Real-Time Ultrasound Guidance Platform',
        desc: 'AI navigation software providing on-screen turn-by-turn probe guidance, enabling non-experts to capture diagnostic obstetric images.',
        url: 'https://www.gehealthcare.com/products/ultrasound/caption-health',
        impact: 'Guides non-specialist probe placement with real-time visual cues to confirm placental position and intraperitoneal free fluid.'
      }
    ]
  },
  {
    id: 5,
    bed: 'BED 05',
    venue: '7th St/Metro Center Subway Station',
    name: '22F Acute Dyspnea & Hand Spasms',
    title: '22F Acute Hyperventilation & Carpopedal Spasms',
    vitals: ['BP: 136/84', 'HR: 126', 'RR: 36', 'SpO2: 99%'],
    prompt: '22-year-old athlete evacuated from a smoke-filled subway tunnel. Severe shortness of breath, lightheadedness, and bilateral hand cramping. Lungs completely clear bilaterally on auscultation.',
    options: [
      {
        id: 'ada_c5',
        icon: '📱',
        name: 'AI Clinical Triage & Symptom Assessment Kiosk',
        desc: 'Self-service AI intake platform that evaluates symptoms, rules out toxic inhalation red flags, and categorizes surge triage priority.',
        url: 'https://ada.com/enterprise/',
        impact: 'Evaluates presenting symptoms, exposures, and vitals to screen for toxic inhalation or cardiac red flags and assign triage acuity.'
      },
      {
        id: 'eko_c5',
        icon: '🩺',
        name: 'AI Digital Stethoscope & 3-Lead ECG',
        desc: 'Smart stethoscope with AI acoustic algorithms ruling out rales, bronchospasm, and arrhythmias in under 30 seconds.',
        url: 'https://www.ekohealth.com/products/core-500-digital-stethoscope',
        impact: 'Confirms bilateral clear breath sounds and normal sinus rhythm in 15 seconds, ruling out pulmonary edema and bronchospasm.'
      },
      {
        id: 'sensium_c5',
        icon: '📡',
        name: 'Wireless Continuous Vital Sign Patch',
        desc: 'Lightweight wearable chest sensor continuously streaming heart rate and respiratory rate to a monitoring tablet.',
        url: 'https://sensium.co.uk/product/',
        impact: 'Continuously tracks respiratory rate trends in the surge tent, freeing staff to attend to higher-acuity resuscitation bays.'
      },
      {
        id: 'corti_c5',
        icon: '🎙️',
        name: 'Acoustic AI Respiratory Analyzer',
        desc: 'Acoustic AI platform analyzing vocal distress cadences and breath sounds to evaluate work of breathing and hyperventilation patterns.',
        url: 'https://corti.ai/platform/triage',
        impact: 'Analyzes vocal cadence and breathing acoustics to confirm hyperventilation and differentiate it from upper airway obstruction.'
      }
    ]
  },
  {
    id: 6,
    bed: 'BED 06',
    venue: 'Dignity Health Sports Park Velodrome',
    name: '45M 55% Burns & Inhalation',
    title: '45M Circumferential Burns & Airway Inhalation Injury',
    vitals: ['BP: 98/60', 'HR: 120', 'SpO2: 95%', 'Temp: 35.4°C'],
    prompt: '45-year-old technician caught in a diesel fuel flash fire. 55% TBSA charred, leathery circumferential burns across torso and both arms. Singed facial hair, carbonaceous sputum, and hoarse voice on exam.',
    options: [
      {
        id: 'burn_tele_c6',
        icon: '📡',
        name: 'Burn Specialist Tele-Consult Portal',
        desc: 'Burn telemedicine network linking the disaster site directly to a regional burn center director for fluid calculation and transfer coordination.',
        url: 'https://ameriburn.org/',
        impact: 'Connects to a regional burn center director for Parkland formula verification, escharotomy guidance, and air transport dispatch.'
      },
      {
        id: 'video_laryngo_c6',
        icon: '🫁',
        name: 'Video Laryngoscope System',
        desc: 'High-definition digital laryngoscope enabling visualization of the edematous glottis before progressive thermal airway swelling closes it.',
        url: 'https://www.verathon.com/glidescope/glidescope-core/',
        impact: 'Provides HD visualization for early endotracheal intubation before progressive thermal edema closes the airway.'
      },
      {
        id: 'thermal_cam_c6',
        icon: '📸',
        name: 'Infrared Thermal Burn Depth Camera',
        desc: 'Thermal imaging camera attachment measuring skin microvascular temperature differentials to map burn depth zones.',
        url: 'https://www.flir.com/products/flir-one-pro/',
        impact: 'Maps cutaneous microvascular perfusion using infrared imaging to differentiate deep partial-thickness from full-thickness burn margins.'
      },
      {
        id: 'smart_pump_c6',
        icon: '💧',
        name: 'Smart Bedside Infusion Pump System',
        desc: 'Volumetric infusion pump with dose-error reduction software for precise hourly fluid titration based on weight and burn surface area.',
        url: 'https://www.baxter.com/healthcare-professionals/infusion-systems/spectrum-iq-infusion-system',
        impact: 'Delivers calculated hourly crystalloid volumes based on burn surface area, preventing under-resuscitation and pulmonary fluid overload.'
      }
    ]
  },
  {
    id: 7,
    bed: 'BED 07',
    venue: 'Exposition Park Fan Zone',
    name: '7F Open Femur Fracture',
    title: '7F Open Femur Fracture & Hemorrhagic Shock',
    vitals: ['BP: 82/50', 'HR: 152', 'SpO2: 95%', 'Temp: 36.1°C'],
    prompt: '7-year-old child injured in a temporary bleacher collapse. Right mid-shaft open femur fracture with bone protrusion and active arterial bleeding. Pale, lethargic, capillary refill > 4 seconds.',
    options: [
      {
        id: 'pocus_peds_c7',
        icon: '🩻',
        name: 'Wireless Handheld Ultrasound Scanner',
        desc: 'Wireless handheld ultrasound scanner with AI pediatric presets for vascular access guidance and abdominal free-fluid screening.',
        url: 'https://clarius.com/scanners/pal-hd3/',
        impact: 'Guides rapid femoral vascular access under real-time imaging while screening for occult intra-abdominal free fluid.'
      },
      {
        id: 'peds_heme_c7',
        icon: '🧪',
        name: 'Point-of-Care AI Optical Hematology Analyzer',
        desc: 'Computer-vision optical analyzer delivering complete CBC and platelet counts from a single fingerstick in 10 minutes.',
        url: 'https://www.sightdx.com/olo',
        impact: 'Provides rapid CBC and platelet counts to assess acute hemorrhagic anemia and determine transfusion requirements in a pediatric patient.'
      },
      {
        id: 'tug_robot_c7',
        icon: '🤖',
        name: 'Autonomous Hospital Medication & Supply Robot',
        desc: 'Autonomous mobile hospital robot navigating elevators and corridors to retrieve pediatric blood packs and splint hardware.',
        url: 'https://aethon.com/tug/',
        impact: 'Autonomously retrieves pediatric uncrossmatched blood units and splint supplies from central stock, freeing all staff for direct care.'
      },
      {
        id: 'peds_tele_c7',
        icon: '📡',
        name: 'Pediatric Emergency Tele-Specialist Consult',
        desc: 'Tele-mentoring platform connecting bedside clinicians with remote pediatric emergency attendings for sedation and procedure guidance.',
        url: 'https://www.gaumard.com/pediatric-hal',
        impact: 'Establishes a live video mentoring link with a pediatric emergency attending to supervise procedural sedation and fracture stabilization.'
      }
    ]
  },
  {
    id: 8,
    bed: 'BED 08',
    venue: 'Long Beach Marine Stadium',
    name: '73M Submersion & Hypothermia',
    title: '73M Harbor Submersion — Severe Hypothermia',
    vitals: ['BP: 78/48', 'HR: 42 (Brady)', 'SpO2: 86%', 'Core Temp: 29.2°C'],
    prompt: '73-year-old spectator rescued after 15 minutes submerged following a floating dock collapse. Unresponsive, GCS 4, profound peripheral cyanosis, no shivering, distant heart sounds.',
    options: [
      {
        id: 'fluid_warmer_c8',
        icon: '🔥',
        name: 'Active IV Fluid Warming Infusion System',
        desc: 'High-flow infusion system delivering crystalloid and blood products at 41°C to perform active internal core rewarming.',
        url: 'https://www.icumed.com/products/temperature-management/blood-and-fluid-warmers/level-1-fast-flow-fluid-warmers',
        impact: 'Infuses normothermic IV fluid at 41°C for rapid internal core rewarming, correcting severe hypothermic bradycardia and vasoplegia.'
      },
      {
        id: 'smart_vent_c8',
        icon: '🫁',
        name: 'Intelligent Adaptive Mechanical Ventilator',
        desc: 'ICU ventilator with closed-loop AI adaptive support algorithms and heated humidification for active airway rewarming.',
        url: 'https://www.hamilton-medical.com/en_US/Products/Mechanical-ventilators/HAMILTON-C1.html',
        impact: 'Delivers heated, humidified ventilation through a closed-loop adaptive algorithm, actively rewarming the core via the pulmonary vasculature.'
      },
      {
        id: 'pocus_cardiac_c8',
        icon: '🩻',
        name: 'Dedicated Emergency Point-of-Care Ultrasound System',
        desc: 'Full-featured emergency ultrasound workstation assessing cardiac contractility and pericardial effusion in profound bradycardia.',
        url: 'https://www.sonosite.com/products/sonosite-px',
        impact: 'Evaluates bedside cardiac wall motion and contractility to confirm organized mechanical activity and rule out pericardial tamponade.'
      },
      {
        id: 'ecg_system_c8',
        icon: '📈',
        name: 'High-Definition 12-Lead Diagnostic ECG System',
        desc: 'Bedside 12-lead ECG machine with automated analysis detecting hypothermic J-waves (Osborn waves) and QT prolongation.',
        url: 'https://www.gehealthcare.com/products/diagnostic-ecg/mac-5500-hd',
        impact: 'Identifies pathognomonic J-waves and monitors for ventricular irritability during active rewarming to guide antiarrhythmic management.'
      }
    ]
  }
];

class TTISimulationEngine {
  constructor() {
    this.stations = PATIENT_STATIONS;
    this.teamName = 'Team Alpha';
    this.currentStationIdx = 0;
    this.patientResults = [];
    this.selectedOptionId = null;
    this.isDeployed = false;

    this.totalTimerSeconds = 600;
    this.timerInterval = null;
    this.simulationActive = false;

    this.initDOM();
    this.bindEvents();
  }

  initDOM() {
    this.welcomeModal = document.getElementById('instructions-modal');
    this.debriefModal = document.getElementById('debrief-modal');
    this.teamInput = document.getElementById('team-name-input');
    this.startBtn = document.getElementById('btn-start-sim');
    this.timerDisplay = document.getElementById('timer-display');
    this.timerWidget = document.getElementById('timer-widget');
    this.teamNameDisplay = document.getElementById('team-name-display');
    this.trackboardContainer = document.getElementById('trackboard-list');
    this.historyContainer = document.getElementById('history-list');
    this.stageViewport = document.getElementById('stage-viewport');
  }

  bindEvents() {
    this.startBtn.addEventListener('click', () => {
      const inputVal = this.teamInput.value.trim();
      if (inputVal) this.teamName = inputVal;
      this.teamNameDisplay.innerText = this.teamName;
      this.welcomeModal.classList.add('hidden');
      Sound.init();
      Sound.playClick();
      this.startSimulation();
    });

    document.getElementById('btn-restart-sim').addEventListener('click', () => {
      Sound.playClick();
      location.reload();
    });
  }

  startSimulation() {
    this.simulationActive = true;
    this.startGlobalTimer(600);
    this.renderStation(0);
  }

  startGlobalTimer(seconds) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.totalTimerSeconds = seconds;
    this.updateTimerUI();

    this.timerInterval = setInterval(() => {
      if (!this.simulationActive) return;
      this.totalTimerSeconds--;
      this.updateTimerUI();

      if (this.totalTimerSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.simulationActive = false;
        Sound.playDeteriorated();
        this.handleGlobalTimeout();
      } else if (this.totalTimerSeconds <= 60 && this.totalTimerSeconds % 2 === 0) {
        Sound.playTimerUrgent();
      } else if (this.totalTimerSeconds % 10 === 0) {
        Sound.playTimerTick();
      }
    }, 1000);
  }

  updateTimerUI() {
    const mins = Math.floor(Math.max(0, this.totalTimerSeconds) / 60);
    const secs = Math.max(0, this.totalTimerSeconds) % 60;
    this.timerDisplay.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (this.totalTimerSeconds <= 60) {
      this.timerWidget.className = 'timer-widget urgent';
    } else if (this.totalTimerSeconds <= 180) {
      this.timerWidget.className = 'timer-widget warning';
    } else {
      this.timerWidget.className = 'timer-widget';
    }
  }

  renderStation(idx) {
    if (idx >= this.stations.length) {
      this.finishSimulation();
      return;
    }
    this.currentStationIdx = idx;
    this.selectedOptionId = null;
    this.isDeployed = false;
    this.renderTrackboard();
    this.renderHistory();
    this.renderStationCard(this.stations[idx]);
  }

  renderTrackboard() {
    this.trackboardContainer.innerHTML = '';
    this.stations.forEach((st, idx) => {
      const row = document.createElement('div');
      let statusClass = 'pending', statusText = 'Pending';

      const result = this.patientResults[idx];
      if (result) { statusClass = 'deployed'; statusText = 'DONE'; }
      else if (idx === this.currentStationIdx) { statusClass = 'active-row'; statusText = 'ACTIVE'; }

      row.className = `track-row ${idx === this.currentStationIdx ? 'active' : ''} ${result ? 'completed' : ''}`;
      row.innerHTML = `
        <span class="track-bed">${st.bed}</span>
        <span class="track-patient-name" title="${st.name}">${st.name}</span>
        <span class="track-status-pill ${statusClass}">${statusText}</span>
      `;
      this.trackboardContainer.appendChild(row);
    });
  }

  renderHistory() {
    this.historyContainer.innerHTML = '';
    if (this.patientResults.length === 0) {
      this.historyContainer.innerHTML = '<div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">No allocations yet.</div>';
      return;
    }
    this.patientResults.forEach((res, idx) => {
      const item = document.createElement('div');
      item.className = 'history-item';
      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="history-bed">${this.stations[idx].bed}</span>
          <span class="track-status-pill deployed" style="font-size: 0.6rem;">DONE</span>
        </div>
        <div class="history-tool">${res.techUsed}</div>
      `;
      this.historyContainer.appendChild(item);
    });
  }

  renderStationCard(st) {
    this.stageViewport.innerHTML = `
      <div class="patient-card">
        <div class="patient-header">
          <div class="patient-station-number">
            <span class="badge">${st.bed}</span>
            <span>${st.title}</span>
          </div>
          <div class="venue-badge">📍 ${st.venue}</div>
        </div>

        <div class="patient-vitals-bar">
          ${st.vitals.map(v => `<span class="vital-chip">${v}</span>`).join('')}
        </div>

        <div class="patient-prompt-box">${st.prompt}</div>

        <div class="options-section-title">SELECT 1 TECHNOLOGY TO DEPLOY:</div>

        <div class="options-list">
          ${st.options.map(opt => `
            <div class="option-card" data-opt-id="${opt.id}">
              <div class="option-icon-box">${opt.icon || '🩺'}</div>
              <div class="option-radio"></div>
              <div class="option-content">
                <div class="option-header-row">
                  <div class="option-name">${opt.name}</div>
                  <a href="${opt.url}" target="_blank" rel="noopener noreferrer" class="option-website-link" onclick="event.stopPropagation();">
                    Tech Tool Website ↗
                  </a>
                </div>
                <div class="option-desc">${opt.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 4px;" id="action-btn-container">
          <button class="submit-decision-btn" id="btn-submit-decision" disabled>
            DEPLOY TECHNOLOGY
          </button>
        </div>

        <div id="outcome-container"></div>
      </div>
    `;

    document.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        if (this.isDeployed) return;
        Sound.playClick();
        document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedOptionId = card.dataset.optId;
        const btn = document.getElementById('btn-submit-decision');
        if (btn) btn.disabled = false;
      });
    });

    document.getElementById('btn-submit-decision').addEventListener('click', () => {
      this.evaluateDecision();
    });
  }

  evaluateDecision() {
    if (!this.selectedOptionId || this.isDeployed) return;

    const st = this.stations[this.currentStationIdx];
    const opt = st.options.find(o => o.id === this.selectedOptionId);
    if (!opt) return;

    this.isDeployed = true;
    Sound.playStabilized();

    // Lock cards — but links stay clickable via CSS pointer-events on .option-website-link
    document.querySelectorAll('.option-card').forEach(card => card.classList.add('locked'));

    this.patientResults[this.currentStationIdx] = {
      stationId: st.id,
      stationName: st.name,
      techUsed: opt.name,
      impact: opt.impact,
      url: opt.url
    };

    this.renderTrackboard();
    this.renderHistory();

    const btnContainer = document.getElementById('action-btn-container');
    if (btnContainer) btnContainer.style.display = 'none';

    const container = document.getElementById('outcome-container');
    container.innerHTML = `
      <div class="outcome-reveal-box">
        <div class="outcome-header">DEPLOYMENT BRIEF — ${opt.name}</div>
        <div class="outcome-body">${opt.impact}</div>
        <button class="next-station-btn" id="btn-next-station">
          ${this.currentStationIdx === this.stations.length - 1 ? 'VIEW MASTER DEBRIEF →' : 'NEXT CASE →'}
        </button>
      </div>
    `;

    document.getElementById('btn-next-station').addEventListener('click', () => {
      Sound.playClick();
      this.renderStation(this.currentStationIdx + 1);
    });
  }

  handleGlobalTimeout() {
    for (let i = this.currentStationIdx; i < this.stations.length; i++) {
      if (!this.patientResults[i]) {
        this.patientResults[i] = {
          stationId: this.stations[i].id,
          stationName: this.stations[i].name,
          techUsed: 'None (Timer Expired)',
          impact: '',
          url: '#'
        };
      }
    }
    this.renderTrackboard();
    this.finishSimulation(true);
  }

  finishSimulation(isTimeout = false) {
    this.simulationActive = false;
    if (this.timerInterval) clearInterval(this.timerInterval);
    Sound.playStabilized();

    const timeUsedSeconds = 600 - Math.max(0, this.totalTimerSeconds);
    const timeMins = Math.floor(timeUsedSeconds / 60);
    const timeSecs = timeUsedSeconds % 60;
    const timeUsedStr = `${timeMins}m ${timeSecs}s`;
    const completedCount = this.patientResults.filter(r => !r.techUsed.includes('Expired')).length;

    document.getElementById('debrief-content-area').innerHTML = `
      <div class="debrief-header">
        <h2>MASTER SIMULATION DEBRIEF</h2>
        <p style="color: var(--accent-amber); font-size: 0.85rem; font-weight: 600; margin-top: 4px;">
          2028 LA OLYMPICS EARTHQUAKE RESPONSE // TEAM: ${this.teamName.toUpperCase()}
        </p>
      </div>

      <div class="debrief-score-grid">
        <div class="debrief-score-box">
          <div class="num">${completedCount} / 8</div>
          <div class="lbl">CASES COMPLETED</div>
        </div>
        <div class="debrief-score-box">
          <div class="num">${timeUsedStr}</div>
          <div class="lbl">TIME ON SHIFT</div>
        </div>
        <div class="debrief-score-box">
          <div class="num">100%</div>
          <div class="lbl">VENUE COVERAGE</div>
        </div>
      </div>

      <div class="debrief-overview-box">
        <strong style="color: #fff; display: block; margin-bottom: 8px;">Healthcare Technology Integration in Mass Casualty Events</strong>
        During large-scale disasters like an Olympic earthquake scenario, emergency departments face simultaneous subspecialist shortages, supply chain disruptions, and extreme cognitive overload. Deploying a coordinated suite of health technologies — including clinical decision algorithms, autonomous robotics, real-time tele-consultation, point-of-care diagnostics, and AI-guided imaging — fundamentally changes the capacity and speed of disaster emergency care. Each tool addresses a specific operational bottleneck: robotics eliminate supply courier tasks, tele-consult bridges specialist gaps, AI diagnostics compress time-to-decision, and ambient documentation reclaims physician cognitive bandwidth.
      </div>

      <div class="debrief-tradeoffs-box">
        <h4>FACILITATOR DISCUSSION PROMPTS</h4>
        <ul>
          <li><strong>Robotics vs Human Bandwidth:</strong> How does autonomous supply and CPR robotics free clinical staff for direct patient care during surge?</li>
          <li><strong>Tele-Consultation in Austere Conditions:</strong> When subspecialists are unavailable on-site, how does video tele-consult alter surgical and transfer timelines?</li>
          <li><strong>Clinical Decision Support:</strong> How do standardized risk calculators reduce cognitive error under time pressure compared to memory-based decision-making?</li>
        </ul>
      </div>

      <button class="submit-decision-btn" id="btn-restart-sim" style="align-self: center; margin-top: 6px;">
        RESTART FOR NEXT TEAM
      </button>
    `;

    document.getElementById('btn-restart-sim').addEventListener('click', () => {
      Sound.playClick();
      location.reload();
    });

    document.getElementById('debrief-modal').classList.remove('hidden');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.Simulation = new TTISimulationEngine();
});
