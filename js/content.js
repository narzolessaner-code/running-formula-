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
