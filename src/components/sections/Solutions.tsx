"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Glow from "@/components/Glow";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

export default function Solutions() {
    const t = useTranslations("solutions");

    const cards = [
        { k: "ai", href: "#contact" },
        { k: "automation", href: "#contact" },
        { k: "integrations", href: "#contact" },
        { k: "dashboards", href: "#contact" },
        { k: "software", href: "#contact" },
        { k: "web", href: "#contact" },
    ];

    return (
        <section
            id="solutions"
            className="relative mx-auto max-w-6xl overflow-hidden px-5 py-24"
        >
            {/* <Glow className="opacity-60" /> */}

            <div className="max-w-2xl">
                <p className="text-sm font-semibold tracking-wide text-white/60">{t("kicker")}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {t("title")}
                </h2>
                <p className="mt-4 text-white/70">{t("subtitle")}</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
                {cards.map(({ k, href }) => (
                    <motion.a
                        key={k}
                        variants={item}
                        href={href}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
                    >
                        {/* moving “data flow” stripe */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute -left-1/2 top-0 h-full w-[200%] animate-[shimmer_1.6s_linear_infinite] bg-[linear-gradient(90deg,transparent,rgba(34,211,238,.12),transparent)]" />
                        </div>

                        {/* corner glow */}
                        <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(closest-side,rgba(99,102,241,.18),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="flex items-start justify-between gap-5">
                            <div>
                                <div className="text-sm text-white/60">{t(`${k}.tag`)}</div>
                                <div className="mt-2 text-xl font-semibold text-white">
                                    {t(`${k}.title`)}
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">
                                    {t(`${k}.desc`)}
                                </p>
                            </div>

                            <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(34,211,238,.10)]" />
                        </div>

                        <div className="mt-6 flex items-center justify-between text-xs text-white/55">
                            <span>{t(`${k}.example`)}</span>
                            <span className="text-white/70">{t("learnMore")} →</span>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
}
