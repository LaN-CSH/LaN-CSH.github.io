/*
 * ============================================================
 *  포트폴리오 데이터 파일 — 내용 수정은 이 파일만 고치면 됩니다.
 * ============================================================
 *  - 항목 추가: 해당 배열에 { ... } 블록을 복사해서 붙여넣고 수정
 *  - 섹션 숨기기: 배열을 비우면 [] 해당 섹션이 자동으로 사라짐
 *  - links 의 값이 "" 이면 버튼이 표시되지 않음
 *  - 출판물 status: "under-review" | "accepted" | "published" | "preprint"
 */

const PROFILE = {
  name: "Seungho Chae",
  nameLocal: "채승호",
  title: "Ph.D. Student in Artificial Intelligence, Yonsei University",
  photo: "assets/profile.jpg", // 예: "assets/profile.jpg" (비워두면 이니셜 표시)
  bio: [
    "I am an integrated M.S./Ph.D. student in Artificial Intelligence at Yonsei University. " +
    "My research focuses on the interface between speech and large language models, in particular " +
    "how speech should be represented for LLMs. I'm now also interested in full-duplex spoken language models.",
  ],
  contact: {
    email: "cotmd@yonsei.ac.kr",
    linkedin: "https://www.linkedin.com/in/seungho-chae-57b8b7245/",
    github: "",        // 예: "https://github.com/username"
    scholar: "",       // Google Scholar URL
    cv: "",            // 예: "assets/cv.pdf"
  },
};

const RESEARCH_INTERESTS = [
  "Speech-Language Multimodal Learning",
  "Speech-LLM Interfaces",
  "Full-Duplex Spoken Language Models",
];

// 최신 소식 (최근 것이 위로). 비워두면 섹션 숨김.
const NEWS = [
  { date: "2026.10", text: "Submitted a paper on latent speech patching for SpeechLLMs." },
];

const PUBLICATIONS = [
  {
    title: "Efficient Speech Adaptation for SpeechLLMs via Latent Speech Patching",
    authors: "Seungho Chae",
    venue: "", // 채택되면 학회명 입력 (예: "NAACL 2027")
    year: 2026,
    status: "under-review",
    summary:
      "Two-stage latent speech patching adapts pretrained LLMs to discrete speech tokens, cutting inference FLOPs by ~80% " +
      "while improving speech-to-text reasoning at 1B and 3B.",
    links: { paper: "", code: "", demo: "" },
  },
  {
    title: "What a Frozen LLM Embedding Table Can Read from Speech: A Supply-Side Audit for Speech–LLM Interfaces",
    authors: "Seungho Chae",
    venue: "", // 채택되면 학회명 입력 (예: "NAACL 2027")
    year: 2026,
    status: "under-review",
    summary:
      "Measures how much lexical information is linearly accessible from frozen speech representations before any interface " +
      "is trained, via full-vocabulary retrieval and subspace analysis.",
    links: { paper: "", code: "", demo: "" },
  },
];

const EXPERIENCE = [
  {
    org: "Yonsei University, Smart Systems Lab",
    role: "Research Member",
    location: "Seoul, South Korea",
    period: "Sep. 2026 – Present",
    details: ["Research on Speech Large Language Models."],
  },
  {
    org: "Yonsei University, DeepText Lab",
    role: "Research Member → Lab Head",
    location: "Seoul, South Korea",
    period: "Jan. 2024 – Feb. 2026",
    details: [
      "Conducted research on LLM-based NLP and speech-language modeling.",
      "Led lab operations as Lab Head (Jan. 2025 – Feb. 2026).",
    ],
  },
  {
    org: "Yonsei University, MLCF Lab",
    role: "Research Member",
    location: "Seoul, South Korea",
    period: "Jul. 2021 – Apr. 2023",
    details: ["Participated in research on applying reinforcement learning to building energy optimization."],
  },
];

const EDUCATION = [
  {
    school: "Yonsei University",
    degree: "Ph.D. Student in Artificial Intelligence (Integrated M.S./Ph.D.)",
    location: "Seoul, South Korea",
    period: "Mar. 2021 – Present",
  },
  {
    school: "Hanyang University",
    degree: "B.S. in Electronic Engineering",
    location: "Seoul, South Korea",
    period: "Mar. 2016 – Feb. 2021",
  },
];

// link: 값이 있으면 제목이 해당 링크로 연결됨 (↗ 표시)
const AWARDS = [
  {
    title: "1st Place (out of 623 teams)",
    detail: "Hansol Deco Generative AI Challenge (Wallpaper Defect QA), Dacon",
    year: "2024",
    link: "https://dacon.io/competitions/official/236216/talkboard/411322?page=1&dtype=recent",
  },
  {
    title: "Kaggle Silver Medal",
    detail: "LLM - Detect AI Generated Text (24th of 4,483 teams, Top 0.54%)",
    year: "",
    link: "https://www.kaggle.com/danielchae/competitions",
  },
  {
    title: "Kaggle Silver Medal",
    detail: "CommonLit - Evaluate Student Summaries (Top 4%)",
    year: "",
    link: "https://www.kaggle.com/danielchae/competitions",
  },
  {
    title: "Kaggle Silver Medal",
    detail: "LLM Prompt Recovery (Top 4%)",
    year: "",
    link: "https://www.kaggle.com/danielchae/competitions",
  },
];

// 프로젝트. 비워두면 섹션 숨김.
//  - type / role / period: 비워두면 표시 안 됨
//  - summary: 한 줄 요약, description: 본문 설명 (둘 다 선택)
//  - links: 값이 있는 것만 버튼으로 표시 (github, demo, video, paper 등 키 자유롭게 추가 가능)
const PROJECTS = [
  {
    title: "Onoma AI (Industry Collaboration)",
    type: "Collaborative Research Project (Onoma AI × Yonsei DeepText Lab)",
    role: "Research & Development (dataset construction and pipeline design)",
    period: "2024",
    summary: "LLM-based automatic generation of continuous long stories.",
    description:
      "Took part as a researcher, as a member of Yonsei University's DeepText Lab, in a collaborative research project " +
      "between Onoma AI and the lab on LLM-based continuous story generation. " +
      "I worked on research and development of the dataset construction and the generation pipeline design, " +
      "and carried out related research.",
    links: { github: "", demo: "" },
  },
  {
    title: "AI VTuber",
    type: "Personal Side Project",
    role: "",
    period: "2025",
    summary:
      "Real-time AI VTuber: OpenAI API persona → local voice-cloned neural TTS (Chatterbox) with sentence-level " +
      "pipelined synthesis → Live2D lip-sync, streamed live to YouTube via OBS.",
    description:
      "Viewer chat messages are sent to the OpenAI API, which answers in character using a persona set by a system prompt. " +
      "A local neural TTS model (Chatterbox, with voice cloning) turns each answer into speech, and the audio is streamed " +
      "over WebSocket to a Live2D avatar that lip-syncs to it. The output is broadcast to YouTube Live through OBS. " +
      "To cut response latency, answers are split into sentences and each sentence's audio is generated while the " +
      "previous one plays. I also built a broadcast overlay UI and avatar customization tools. " +
      "(The avatar uses a sample Live2D model.)",
    links: { github: "", demo: "" },
  },
  {
    title: "Music Source Separation with Deep U-Net Convolutional Networks",
    type: "Undergraduate Capstone Project, Hanyang University",
    role: "",
    period: "2019",
    summary: "Implementation of a deep U-Net convolutional network for music source separation.",
    description: "",
    links: { github: "", demo: "https://www.youtube.com/watch?v=qsrtCwCiWJU" },
  },
];

const SKILLS = [
  { category: "Frameworks & Tools", items: ["Python", "Linux", "Git", "PyTorch", "Hugging Face Transformers"] },
  {
    category: "Speech & LLM",
    items: ["LLM fine-tuning (LoRA)", "Speech tokenization (HuBERT)", "Forced alignment"],
  },
  { category: "Infrastructure", items: ["vast.ai cloud instances", "Remote Linux servers"] },
  { category: "Languages", items: ["Korean (Native)", "English (Professional Working Proficiency)"] },
];
