"use client";

import { useState } from "react";

/* ============ DATA (ganti dengan konten milikmu) ============ */
const professions = [
  {
    id: "uiux",
    name: "UI/UX Designer",
    months: 7,
    tone: "bg-lilac",
    tools: ["Figma", "Maze", "FigJam"],
    modules: [
      "Dasar riset pengguna",
      "Wireframe & alur aplikasi",
      "Desain visual & design system",
      "Prototipe & uji usability",
      "Studi kasus untuk portofolio",
    ],
    projects: 5,
  },
  {
    id: "graphic",
    name: "Graphic Designer",
    months: 6,
    tone: "bg-peach",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    modules: [
      "Prinsip komposisi & warna",
      "Tipografi terapan",
      "Identitas brand",
      "Desain kemasan & cetak",
      "Portofolio brand lengkap",
    ],
    projects: 6,
  },
  {
    id: "socmed",
    name: "Social Media Specialist",
    months: 7,
    tone: "bg-mint",
    tools: ["Meta Business", "Canva", "CapCut"],
    modules: [
      "Riset audiens & kompetitor",
      "Strategi konten bulanan",
      "Copywriting & visual konten",
      "Iklan berbayar",
      "Laporan performa kampanye",
    ],
    projects: 4,
  },
  {
    id: "video",
    name: "Video Editor",
    months: 5,
    tone: "bg-sun",
    tools: ["Premiere Pro", "After Effects", "DaVinci"],
    modules: [
      "Bahasa visual & storytelling",
      "Editing ritme & transisi",
      "Color grading",
      "Motion graphic dasar",
      "Showreel pribadi",
    ],
    projects: 5,
  },
];

const categories = ["Semua", "Desain", "Video & Motion", "Marketing", "Teknologi"];

const courses = [
  { title: "UI/UX Designer", category: "Desain", type: "Profesi", duration: "7 bulan", level: "Pemula", price: "Rp 890rb/bulan", tone: "bg-lilac" },
  { title: "Graphic Designer", category: "Desain", type: "Profesi", duration: "6 bulan", level: "Pemula", price: "Rp 790rb/bulan", tone: "bg-peach" },
  { title: "Ilustrasi Digital", category: "Desain", type: "Kursus", duration: "8 minggu", level: "Semua level", price: "Rp 1,2jt", tone: "bg-sun" },
  { title: "Video Editor", category: "Video & Motion", type: "Profesi", duration: "5 bulan", level: "Pemula", price: "Rp 750rb/bulan", tone: "bg-sun" },
  { title: "Motion Designer", category: "Video & Motion", type: "Profesi", duration: "6 bulan", level: "Menengah", price: "Rp 850rb/bulan", tone: "bg-mint" },
  { title: "Social Media Specialist", category: "Marketing", type: "Profesi", duration: "7 bulan", level: "Pemula", price: "Rp 690rb/bulan", tone: "bg-mint" },
  { title: "Copywriting untuk Brand", category: "Marketing", type: "Kursus", duration: "6 minggu", level: "Semua level", price: "Rp 950rb", tone: "bg-peach" },
  { title: "Frontend Developer", category: "Teknologi", type: "Profesi", duration: "8 bulan", level: "Pemula", price: "Rp 950rb/bulan", tone: "bg-lilac" },
  { title: "Dasar Data Analitik", category: "Teknologi", type: "Kursus", duration: "8 minggu", level: "Pemula", price: "Rp 1,4jt", tone: "bg-mint" },
];

const steps = [
  { title: "Pilih jalur", text: "Ikuti tes minat singkat atau konsultasi gratis untuk menentukan profesi yang cocok." },
  { title: "Belajar sesuai ritmemu", text: "Materi video, bacaan, dan latihan bisa diakses kapan saja dari laptop atau ponsel." },
  { title: "Dapat review mentor", text: "Setiap tugas dinilai praktisi. Ada sesi live mingguan untuk tanya jawab." },
  { title: "Lulus dengan portofolio", text: "Proyek akhirmu siap dipamerkan, lalu tim karier bantu kamu melamar kerja." },
];

const mentors = [
  { name: "Dinda Pratiwi", role: "Lead Product Designer", org: "Perusahaan fintech", tone: "bg-lilac" },
  { name: "Raka Mahendra", role: "Senior Video Editor", org: "Platform edukasi", tone: "bg-sun" },
  { name: "Sekar Ayuningtyas", role: "Brand Designer", org: "Studio desain", tone: "bg-peach" },
  { name: "Bima Santoso", role: "Social Media Lead", org: "E-commerce nasional", tone: "bg-mint" },
];

const testimonials = [
  { quote: "Aku mulai dari nol, dulu kerja di bank. Enam bulan kemudian portofolioku sudah cukup untuk diterima jadi junior UI designer.", name: "Alya R.", role: "UI Designer" },
  { quote: "Yang paling membantu adalah review mentor. Revisinya detail, jadi aku tahu persis bagian mana yang harus diperbaiki.", name: "Fajar N.", role: "Video Editor freelance" },
  { quote: "Belajarnya fleksibel, bisa malam hari setelah kerja. Sekarang aku pegang akun media sosial tiga brand lokal.", name: "Putri S.", role: "Social Media Specialist" },
];

const faqs = [
  { q: "Apakah saya harus punya pengalaman sebelumnya?", a: "Tidak. Program profesi dirancang untuk pemula. Kamu cukup punya laptop dan waktu belajar sekitar 8–10 jam per minggu." },
  { q: "Bagaimana jika saya tertinggal materi?", a: "Semua materi terekam dan bisa diulang. Kamu juga bisa mengambil cuti belajar hingga satu bulan tanpa biaya tambahan." },
  { q: "Apakah ada sertifikat?", a: "Ya, kamu mendapat sertifikat kelulusan setelah menyelesaikan semua tugas dan proyek akhir." },
  { q: "Apa saja bentuk bantuan karier?", a: "Review CV dan portofolio, simulasi wawancara, serta rekomendasi lowongan dari mitra perusahaan." },
  { q: "Bisakah membayar dengan cicilan?", a: "Bisa. Tersedia pembayaran bulanan maupun cicilan melalui kartu kredit dan paylater." },
];


/* ============ LOGO ============ */
function Logo({ className = "" }) {
  return (
    <a href="#" className={`flex items-center gap-2 font-display text-2xl font-bold tracking-tight ${className}`}>
      <span aria-hidden className="grid size-9 place-items-center rounded-[10px_18px_10px_18px] bg-cobalt text-sun">
        k
      </span>
      karsa
    </a>
  );
}

/* ============ NAVBAR ============ */
const links = [
  { href: "#kursus", label: "Kursus" },
  { href: "#cara-belajar", label: "Cara belajar" },
  { href: "#mentor", label: "Mentor" },
  { href: "#karier", label: "Karier" },
  { href: "#faq", label: "FAQ" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />

        <ul className="hidden items-center gap-8 text-[15px] font-medium text-ink-soft md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="px-3 py-2 text-[15px] font-semibold">Masuk</a>
          <a href="#karier" className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-paper hover:bg-cobalt">
            Konsultasi gratis
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-ink/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 14h14" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col text-lg font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block py-3" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#karier" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-ink px-5 py-3 text-center font-semibold text-paper">
            Konsultasi gratis
          </a>
        </div>
      )}
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  const [activeId, setActiveId] = useState(professions[0].id);
  const active = professions.find((p) => p.id === activeId);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:items-center md:pt-20">
        <div>
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              Belajar<span className="text-cobalt">Korea </span> Online dengan mudah dan menyenangkan
          </h1>
            <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-ink-soft">
            Belajar Korea secara online dengan mudah dan menyenangkan. Kursus Korea online terbaik untuk pemula hingga mahir.
          </p>

          <p id="pilih-profesi" className="mt-10 font-semibold">Mau jadi apa?</p>
          <div role="radiogroup" aria-labelledby="pilih-profesi" className="mt-3 flex flex-wrap gap-2">
            {professions.map((p) => {
              const selected = p.id === activeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setActiveId(p.id)}
                  className={`rounded-full border-2 px-4 py-2 text-[15px] font-semibold transition-colors ${
                    selected ? "border-ink bg-ink text-paper" : "border-ink/15 hover:border-ink"
                  }`}
                >
                  {p.name}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#kursus" className="rounded-full bg-cobalt px-7 py-4 font-semibold text-paper hover:bg-cobalt-deep">
              Lihat program {active.name}
            </a>
            <a href="#cara-belajar" className="font-semibold underline decoration-2 underline-offset-4">
              Cara belajarnya
            </a>
          </div>
        </div>

        {/* Kartu jalur belajar: berubah sesuai profesi yang dipilih */}
        <div className="relative">
          <div aria-hidden className="absolute -right-10 -top-10 size-56 rounded-full bg-sun md:size-72" />
          <article
            key={active.id}
            aria-live="polite"
            className={`relative rounded-[28px] border-2 border-ink ${active.tone} p-7 shadow-[8px_8px_0_0_var(--color-ink)] motion-safe:animate-[pop_.35s_ease-out]`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-3xl font-bold tracking-tight">{active.name}</h2>
              <span className="shrink-0 font-display text-lg font-semibold">{active.months} bulan</span>
            </div>

            <ol className="mt-6 space-y-3">
              {active.modules.map((m, i) => (
                <li key={m} className="flex items-center gap-3 rounded-2xl bg-paper/70 px-4 py-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="font-medium">{m}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[15px]">
              <p><strong>{active.projects} proyek</strong> portofolio</p>
              <ul className="flex flex-wrap gap-1.5">
                {active.tools.map((t) => (
                  <li key={t} className="rounded-full border border-ink/30 px-3 py-1 text-sm font-medium">{t}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>

      <style>{`@keyframes pop { from { transform: translateY(8px) rotate(-1deg); opacity: .4 } to { transform: none; opacity: 1 } }`}</style>
    </section>
  );
}

/* ============ ALUMNISTRIP ============ */
// Nama perusahaan di bawah adalah contoh fiktif.
const companies = ["Studio Nusa", "Bayarin", "Kopi Rakyat", "Lintas Media", "Tokoloka", "Arunika Labs"];

function AlumniStrip() {
  return (
    <section aria-label="Tempat alumni bekerja" className="border-y-2 border-ink bg-cobalt text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 font-semibold text-sun">Alumni kami kini bekerja di</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-xl font-bold">
          {companies.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </section>
  );
}

/* ============ COURSES ============ */
function Courses() {
  const [cat, setCat] = useState("Semua");
  const list = cat === "Semua" ? courses : courses.filter((c) => c.category === cat);

  return (
    <section id="kursus" className="mx-auto max-w-6xl px-5 py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Pilih program</h2>
          <p className="mt-3 max-w-[48ch] text-lg text-ink-soft">
            Program profesi untuk ganti karier, kursus singkat untuk menambah satu keahlian.
          </p>
        </div>

        <div role="tablist" aria-label="Kategori kursus" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-[15px] font-semibold ${
                cat === c ? "bg-ink text-paper" : "bg-lilac hover:bg-ink/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <li key={c.title}>
            <a href="#" className="group flex h-full flex-col rounded-3xl border-2 border-ink bg-paper p-2 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)] motion-safe:transition">
              <div className={`${c.tone} flex h-36 items-end justify-between rounded-[18px] p-5`}>
                <span className="rounded-full bg-paper px-3 py-1 text-sm font-semibold">{c.type}</span>
                <span aria-hidden className="font-display text-6xl font-extrabold leading-none text-ink/15">
                  {c.title.charAt(0)}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-2xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-1 text-ink-soft">{c.duration}, {c.level.toLowerCase()}</p>
                <p className="mt-auto pt-5 font-semibold">{c.price}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ============ HOWITWORKS ============ */
function HowItWorks() {
  return (
    <section id="cara-belajar" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="max-w-[16ch] font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Dari pemula sampai siap kerja
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-sun pt-5">
              <span className="font-display text-5xl font-extrabold text-sun">{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-paper/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ MENTORS ============ */
function initials(name) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function Mentors() {
  return (
    <section id="mentor" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Diajar oleh yang sedang bekerja</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Mentor kami praktisi aktif, jadi materi yang kamu pelajari sama dengan yang dipakai di tim mereka hari ini.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {mentors.map((m, i) => (
            <li key={m.name} className={`flex items-center gap-4 rounded-3xl ${m.tone} p-5 ${i % 2 ? "sm:translate-y-8" : ""}`}>
              {/* Ganti dengan <Image> foto mentor */}
              <div aria-hidden className="grid size-20 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper font-display text-2xl font-bold">
                {initials(m.name)}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold leading-tight">{m.name}</h3>
                <p className="mt-1 text-[15px] font-medium">{m.role}</p>
                <p className="text-[15px] text-ink-soft">{m.org}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  return (
    <section className="bg-lilac">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Cerita alumni</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl bg-paper p-7">
                <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-auto pt-6">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-[15px] text-ink-soft">{t.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ CAREERCTA ============ */
const perks = [
  "Review CV dan portofolio oleh HR praktisi",
  "Simulasi wawancara kerja",
  "Rekomendasi lowongan dari mitra perusahaan",
];

function CareerCTA() {
  return (
    <section id="karier" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-10 rounded-[36px] border-2 border-ink bg-sun p-8 md:grid-cols-2 md:p-14">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-[1] tracking-tight md:text-5xl">
            Belum yakin mulai dari mana?
          </h2>
          <p className="mt-4 max-w-[40ch] text-lg leading-relaxed">
            Ngobrol 20 menit dengan konsultan kami. Kami bantu pilih program yang sesuai dengan latar belakang dan tujuanmu.
          </p>
          <a href="#" className="mt-8 inline-block rounded-full bg-ink px-7 py-4 font-semibold text-paper hover:bg-cobalt">
            Jadwalkan konsultasi gratis
          </a>
        </div>
        <div className="rounded-3xl bg-paper p-7">
          <h3 className="font-display text-2xl font-bold">Setelah lulus, kamu tetap didampingi</h3>
          <ul className="mt-5 space-y-4">
            {perks.map((p) => (
              <li key={p} className="flex gap-3">
                <svg aria-hidden className="mt-0.5 size-6 shrink-0 text-cobalt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span className="text-lg">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 pb-24">
      <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Pertanyaan umum</h2>
      <div className="mt-10 divide-y-2 divide-ink/10 border-y-2 border-ink/10">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-lilac text-xl transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-[60ch] leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
const cols = [
  { title: "Program", links: ["UI/UX Designer", "Graphic Designer", "Video Editor", "Social Media Specialist"] },
  { title: "Perusahaan", links: ["Tentang kami", "Karier", "Kerja sama", "Blog"] },
  { title: "Bantuan", links: ["Pusat bantuan", "Syarat & ketentuan", "Kebijakan privasi", "Hubungi kami"] },
];

function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo className="text-paper" />
          <p className="mt-4 max-w-[30ch] text-paper/70">Sekolah kreatif online untuk kamu yang ingin berkarya dan bekerja di industri digital.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h2 className="font-semibold text-sun">{c.title}</h2>
            <ul className="mt-4 space-y-2 text-paper/80">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-paper">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-paper/60">© {new Date().getFullYear()} Karsa. Jakarta, Indonesia.</p>
      </div>
    </footer>
  );
}

/* ============ HOMEPAGE ============ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AlumniStrip />
        <Courses />
        <HowItWorks />
        <Mentors />
        <Testimonials />
        <CareerCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
