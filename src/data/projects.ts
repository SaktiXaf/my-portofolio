import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "project-github-repositories",
    slug: "github-repository-projects",
    title: "GitHub Repository Projects",
    shortDescription:
      "Kumpulan project publik di GitHub, mulai dari AI assistant, website PHP, aplikasi tracking, rental mobil, restoran, portofolio, sampai perpustakaan.",
    problemSolved:
      "Mendokumentasikan proses belajar dan eksperimen lintas project agar recruiter atau collaborator bisa melihat kemampuan teknis secara langsung.",
    fullDescription:
      "GitHub Repository Projects merangkum project-project publik dari akun GitHub SaktiXaf. Di dalamnya terdapat eksperimen AI assistant dengan voice, website referensi Apple clone, project PHP seperti lelang, company profile, restoran, perpustakaan, serta aplikasi seperti Velora dan Rental-mobil. Kumpulan repo ini menunjukkan proses belajar dan eksplorasi lintas bahasa, termasuk Python, PHP, TypeScript, SCSS, dan JavaScript.",
    thumbnail: "/images/projects/github-projects-preview.svg",
    previewImage: "/images/projects/github-projects-preview.svg",
    technologies: [
      { name: "Python", icon: "Py" },
      { name: "PHP", icon: "PHP" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "SCSS", icon: "SCSS" },
    ],
    features: [
      "AI assistant with voice experiment",
      "PHP web projects and company references",
      "Mobile tracking app exploration",
      "Rental, restaurant, portfolio, and library projects",
      "Public repositories for learning documentation",
    ],
    repositoryUrl: "https://github.com/SaktiXaf?tab=repositories",
    status: "completed",
    completedYear: 2026,
    featured: true,
    repositoryProjects: [
      {
        name: "ai-assistant-w-voice",
        description: "Personal AI assistant desktop dengan input suara, TTS, command parser, dan aksi komputer lokal.",
        language: "Python",
        url: "https://github.com/SaktiXaf/ai-assistant-w-voice",
      },
      {
        name: "apple-clone",
        description: "Website referensi company profile yang terinspirasi dari tampilan Apple.",
        language: "PHP",
        url: "https://github.com/SaktiXaf/apple-clone",
      },
      {
        name: "lelang",
        description: "Project aplikasi lelang berbasis web untuk latihan alur data dan transaksi.",
        language: "PHP",
        url: "https://github.com/SaktiXaf/lelang",
      },
      {
        name: "company",
        description: "Website company profile untuk latihan struktur halaman bisnis dan konten layanan.",
        language: "PHP",
        url: "https://github.com/SaktiXaf/company",
      },
      {
        name: "Velora",
        description: "Aplikasi mobile tracking untuk aktivitas lari, bersepeda, atau berjalan.",
        language: "TypeScript",
        url: "https://github.com/SaktiXaf/Velora",
      },
      {
        name: "Rental-mobil",
        description: "Aplikasi rental mobil dengan halaman admin, petugas, dan user.",
        language: "SCSS",
        url: "https://github.com/SaktiXaf/Rental-mobil",
      },
      {
        name: "Restoran",
        description: "Website restoran untuk latihan layout, menu, dan halaman bisnis sederhana.",
        language: "PHP",
        url: "https://github.com/SaktiXaf/Restoran",
      },
      {
        name: "Portofolio",
        description: "Website portfolio sederhana sebagai latihan personal branding dan tampilan web.",
        language: "JavaScript",
        url: "https://github.com/SaktiXaf/Portofolio",
      },
      {
        name: "Perpustakaan",
        description: "Aplikasi perpustakaan berbasis web untuk latihan manajemen data buku dan peminjaman.",
        language: "PHP",
        url: "https://github.com/SaktiXaf/Perpustakaan",
      },
    ],
  },
  {
    id: "project-viewsewa",
    slug: "viewsewa-id",
    title: "ViewSewa.id",
    shortDescription:
      "Website publik untuk layanan sewa kamera, lensa, perlengkapan fotografi/videografi, iPhone, dan motor.",
    problemSolved:
      "Membantu calon customer melihat layanan rental, katalog, cabang, dan jalur kontak tanpa harus bertanya manual dari awal.",
    fullDescription:
      "ViewSewa.id adalah website publik untuk layanan rental kamera, lensa, peralatan fotografi/videografi, iPhone, dan motor. Website ini membantu pengunjung melihat layanan yang tersedia, membuka katalog, menemukan informasi cabang, serta menghubungi tim melalui WhatsApp dan Instagram. Proyek ini berfokus pada tampilan yang responsif, informasi yang mudah dipindai, dan akses cepat menuju kontak layanan.",
    thumbnail: "/images/projects/viewsewa-preview.png",
    previewImage: "/images/projects/viewsewa-preview.png",
    technologies: [
      { name: "Laravel", icon: "La" },
      { name: "PHP", icon: "PHP" },
      { name: "MySQL", icon: "SQL" },
      { name: "Bootstrap", icon: "BS" },
    ],
    features: [
      "Public rental service website",
      "Catalog and product recommendation sections",
      "WhatsApp and Instagram contact flow",
      "Branch information for multiple cities",
    ],
    liveDemoUrl: "https://viewsewa.id",
    status: "completed",
    completedYear: 2026,
    featured: true,
  },
  {
    id: "project-ai-assistant",
    slug: "ai-assistant-with-voice",
    title: "AI Assistant with Voice",
    shortDescription:
      "Personal voice AI assistant desktop untuk Windows dengan perintah suara, respons TTS, command parser, dan aksi komputer lokal.",
    problemSolved:
      "Membantu menjalankan perintah komputer lokal lewat suara atau teks agar aktivitas harian lebih cepat dan otomatis.",
    fullDescription:
      "AI Assistant with Voice adalah MVP personal voice assistant desktop berbasis Python untuk Windows. Assistant ini dapat menerima perintah suara atau teks, memahami intent sederhana, memberi respons suara offline, membuka aplikasi dan website, melakukan pencarian, membuat catatan lokal, mengetik ke window aktif, membaca waktu, serta mencatat log aktivitas. Project ini juga mendukung Gemini parser sebagai fallback untuk command natural language dan safety confirmation untuk aksi sensitif.",
    thumbnail: "/images/projects/ai-assistant-preview.svg",
    previewImage: "/images/projects/ai-assistant-preview.svg",
    technologies: [
      { name: "Python", icon: "Py" },
      { name: "SpeechRecognition", icon: "Voice" },
      { name: "pyttsx3", icon: "TTS" },
      { name: "Gemini API", icon: "AI" },
    ],
    features: [
      "Voice input and text command mode",
      "Offline text-to-speech response",
      "Rule-based command parser with Gemini fallback",
      "Open apps, websites, search, notes, and typing actions",
      "Wake phrase and safety confirmation flow",
    ],
    repositoryUrl: "https://github.com/SaktiXaf/ai-assistant-w-voice",
    status: "completed",
    completedYear: 2026,
    featured: false,
  },
];
