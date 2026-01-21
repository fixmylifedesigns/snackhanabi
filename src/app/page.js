"use client";

import React, { useState, useRef } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      hours: "Hours",
      reservation: "Reservation",
    },
    hero: {
      name: "Snack Hanabi",
      tagline:
        "An intimate late-night lounge for drinks, conversation, and calm vibes.",
      description:
        "Snack Hanabi is a cozy neighborhood lounge offering cocktails, spirits, and a relaxed atmosphere. Perfect for unwinding, quiet conversations, and late-night drinks.",
      viewHours: "View Hours",
      makeReservation: "Make a Reservation",
    },
    hours: {
      title: "Hours",
      days: {
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
        sun: "Sun",
      },
      times: {
        mon: "7:30 PM – 3:00 AM",
        tue: "7:30 PM – 3:00 AM",
        wed: "7:30 PM – 3:00 AM",
        thu: "7:30 PM – 3:00 AM",
        fri: "7:30 PM – 3:00 AM",
        sat: "7:30 PM – 3:00 AM",
        sun: "7:30 PM – 3:00 AM",
      },
      note: "Hours may change on holidays. For private events, please contact us.",
    },
    reservation: {
      title: "Reservation",
      form: {
        name: "Name",
        partySize: "Party Size",
        date: "Date",
        time: "Time",
        notes: "Notes (optional)",
        submit: "Submit Reservation",
        selectSize: "Select party size",
        selectTime: "Select time",
      },
      confirmation:
        "Thank you! Your reservation request has been received. We will contact you shortly to confirm.",
      contact: {
        title: "Contact",
        phone: "Phone",
        email: "Email",
        address: "Address",
      },
      attireNote: "Smart casual attire recommended.",
    },
    footer: {
      copyright: "© 2025 Snack Hanabi. All rights reserved.",
    },
  },
  jp: {
    nav: {
      home: "ホーム",
      hours: "営業時間",
      reservation: "予約",
    },
    hero: {
      name: "スナック花火",
      tagline: "お酒と会話、落ち着いた時間を楽しめる大人のためのスナック。",
      description:
        "スナック花火は、落ち着いた雰囲気の中でお酒と会話を楽しめる居心地の良いラウンジです。ゆっくり過ごしたい夜に最適な空間をご提供します。",
      viewHours: "営業時間を見る",
      makeReservation: "予約する",
    },
    hours: {
      title: "営業時間",
      days: {
        mon: "月",
        tue: "火",
        wed: "水",
        thu: "木",
        fri: "金",
        sat: "土",
        sun: "日",
      },
      times: {
        mon: "19:30 – 3:00",
        tue: "19:30 – 3:00",
        wed: "19:30 – 3:00",
        thu: "19:30 – 3:00",
        fri: "19:30 – 3:00",
        sat: "19:30 – 3:00",
        sun: "19:30 – 3:00",
      },
      note: "祝日は営業時間が変更になる場合があります。貸切のご相談はお問い合わせください。",
    },
    reservation: {
      title: "予約",
      form: {
        name: "お名前",
        partySize: "人数",
        date: "日付",
        time: "時間",
        notes: "備考（任意）",
        submit: "予約を送信",
        selectSize: "人数を選択",
        selectTime: "時間を選択",
      },
      confirmation:
        "ありがとうございます！ご予約リクエストを受け付けました。確認のためご連絡いたします。",
      contact: {
        title: "お問い合わせ",
        phone: "電話",
        email: "メール",
        address: "住所",
      },
      attireNote: "スマートカジュアル推奨。",
    },
    footer: {
      copyright: "© 2025 スナック花火",
    },
  },
};

export default function SnackHanabi() {
  const [lang, setLang] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    partySize: "",
    date: "",
    time: "",
    notes: "",
  });

  const homeRef = useRef(null);
  const hoursRef = useRef(null);
  const reservationRef = useRef(null);

  const t = translations[lang];

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", partySize: "", date: "", time: "", notes: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const times = [
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
  ];

  const isFormValid =
    formData.name.trim() &&
    formData.partySize &&
    formData.date &&
    formData.time;

  return (
    <div style={styles.container}>
      <style>{globalStyles}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={styles.logoText}>
              {lang === "en" ? "Snack Hanabi" : "花火"}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav-links">
            <button onClick={() => scrollTo(homeRef)} style={styles.navLink}>
              {t.nav.home}
            </button>
            <button onClick={() => scrollTo(hoursRef)} style={styles.navLink}>
              {t.nav.hours}
            </button>
            <button
              onClick={() => scrollTo(reservationRef)}
              style={styles.navLink}
            >
              {t.nav.reservation}
            </button>
          </div>

          <div style={styles.navRight}>
            {/* Language Toggle */}
            <div style={styles.langToggle}>
              <button
                onClick={() => setLang("en")}
                style={{
                  ...styles.langBtn,
                  ...(lang === "en" ? styles.langBtnActive : {}),
                }}
              >
                EN
              </button>
              <span style={styles.langDivider}>|</span>
              <button
                onClick={() => setLang("jp")}
                style={{
                  ...styles.langBtn,
                  ...(lang === "jp" ? styles.langBtnActive : {}),
                }}
              >
                JP
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  ...styles.hamburgerLine,
                  transform: mobileMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  ...styles.hamburgerLine,
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  ...styles.hamburgerLine,
                  transform: mobileMenuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <button
              onClick={() => scrollTo(homeRef)}
              style={styles.mobileNavLink}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollTo(hoursRef)}
              style={styles.mobileNavLink}
            >
              {t.nav.hours}
            </button>
            <button
              onClick={() => scrollTo(reservationRef)}
              style={styles.mobileNavLink}
            >
              {t.nav.reservation}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <img
            src="/logo.png"
            alt="Snack Hanabi Logo"
            style={styles.heroLogo}
          />
          <h1 style={styles.heroTitle}>{t.hero.name}</h1>
          <p style={styles.heroTagline}>{t.hero.tagline}</p>
          <div style={styles.heroDivider}>
            <span style={styles.heroDividerLine} />
            <span style={styles.heroDividerIcon}>✦</span>
            <span style={styles.heroDividerLine} />
          </div>
          <p style={styles.heroDescription}>{t.hero.description}</p>
          <div className="hero-buttons" style={styles.heroButtons}>
            <button
              onClick={() => scrollTo(hoursRef)}
              style={styles.btnSecondary}
            >
              {t.hero.viewHours}
            </button>
            <button
              onClick={() => scrollTo(reservationRef)}
              style={styles.btnPrimary}
            >
              {t.hero.makeReservation}
            </button>
          </div>
        </div>
        <div style={styles.heroDecoBottom}>
          <span style={styles.heroScrollIndicator}>↓</span>
        </div>
      </section>

      {/* Hours Section */}
      <section ref={hoursRef} style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 className="section-title" style={styles.sectionTitle}>
            <span style={styles.sectionTitleDeco}>✦</span>
            {t.hours.title}
            <span style={styles.sectionTitleDeco}>✦</span>
          </h2>

          <div style={styles.hoursCard}>
            <div style={styles.hoursGrid}>
              {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((key) => (
                <div key={key} style={styles.hoursRow}>
                  <span style={styles.hoursDay}>{t.hours.days[key]}</span>
                  <span style={styles.hoursDots} />
                  <span
                    style={{
                      ...styles.hoursTime,
                      ...(key === "mon" ? styles.hoursClosed : {}),
                    }}
                  >
                    {t.hours.times[key]}
                  </span>
                </div>
              ))}
            </div>
            <p style={styles.hoursNote}>{t.hours.note}</p>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section ref={reservationRef} style={styles.reservationSection}>
        <div style={styles.sectionContent}>
          <h2 className="section-title" style={styles.sectionTitle}>
            <span style={styles.sectionTitleDeco}>✦</span>
            {t.reservation.title}
            <span style={styles.sectionTitleDeco}>✦</span>
          </h2>

          <div className="reservation-grid" style={styles.reservationGrid}>
            {/* <div style={styles.formCard}>
              {formSubmitted ? (
                <div style={styles.confirmationMessage}>
                  <span style={styles.confirmationIcon}>✓</span>
                  <p>{t.reservation.confirmation}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      {t.reservation.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                    />
                  </div>

                  <div className="form-row">
                    <div style={styles.formGroup}>
                      <label style={styles.label}>
                        {t.reservation.form.partySize}
                      </label>
                      <select
                        name="partySize"
                        value={formData.partySize}
                        onChange={handleInputChange}
                        required
                        style={styles.select}
                      >
                        <option value="">
                          {t.reservation.form.selectSize}
                        </option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>
                        {t.reservation.form.date}
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                      />
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      {t.reservation.form.time}
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      style={styles.select}
                    >
                      <option value="">{t.reservation.form.selectTime}</option>
                      {times.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      {t.reservation.form.notes}
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      style={styles.textarea}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      ...styles.submitBtn,
                      ...(isFormValid ? {} : styles.submitBtnDisabled),
                    }}
                    disabled={!isFormValid}
                  >
                    {t.reservation.form.submit}
                  </button>
                </form>
              )}
            </div> */}

            <div style={styles.contactCard}>
              <h3 style={styles.contactTitle}>{t.reservation.contact.title}</h3>

              {/* <div style={styles.contactItem}>
                <span style={styles.contactIcon}>☎</span>
                <div>
                  <span style={styles.contactLabel}>
                    {t.reservation.contact.phone}
                  </span>
                  <span style={styles.contactValue}>+81 3-1234-5678</span>
                </div>
              </div> */}

              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>✉</span>
                <div>
                  <span style={styles.contactLabel}>
                    {t.reservation.contact.email}
                  </span>
                  <span style={styles.contactValue}>manila.snack.hanabi@gmail.com</span>
                </div>
              </div>

              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>◎</span>
                <div>
                  <span style={styles.contactLabel}>
                    {t.reservation.contact.address}
                  </span>
                  <span style={styles.contactValue}>
                    {lang === "en"
                      ? "Building Penthouse, Amorsolo corner Creekside, Unit 19-20, Legazpi Street, Village, Makati City, 1229 Metro Manila"
                      : "フィリピン・マニラ首都圏 マカティ市（Makati City）1229／レガスピ・ヴィレッジ（Legazpi Village） レガスピ通り ユニット19-20（アモルソロ通り×クリークサイド角）ビル・ペントハウス"}
                  </span>
                </div>
              </div>

              <div style={styles.attireNote}>
                <span style={styles.attireIcon}>✦</span>
                {t.reservation.attireNote}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <span style={styles.footerLogo}>
            ✦ {lang === "en" ? "Snack Hanabi" : "スナック花火"} ✦
          </span>
          <p style={styles.footerCopyright}>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Zen+Kaku+Gothic+New:wght@300;400;500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Zen Kaku Gothic New', 'Cormorant Garamond', serif;
    background: #0a0a0a;
    color: #e8e4dc;
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  ::selection {
    background: #c9a962;
    color: #0a0a0a;
  }
  
  input, select, textarea, button {
    font-family: inherit;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  /* Desktop nav links */
  .desktop-nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  /* Mobile menu button */
  .mobile-menu-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
  }

  /* Form row */
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .desktop-nav-links {
      display: none !important;
    }
    
    .mobile-menu-btn {
      display: flex !important;
    }
    
    .form-row {
      grid-template-columns: 1fr !important;
    }

    .hero-buttons {
      flex-direction: column;
      width: 100%;
      padding: 0 20px;
    }

    .hero-buttons button {
      width: 100%;
    }

    .reservation-grid {
      grid-template-columns: 1fr !important;
    }

    .section-title {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const styles = {
  container: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)",
  },

  // Navigation
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background:
      "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.95) 100%)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(201, 169, 98, 0.15)",
  },
  navContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logoIcon: {
    color: "#c9a962",
    fontSize: "20px",
  },
  logoText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    fontWeight: 500,
    letterSpacing: "2px",
    color: "#e8e4dc",
  },
  navLink: {
    background: "none",
    border: "none",
    color: "#a8a299",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "color 0.3s ease",
    padding: "8px 0",
    position: "relative",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  langToggle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  langBtn: {
    background: "none",
    border: "none",
    color: "#666",
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "1px",
    cursor: "pointer",
    padding: "4px 8px",
    transition: "color 0.3s ease",
  },
  langBtnActive: {
    color: "#c9a962",
  },
  langDivider: {
    color: "#333",
    fontSize: "12px",
  },
  hamburgerLine: {
    width: "24px",
    height: "2px",
    background: "#c9a962",
    transition: "all 0.3s ease",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 24px 24px",
    background: "rgba(10,10,10,0.98)",
    borderTop: "1px solid rgba(201, 169, 98, 0.1)",
  },
  mobileNavLink: {
    background: "none",
    border: "none",
    color: "#a8a299",
    fontSize: "14px",
    fontWeight: 400,
    letterSpacing: "1px",
    textAlign: "left",
    cursor: "pointer",
    padding: "12px 0",
    borderBottom: "1px solid rgba(201, 169, 98, 0.1)",
    transition: "color 0.3s ease",
  },

  // Hero Section
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "120px 24px 60px",
    background: `
      radial-gradient(ellipse at 50% 0%, rgba(201, 169, 98, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 100%, rgba(201, 169, 98, 0.05) 0%, transparent 40%),
      linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)
    `,
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(201, 169, 98, 0.02) 2px,
        rgba(201, 169, 98, 0.02) 4px
      )
    `,
    pointerEvents: "none",
  },
  heroContent: {
    textAlign: "center",
    maxWidth: "700px",
    position: "relative",
    zIndex: 1,
    animation: "fadeInUp 1s ease-out",
  },
  heroLogo: {
    width: "220px",
    height: "220px",
    margin: "0 auto",
    marginBottom: "24px",
    filter: "drop-shadow(0 10px 40px rgba(139, 45, 45, 0.4))",
    borderRadius: "8px",
  },
  heroDecoTop: {
    color: "#c9a962",
    fontSize: "28px",
    marginBottom: "24px",
    opacity: 0.7,
    animation: "pulse 3s ease-in-out infinite",
  },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(48px, 10vw, 80px)",
    fontWeight: 300,
    letterSpacing: "8px",
    color: "#e8e4dc",
    marginBottom: "20px",
    textShadow: "0 0 60px rgba(201, 169, 98, 0.3)",
  },
  heroTagline: {
    fontSize: "clamp(16px, 2.5vw, 20px)",
    fontWeight: 300,
    color: "#c9a962",
    letterSpacing: "1px",
    marginBottom: "32px",
    lineHeight: 1.7,
  },
  heroDivider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "32px",
  },
  heroDividerLine: {
    width: "60px",
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.5), transparent)",
  },
  heroDividerIcon: {
    color: "#c9a962",
    fontSize: "12px",
    opacity: 0.7,
  },
  heroDescription: {
    fontSize: "clamp(14px, 2vw, 16px)",
    fontWeight: 300,
    color: "#9a958c",
    lineHeight: 1.9,
    marginBottom: "48px",
    maxWidth: "550px",
    margin: "0 auto 48px",
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #c9a962 0%, #b08d3c 100%)",
    border: "none",
    color: "#0a0a0a",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "16px 36px",
    borderRadius: "2px",
    transition: "all 0.4s ease",
    boxShadow: "0 4px 20px rgba(201, 169, 98, 0.3)",
  },
  btnSecondary: {
    background: "transparent",
    border: "1px solid rgba(201, 169, 98, 0.4)",
    color: "#c9a962",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "16px 36px",
    borderRadius: "2px",
    transition: "all 0.4s ease",
  },
  heroDecoBottom: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  heroScrollIndicator: {
    display: "block",
    color: "#c9a962",
    fontSize: "24px",
    opacity: 0.5,
    animation: "float 2s ease-in-out infinite",
  },

  // Sections
  section: {
    padding: "120px 24px",
    background:
      "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)",
  },
  reservationSection: {
    padding: "120px 24px",
    background: `
      radial-gradient(ellipse at 30% 20%, rgba(201, 169, 98, 0.04) 0%, transparent 50%),
      linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)
    `,
  },
  sectionContent: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(32px, 6vw, 48px)",
    fontWeight: 300,
    letterSpacing: "6px",
    textAlign: "center",
    marginBottom: "60px",
    color: "#e8e4dc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  sectionTitleDeco: {
    color: "#c9a962",
    fontSize: "16px",
    opacity: 0.6,
  },

  // Hours Card
  hoursCard: {
    background:
      "linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(15,15,15,0.95) 100%)",
    border: "1px solid rgba(201, 169, 98, 0.15)",
    borderRadius: "4px",
    padding: "clamp(32px, 5vw, 60px)",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow:
      "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201, 169, 98, 0.1)",
  },
  hoursGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "32px",
  },
  hoursRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  hoursDay: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#c9a962",
    minWidth: "100px",
    letterSpacing: "1px",
  },
  hoursDots: {
    flex: 1,
    height: "1px",
    background:
      "repeating-linear-gradient(90deg, rgba(201, 169, 98, 0.3) 0px, rgba(201, 169, 98, 0.3) 4px, transparent 4px, transparent 12px)",
  },
  hoursTime: {
    fontSize: "15px",
    fontWeight: 300,
    color: "#e8e4dc",
    letterSpacing: "0.5px",
  },
  hoursClosed: {
    color: "#666",
    fontStyle: "italic",
  },
  hoursNote: {
    fontSize: "13px",
    color: "#7a756c",
    textAlign: "center",
    paddingTop: "24px",
    borderTop: "1px solid rgba(201, 169, 98, 0.1)",
    lineHeight: 1.8,
  },

  // Reservation Grid
  reservationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    alignItems: "start",
  },
  formCard: {
    background:
      "linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(15,15,15,0.95) 100%)",
    border: "1px solid rgba(201, 169, 98, 0.15)",
    borderRadius: "4px",
    padding: "clamp(28px, 4vw, 40px)",
    boxShadow:
      "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201, 169, 98, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "12px",
    fontWeight: 500,
    color: "#c9a962",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  input: {
    background: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(201, 169, 98, 0.2)",
    borderRadius: "2px",
    padding: "14px 16px",
    fontSize: "15px",
    color: "#e8e4dc",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  },
  select: {
    background: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(201, 169, 98, 0.2)",
    borderRadius: "2px",
    padding: "14px 16px",
    fontSize: "15px",
    color: "#e8e4dc",
    outline: "none",
    cursor: "pointer",
    transition: "border-color 0.3s ease",
  },
  textarea: {
    background: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(201, 169, 98, 0.2)",
    borderRadius: "2px",
    padding: "14px 16px",
    fontSize: "15px",
    color: "#e8e4dc",
    outline: "none",
    resize: "vertical",
    minHeight: "100px",
    transition: "border-color 0.3s ease",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #c9a962 0%, #b08d3c 100%)",
    border: "none",
    color: "#0a0a0a",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "16px 32px",
    borderRadius: "2px",
    marginTop: "8px",
    transition: "all 0.4s ease",
    boxShadow: "0 4px 20px rgba(201, 169, 98, 0.3)",
  },
  submitBtnDisabled: {
    background: "linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%)",
    color: "#777",
    cursor: "not-allowed",
    boxShadow: "none",
  },
  confirmationMessage: {
    textAlign: "center",
    padding: "40px 20px",
    animation: "fadeIn 0.5s ease-out",
  },
  confirmationIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #c9a962 0%, #b08d3c 100%)",
    color: "#0a0a0a",
    fontSize: "28px",
    marginBottom: "24px",
  },

  // Contact Card
  contactCard: {
    // maxWidth: "600px",
    margin: "0 auto",
    background:
      "linear-gradient(135deg, rgba(15,15,15,0.8) 0%, rgba(10,10,10,0.9) 100%)",
    border: "1px solid rgba(201, 169, 98, 0.1)",
    borderRadius: "4px",
    padding: "clamp(28px, 4vw, 40px)",
  },
  contactTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "24px",
    fontWeight: 400,
    letterSpacing: "3px",
    color: "#e8e4dc",
    marginBottom: "32px",
    paddingBottom: "16px",
    borderBottom: "1px solid rgba(201, 169, 98, 0.15)",
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "24px",
  },
  contactIcon: {
    color: "#c9a962",
    fontSize: "18px",
    marginTop: "2px",
  },
  contactLabel: {
    display: "block",
    fontSize: "11px",
    fontWeight: 500,
    color: "#7a756c",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "4px",
  },
  contactValue: {
    display: "block",
    fontSize: "15px",
    color: "#e8e4dc",
    lineHeight: 1.6,
  },
  attireNote: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "32px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(201, 169, 98, 0.1)",
    fontSize: "13px",
    color: "#9a958c",
    fontStyle: "italic",
  },
  attireIcon: {
    color: "#c9a962",
    fontSize: "10px",
  },

  // Footer
  footer: {
    padding: "48px 24px",
    borderTop: "1px solid rgba(201, 169, 98, 0.1)",
    background: "linear-gradient(180deg, #0a0a0a 0%, #080808 100%)",
  },
  footerContent: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  footerLogo: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "18px",
    fontWeight: 400,
    letterSpacing: "4px",
    color: "#c9a962",
    display: "block",
    marginBottom: "16px",
  },
  footerCopyright: {
    fontSize: "12px",
    color: "#5a5550",
    letterSpacing: "1px",
  },
};
