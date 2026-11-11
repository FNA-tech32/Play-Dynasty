// ══════════════════════════════════════════════════════
// PLAY DYNESTY — PREMIUM MODERN ENTERPRISE
// World-Class Animations & Interactions
// ══════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", function() {
    "use strict";

    console.log("⚡ PLAY DYNESTY — Premium Enterprise Edition");
    console.log("⟡ Loading experience...");

    // ─── PRELOADER ───
    const preloader = document.getElementById("preloader");
    const preloaderBar = document.getElementById("preloaderBar");
    const preloaderStatus = document.getElementById("preloaderStatus");
    const preloaderPercent = document.getElementById("preloaderPercent");

    if (preloader && preloaderBar) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1.5 + Math.random() * 2;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add("hidden");
                    initHeroAnimations();
                    initScrollReveals();
                }, 400);
            }
            preloaderBar.style.width = progress + "%";
            if (preloaderStatus) {
                preloaderStatus.textContent = progress < 100 ? "Loading experience" : "Experience ready";
            }
            if (preloaderPercent) {
                preloaderPercent.textContent = Math.floor(progress) + "%";
            }
        }, 60);
    } else {
        setTimeout(() => {
            initHeroAnimations();
            initScrollReveals();
        }, 100);
    }

    // ─── GSAP ───
    if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        console.log("✅ GSAP loaded");
    }

    // ─── HERO ANIMATIONS ───
    function initHeroAnimations() {
        if (typeof gsap === "undefined") return;

        const heroTimeline = gsap.timeline();

        heroTimeline
            .fromTo(
                ".hero-line",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
            )
            .fromTo(
                ".hero-badge",
                { y: 20, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(
                ".hero-subtitle",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(
                ".hero-buttons",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(
                ".hero-stats",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                "-=0.3"
            )
            .fromTo(
                ".orb",
                { scale: 0.5, opacity: 0 },
                { scale: 1, opacity: 0.15, duration: 1.2, ease: "power3.out" },
                "-=0.5"
            );
    }

    // ─── SCROLL REVEALS ───
    function initScrollReveals() {
        if (typeof gsap === "undefined") return;

        const revealConfig = {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out"
        };

        // Services
        gsap.utils.toArray(".service-card").forEach((card, i) => {
            gsap.fromTo(card, { ...revealConfig, scale: 0.96 }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Portfolio
        gsap.utils.toArray(".portfolio-item").forEach((item, i) => {
            gsap.fromTo(item, { ...revealConfig, scale: 0.97 }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                delay: i * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Process
        gsap.utils.toArray(".process-step").forEach((step, i) => {
            gsap.fromTo(step, { ...revealConfig, scale: 0.95 }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                delay: i * 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: step,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Contact
        gsap.utils.toArray(".contact-card").forEach((card, i) => {
            gsap.fromTo(card, { ...revealConfig, scale: 0.92 }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                delay: i * 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    toggleActions: "play none none none"
                }
            });
        });

        // ─── COUNTERS ───
        document.querySelectorAll(".stat-number").forEach((counter) => {
            const target = parseInt(counter.getAttribute("data-target"));
            gsap.fromTo(counter, { innerText: 0 }, {
                innerText: target,
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: counter,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onUpdate: function() {
                    const current = Math.floor(this.targets()[0].innerText);
                    counter.innerText = current.toLocaleString();
                }
            });
        });

        console.log("✅ Scroll reveals initialized");
    }

    // ─── NAVBAR ───
    const navbar = document.getElementById("navbar");
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        if (scrollY > 500) {
            backToTop?.classList.add("visible");
        } else {
            backToTop?.classList.remove("visible");
        }
    });

    // ─── BACK TO TOP ───
    backToTop?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ─── MOBILE MENU ───
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            mobileMenu.classList.toggle("open");
        });

        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("open");
                mobileMenu.classList.remove("open");
            });
        });
    }

    // ─── YEAR ───
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ─── SMOOTH SCROLL ───
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target && this.getAttribute("href") !== "#") {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // ─── SHIMMER EFFECT ───
    document.querySelectorAll(".btn-primary").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            btn.style.setProperty("--mouse-x", x + "%");
            btn.style.setProperty("--mouse-y", y + "%");
        });
    });

    // ─── CONSOLE ───
    console.log("%c⚡ PLAY DYNESTY", "color: #6366f1; font-size: 28px; font-weight: 800;");
    console.log("%cPremium Modern Enterprise Edition", "color: #8b5cf6; font-size: 14px;");
    console.log("%c✨ Features: GSAP | ScrollTrigger | Premium Animations", "color: #94a3b8; font-size: 12px;");
    console.log("%c📧 Primary: contact@playdynesty.com | Alt: projectusyt07@gmail.com", "color: #06b6d4; font-size: 12px;");
    console.log("%c💬 WhatsApp / Hotline: +91 98907 32045", "color: #25D366; font-size: 12px;");
});