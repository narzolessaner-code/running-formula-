/* ============================================================================
   BIOMECHANICS STUDY SYSTEM — CONTENT
   All study material lives here: the 13-week map, flashcards, quiz bank,
   formulas, resources, rules, and the weekly loop.
   Data only. No logic. Rendered by app.js / flashcards.js / quiz.js
   ========================================================================== */

const CONTENT = {};

/* ----------------------------------------------------------------------------
   COURSE SHAPE — the "one thing to understand first"
   -------------------------------------------------------------------------- */
CONTENT.shape = {
  title: "Two subjects wearing one name",
  halves: [
    {
      name: "Weeks 1–6 → Midterm",
      nature: "Conceptual, anatomical, list-heavy",
      failure: "Vague definitions, missed terminology",
      weapon: "Retrieval + physical embodiment",
      kills: "Cramming lists you never spoke aloud",
    },
    {
      name: "Weeks 8–12 → Finals",
      nature: "Quantitative, formula-heavy",
      failure: "Wrong units, wrong trig, wrong sign",
      weapon: "Problem reps + error log",
      kills: "Meeting trig for the first time in Week 8",
    },
  ],
  keyMove:
    "Spend 10 minutes a day on math prep during Weeks 1–6, while content load is light. By Week 8 the math is old news — you only learn the biomechanics on top of it.",
};

/* ----------------------------------------------------------------------------
   THE WEEKLY LOOP — repeats every week
   -------------------------------------------------------------------------- */
CONTENT.loop = [
  {
    id: "prime",
    day: "D−1",
    title: "PRIME",
    time: "35 min",
    when: "The night before class",
    steps: [
      "Skim this week's Hamm chapter — headings, bold words, every formula, every figure caption. Don't study it. 15 min.",
      "Write 5 questions you can't answer yet. Literally write them. 10 min.",
      "Topic name in the centre of a blank page; dump everything you already know around it. 10 min.",
    ],
    point: "Class stops being an information download and becomes answering your 5 questions.",
  },
  {
    id: "class",
    day: "D0",
    title: "CLASS — four-column capture",
    time: "in class",
    when: "Class day",
    steps: [
      "Column 1: Terms he defines aloud.",
      "Column 2: Every formula + units.",
      "Column 3: Any example he uses twice.",
      "Column 4: Assessment / admin.",
      'Column 5 — "?": anything that flew past you. Each "?" is a to-do for tonight.',
    ],
    point: "The fifth column matters more than all the others.",
  },
  {
    id: "blankpage",
    day: "D0 night",
    title: "THE BLANK PAGE",
    time: "25 min",
    when: "Class night — non-negotiable",
    steps: [
      "Close notes, close book, take a blank page.",
      "Rebuild the entire lecture from memory — terms, formulas, diagrams, examples. Write badly. Get it wrong.",
      "Then open notes and correct in a different colour ink.",
      "Everything wrong or missed → flashcards + Error Log. Everything right is already learned; stop studying it.",
    ],
    point:
      "The most effective 25 minutes in the week. If you do one thing from this system, do this.",
  },
  {
    id: "drill",
    day: "D1–D6",
    title: "THE 10-MINUTE DRILL",
    time: "10 min daily",
    when: "Every day",
    steps: [
      "5 min flashcards — this week's cards plus whatever resurfaces from earlier weeks. Never skip the old cards; the old cards are the exam.",
      "5 min math prep — Weeks 1–6: trig/vectors. Weeks 8–12: one problem, timed.",
    ],
    point: "Small daily reps beat long rare sessions.",
  },
  {
    id: "embodiment",
    day: "D3",
    title: "THE EMBODIMENT LAB",
    time: "20 min",
    when: "Mid-week movement session",
    steps: [
      "One physical experiment for this week's topic (see the week's card).",
      "Feel the concept, then explain out loud WHY you felt it.",
    ],
    point: "Concepts you have felt in your own tissue do not leave.",
  },
  {
    id: "weekend",
    day: "D5–D6",
    title: "THE WEEKEND BLOCK",
    time: "75 min",
    when: "Weekend",
    steps: [
      "Teach it (20 min) — explain the topic out loud to an empty room. Where you stall is where you don't understand it.",
      "Problems (40 min) — Weeks 1–6: conceptual + define every term without looking. Weeks 8–12: numerical problems. Units on every line.",
      "Interleave (15 min) — 3 questions from a random earlier week. Discomfort = learning.",
    ],
    point: "Mixing topics feels worse and produces dramatically better recall.",
  },
];

/* ----------------------------------------------------------------------------
   THE 13-WEEK MAP
   -------------------------------------------------------------------------- */
CONTENT.weeks = [
  {
    n: 1,
    title: "Introduction to Biomechanics",
    exam: false,
    half: "first",
    read: "Hamm Ch. 1 (1.0–1.5): definitions, units, unit conversion, significant figures, graphing.",
    core: "Statics vs dynamics · kinematics vs kinetics · scalar vs vector · qualitative vs quantitative · information sources & societies.",
    trap: "Two DIFFERENT splits students fuse into one. Statics vs dynamics = is the system accelerating? (Statics: no, ΣF=0). Kinematics vs kinetics = describing motion vs explaining its cause. Independent axes — draw a 2×2 grid.",
    lab: "Stand perfectly still (statics, ΣF=0). Now sway until you must step (dynamics). Name the exact instant equilibrium broke.",
  },
  {
    n: 2,
    title: "Fundamentals of Movement",
    exam: false,
    half: "first",
    read: "Hamm 2.0 (planes & axes), 2.2.3 (Types of Body Movements), 2.4 (Human Dimensions and Joint Angles).",
    core: "Anatomical position · the three planes · the three axes · movement terms (flexion/extension, ab/adduction, rotation, pronation/supination, circumduction, inversion/eversion).",
    trap: "The axis is ALWAYS perpendicular to the plane of motion. Sagittal-plane motion rotates about a mediolateral axis.",
    lab: "One movement in each plane, naming the axis out loud. Bicep curl → sagittal plane → mediolateral axis. Jumping jack → frontal plane → anteroposterior axis. Torso twist → transverse plane → longitudinal axis.",
  },
  {
    n: 3,
    title: "Skeletal Considerations",
    exam: false,
    half: "first",
    read: "Hamm 2.1 (The Skeleton) + Ch. 10.1 (Force–Deformation Curve) — the important one.",
    core: "Bone composition (cortical vs trabecular) · stress = F/A · strain = ΔL/L · the stress–strain curve (elastic → yield point → plastic → failure) · Wolff's law · minimum-effective-strain and its four modifiers: stress, age, nutrition, physiological state.",
    trap: "Bone is NOT rigid — it bends slightly, elastically. Also: stress ≠ force. Same force, smaller area → more stress (a stiletto dents a floor a flat shoe doesn't).",
    lab: "Press your thumb pad into the desk, then the nail edge — same force, different area, wildly different stress. That is σ = F/A.",
  },
  {
    n: 4,
    title: "INTERIM 1 + Musculoskeletal Center",
    exam: true,
    half: "first",
    read: "Hamm 2.2 → 2.2.4 (Joints, classification, synovial joints) + 8.3 (Stability).",
    core: "Joint classification · synovial joint types (hinge, ball-and-socket, pivot, saddle, condyloid, plane) and the motion each permits · centre of mass / centre of gravity · base of support · the four stability rules.",
    trap: "Stability ↑ with: wider base of support · lower COM · COM line closer to centre of base · greater mass. COM ≈ just anterior to the 2nd sacral vertebra and CAN sit outside the body (Fosbury flop high-jumper's COM passes under the bar).",
    lab: "Feet together, eyes closed — feel the sway. Widen the stance. Go on one leg. Then sit, arms crossed, and try to stand without leaning forward — you cannot. You must move your COM over your base first.",
  },
  {
    n: 5,
    title: "Neuromuscular Considerations",
    exam: false,
    half: "first",
    read: "Hamm Ch. 9 in full (9.1–9.7): muscle tissue, contraction, nervous control of tension, fibre types, fascicle arrangement & lever systems.",
    core: "Sliding filament theory · motor unit · size principle · recruitment vs rate coding · concentric/eccentric/isometric · length–tension · force–velocity · Type I / IIa / IIx fibres · pennation · the three lever classes.",
    trap: "Eccentric produces the MOST force (more than concentric or isometric) and causes the most soreness. Also: most joints are class 3 levers (F–E–R), mechanically disadvantageous (MA<1) — the body trades force for speed & range. A 5 kg dumbbell can demand 200+ N of biceps force.",
    lab: "Lower a heavy bag slowly (eccentric), then lift it (concentric) — feel which is easier to control heavy. Then a slow calf raise (class 2) and slow curl (class 3), saying where fulcrum/effort/resistance are on your body.",
  },
  {
    n: 6,
    title: "Qualitative and Quantitative Analysis",
    exam: false,
    half: "first",
    read: "Hamm 1.5 (Graphing) + 4.3 (Processing Data) + 3.6 (Applications to Human Movement) + Robertson's gait analysis.",
    core: "Qualitative framework: preparation → observation → evaluation/diagnosis → intervention · deterministic models · quantitative needs (kinematics: motion capture, video, digitising; kinetics: force plates, EMG) · error, accuracy, precision, reliability, validity · gait analysis (stance vs swing, gait cycle).",
    trap: "Qualitative ≠ guessing. It is systematic observation with a framework. Know the four stages in order. This is the BRIDGE week — its vocabulary is used by both midterm and finals.",
    lab: "Film yourself walking and squatting from the side in slow-mo. Run the four-stage framework on your own gait, writing each stage as you go. Your first real biomechanical analysis.",
  },
  {
    n: 7,
    title: "MIDTERM",
    exam: true,
    half: "first",
    read: "The 6-day protocol — start Day −6, not Day −2.",
    core: "−6 Blank-page every one of Weeks 1–6 (one page/week, no book). −5 Attack the gaps only, book open. −4 Full Error Log + all flashcards + every term aloud. −3 Interleaved mixed practice across all 6 weeks. −2 Teach the whole course out loud in 45 min. −1 Light: Error Log + formulas, sleep 8 hours.",
    trap: "The blank page on Day −6 produces your true study list — the gaps. Do not open a book first.",
    lab: "Cramming past midnight actively deletes what you learned that day. Sleep is the consolidation step.",
  },
  {
    n: 8,
    title: "Linear Kinematics",
    exam: false,
    half: "second",
    read: "Hamm Ch. 3 (1-D: displacement, vectors/scalars, velocity, acceleration, graphs) + Ch. 4 (2-D: trigonometry, vectors, projectile motion, problem-solving).",
    core: "Distance vs displacement · speed vs velocity · acceleration · kinematic equations · position–velocity–acceleration graphs (slope of position = velocity; slope of velocity = acceleration) · vector resolution into components · projectile motion (horizontal & vertical independent; at peak vy=0; optimal projection angle).",
    trap: "Sign conventions. Pick up-positive OR down-positive, write it at the top of the page, never change it mid-problem. Most lost marks here are sign errors, not concept errors.",
    lab: "Jump straight up, film it, count frames. Hang time → takeoff velocity → jump height. Kinematics from your own body with a phone.",
  },
  {
    n: 9,
    title: "Angular Kinematics",
    exam: false,
    half: "second",
    read: "Hamm Ch. 5 (5.0–5.4): angular position & displacement, angular velocity, angular acceleration, linear accelerations.",
    core: "Radians (1 rad = 180/π ≈ 57.3°) · θ, ω, α · v = rω and a_t = rα · centripetal acceleration a_c = v²/r = rω² · the whole linear ↔ angular analogy.",
    trap: "Every point on a rotating segment shares the same ω — but NOT the same linear velocity. Linear velocity scales with r. This is why a longer club/bat/limb produces more end-point speed. v = rω is the most examined line in this unit.",
    lab: "Swing your arm from the shoulder. Elbow and hand rotate through the same angle in the same time (same ω) — but the hand moves far faster. Feel it: that's the whole equation.",
  },
  {
    n: 10,
    title: "INTERIM 2 + Linear Kinetics",
    exam: true,
    half: "second",
    read: "Hamm Ch. 6 (force, Newton's laws, normal/tension/friction, free-body diagrams, momentum, impulse, conservation, impulse–momentum theorem) + Ch. 7 (work, KE & PE, work–energy theorem, power).",
    core: "F = ma · free-body diagrams (draw one for EVERY problem) · ground reaction force · friction (static > kinetic) · momentum p = mv · impulse J = FΔt = Δp · work, energy, power.",
    trap: "Impulse is the most applied idea in the course. Same Δp, longer time = smaller peak force. Explains: bending knees on landing, follow-through, airbags, crash helmets, catching an egg. Likely the applied-scenario question.",
    lab: "Drop from a small step, land stiff-legged (short Δt, brutal force). Then land soft, bending the knee (long Δt, low force). Same Δp, radically different peak force — the impulse–momentum theorem in your joints.",
  },
  {
    n: 11,
    title: "Angular Kinetics",
    exam: false,
    half: "second",
    read: "Hamm Ch. 8 (8.0–8.6): equilibrium conditions, stability, applications of statics, mechanical advantage, forces and torques in muscles and joints.",
    core: "τ = F × d⊥ · moment arm · both equilibrium conditions (ΣF=0 AND Στ=0) · moment of inertia I · τ = Iα · angular momentum L = Iω · conservation of angular momentum · mechanical advantage = effort moment arm ÷ resistance moment arm.",
    trap: "The moment arm is the PERPENDICULAR distance from the line of action of the force to the axis — NOT the length of the bone. As joint angle changes, moment arm changes, so torque changes even at identical muscle force. The most reliably examined misconception in biomechanics. Second: conservation of angular momentum — tuck → I drops → ω rises, nothing added.",
    lab: "Spinning chair, arms out, push off. Pull your arms in — you speed up with no added energy (L=Iω conserved). Then hold a book to your chest vs at arm's length — same weight, arm's length is agony. That's the moment arm.",
  },
  {
    n: 12,
    title: "Fluid Dynamics",
    exam: false,
    half: "second",
    read: "Hamm doesn't cover this. Use Robertson's fluid mechanics notes + the Introduction to Biomechanics Pressbook.",
    core: "Buoyancy / Archimedes' principle · drag (form/pressure, surface/friction, wave) · lift and the Bernoulli principle · the Magnus effect (spin → curve) · relative velocity · laminar vs turbulent flow · drag ∝ v².",
    trap: "Lift is PERPENDICULAR to flow; drag is PARALLEL to it. The Magnus effect is a spin-driven pressure asymmetry — not the same as a simple Bernoulli argument. Sport examples get tested: swimming, cycling posture, a curveball, a topspin forehand, a knuckleball.",
    lab: "Hand flat out a moving car window (as a passenger): flat = minimal drag. Rotate it — feel drag and lift try to throw your arm up or down. That's an aerofoil, and it's your hand.",
  },
  {
    n: 13,
    title: "FINALS",
    exam: true,
    half: "second",
    read: "Same 6-day protocol as midterm, weighted to the back half — and re-blank-page the first half at least once.",
    core: "Assume cumulative until your prof says otherwise IN WRITING. Build the ONE-PAGE FORMULA SHEET by hand: every formula, every symbol defined, every unit.",
    trap: "Even if you can't bring the formula sheet in, the act of building it is the studying — it compresses the entire quantitative half into one mental object.",
    lab: "Force everything to fit on a single page.",
  },
];

/* ----------------------------------------------------------------------------
   FLASHCARDS — the deck
   type: definition | formula | discrimination | application
   -------------------------------------------------------------------------- */
CONTENT.cards = [
  // ---- WEEK 1 ----
  { w: 1, type: "discrimination", front: "Statics vs dynamics — what is the actual distinguishing question?", back: "Is the system accelerating? Statics: NO (ΣF = 0). Dynamics: YES." },
  { w: 1, type: "discrimination", front: "Kinematics vs kinetics?", back: "Kinematics DESCRIBES motion (position, velocity, acceleration). Kinetics EXPLAINS its cause (forces, torques)." },
  { w: 1, type: "discrimination", front: "Are statics/dynamics and kinematics/kinetics the same split?", back: "No — two independent axes. You can have static kinetics. Draw them as a 2×2 grid." },
  { w: 1, type: "discrimination", front: "Scalar vs vector?", back: "Scalar has magnitude only (speed, mass, distance). Vector has magnitude AND direction (velocity, force, displacement)." },
  { w: 1, type: "discrimination", front: "Qualitative vs quantitative analysis?", back: "Qualitative = systematic non-numerical observation with a framework. Quantitative = numerical measurement." },
  { w: 1, type: "definition", front: "Society acronyms — geographic ones?", back: "ASB (American), CSB (Canadian), ESB (European). Memory hook: geographic = ASB/CSB/ESB." },
  { w: 1, type: "definition", front: "Society acronyms — international & specialist?", back: "ISB, ISBS, ISEK. Hook: international & specialist = ISB/ISBS/ISEK." },
  { w: 1, type: "definition", front: "Free open journal/database sources?", back: "PubMed, DOAJ, ScienceDirect (open-access subset), PMC." },
  { w: 1, type: "application", front: "A gymnast holds a static handstand. Kinematics or kinetics? Static or dynamic?", back: "Static (ΣF=0, not accelerating). Analysing the muscle/joint forces holding it = kinetics. So: static kinetics." },

  // ---- WEEK 2 ----
  { w: 2, type: "definition", front: "Anatomical position?", back: "Standing upright, feet together, arms at sides, palms facing forward. The reference position for all movement terms." },
  { w: 2, type: "definition", front: "The three planes of motion?", back: "Sagittal (divides left/right), Frontal/coronal (front/back), Transverse (top/bottom)." },
  { w: 2, type: "definition", front: "The three axes?", back: "Mediolateral, Anteroposterior, Longitudinal (vertical)." },
  { w: 2, type: "discrimination", front: "Relationship between a plane and its axis of rotation?", back: "The axis is ALWAYS perpendicular to the plane of motion." },
  { w: 2, type: "application", front: "A bicep curl — which plane, which axis?", back: "Sagittal plane, mediolateral axis." },
  { w: 2, type: "application", front: "A jumping jack (arms out to the side) — plane and axis?", back: "Frontal plane, anteroposterior axis." },
  { w: 2, type: "application", front: "A standing torso twist — plane and axis?", back: "Transverse plane, longitudinal axis." },
  { w: 2, type: "definition", front: "Pronation vs supination (forearm)?", back: "Pronation = palm rotates to face backward/down. Supination = palm rotates to face forward/up." },
  { w: 2, type: "definition", front: "Inversion vs eversion?", back: "Inversion = sole of foot turns inward (medially). Eversion = sole turns outward (laterally)." },
  { w: 2, type: "definition", front: "Circumduction?", back: "A conical movement combining flexion, extension, abduction, adduction — the end of the segment traces a circle." },

  // ---- WEEK 3 ----
  { w: 3, type: "formula", front: "Stress = ?", back: "σ = F / A (force per unit area). Units: Pa (N/m²)." },
  { w: 3, type: "formula", front: "Strain = ?", back: "ε = ΔL / L (change in length ÷ original length). Dimensionless." },
  { w: 3, type: "definition", front: "Regions of the stress–strain curve, in order?", back: "Elastic region → yield point → plastic region → failure." },
  { w: 3, type: "definition", front: "Wolff's law?", back: "Bone remodels along the lines of mechanical stress placed on it — load it, it strengthens along that load." },
  { w: 3, type: "definition", front: "Cortical vs trabecular bone?", back: "Cortical = dense, compact outer bone. Trabecular (cancellous/spongy) = porous inner bone." },
  { w: 3, type: "definition", front: "Four modifiers of the minimum-effective-strain threshold?", back: "Stress, age, nutrition, physiological state." },
  { w: 3, type: "discrimination", front: "Is bone rigid?", back: "NO. Bone is stiff, not rigid — it deforms elastically and springs back. Cortical bone tolerates ~1.5–2% strain before failure, so it FEELS rigid. Small deformation ≠ no deformation." },
  { w: 3, type: "application", front: "Why does a stiletto heel dent a floor a flat shoe doesn't, at the same body weight?", back: "Same force, much smaller area → far greater stress (σ = F/A). Stress ≠ force." },

  // ---- WEEK 4 ----
  { w: 4, type: "definition", front: "The six synovial joint types?", back: "Hinge, ball-and-socket, pivot, saddle, condyloid, plane (gliding)." },
  { w: 4, type: "application", front: "Which synovial joint allows the most degrees of freedom, and give an example?", back: "Ball-and-socket (e.g. shoulder, hip) — motion in all three planes." },
  { w: 4, type: "definition", front: "The four stability rules — stability increases with…?", back: "Wider base of support, lower COM, COM line closer to the centre of the base, greater mass." },
  { w: 4, type: "definition", front: "Where is the COM in anatomical position?", back: "Approximately just anterior to the second sacral vertebra (S2)." },
  { w: 4, type: "discrimination", front: "Can the centre of mass lie outside the body?", back: "Yes — e.g. a Fosbury-flop high-jumper's COM passes UNDER the bar while the body arches over it." },
  { w: 4, type: "application", front: "Why can't you stand from a chair with arms crossed without leaning forward?", back: "You must move your COM forward over your base of support (feet) before you can rise; leaning back keeps COM behind the base." },
  { w: 4, type: "definition", front: "Base of support?", back: "The area beneath an object/person that includes every point of contact with the supporting surface and the area between them." },

  // ---- WEEK 5 ----
  { w: 5, type: "definition", front: "Sliding filament theory?", back: "Muscle shortens because actin and myosin filaments slide past each other; myosin cross-bridges pull actin toward the sarcomere centre." },
  { w: 5, type: "definition", front: "Motor unit?", back: "A single motor neuron plus all the muscle fibres it innervates." },
  { w: 5, type: "definition", front: "The size principle?", back: "Motor units are recruited from smallest to largest — small (Type I) units fire first, large (Type II) units last." },
  { w: 5, type: "discrimination", front: "Recruitment vs rate coding?", back: "Recruitment = adding more motor units to increase force. Rate coding = increasing the firing frequency of already-active units." },
  { w: 5, type: "discrimination", front: "Concentric vs eccentric vs isometric?", back: "Concentric = muscle shortens under load. Eccentric = muscle lengthens under load. Isometric = muscle length unchanged." },
  { w: 5, type: "discrimination", front: "Which contraction type produces the MOST force?", back: "Eccentric — more than concentric or isometric — and it causes the most muscle soreness. (Counterintuitive → examined.)" },
  { w: 5, type: "definition", front: "Type I vs Type IIa vs Type IIx fibres?", back: "Type I = slow, fatigue-resistant, aerobic. Type IIa = fast, moderately fatigue-resistant. Type IIx = fastest, most powerful, fatigues quickly." },
  { w: 5, type: "definition", front: "Pennation — what does it trade?", back: "Angled (pennate) fibres pack more fibres into a cross-section → more force, but a smaller range of motion. Trades range for force." },
  { w: 5, type: "definition", front: "The three lever classes and the memory hook?", back: "F–R–E, 1–2–3: whatever is in the MIDDLE names the class. Fulcrum middle = 1st, Resistance middle = 2nd, Effort middle = 3rd." },
  { w: 5, type: "application", front: "A calf raise — which lever class, and why?", back: "Class 2 — resistance (body weight) sits between the fulcrum (toes) and the effort (calf/Achilles). MA > 1." },
  { w: 5, type: "application", front: "A biceps curl (elbow) — which lever class, and why?", back: "Class 3 — the effort (biceps insertion) is between the fulcrum (elbow) and the resistance (hand/weight). MA < 1." },
  { w: 5, type: "discrimination", front: "Most joints in the body are which lever class, and what's the trade-off?", back: "Class 3 (F–E–R), mechanically disadvantageous (MA < 1). The body trades force away to gain speed and range of motion — a 5 kg weight can demand 200+ N of muscle force." },

  // ---- WEEK 6 ----
  { w: 6, type: "definition", front: "The four stages of qualitative analysis, in order?", back: "Preparation → Observation → Evaluation/diagnosis → Intervention." },
  { w: 6, type: "discrimination", front: "Accuracy vs precision?", back: "Accuracy = closeness to the true value. Precision = closeness of repeated measurements to each other (repeatability)." },
  { w: 6, type: "discrimination", front: "Reliability vs validity?", back: "Reliability = consistency/repeatability of a measure. Validity = whether it measures what it claims to measure." },
  { w: 6, type: "discrimination", front: "Stance vs swing phase of gait?", back: "Stance = foot is in contact with the ground. Swing = foot is off the ground moving forward. One full cycle = one stride." },
  { w: 6, type: "definition", front: "Kinematic vs kinetic measurement tools?", back: "Kinematics: motion capture, video, digitising. Kinetics: force plates, EMG." },
  { w: 6, type: "discrimination", front: "Is qualitative analysis just guessing?", back: "No — it is SYSTEMATIC observation with a framework (prep → observe → evaluate → intervene)." },

  // ---- WEEK 8 ----
  { w: 8, type: "discrimination", front: "Distance vs displacement?", back: "Distance = total path length (scalar). Displacement = straight-line change in position with direction (vector)." },
  { w: 8, type: "discrimination", front: "Speed vs velocity?", back: "Speed = distance/time (scalar). Velocity = displacement/time (vector, has direction)." },
  { w: 8, type: "formula", front: "On a position–time graph, what does the slope give?", back: "Velocity (slope of position = velocity)." },
  { w: 8, type: "formula", front: "On a velocity–time graph, what does the slope give?", back: "Acceleration (slope of velocity = acceleration)." },
  { w: 8, type: "definition", front: "Projectile motion — key independence rule?", back: "Horizontal and vertical motion are INDEPENDENT. Horizontal velocity is constant; vertical is governed by gravity." },
  { w: 8, type: "definition", front: "At the peak of a projectile's flight, what is the vertical velocity?", back: "vy = 0 (horizontal velocity is unchanged)." },
  { w: 8, type: "definition", front: "Optimal projection angle for maximum range (equal launch/land height, no air resistance)?", back: "45°. (Real release/landing height differences shift this.)" },
  { w: 8, type: "formula", front: "Kinematic equation linking v, u, a, t?", back: "v = u + at." },
  { w: 8, type: "formula", front: "Kinematic equation for displacement without final velocity?", back: "s = ut + ½at²." },
  { w: 8, type: "formula", front: "Kinematic equation without time?", back: "v² = u² + 2as." },
  { w: 8, type: "discrimination", front: "The #1 source of lost marks in linear kinematics?", back: "Sign errors, not concept errors. Pick a sign convention (up-positive or down-positive), write it at the top, never change it mid-problem." },

  // ---- WEEK 9 ----
  { w: 9, type: "formula", front: "Convert 1 radian to degrees?", back: "1 rad = 180/π ≈ 57.3°." },
  { w: 9, type: "formula", front: "Linear velocity of a point on a rotating segment?", back: "v = rω (r = radius, ω = angular velocity)." },
  { w: 9, type: "formula", front: "Tangential (linear) acceleration from angular acceleration?", back: "a_t = rα." },
  { w: 9, type: "formula", front: "Centripetal acceleration?", back: "a_c = v²/r = rω² (directed toward the centre)." },
  { w: 9, type: "discrimination", front: "Do all points on a rotating limb share the same ω? The same linear velocity?", back: "Same ω — YES. Same linear velocity — NO. Linear velocity scales with r (v = rω)." },
  { w: 9, type: "application", front: "Why does a longer bat/club produce more end-point speed?", back: "v = rω — same angular velocity ω, larger radius r → greater linear (end-point) velocity." },
  { w: 9, type: "definition", front: "The linear ↔ angular analogy (position, velocity, acceleration)?", back: "Position x ↔ angle θ; velocity v ↔ angular velocity ω; acceleration a ↔ angular acceleration α." },

  // ---- WEEK 10 ----
  { w: 10, type: "formula", front: "Newton's second law?", back: "F = ma (net force = mass × acceleration). Units: N = kg·m/s²." },
  { w: 10, type: "definition", front: "Newton's three laws (one line each)?", back: "1: an object stays at rest/constant velocity unless acted on by a net force (inertia). 2: F = ma. 3: every action has an equal and opposite reaction." },
  { w: 10, type: "formula", front: "Momentum?", back: "p = mv (mass × velocity). Vector. Units: kg·m/s." },
  { w: 10, type: "formula", front: "Impulse?", back: "J = FΔt = Δp (force × time = change in momentum). Units: N·s." },
  { w: 10, type: "discrimination", front: "Static vs kinetic friction — which is larger?", back: "Static friction (must be overcome to start motion) is greater than kinetic friction (once sliding)." },
  { w: 10, type: "definition", front: "Ground reaction force?", back: "The force the ground exerts back on the body in contact with it (Newton's third law reaction to the body's push on the ground)." },
  { w: 10, type: "application", front: "Why bend your knees when landing from a jump?", back: "Same Δp (momentum change), but a longer contact time Δt → smaller peak force (J = FΔt). Impulse–momentum theorem." },
  { w: 10, type: "application", front: "Airbags, crash helmets, catching an egg, throwing follow-through — one principle. Which?", back: "Impulse–momentum: extend Δt to reduce peak force for the same Δp. The most applied idea in the course." },
  { w: 10, type: "formula", front: "Work–energy theorem?", back: "Work done by the net force = change in kinetic energy (W = ΔKE)." },
  { w: 10, type: "formula", front: "Kinetic energy and gravitational potential energy?", back: "KE = ½mv²; PE = mgh. Power = work/time (W/t), units watts." },
  { w: 10, type: "definition", front: "What must you draw for EVERY kinetics problem?", back: "A free-body diagram — every force acting on the body. No exceptions." },

  // ---- WEEK 11 ----
  { w: 11, type: "formula", front: "Torque?", back: "τ = F × d⊥ (force × perpendicular distance from line of action to axis). Units: N·m." },
  { w: 11, type: "definition", front: "The two conditions for equilibrium?", back: "ΣF = 0 (first condition, translational) AND Στ = 0 (second condition, rotational)." },
  { w: 11, type: "discrimination", front: "What exactly is the moment arm?", back: "The PERPENDICULAR distance from the line of action of the force to the axis of rotation — NOT the length of the bone." },
  { w: 11, type: "application", front: "Why are you stronger at some joint angles than others, with the same muscle force?", back: "As joint angle changes, the moment arm changes, so torque (τ = F·d⊥) changes even though muscle force is identical." },
  { w: 11, type: "formula", front: "Moment of inertia's role — angular Newton's 2nd law?", back: "τ = Iα (torque = moment of inertia × angular acceleration). I is rotational resistance, depends on mass distribution about the axis." },
  { w: 11, type: "formula", front: "Angular momentum?", back: "L = Iω (moment of inertia × angular velocity)." },
  { w: 11, type: "application", front: "A diver tucks and spins faster. What conserved quantity, and why does ω rise?", back: "Angular momentum L = Iω is conserved. Tucking lowers I (mass closer to axis), so ω must rise. Nothing was 'added'." },
  { w: 11, type: "formula", front: "Mechanical advantage?", back: "MA = effort moment arm ÷ resistance moment arm. MA > 1 favours force; MA < 1 favours speed/range." },
  { w: 11, type: "application", front: "Holding a book to your chest vs at arm's length — why is arm's length agony at the same weight?", back: "Longer moment arm → greater torque about the shoulder (τ = F·d⊥), so the muscles must produce far more force." },

  // ---- WEEK 12 ----
  { w: 12, type: "definition", front: "Archimedes' principle (buoyancy)?", back: "The buoyant force on a body equals the weight of the fluid it displaces." },
  { w: 12, type: "definition", front: "The three types of drag?", back: "Form/pressure drag, surface drag (skin friction), and wave drag." },
  { w: 12, type: "discrimination", front: "Lift vs drag — directions relative to flow?", back: "Lift is PERPENDICULAR to the flow. Drag is PARALLEL to the flow." },
  { w: 12, type: "definition", front: "The Magnus effect?", back: "A spinning object creates a pressure asymmetry that curves its path (e.g. a curveball, a topspin forehand). Spin-driven, not a simple Bernoulli argument." },
  { w: 12, type: "formula", front: "How does drag scale with velocity?", back: "Drag ∝ v² — doubling speed roughly quadruples drag. This is why speed costs so much energy." },
  { w: 12, type: "discrimination", front: "Laminar vs turbulent flow?", back: "Laminar = smooth, ordered layers. Turbulent = chaotic, mixing flow. Transition depends on speed, size, and viscosity." },
  { w: 12, type: "definition", front: "Bernoulli principle (in one line)?", back: "Faster-moving fluid exerts lower pressure; a pressure difference across a surface generates lift." },

  // ==== EXPANSION DECK ====================================================
  // ---- WEEK 1 (more) ----
  { w: 1, type: "definition", front: "Biomechanics — one-line definition?", back: "The application of mechanics (forces and their effects) to biological systems — the study of forces acting on and within living organisms." },
  { w: 1, type: "definition", front: "The two branches of dynamics?", back: "Kinematics (describing motion) and kinetics (the forces causing it). Dynamics is the study of accelerating systems." },
  { w: 1, type: "application", front: "A car cruising at a constant 100 km/h on a straight road — static or dynamic?", back: "STATIC — constant velocity means no acceleration, so ΣF = 0. Motion ≠ dynamics; acceleration does." },
  { w: 1, type: "definition", front: "SI base units for length, mass, and time?", back: "Metre (m), kilogram (kg), second (s)." },
  { w: 1, type: "application", front: "Coach says 'her elbow drops on the follow-through' — qualitative or quantitative?", back: "Qualitative — a systematic observation with no numbers. A joint-angle measurement from video would be quantitative." },
  { w: 1, type: "definition", front: "What are significant figures for?", back: "They communicate the precision of a measurement — you can't report more precision than your instrument or data supports." },

  // ---- WEEK 2 (more) ----
  { w: 2, type: "definition", front: "Flexion vs extension?", back: "Flexion = decreasing the joint angle; extension = increasing it. Both in the sagittal plane." },
  { w: 2, type: "definition", front: "Abduction vs adduction?", back: "Abduction = moving a segment AWAY from the midline; adduction = moving it TOWARD the midline. Frontal plane." },
  { w: 2, type: "definition", front: "Dorsiflexion vs plantarflexion?", back: "Dorsiflexion = toes up toward the shin; plantarflexion = toes down (pointing). At the ankle." },
  { w: 2, type: "definition", front: "The sagittal plane divides the body into…?", back: "Left and right portions." },
  { w: 2, type: "application", front: "Shaking your head 'no' — plane and axis?", back: "Transverse plane, longitudinal (vertical) axis." },
  { w: 2, type: "application", front: "Bending sideways at the trunk — plane and axis?", back: "Frontal plane, anteroposterior axis." },
  { w: 2, type: "definition", front: "Medial vs lateral rotation?", back: "Medial (internal) rotation = turning the anterior surface toward the midline; lateral (external) = away from it. Transverse plane." },

  // ---- WEEK 3 (more) ----
  { w: 3, type: "definition", front: "Young's modulus (stiffness) — what is it on the curve?", back: "The slope of the elastic (linear) region: stress ÷ strain. Steeper slope = stiffer material." },
  { w: 3, type: "discrimination", front: "Elastic vs plastic deformation?", back: "Elastic = recoverable, springs back when unloaded. Plastic = permanent, does not return." },
  { w: 3, type: "definition", front: "The yield point?", back: "The end of the elastic region — beyond it, deformation becomes permanent (plastic)." },
  { w: 3, type: "definition", front: "The five ways bone can be loaded?", back: "Tension, compression, shear, bending, and torsion." },
  { w: 3, type: "discrimination", front: "Tension vs compression loading?", back: "Tension pulls/stretches a structure apart; compression pushes/squashes it together." },
  { w: 3, type: "application", front: "Astronauts and bedridden patients lose bone. Which principle, and why?", back: "Wolff's law — remove the mechanical load and bone resorbs/weakens along the unloaded lines. Loading builds bone; disuse loses it." },
  { w: 3, type: "definition", front: "Ultimate strength / failure point?", back: "The maximum stress a material withstands before it fractures/fails (the top of the curve before break)." },

  // ---- WEEK 4 (more) ----
  { w: 4, type: "definition", front: "The three STRUCTURAL joint classes?", back: "Fibrous, cartilaginous, and synovial (by the connective tissue between bones)." },
  { w: 4, type: "definition", front: "The three FUNCTIONAL joint classes?", back: "Synarthrosis (immovable), amphiarthrosis (slightly movable), diarthrosis (freely movable). By amount of motion." },
  { w: 4, type: "application", front: "A hinge joint — example and motion?", back: "Elbow or knee — flexion/extension in one plane only (uniaxial)." },
  { w: 4, type: "application", front: "A pivot joint — example and motion?", back: "Atlantoaxial (neck) or proximal radioulnar — rotation about one axis." },
  { w: 4, type: "discrimination", front: "Centre of mass vs centre of gravity?", back: "COM = the mass-weighted balance point. COG = the point where gravity effectively acts. In a uniform gravitational field they coincide." },
  { w: 4, type: "definition", front: "Line of gravity?", back: "The vertical line dropped from the COM to the ground. For balance it must fall within the base of support." },
  { w: 4, type: "application", front: "Why does a sumo wrestler adopt a wide, low stance?", back: "It widens the base of support and lowers the COM — both increase stability (harder to topple)." },

  // ---- WEEK 5 (more) ----
  { w: 5, type: "definition", front: "The sarcomere?", back: "The functional contractile unit of muscle — the segment between two Z-lines where actin and myosin overlap." },
  { w: 5, type: "definition", front: "Length–tension relationship?", back: "A muscle produces maximum active force at its optimal (near-resting) length, where actin–myosin overlap is ideal. Too short or too stretched → less force." },
  { w: 5, type: "definition", front: "Force–velocity relationship (concentric)?", back: "As concentric shortening velocity increases, force output decreases. (Eccentrically, force can exceed isometric.)" },
  { w: 5, type: "definition", front: "Agonist vs antagonist vs synergist?", back: "Agonist = prime mover; antagonist = opposes/controls it; synergist = assists or stabilises the movement." },
  { w: 5, type: "application", front: "Which fibre type dominates in an elite marathoner vs a 100 m sprinter?", back: "Marathoner → Type I (slow, fatigue-resistant, aerobic). Sprinter → Type IIx (fast, powerful, quick to fatigue)." },
  { w: 5, type: "definition", front: "The all-or-none principle (motor unit)?", back: "When a motor unit is activated, ALL its fibres contract fully; there's no partial contraction of a single motor unit." },
  { w: 5, type: "application", front: "Triceps extending the elbow — which lever class?", back: "Class 1 — the fulcrum (elbow) sits between the effort (triceps behind) and the resistance (forearm/hand in front). F in the middle." },
  { w: 5, type: "discrimination", front: "Isotonic vs isometric contraction?", back: "Isotonic = muscle changes length while producing force (concentric or eccentric). Isometric = force with no length change." },

  // ---- WEEK 6 (more) ----
  { w: 6, type: "definition", front: "A deterministic model?", back: "A hierarchical diagram linking a performance outcome (e.g. jump height) to the mechanical factors that determine it — used to guide analysis." },
  { w: 6, type: "definition", front: "Heel strike and toe-off?", back: "Heel strike = start of stance (foot contacts ground); toe-off = end of stance (foot leaves ground, swing begins)." },
  { w: 6, type: "definition", front: "What does a force plate measure? What does EMG measure?", back: "Force plate → ground reaction force (kinetics). EMG → muscle electrical activity / when a muscle is active." },
  { w: 6, type: "definition", front: "Stride vs step?", back: "A step = one foot contact to the opposite foot contact. A stride = one full gait cycle (same foot to same foot) = two steps." },
  { w: 6, type: "discrimination", front: "Reliability vs objectivity?", back: "Reliability = same result on repeat by the same tester. Objectivity = same result across different testers (inter-rater agreement)." },

  // ---- WEEK 8 (more) ----
  { w: 8, type: "formula", front: "Average velocity?", back: "v_avg = Δx / Δt (change in displacement ÷ change in time)." },
  { w: 8, type: "formula", front: "Average acceleration?", back: "a_avg = Δv / Δt (change in velocity ÷ change in time)." },
  { w: 8, type: "definition", front: "Value and direction of g?", back: "≈ 9.81 m/s², directed downward (toward Earth's centre)." },
  { w: 8, type: "formula", front: "Resolve a vector V at angle θ into components?", back: "Vx = V·cosθ, Vy = V·sinθ." },
  { w: 8, type: "formula", front: "Recombine components into magnitude and angle?", back: "|V| = √(Vx² + Vy²); θ = tan⁻¹(Vy / Vx)." },
  { w: 8, type: "application", front: "A ball dropped and a ball thrown horizontally from the same height — which lands first?", back: "They land at the SAME time. Vertical motion is independent of horizontal — gravity acts identically on both." },
  { w: 8, type: "discrimination", front: "Instantaneous vs average velocity?", back: "Average = over a time interval (Δx/Δt). Instantaneous = at a single instant (the slope of the position graph at that point)." },
  { w: 8, type: "application", front: "For a projectile landing at its launch height, how does time to the peak compare to total flight time?", back: "Time to the peak = half the total flight time (the path is symmetric)." },

  // ---- WEEK 9 (more) ----
  { w: 9, type: "formula", front: "Angular velocity ω from angular displacement?", back: "ω = Δθ / Δt (rad/s)." },
  { w: 9, type: "formula", front: "Angular acceleration α?", back: "α = Δω / Δt (rad/s²)." },
  { w: 9, type: "formula", front: "Arc length from angle?", back: "s = rθ (θ in radians)." },
  { w: 9, type: "discrimination", front: "Tangential vs centripetal (radial) acceleration?", back: "Tangential (a_t = rα) = along the path, changes SPEED. Centripetal (a_c = v²/r) = toward the centre, changes DIRECTION." },
  { w: 9, type: "application", front: "A gymnast on a high bar extends into a giant swing. Why do the hands speed up?", back: "A larger radius r at the same ω gives greater linear speed (v = rω). Lengthening the rotating radius multiplies end-point speed." },
  { w: 9, type: "definition", front: "Units for angular displacement, and the base one for equations?", back: "Degrees, revolutions, or radians — but radians are required for v = rω, a_t = rα, s = rθ." },

  // ---- WEEK 10 (more) ----
  { w: 10, type: "formula", front: "Friction force?", back: "f = μN (coefficient of friction × normal force)." },
  { w: 10, type: "formula", front: "Weight from mass?", back: "W = mg (mass × gravitational acceleration). Units: N." },
  { w: 10, type: "discrimination", front: "Mass vs weight?", back: "Mass = amount of matter (kg), constant everywhere. Weight = the gravitational force on that mass (N), varies with g." },
  { w: 10, type: "definition", front: "Newton's first law?", back: "An object at rest stays at rest and one in motion stays in uniform motion unless acted on by a net external force (the law of inertia)." },
  { w: 10, type: "application", front: "You walk forward by pushing the ground backward. Which law?", back: "Newton's third law — you push the ground back, the ground pushes you forward (equal and opposite reaction = ground reaction force)." },
  { w: 10, type: "definition", front: "Normal force?", back: "The support force a surface exerts perpendicular to itself on an object resting on it." },
  { w: 10, type: "definition", front: "Conservation of momentum?", back: "In an isolated system (no net external force), total momentum before = total momentum after a collision/interaction." },
  { w: 10, type: "formula", front: "Mechanical work?", back: "W = F·d — force × displacement in the direction of the force. Units: joules (J)." },
  { w: 10, type: "discrimination", front: "Positive vs negative work by a muscle?", back: "Positive work = concentric (muscle shortens, does work on load). Negative work = eccentric (muscle lengthens, absorbs work)." },

  // ---- WEEK 11 (more) ----
  { w: 11, type: "definition", front: "A force couple?", back: "Two equal, opposite, parallel forces acting at a distance — they produce pure rotation (torque) with no net translation." },
  { w: 11, type: "formula", front: "Moment of inertia of a point mass?", back: "I = mr² — mass times the square of its distance from the axis. Farther mass = much larger I." },
  { w: 11, type: "application", front: "A figure skater pulls their arms in during a spin. What happens and why?", back: "Arms in → mass closer to the axis → I decreases → ω increases (L = Iω conserved). They spin faster with no added energy." },
  { w: 11, type: "application", front: "Why does a longer wrench loosen a bolt more easily?", back: "A longer handle = a longer moment arm, so the same hand force produces more torque (τ = F·d⊥)." },
  { w: 11, type: "discrimination", front: "Stable, unstable, and neutral equilibrium?", back: "Stable = returns to position after a small disturbance (COM rises). Unstable = moves further away (COM falls). Neutral = stays put (COM height unchanged)." },
  { w: 11, type: "application", front: "A seesaw balances. What is equal on both sides?", back: "The torques (Στ = 0): force × moment arm on each side are equal and opposite. A lighter person farther out can balance a heavier one closer in." },
  { w: 11, type: "discrimination", front: "Can a first-class lever have MA > 1 or < 1?", back: "Either — it depends on where the fulcrum sits. Effort arm longer → MA > 1 (favours force); resistance arm longer → MA < 1 (favours speed)." },

  // ---- WEEK 12 (more) ----
  { w: 12, type: "definition", front: "Viscosity?", back: "A fluid's internal resistance to flow / to shearing. Higher viscosity = thicker, harder to move through." },
  { w: 12, type: "application", front: "Why do cyclists crouch into a low tuck at speed?", back: "It reduces the frontal area and streamlines the body, cutting form (pressure) drag — which matters hugely since drag ∝ v²." },
  { w: 12, type: "application", front: "Why is a golf ball dimpled?", back: "Dimples trip the boundary layer into turbulence that clings to the ball longer, shrinking the low-pressure wake → less form drag and greater range." },
  { w: 12, type: "discrimination", front: "Will an object float or sink?", back: "Compare densities: if the object's density < the fluid's, buoyant force wins and it floats; if greater, it sinks." },
  { w: 12, type: "discrimination", front: "Form drag vs surface drag — how do you reduce each?", back: "Form/pressure drag: streamline the shape, reduce frontal area. Surface/friction drag: smoother surfaces, less wetted area (e.g. swimsuits, shaving)." },
  { w: 12, type: "definition", front: "Relative velocity (in fluids)?", back: "The velocity of the object relative to the fluid — a headwind or current adds to it, increasing drag; a tailwind reduces it." },

  // ==== BOOK-SOURCED DECK (Hamill Ch.1–4 · Knudson) ======================
  // -- Week 1 --
  { w: 1, type: "definition", front: "Linear motion (translation) — Hamill's definition?", back: "Movement along a straight or curved path in which ALL points on the body move the same distance, in the same direction, in the same time. E.g. a sprinter's path, a punted ball." },
  { w: 1, type: "discrimination", front: "Linear vs angular vs general motion?", back: "Linear = all points translate together. Angular = rotation about an axis. General = a combination of both — and it describes most human movement." },
  { w: 1, type: "application", front: "Running is which type of motion, and why?", back: "General motion — the limbs rotate about joints (angular) while the whole body translates forward (linear)." },
  { w: 1, type: "definition", front: "The sagittal plane divides the body into…? Its axis?", back: "Right and left halves; motion occurs about the MEDIOLATERAL axis (running side to side through the COM)." },
  { w: 1, type: "definition", front: "The frontal (coronal) plane divides the body into…? Its axis?", back: "Front and back halves; motion occurs about the ANTEROPOSTERIOR axis." },

  // -- Week 2 --
  { w: 2, type: "definition", front: "Horizontal abduction / adduction — which plane?", back: "The transverse plane — the arm moves across the body at roughly shoulder height." },
  { w: 2, type: "application", front: "A figure-skating spin about the long axis of the body is motion in which plane?", back: "The transverse plane, about the longitudinal axis, around the body's centre of mass." },

  // -- Week 3 --
  { w: 3, type: "definition", front: "Cortical bone — Hamill's facts?", back: "The hard, compact outer layer; looks solid; makes up about 80% of the skeleton. (Cancellous/spongy bone lies internal to it.)" },
  { w: 3, type: "discrimination", front: "Cortical vs cancellous bone?", back: "Cortical (compact) = dense outer layer, ~80% of skeleton. Cancellous (spongy/trabecular) = porous internal architecture, suited to the mechanical demands of movement." },
  { w: 3, type: "definition", front: "Wolff's law — the book's phrasing?", back: "Every change in the form and function of a bone is followed by definite changes in its internal architecture and external conformation. Bone adapts its structure to the loads placed on it." },
  { w: 3, type: "definition", front: "Why does the RATE of loading matter for bone?", back: "Bone is viscoelastic — its strength and response depend on how fast the load is applied, not just its magnitude. Faster loading changes how bone fails." },

  // -- Week 5 --
  { w: 5, type: "definition", front: "Motor unit — Hamill's definition?", back: "A group of muscle fibres innervated by a single motor neuron. When the neuron fires, all its fibres are stimulated together." },
  { w: 5, type: "definition", front: "Excitation–contraction coupling — the key ion?", back: "Calcium (Ca2+). Its release links the action potential to contraction by binding the filaments and switching on actin–myosin interaction in the sarcomere." },
  { w: 5, type: "definition", front: "The two ways muscle force is increased?", back: "1) Recruiting more (and larger) motor units. 2) Rate coding — increasing the firing frequency of active motor units." },
  { w: 5, type: "discrimination", front: "Type I vs Type II fibres (Hamill)?", back: "Type I = slow-twitch, oxidative, red (high myoglobin), fatigue-resistant. Type II = fast-twitch (subdivided into IIa and IIb/IIx), more powerful, quicker to fatigue." },
  { w: 5, type: "definition", front: "Agonist vs antagonist (Hamill)?", back: "Agonists = muscles creating the same joint movement (prime movers). Antagonists = muscles producing the opposite movement; they relax to allow motion or contract concurrently to control/slow it." },
  { w: 5, type: "definition", front: "Where is the sarcomere?", back: "Inside the myofibrils that fill each muscle fibre — it is the contractile unit of muscle (between two Z-lines)." },

  // -- Week 10 (Knudson) --
  { w: 10, type: "definition", front: "Inertia — Knudson's definition?", back: "The property of ALL objects to resist changes in their state of motion. Linear measure = mass (m); angular measure = moment of inertia (I)." },
  { w: 10, type: "discrimination", front: "What did Newton's inertia overturn?", back: "The Aristotelian idea that constant force is needed to keep something moving. Inertia means an object keeps its motion until a net force changes it." },
  { w: 10, type: "definition", front: "Knudson's Force–Time principle pairs with which relationship?", back: "The impulse–momentum relationship — applying force over a longer time produces a greater change in momentum (or a smaller peak force for the same Δp)." },

  // -- Week 11 (Knudson principles) --
  { w: 11, type: "definition", front: "Knudson's nine principles of biomechanics?", back: "Range of Motion, Force–Motion, Force–Time, Inertia, Segmental Interaction, Balance, Coordination Continuum, Spin, and Optimal Projection." },
  { w: 11, type: "definition", front: "The Segmental Interaction principle?", back: "Forces and motion transfer between adjacent linked segments (the kinetic chain) — energy passes proximal-to-distal, as in a whip-like throw or kick." },
  { w: 11, type: "discrimination", front: "Coordination Continuum principle — simultaneous vs sequential?", back: "High-FORCE tasks tend to use simultaneous segment motions; high-SPEED tasks use sequential (proximal-to-distal) motions. Skills sit on a continuum between the two." },
  { w: 11, type: "definition", front: "Knudson's Principle of Balance?", back: "Manage stability vs mobility by adjusting the base of support and the height/position of the centre of gravity to suit the task." },

  // -- Week 12 (Knudson fluids) --
  { w: 12, type: "definition", front: "Knudson's four fluid forces?", back: "Buoyancy, drag, lift, and the Magnus effect (spin) — leading into the Principle of Spin." },
  { w: 12, type: "application", front: "A volleyball hit above centre (topspin) — what does the lift force do?", back: "Topspin creates a DOWNWARD lift force, making the ball dive steeply and harder to pass." },
  { w: 12, type: "discrimination", front: "Spin for stability vs spin for curve?", back: "A thrown football's spin stabilises its orientation (gyroscopic — Principle of Spin). A curveball's spin creates a sideways pressure force (Magnus effect). Both are spin, different effects." },

  // ==== BOOK-SOURCED DECK II (Knudson · Hall) ============================
  { w: 1, type: "definition", front: "Knudson — what is biomechanics?", back: "The study of motion and its causes in living things. It informs safer, more effective movement patterns, technique, equipment, and exercise." },
  { w: 4, type: "discrimination", front: "Stability vs mobility (Knudson)?", back: "They are INVERSELY related — a more stable posture is less mobile, and a more mobile posture is less stable. You trade one for the other for the task." },
  { w: 4, type: "application", front: "Why is a handstand so hard to balance (Knudson)?", back: "The hands form a very small base of support in the anterior–posterior direction, so the line of gravity easily falls outside the base." },
  { w: 10, type: "definition", front: "Inertia — Hall's definition?", back: "The tendency of a body to resist a change in its state of motion; mechanically, resistance to acceleration. Its measure is mass." },
  { w: 3, type: "definition", front: "The primary mechanical loads (Hall)?", back: "Compression, tension, and shear — plus torsion, bending, and combined loads. Each stresses tissue in a different way." },
  { w: 3, type: "discrimination", front: "Compression vs tension vs shear?", back: "Compression = squashing (axial press together). Tension = pulling/stretching apart. Shear = forces acting parallel across a surface, sliding one part past another." },
  { w: 3, type: "definition", front: "Torsion vs bending load?", back: "Torsion = a twisting load about the long axis. Bending = a load that puts one side in tension and the other in compression. Both are common in bone injury." },
  { w: 3, type: "discrimination", front: "Repetitive vs acute loading (Hall)?", back: "Repetitive sub-failure loads accumulate into OVERUSE injuries (e.g. stress fracture). A single excessive load causes an ACUTE injury (e.g. fracture)." },
  { w: 6, type: "discrimination", front: "EMG vs dynamography (Hall)?", back: "Electromyography (EMG) measures muscle ELECTRICAL activity. Dynamography (e.g. force platforms) measures FORCES. Different kinetic tools." },
  { w: 8, type: "discrimination", front: "Vector composition vs resolution (Hall)?", back: "Composition = combining several vectors into one resultant. Resolution = breaking one vector into perpendicular (x, y) components." },
  { w: 5, type: "definition", front: "Stretch–shortening cycle (SSC)?", back: "A rapid eccentric pre-stretch immediately before a concentric action stores elastic energy and boosts neural drive, producing more force (e.g. a countermovement jump)." },
  { w: 5, type: "definition", front: "Electromechanical delay?", back: "The brief lag between a muscle's electrical activation and the onset of measurable force production." },
  { w: 5, type: "application", front: "DOMS (delayed-onset muscle soreness) comes mostly from which action, and why?", back: "Eccentric (lengthening) actions — they produce the highest force and most microdamage, so the most soreness 24–72 h later." },
  { w: 2, type: "definition", front: "Hyperextension (Hall)?", back: "Rotation of a segment BEYOND anatomical position, in the direction opposite flexion. (Extension only returns it to anatomical position.)" },

  // ---- ERROR-LOG SEED CARDS ----
  { w: 3, type: "application", front: "ERROR-LOG TRAP: Can bone bend?", back: "YES, slightly — bone is stiff, not rigid. It deforms elastically and springs back. Small deformation ≠ no deformation." },
];

/* ----------------------------------------------------------------------------
   QUIZ BANK — multiple choice, answer index is 0-based `a`
   -------------------------------------------------------------------------- */
CONTENT.quiz = [
  { w: 1, q: "The distinguishing question for statics vs dynamics is:", opts: ["Is the system moving?", "Is the system accelerating?", "Are forces present?", "Is it a vector or scalar?"], a: 1, why: "Statics means ΣF = 0 — no acceleration. A system can move at constant velocity and still be static." },
  { w: 1, q: "Kinetics differs from kinematics because kinetics:", opts: ["Describes position over time", "Only applies to statics", "Explains the CAUSE of motion (forces)", "Ignores forces"], a: 2, why: "Kinematics describes motion; kinetics explains what caused it — forces and torques." },
  { w: 1, q: "Which is a vector?", opts: ["Speed", "Mass", "Velocity", "Distance"], a: 2, why: "Velocity has magnitude and direction. Speed, mass and distance are scalars." },
  { w: 1, q: "Which grouping is the GEOGRAPHIC set of societies?", opts: ["ISB / ISBS / ISEK", "ASB / CSB / ESB", "DOAJ / PMC / PubMed", "ISEK / ASB / ISB"], a: 1, why: "Geographic = ASB (American), CSB (Canadian), ESB (European)." },

  { w: 2, q: "Sagittal-plane motion rotates about which axis?", opts: ["Anteroposterior", "Longitudinal", "Mediolateral", "Vertical"], a: 2, why: "The axis is always perpendicular to the plane. Sagittal → mediolateral axis." },
  { w: 2, q: "A jumping jack (arms raised sideways) occurs in which plane?", opts: ["Sagittal", "Frontal", "Transverse", "Oblique"], a: 1, why: "Abduction/adduction sideways = frontal plane, about the anteroposterior axis." },
  { w: 2, q: "Supination of the forearm means the palm rotates to face:", opts: ["Backward/down", "Forward/up", "Medially", "The floor"], a: 1, why: "Supination = palm forward/up (anatomical position). Pronation = palm backward/down." },
  { w: 2, q: "A standing torso twist happens in the ___ plane about the ___ axis.", opts: ["Frontal / mediolateral", "Sagittal / anteroposterior", "Transverse / longitudinal", "Transverse / mediolateral"], a: 2, why: "Rotation about the long axis of the body = transverse plane, longitudinal axis." },

  { w: 3, q: "Stress is defined as:", opts: ["ΔL / L", "F / A", "F × d", "m × a"], a: 1, why: "Stress σ = force per unit area (F/A). ΔL/L is strain." },
  { w: 3, q: "Correct order of the stress–strain curve regions:", opts: ["Plastic → elastic → yield → failure", "Elastic → yield point → plastic → failure", "Yield → elastic → failure → plastic", "Elastic → plastic → yield → failure"], a: 1, why: "Elastic region → yield point → plastic region → failure." },
  { w: 3, q: "Wolff's law states that bone:", opts: ["Cannot deform", "Remodels along lines of mechanical stress", "Is fully rigid", "Loses strength when loaded"], a: 1, why: "Load bone and it remodels/strengthens along the lines of that stress." },
  { w: 3, q: "A stiletto dents a floor a flat shoe doesn't at the same weight because:", opts: ["It applies more force", "Smaller area → greater stress", "It applies more strain", "The floor is elastic"], a: 1, why: "Same force, smaller area → higher stress (σ = F/A). Stress ≠ force." },
  { w: 3, q: "Which statement is TRUE?", opts: ["Bone is perfectly rigid", "Bone deforms elastically and springs back", "Bone cannot fail", "Strain has units of Pascals"], a: 1, why: "Bone is stiff, not rigid — it deforms elastically (~1.5–2% strain before failure). Strain is dimensionless." },

  { w: 4, q: "Which change INCREASES stability?", opts: ["Raising the COM", "Narrowing the base of support", "Widening the base of support", "Reducing mass"], a: 2, why: "Stability rises with a wider base, lower COM, COM line nearer the base centre, and greater mass." },
  { w: 4, q: "In anatomical position the COM sits roughly:", opts: ["At the sternum", "Just anterior to the 2nd sacral vertebra", "In the head", "At the knees"], a: 1, why: "≈ just anterior to S2 — and it can even lie outside the body." },
  { w: 4, q: "A ball-and-socket joint (e.g. the shoulder) permits:", opts: ["Motion in one plane only", "Motion in all three planes", "No rotation", "Only gliding"], a: 1, why: "Ball-and-socket allows the greatest freedom — motion in all three planes." },
  { w: 4, q: "You can't rise from a chair with arms crossed unless you lean forward because:", opts: ["Your legs are too weak", "You must move the COM over the base of support", "Friction is too high", "The chair pushes back"], a: 1, why: "The COM must be shifted forward over the feet (base) before you can stand." },

  { w: 5, q: "Which contraction produces the MOST force?", opts: ["Concentric", "Isometric", "Eccentric", "They are equal"], a: 2, why: "Eccentric (lengthening under load) produces the most force and the most soreness." },
  { w: 5, q: "The size principle says motor units are recruited:", opts: ["Largest first", "Randomly", "Smallest first", "By fibre colour"], a: 2, why: "Small (Type I) units recruit first; large (Type II) units are added as force demand rises." },
  { w: 5, q: "Using the F–R–E / 1–2–3 hook, a lever with the RESISTANCE in the middle is class:", opts: ["1", "2", "3", "4"], a: 1, why: "Whatever is in the middle names the class: resistance middle = class 2." },
  { w: 5, q: "Most joints in the body are class 3 levers, which means they:", opts: ["Have MA > 1 and favour force", "Have MA < 1 and trade force for speed/range", "Cannot move", "Are the strongest possible arrangement"], a: 1, why: "Class 3 (F–E–R) is mechanically disadvantageous (MA < 1) — the body buys speed and range at the cost of force." },
  { w: 5, q: "A calf raise is which lever class?", opts: ["Class 1", "Class 2", "Class 3", "Not a lever"], a: 1, why: "Resistance (body weight) is between fulcrum (toes) and effort (Achilles) → class 2." },

  { w: 6, q: "The correct order of the qualitative analysis framework is:", opts: ["Observation → preparation → intervention → evaluation", "Preparation → observation → evaluation/diagnosis → intervention", "Intervention → observation → preparation → evaluation", "Evaluation → preparation → observation → intervention"], a: 1, why: "Preparation → Observation → Evaluation/diagnosis → Intervention." },
  { w: 6, q: "Precision refers to:", opts: ["Closeness to the true value", "Repeatability of measurements", "Whether a tool measures what it claims", "The sample size"], a: 1, why: "Precision = repeatability. Accuracy = closeness to true value. Validity = measuring the intended thing." },
  { w: 6, q: "During the swing phase of gait the foot is:", opts: ["In contact with the ground", "Off the ground moving forward", "Bearing full weight", "Fixed in place"], a: 1, why: "Swing = foot off the ground; stance = foot in contact." },

  { w: 8, q: "Displacement differs from distance because displacement:", opts: ["Is always larger", "Is a scalar", "Is a vector (straight-line, with direction)", "Ignores direction"], a: 2, why: "Displacement is the straight-line change in position with direction (vector); distance is total path length (scalar)." },
  { w: 8, q: "The slope of a velocity–time graph gives:", opts: ["Displacement", "Position", "Acceleration", "Jerk"], a: 2, why: "Slope of velocity = acceleration. Slope of position = velocity." },
  { w: 8, q: "At the peak of a projectile's flight, the vertical velocity is:", opts: ["Maximum", "Zero", "Equal to horizontal velocity", "Negative g"], a: 1, why: "vy = 0 at the apex; horizontal velocity is unchanged throughout." },
  { w: 8, q: "The biggest source of lost marks in linear kinematics is:", opts: ["Concept errors", "Sign-convention errors", "Calculator errors", "Reading errors"], a: 1, why: "Sign errors dominate. Fix a convention at the top of the page and never change it mid-problem." },
  { w: 8, q: "For maximum range on level ground (no air resistance) the launch angle is:", opts: ["30°", "45°", "60°", "90°"], a: 1, why: "45° maximises range when launch and landing heights are equal." },

  { w: 9, q: "One radian equals approximately:", opts: ["3.14°", "57.3°", "90°", "180°"], a: 1, why: "1 rad = 180/π ≈ 57.3°." },
  { w: 9, q: "Linear velocity of a point on a rotating segment is:", opts: ["v = ω/r", "v = rω", "v = r/ω", "v = r²ω"], a: 1, why: "v = rω. Linear velocity scales with the radius." },
  { w: 9, q: "Two points on the same rotating limb necessarily share the same:", opts: ["Linear velocity", "Radius", "Angular velocity ω", "Centripetal acceleration"], a: 2, why: "Same ω, but linear velocity differs with r (v = rω)." },
  { w: 9, q: "A longer bat produces more end-point speed because:", opts: ["It weighs more", "Larger r at the same ω raises v (v = rω)", "It has more momentum only", "ω increases with length"], a: 1, why: "Same ω but larger r → greater linear tip velocity." },

  { w: 10, q: "Impulse equals:", opts: ["mv", "½mv²", "FΔt = Δp", "F/A"], a: 2, why: "Impulse J = FΔt = change in momentum Δp." },
  { w: 10, q: "You bend your knees on landing to:", opts: ["Increase peak force", "Reduce Δp", "Lengthen Δt and reduce peak force", "Increase momentum"], a: 2, why: "Same Δp over a longer Δt → smaller peak force (J = FΔt)." },
  { w: 10, q: "Compared with kinetic friction, static friction is:", opts: ["Smaller", "Equal", "Greater", "Zero"], a: 2, why: "Static friction (to start motion) exceeds kinetic friction (once sliding)." },
  { w: 10, q: "Newton's second law is:", opts: ["F = mv", "F = ma", "F = Iα", "F = ½mv²"], a: 1, why: "F = ma. (τ = Iα is its angular analogue.)" },
  { w: 10, q: "What should you draw for EVERY kinetics problem?", opts: ["A velocity graph", "A free-body diagram", "A stress–strain curve", "A gait cycle"], a: 1, why: "A free-body diagram showing every force — no exceptions." },

  { w: 11, q: "Torque is:", opts: ["F × A", "F × d⊥", "m × a", "I × ω"], a: 1, why: "τ = force × perpendicular distance from the line of action to the axis." },
  { w: 11, q: "The moment arm is:", opts: ["The length of the bone", "The perpendicular distance from the force's line of action to the axis", "The muscle length", "Always constant"], a: 1, why: "Moment arm = perpendicular distance to the axis — NOT bone length — and it changes with joint angle." },
  { w: 11, q: "A diver spins faster when tucking because:", opts: ["Energy is added", "I increases", "I decreases so ω rises (L = Iω conserved)", "Torque increases"], a: 2, why: "Angular momentum L = Iω is conserved; a smaller I forces a larger ω. Nothing is added." },
  { w: 11, q: "Both conditions for static equilibrium are:", opts: ["ΣF = 0 only", "Στ = 0 only", "ΣF = 0 AND Στ = 0", "F = ma AND τ = Iα"], a: 2, why: "Translational (ΣF = 0) AND rotational (Στ = 0) equilibrium." },
  { w: 11, q: "Holding a book at arm's length is harder than at your chest because:", opts: ["The book gets heavier", "The moment arm (and thus torque) is larger", "Gravity increases", "The muscle shortens"], a: 1, why: "A longer moment arm → greater torque about the shoulder → far more muscle force needed." },

  { w: 12, q: "Lift acts ___ to the flow; drag acts ___ to the flow.", opts: ["Parallel / perpendicular", "Perpendicular / parallel", "Both parallel", "Both perpendicular"], a: 1, why: "Lift is perpendicular to flow; drag is parallel to it." },
  { w: 12, q: "Drag scales with velocity as:", opts: ["∝ v", "∝ v²", "∝ 1/v", "∝ √v"], a: 1, why: "Drag ∝ v² — why speed is so expensive energetically." },
  { w: 12, q: "A curveball curves because of:", opts: ["Buoyancy", "The Magnus effect (spin-driven pressure asymmetry)", "Pure gravity", "Wave drag"], a: 1, why: "Spin creates a pressure difference across the ball — the Magnus effect, not a simple Bernoulli claim." },
  { w: 12, q: "Archimedes' principle: buoyant force equals:", opts: ["The object's weight", "The weight of fluid displaced", "The drag force", "The lift force"], a: 1, why: "Buoyant force = weight of the displaced fluid." },

  // ==== EXPANSION QUIZ BANK ================================================
  { w: 1, q: "A car travels at a constant 90 km/h in a straight line. It is:", opts: ["Dynamic — it's moving", "Static — ΣF = 0, no acceleration", "Neither", "Both static and dynamic"], a: 1, why: "Constant velocity = no acceleration = ΣF = 0 = statics. Movement alone does not make a system dynamic." },
  { w: 1, q: "Kinematics and kinetics are:", opts: ["The same thing", "Two independent axes from statics/dynamics", "Both about forces only", "Subsets of statics"], a: 1, why: "Describing vs explaining motion — an independent split from statics/dynamics. You can have static kinetics." },
  { w: 1, q: "Which pairing lists SI base units for length, mass, time?", opts: ["cm, g, min", "m, kg, s", "km, lb, hr", "ft, kg, s"], a: 1, why: "Metre, kilogram, second." },
  { w: 1, q: "'His trunk leans too far forward at push-off' is a ___ observation.", opts: ["Quantitative", "Qualitative", "Kinetic", "Static"], a: 1, why: "No numbers — a systematic qualitative observation. A measured trunk angle would be quantitative." },

  { w: 2, q: "Flexion means the joint angle:", opts: ["Increases", "Decreases", "Stays the same", "Rotates"], a: 1, why: "Flexion decreases the joint angle; extension increases it. Both in the sagittal plane." },
  { w: 2, q: "Abduction moves a limb:", opts: ["Toward the midline", "Away from the midline", "Into rotation", "Downward"], a: 1, why: "Abduction = away from the midline (frontal plane); adduction = toward it." },
  { w: 2, q: "Shaking your head 'no' occurs in which plane / axis?", opts: ["Sagittal / mediolateral", "Frontal / anteroposterior", "Transverse / longitudinal", "Sagittal / longitudinal"], a: 2, why: "Rotation about the vertical body axis = transverse plane, longitudinal axis." },
  { w: 2, q: "Pointing your toes downward is:", opts: ["Dorsiflexion", "Plantarflexion", "Eversion", "Abduction"], a: 1, why: "Plantarflexion (toes down). Dorsiflexion is toes up toward the shin." },

  { w: 3, q: "Young's modulus (stiffness) is represented on the stress–strain curve by:", opts: ["The failure point", "The slope of the elastic region", "The area under the curve", "The yield point"], a: 1, why: "Stiffness = stress/strain = slope of the linear elastic region." },
  { w: 3, q: "Deformation that does NOT recover when the load is removed is:", opts: ["Elastic", "Plastic", "Isometric", "Tensile"], a: 1, why: "Plastic deformation is permanent; elastic deformation springs back." },
  { w: 3, q: "Astronauts lose bone density in microgravity. This is explained by:", opts: ["Newton's third law", "Wolff's law (unloaded bone resorbs)", "Archimedes' principle", "The size principle"], a: 1, why: "Wolff's law — bone remodels to load. Remove the load and it weakens." },
  { w: 3, q: "Squashing a structure end-to-end is ___ loading.", opts: ["Tension", "Compression", "Shear", "Torsion"], a: 1, why: "Compression pushes together; tension pulls apart." },

  { w: 4, q: "The three STRUCTURAL joint classes are:", opts: ["Hinge, pivot, saddle", "Fibrous, cartilaginous, synovial", "Synarthrosis, amphiarthrosis, diarthrosis", "Stable, unstable, neutral"], a: 1, why: "Structural = by connective tissue: fibrous, cartilaginous, synovial. (Functional = synarthrosis/amphiarthrosis/diarthrosis.)" },
  { w: 4, q: "A hinge joint such as the elbow allows:", opts: ["Motion in all three planes", "Flexion/extension in one plane", "Rotation only", "Gliding only"], a: 1, why: "Hinge = uniaxial, flexion/extension in one plane." },
  { w: 4, q: "For balance, the line of gravity from the COM must fall:", opts: ["Outside the base of support", "Within the base of support", "Above the head", "At the knees"], a: 1, why: "If the line of gravity leaves the base of support, you topple." },
  { w: 4, q: "On Earth, the centre of mass and centre of gravity:", opts: ["Are always far apart", "Coincide (uniform gravity)", "Are unrelated", "Only match underwater"], a: 1, why: "In a uniform gravitational field the COM and COG are the same point." },

  { w: 5, q: "A muscle produces its maximum active force at:", opts: ["Its fully stretched length", "Its fully shortened length", "Its optimal (near-resting) length", "Any length equally"], a: 2, why: "Length–tension: peak force at optimal actin–myosin overlap, near resting length." },
  { w: 5, q: "As concentric shortening velocity increases, muscle force:", opts: ["Increases", "Decreases", "Stays constant", "Doubles"], a: 1, why: "Force–velocity relationship: faster concentric shortening → less force. (Eccentric is the opposite.)" },
  { w: 5, q: "Triceps extending the elbow is which lever class?", opts: ["Class 1", "Class 2", "Class 3", "Not a lever"], a: 0, why: "The elbow (fulcrum) sits between the triceps effort and the forearm resistance → class 1 (F in the middle)." },
  { w: 5, q: "An elite marathon runner's muscles are dominated by:", opts: ["Type IIx fibres", "Type I fibres", "Type IIa only", "No particular type"], a: 1, why: "Type I — slow, fatigue-resistant, aerobic. Sprinters lean on Type IIx." },
  { w: 5, q: "The all-or-none principle states that when a motor unit fires:", opts: ["Only some of its fibres contract", "All of its fibres contract fully", "Force is graded within the unit", "It fatigues instantly"], a: 1, why: "A motor unit contracts fully or not at all; whole-muscle force is graded by recruiting more units and rate coding." },

  { w: 6, q: "Toe-off marks the:", opts: ["Start of stance", "End of stance / start of swing", "Middle of swing", "End of the stride"], a: 1, why: "Toe-off ends stance and begins the swing phase; heel strike begins stance." },
  { w: 6, q: "Which device measures ground reaction force?", opts: ["EMG", "Force plate", "Goniometer", "Accelerometer"], a: 1, why: "A force plate measures GRF (kinetics). EMG measures muscle electrical activity." },
  { w: 6, q: "Getting the same result when a DIFFERENT tester repeats a measurement is:", opts: ["Reliability", "Objectivity", "Validity", "Accuracy"], a: 1, why: "Objectivity = agreement across testers. Reliability = same tester repeating." },

  { w: 8, q: "The components of a vector V at angle θ are:", opts: ["Vx = V·sinθ, Vy = V·cosθ", "Vx = V·cosθ, Vy = V·sinθ", "Vx = V/θ, Vy = V·θ", "Vx = Vy = V"], a: 1, why: "Vx = V·cosθ (adjacent), Vy = V·sinθ (opposite)." },
  { w: 8, q: "A ball dropped and a ball thrown horizontally from the same height hit the ground:", opts: ["Dropped one first", "Thrown one first", "At the same time", "Depends on speed"], a: 2, why: "Vertical motion is independent of horizontal — gravity acts equally, so they land together." },
  { w: 8, q: "The value of gravitational acceleration near Earth's surface is about:", opts: ["1.0 m/s²", "9.81 m/s² downward", "9.81 m/s² upward", "45 m/s²"], a: 1, why: "g ≈ 9.81 m/s², directed downward." },
  { w: 8, q: "The magnitude of a vector from components Vx, Vy is:", opts: ["Vx + Vy", "√(Vx² + Vy²)", "Vx · Vy", "Vx − Vy"], a: 1, why: "Pythagoras: |V| = √(Vx² + Vy²); direction = tan⁻¹(Vy/Vx)." },

  { w: 9, q: "Arc length along a rotating segment is:", opts: ["s = r/θ", "s = rθ (θ in radians)", "s = θ/r", "s = rω"], a: 1, why: "s = rθ with θ in radians." },
  { w: 9, q: "Centripetal acceleration is directed:", opts: ["Along the path (tangent)", "Toward the centre of rotation", "Outward", "Downward"], a: 1, why: "Centripetal (radial) acceleration points toward the centre and changes direction; tangential acceleration changes speed." },
  { w: 9, q: "Angular velocity ω is:", opts: ["Δθ/Δt", "Δv/Δt", "rθ", "Iω"], a: 0, why: "ω = angular displacement ÷ time (rad/s)." },
  { w: 9, q: "A gymnast lengthens their body in a giant swing to:", opts: ["Reduce hand speed", "Increase r so hand speed rises (v = rω)", "Decrease ω", "Change the plane"], a: 1, why: "Larger radius at the same ω → greater linear (hand) speed." },

  { w: 10, q: "Friction force is calculated as:", opts: ["f = N/μ", "f = μN", "f = μ/N", "f = mgμ²"], a: 1, why: "f = μN — coefficient of friction times the normal force." },
  { w: 10, q: "Mass differs from weight because mass:", opts: ["Is a force in newtons", "Is constant regardless of gravity", "Changes on the Moon", "Equals mg"], a: 1, why: "Mass (kg) is amount of matter, constant. Weight (N) = mg and varies with g." },
  { w: 10, q: "You propel yourself forward when walking by:", opts: ["Pulling the ground forward", "Pushing the ground backward (3rd law)", "Reducing your mass", "Increasing friction only"], a: 1, why: "Newton's third law: push the ground back, it pushes you forward (ground reaction force)." },
  { w: 10, q: "In an isolated collision, the total momentum:", opts: ["Increases", "Decreases", "Is conserved", "Becomes zero"], a: 2, why: "With no net external force, total momentum before = after (conservation of momentum)." },
  { w: 10, q: "An eccentric (lengthening) muscle action does ___ work.", opts: ["Positive", "Negative", "Zero", "Rotational"], a: 1, why: "Eccentric = negative work (the muscle absorbs energy); concentric = positive work." },

  { w: 11, q: "The moment of inertia of a point mass is:", opts: ["mr", "mr²", "½mv²", "Iω"], a: 1, why: "I = mr² — distance from the axis is squared, so it dominates." },
  { w: 11, q: "A longer wrench handle loosens a bolt more easily because it:", opts: ["Reduces friction", "Increases the moment arm, so more torque", "Adds mass", "Changes the bolt"], a: 1, why: "τ = F·d⊥ — a longer moment arm multiplies the torque for the same force." },
  { w: 11, q: "In STABLE equilibrium, a small disturbance causes the object to:", opts: ["Move further away", "Return to its original position", "Stay wherever pushed", "Fall over"], a: 1, why: "Stable = COM rises when displaced, so it returns. Unstable = COM falls, it topples. Neutral = no change." },
  { w: 11, q: "A force couple produces:", opts: ["Pure translation", "Pure rotation, no net translation", "No motion", "Only compression"], a: 1, why: "Two equal, opposite, parallel forces create rotation (torque) with zero net force." },
  { w: 11, q: "A lighter child balances a heavier one on a seesaw by:", opts: ["Sitting closer to the pivot", "Sitting farther from the pivot", "Adding weight", "Pushing harder"], a: 1, why: "Balance needs equal torques (F·d). A smaller force needs a larger moment arm — sit farther out." },

  { w: 12, q: "Viscosity is a fluid's:", opts: ["Density", "Resistance to flow/shear", "Buoyant force", "Spin rate"], a: 1, why: "Viscosity = internal resistance to flow. Thicker fluids have higher viscosity." },
  { w: 12, q: "A cyclist crouches low mainly to reduce:", opts: ["Surface drag", "Form (pressure) drag", "Buoyancy", "Lift"], a: 1, why: "A low tuck cuts frontal area and streamlines the body → less form drag (and drag ∝ v²)." },
  { w: 12, q: "Golf-ball dimples reduce drag by:", opts: ["Adding mass", "Tripping the boundary layer into turbulence that clings longer", "Increasing viscosity", "Creating lift only"], a: 1, why: "Turbulent boundary layer stays attached longer → smaller wake → less form drag → greater range." },
  { w: 12, q: "An object floats when its density is ___ the fluid's density.", opts: ["Greater than", "Less than", "Equal to", "Unrelated to"], a: 1, why: "Lower density than the fluid → buoyant force exceeds weight → it floats." },

  // ==== BOOK-SOURCED QUIZ BANK (Hamill Ch.1–4 · Knudson) ==================
  { w: 1, q: "Linear motion (translation) means that all points on the body:", opts: ["Rotate about an axis", "Move the same distance in the same direction in the same time", "Move at different speeds", "Stay still"], a: 1, why: "Hamill: in linear motion all points travel the same distance, in the same direction, in the same time — e.g. a sprinter's path or a punted ball's trajectory." },
  { w: 1, q: "A gymnast doing a somersault rotating about their centre of mass is an example of:", opts: ["Linear motion", "Angular motion", "General motion", "Static equilibrium"], a: 1, why: "Rotation about an axis = angular motion. (Most human movement is general motion — a mix of both.)" },
  { w: 1, q: "The sagittal plane bisects the body into:", opts: ["Front and back halves", "Right and left halves", "Top and bottom halves", "Diagonal halves"], a: 1, why: "Hamill: sagittal = right/left halves, movement about the mediolateral axis. Frontal = front/back; transverse = top/bottom." },
  { w: 1, q: "Running, throwing, and most sport skills are best described as:", opts: ["Pure linear motion", "Pure angular motion", "General motion (linear + angular combined)", "Static"], a: 2, why: "Segments rotate about joints (angular) while the whole body translates (linear) — the combination is general motion." },

  { w: 2, q: "Horizontal abduction/adduction occurs in which plane?", opts: ["Sagittal", "Frontal", "Transverse", "Diagonal"], a: 2, why: "Hamill: horizontal ab/adduction (arm moving across the body at shoulder height) is a transverse-plane motion." },
  { w: 2, q: "The anatomical (zero) reference position has the palms facing:", opts: ["Backward", "Each other", "Forward", "Down"], a: 2, why: "Anatomical position: upright, feet together, arms at the sides, palms facing forward — the zero position for describing motion." },

  { w: 3, q: "Cortical (compact) bone makes up roughly what fraction of the skeleton?", opts: ["20%", "50%", "80%", "5%"], a: 2, why: "Hamill: cortical bone is the hard outer layer and constitutes about 80% of the skeleton; cancellous (spongy) bone is internal." },
  { w: 3, q: "The hard, dense outer layer of a long bone is:", opts: ["Cancellous bone", "Cortical bone", "Trabecular bone", "Marrow"], a: 1, why: "Cortical = compact outer bone; cancellous/trabecular = porous inner bone." },
  { w: 3, q: "Wolff's law says a bone's internal architecture changes in response to:", opts: ["Diet alone", "Its mechanical loading (form/function)", "Body temperature", "Age only"], a: 1, why: "Hamill quotes Wolff: changes in a bone's form and function are followed by changes in its internal architecture — bone adapts to the loads placed on it." },
  { w: 3, q: "The rate of loading (how fast a load is applied) affects bone because bone is:", opts: ["Perfectly elastic", "Viscoelastic (rate-dependent)", "Rigid", "Frictionless"], a: 1, why: "Bone is viscoelastic — its response depends on how quickly the load is applied, not just how large it is." },

  { w: 5, q: "A motor unit is:", opts: ["A single muscle fibre", "A group of muscle fibres innervated by one motor neuron", "One sarcomere", "A tendon and its bone"], a: 1, why: "Hamill: a motor unit = a group of muscle fibres innervated by a single motor neuron." },
  { w: 5, q: "In excitation–contraction coupling, which ion release triggers cross-bridge formation?", opts: ["Na+", "K+", "Ca2+ (calcium)", "Cl−"], a: 2, why: "Hamill: released Ca2+ ions bind the filaments and switch on actin–myosin interaction, starting the contraction." },
  { w: 5, q: "Type I (slow-twitch) fibres are red because of their high content of:", opts: ["Glycogen", "Myoglobin", "Calcium", "Fat"], a: 1, why: "Hamill: slow-twitch type I fibres are oxidative and appear red due to high myoglobin content." },
  { w: 5, q: "The contractile unit housed within a myofibril is the:", opts: ["Sarcomere", "Motor unit", "Fascicle", "Tendon"], a: 0, why: "Hamill: each muscle fibre contains myofibrils that house the contractile unit — the sarcomere." },
  { w: 5, q: "Muscles that produce the SAME joint movement are called:", opts: ["Antagonists", "Agonists", "Synergists only", "Fixators"], a: 1, why: "Hamill: agonists create the same joint movement; antagonists oppose it and must relax or contract concurrently to control the motion." },
  { w: 5, q: "The two main ways the nervous system increases muscle force are recruiting more motor units and:", opts: ["Lengthening the muscle", "Increasing their firing rate (rate coding)", "Cooling the muscle", "Adding sarcomeres"], a: 1, why: "Force rises by (1) recruiting more/larger motor units and (2) rate coding — increasing the firing frequency of active units." },

  { w: 10, q: "Newton's first law is also known as the principle of:", opts: ["Acceleration", "Inertia", "Reaction", "Momentum"], a: 1, why: "Knudson: Newton's first law outlines the principle of inertia — objects resist changes in their state of motion." },
  { w: 10, q: "Inertia is defined as an object's tendency to:", opts: ["Speed up on its own", "Resist changes in its state of motion", "Fall toward Earth", "Rotate"], a: 1, why: "Knudson: inertia = the property of all objects to resist changes in their state of motion. Its linear measure is mass; its angular measure is moment of inertia." },
  { w: 10, q: "The linear measure of inertia is mass; the ANGULAR measure of inertia is:", opts: ["Weight", "Moment of inertia", "Torque", "Momentum"], a: 1, why: "Knudson: mass is linear inertia; moment of inertia (I) is its angular counterpart." },
  { w: 10, q: "The Aristotelian view Newton overturned wrongly claimed that motion requires:", opts: ["No force at all", "Constant application of force", "Only gravity", "A vacuum"], a: 1, why: "Knudson: Newton's leap was rejecting the old idea that constant force is needed to keep something moving — inertia keeps it moving." },
  { w: 10, q: "Knudson's Force–Time principle is the applied form of which relationship?", opts: ["Work–energy", "Impulse–momentum", "Lever–torque", "Stress–strain"], a: 1, why: "Knudson pairs the Force–Time principle with the impulse–momentum relationship: applying force over more time changes momentum more (or lowers peak force for the same Δp)." },

  { w: 11, q: "Knudson's Principle of Balance concerns manipulating stability and mobility via the:", opts: ["Muscle fibre type", "Base of support and centre of gravity", "Bone density", "Fluid drag"], a: 1, why: "Knudson's balance principle: adjust the base of support and the position/height of the centre of gravity to trade stability against mobility as the task demands." },
  { w: 11, q: "Which is one of Knudson's nine principles of biomechanics?", opts: ["Principle of Osmosis", "Coordination Continuum principle", "Principle of Diffusion", "Thermal principle"], a: 1, why: "Knudson's nine: Range of Motion, Force–Motion, Force–Time, Inertia, Segmental Interaction, Balance, Coordination Continuum, Spin, and Optimal Projection." },
  { w: 11, q: "The Coordination Continuum principle contrasts simultaneous vs ___ segmental movements.", opts: ["Sequential", "Random", "Isometric", "Passive"], a: 0, why: "Knudson: high-force tasks tend to use simultaneous segment motions; high-speed tasks use a sequential (proximal-to-distal) coordination." },
  { w: 11, q: "The Segmental Interaction principle explains how forces/torques:", opts: ["Cancel out completely", "Transfer between adjacent body segments", "Only act at the ground", "Are irrelevant to skill"], a: 1, why: "Knudson: motion and forces transfer between linked segments — energy passes up or down the kinetic chain (e.g. a whip-like throw)." },

  { w: 12, q: "Knudson's four fluid forces are buoyancy, drag, lift, and the:", opts: ["Bernoulli force", "Magnus effect", "Normal force", "Friction force"], a: 1, why: "Knudson Ch. 8 covers buoyancy, drag, lift, and the Magnus effect (spin), leading into the Principle of Spin." },
  { w: 12, q: "A volleyball struck above its centre gets topspin, creating a downward lift force that makes it:", opts: ["Float longer", "Dive steeply", "Curve sideways", "Slow down only"], a: 1, why: "Knudson: topspin produces a downward lift force, so the ball dives steeply — harder to pass." },
  { w: 12, q: "The spin on a thrown American football mainly serves to:", opts: ["Add lift for distance", "Stabilise the ball's orientation (gyroscopic)", "Increase drag", "Slow its spin"], a: 1, why: "Knudson: the spin stabilises the ball's orientation, keeping it aerodynamic — the Principle of Spin, distinct from the Magnus curve." },
  { w: 12, q: "The Magnus effect refers to the sideways force on a ball caused by its:", opts: ["Weight", "Spin (pressure asymmetry)", "Surface colour", "Temperature"], a: 1, why: "Spin drags air around the ball, creating a pressure difference and a lift/curve force — the Magnus effect behind curveballs and topspin." },

  // ==== BOOK-SOURCED QUIZ BANK II (Knudson · Hall) =======================
  { w: 1, q: "Knudson defines biomechanics as the study of:", opts: ["Bones only", "Motion and its causes in living things", "Chemical reactions in cells", "Exercise scheduling"], a: 1, why: "Knudson: biomechanics is the study of motion and its causes in living things — key to safe, effective movement, technique, and equipment." },
  { w: 4, q: "Knudson notes that stability and mobility of body postures are:", opts: ["Directly related", "Inversely related", "Unrelated", "Always equal"], a: 1, why: "Knudson: stability and mobility are inversely related — the more stable a posture, the less mobile, and vice versa. You trade one for the other." },
  { w: 4, q: "A handstand is hard to balance mainly because of the small base of support in the:", opts: ["Mediolateral direction", "Anteroposterior (front–back) direction", "Vertical direction", "Rotational direction"], a: 1, why: "Knudson: the hands give a small base in the anterior–posterior direction, so the line of gravity easily passes outside it." },

  { w: 10, q: "Hall's mechanical definition of inertia is:", opts: ["Resistance to acceleration", "The force of gravity", "Speed of an object", "Mass times velocity"], a: 0, why: "Hall: inertia is the tendency of a body to resist a change in its state of motion — mechanically, resistance to acceleration." },
  { w: 3, q: "The three primary ways a structure can be mechanically loaded are:", opts: ["Push, pull, twist", "Compression, tension, and shear", "Bend, break, snap", "Heat, cold, pressure"], a: 1, why: "Hall: compression, tension, and shear are the primary loads (with torsion, bending, and combined loads as further categories)." },
  { w: 3, q: "A twisting load applied about a bone's long axis is called:", opts: ["Compression", "Tension", "Torsion", "Shear"], a: 2, why: "Hall: torsion is a twisting load; bending and combined loads are the other complex loading modes." },
  { w: 3, q: "Repetitive sub-maximal loading over time tends to cause:", opts: ["Acute fracture", "Overuse injury", "Instant failure", "No effect"], a: 1, why: "Hall distinguishes repetitive vs acute loads: repeated sub-failure loads accumulate into overuse injuries; a single large load causes acute injury." },
  { w: 6, q: "Which tool measures the electrical activity of muscle?", opts: ["Dynamography", "Electromyography (EMG)", "Goniometry", "Spirometry"], a: 1, why: "Hall: electromyography (EMG) records muscle electrical activity; dynamography (e.g. force platforms) measures forces." },
  { w: 8, q: "Breaking a single vector into perpendicular (x, y) parts is called vector:", opts: ["Composition", "Resolution", "Addition", "Inversion"], a: 1, why: "Hall: resolution splits one vector into components; composition combines several vectors into one resultant." },
  { w: 5, q: "The stretch–shortening cycle (SSC) increases force output by preceding a concentric action with a(n):", opts: ["Isometric hold", "Eccentric pre-stretch", "Rest period", "Passive stretch only"], a: 1, why: "Hall: a rapid eccentric pre-stretch stores elastic energy and heightens neural drive, so the following concentric action is more forceful (e.g. a countermovement jump)." },
  { w: 5, q: "Delayed-onset muscle soreness (DOMS) is most associated with which muscle action?", opts: ["Concentric", "Isometric", "Eccentric", "Passive"], a: 2, why: "Eccentric (lengthening) actions cause the most microdamage and the most DOMS — consistent with eccentric producing the highest force." },
  { w: 5, q: "Electromechanical delay is the time between:", opts: ["Two heartbeats", "Muscle activation and the onset of force", "Stance and swing", "Flexion and extension"], a: 1, why: "Hall: electromechanical delay is the brief lag between the muscle's electrical activation and measurable force production." },
  { w: 2, q: "Hyperextension is:", opts: ["Flexion past 90°", "Extension beyond anatomical position", "Rotation in the frontal plane", "Return to anatomical position"], a: 1, why: "Hall: extension returns a segment to anatomical position; hyperextension continues past it, opposite the direction of flexion." },
];

/* ----------------------------------------------------------------------------
   FORMULA SHEET
   -------------------------------------------------------------------------- */
CONTENT.formulas = [
  { group: "Skeletal (Wk 3)", items: [
    { sym: "σ = F / A", name: "Stress", unit: "Pa (N/m²)" },
    { sym: "ε = ΔL / L", name: "Strain", unit: "dimensionless" },
  ]},
  { group: "Linear Kinematics (Wk 8)", items: [
    { sym: "v = u + at", name: "Velocity from acceleration", unit: "m/s" },
    { sym: "s = ut + ½at²", name: "Displacement", unit: "m" },
    { sym: "v² = u² + 2as", name: "Velocity–displacement (no t)", unit: "—" },
    { sym: "slope of x–t = v", name: "Velocity from position graph", unit: "m/s" },
    { sym: "slope of v–t = a", name: "Acceleration from velocity graph", unit: "m/s²" },
  ]},
  { group: "Angular Kinematics (Wk 9)", items: [
    { sym: "1 rad = 180/π ≈ 57.3°", name: "Radian conversion", unit: "—" },
    { sym: "v = rω", name: "Linear velocity of a rotating point", unit: "m/s" },
    { sym: "a_t = rα", name: "Tangential acceleration", unit: "m/s²" },
    { sym: "a_c = v²/r = rω²", name: "Centripetal acceleration", unit: "m/s²" },
  ]},
  { group: "Linear Kinetics (Wk 10)", items: [
    { sym: "F = ma", name: "Newton's 2nd law", unit: "N = kg·m/s²" },
    { sym: "p = mv", name: "Momentum", unit: "kg·m/s" },
    { sym: "J = FΔt = Δp", name: "Impulse", unit: "N·s" },
    { sym: "W = ΔKE", name: "Work–energy theorem", unit: "J" },
    { sym: "KE = ½mv²", name: "Kinetic energy", unit: "J" },
    { sym: "PE = mgh", name: "Gravitational potential energy", unit: "J" },
    { sym: "P = W / t", name: "Power", unit: "W" },
  ]},
  { group: "Angular Kinetics (Wk 11)", items: [
    { sym: "τ = F × d⊥", name: "Torque (moment)", unit: "N·m" },
    { sym: "ΣF = 0, Στ = 0", name: "Equilibrium conditions", unit: "—" },
    { sym: "τ = Iα", name: "Angular Newton's 2nd law", unit: "—" },
    { sym: "L = Iω", name: "Angular momentum", unit: "kg·m²/s" },
    { sym: "MA = effort MA ÷ resistance MA", name: "Mechanical advantage", unit: "—" },
  ]},
  { group: "Fluid Dynamics (Wk 12)", items: [
    { sym: "F_b = ρ_fluid · V_displaced · g", name: "Buoyant force (Archimedes)", unit: "N" },
    { sym: "Drag ∝ v²", name: "Drag–velocity scaling", unit: "—" },
  ]},
];

/* ----------------------------------------------------------------------------
   MATH PREP TRACK
   -------------------------------------------------------------------------- */
CONTENT.mathTrack = [
  { weeks: "1–2", drill: "SOH-CAH-TOA until it's reflex. Right-triangle problems. Degrees ↔ radians." },
  { weeks: "3–4", drill: "Vector resolution: magnitude + angle → x and y components, then reverse. 5 a day." },
  { weeks: "5–6", drill: "Vector addition (graphical + component method). Then free-body diagrams — draw one every day." },
];

/* ----------------------------------------------------------------------------
   RESOURCES / LIBRARY
   -------------------------------------------------------------------------- */
CONTENT.resources = [
  { title: "Hamm — Biomechanics of Human Movement (PDF)", note: "Your spine. Chapter order maps to the syllabus. Download offline.", url: "https://pressbooks.bccampus.ca/humanbiomechanics/open/download?type=print_pdf" },
  { title: "Hamm — read online", note: "Same book, browser version.", url: "https://pressbooks.bccampus.ca/humanbiomechanics/" },
  { title: "Introduction to Biomechanics (Open Ed Manitoba)", note: "Second voice; stronger on worked numerical examples.", url: "https://pressbooks.openedmb.ca/introtobiomechanics/" },
  { title: "OpenStax College Physics", note: "Problem-set mine: kinematics, vectors, Newton, friction, momentum, statics & torque.", url: "https://openstax.org/details/books/college-physics-2e" },
  { title: "OpenStax Anatomy & Physiology", note: "Skeletal system, joints, muscle, neuromuscular junction (Weeks 3–5).", url: "https://openstax.org/details/books/anatomy-and-physiology-2e" },
  { title: "PubMed", note: "Free biomedical literature search.", url: "https://pubmed.ncbi.nlm.nih.gov/" },
  { title: "DOAJ — Directory of Open Access Journals", note: "Fully open-access papers.", url: "https://doaj.org/" },
  { title: "Anki (spaced repetition)", note: "Free desktop/Android; AnkiWeb in browser. This site has a built-in engine too.", url: "https://apps.ankiweb.net/" },
  { title: "Kinovea — video motion analysis", note: "Open source. Film a squat, digitise a jump.", url: "https://www.kinovea.org/" },
  { title: "Phyphox — phone sensors", note: "Accelerometer & gyroscope traces from your own body.", url: "https://phyphox.org/" },
];

/* ----------------------------------------------------------------------------
   THE RULES
   -------------------------------------------------------------------------- */
CONTENT.rules = [
  "The blank page beats re-reading. Always. Every time.",
  "Study your gaps, not your knowledge. If you got it right, stop studying it.",
  "Test yourself before you feel ready. The discomfort IS the learning.",
  "Interleave. Mixed practice feels worse and works better.",
  "Sleep. Consolidation happens in sleep; an all-nighter deletes more than it adds.",
  "Feel it in your body. You are studying your own body — use the free lab.",
  "Units. Every line.",
  "Say it out loud. Silent understanding is unverified understanding.",
];

/* ----------------------------------------------------------------------------
   ERROR LOG — seed entries
   -------------------------------------------------------------------------- */
CONTENT.errorLogSeeds = [
  { wrong: "Said bone cannot bend.", truth: "Bone bends slightly and elastically (stiff, not rigid).", reason: "Confused 'small deformation' with 'no deformation'." },
  { wrong: "Garbled the society acronyms (ISBS, ISB, ISEK, DOAJ).", truth: "Geographic = ASB/CSB/ESB; international & specialist = ISB/ISBS/ISEK; DOAJ is a database.", reason: "Never spoke them aloud / no memory hook." },
];

window.CONTENT = CONTENT;
