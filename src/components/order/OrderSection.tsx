import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { cx } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";

const packages = [
  {
    name: "Basic Website",
    price: "Rp 1,5 juta",
    description: "Cocok untuk personal profile, portfolio sederhana, atau landing page promosi.",
    benefits: [
      "Desain one-page responsif",
      "3-5 section utama",
      "Integrasi tombol WhatsApp atau email",
      "Optimasi tampilan mobile",
      "1x revisi ringan",
    ],
  },
  {
    name: "Business Website",
    price: "Rp 3 juta",
    description: "Untuk bisnis yang butuh website informatif dan terlihat lebih siap dipakai publik.",
    benefits: [
      "Desain multi-section atau multi-page",
      "Halaman layanan, profil, portfolio, dan kontak",
      "Form kontak atau CTA WhatsApp",
      "SEO dasar untuk struktur halaman",
      "2x revisi ringan",
    ],
  },
  {
    name: "Professional Website",
    price: "Rp 5 juta",
    description: "Untuk brand yang butuh tampilan lebih matang, konten lebih lengkap, dan alur konversi jelas.",
    benefits: [
      "UI custom sesuai identitas brand",
      "Struktur halaman lebih lengkap",
      "Katalog, blog, atau konten dinamis sederhana",
      "Optimasi performa dan aksesibilitas dasar",
      "3x revisi ringan",
    ],
    featured: true,
  },
  {
    name: "Full Sistem Website",
    price: "Rp 10 juta",
    description: "Untuk kebutuhan sistem berbasis database seperti dashboard, admin panel, dan fitur operasional.",
    benefits: [
      "Login, dashboard, dan role user",
      "Database dan fitur CRUD",
      "Alur bisnis custom sesuai kebutuhan",
      "Deployment awal dan dokumentasi singkat",
      "Support awal setelah handover",
    ],
  },
];

const faqs = [
  {
    question: "Apakah harga sudah termasuk domain dan hosting?",
    answer:
      "Belum. Harga paket fokus pada pembuatan website atau sistem. Domain dan hosting bisa dibantu setup, lalu biayanya menyesuaikan provider yang dipilih.",
  },
  {
    question: "Berapa lama pengerjaan website?",
    answer:
      "Estimasi umum: Basic 3-7 hari, Business 1-2 minggu, Professional 2-4 minggu, dan Full Sistem mulai 4 minggu. Timeline final mengikuti jumlah fitur dan kesiapan materi.",
  },
  {
    question: "Apa saja yang perlu disiapkan sebelum order?",
    answer:
      "Biasanya dibutuhkan brief singkat, logo jika ada, warna brand, daftar halaman, teks konten, gambar produk atau bisnis, serta contoh referensi website yang disukai.",
  },
  {
    question: "Apakah bisa request fitur tambahan?",
    answer:
      "Bisa. Fitur tambahan seperti payment gateway, booking, dashboard khusus, atau integrasi API akan dihitung sesuai tingkat kompleksitasnya.",
  },
  {
    question: "Bagaimana sistem revisinya?",
    answer:
      "Revisi ringan mencakup penyesuaian teks, warna, spacing, gambar, dan bagian kecil dari layout. Perubahan konsep besar atau penambahan fitur baru akan dihitung sebagai scope tambahan.",
  },
];

export function OrderSection() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  return (
    <div className="container order-page">
      <SectionTitle
        centered
        title="Order Website"
        description="Pilih paket yang paling dekat dengan kebutuhanmu. Setiap paket bisa disesuaikan lagi setelah brief dan scope proyek jelas."
      />

      <div className="pricing-grid">
        {packages.map((item, index) => (
          <motion.div
            key={item.name}
            className="pricing-card-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -8 }}
          >
            <Card
              className={cx("pricing-card", item.featured && "featured", expandedPackage === item.name && "expanded")}
              role="button"
              tabIndex={0}
              aria-expanded={expandedPackage === item.name}
              onClick={() => setExpandedPackage((current) => (current === item.name ? null : item.name))}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setExpandedPackage((current) => (current === item.name ? null : item.name));
                }
              }}
            >
              {item.featured ? <span className="pricing-ribbon">Recommended</span> : null}
              <div className="pricing-head">
                <span className="pricing-icon">
                  {item.featured ? <Sparkles size={22} /> : <ShieldCheck size={22} />}
                </span>
                <p>{item.name}</p>
                <span>Mulai dari</span>
                <h3>{item.price}</h3>
              </div>
              <div className="pricing-details">
                <p className="pricing-description">{item.description}</p>
                <div className="pricing-benefits">
                  {item.benefits.map((benefit) => (
                    <span key={benefit}>
                      <CheckCircle2 size={16} /> {benefit}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                to="/#contact"
                variant={item.featured ? "primary" : "secondary"}
                className="pricing-button"
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
              >
                Order Paket
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="order-faq">
        <SectionTitle title="Q&A" description="Pertanyaan yang biasanya muncul sebelum mulai project website." />
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = activeFaq === index;

            return (
              <Card className={cx("faq-item", isOpen && "open")} key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
