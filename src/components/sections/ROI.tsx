"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Glow from "@/components/Glow";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
};

export default function ROI() {
    const t = useTranslations("roi");

    const cards = [
        {
            title: t("cards.brightness.title"),
            value: t("cards.brightness.value"),
            desc: t("cards.brightness.desc"),
        },
        {
            title: t("cards.transparency.title"),
            value: t("cards.transparency.value"),
            desc: t("cards.transparency.desc"),
        },
        {
            title: t("cards.efficiency.title"),
            value: t("cards.efficiency.value"),
            desc: t("cards.efficiency.desc"),
        },
        {
            title: t("cards.installation.title"),
            value: t("cards.installation.value"),
            desc: t("cards.installation.desc"),
        },
    ];

    return (
        <section
            id="roi"
            className="relative mx-auto max-w-6xl overflow-hidden px-5 py-24"
        >
            <Glow className="opacity-80" />

            {/* WHY US editorial block (left aligned, no ugly banner) */}
            <div className="relative mt-14 max-w-4xl">
                {/* vertical accent line */}
                <div className="absolute left-0 top-2 h-16 w-[2px] bg-gradient-to-b from-cyan-300 via-indigo-400 to-transparent" />

                <div className="pl-6">
                    <h3 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        {t("panel.title")}
                    </h3>

                    <p className="mt-5 text-white/70 leading-relaxed">{t("panel.p1")}</p>

                    <p className="mt-3 text-white/70 leading-relaxed">{t("panel.p2")}</p>

                    <p className="mt-6 font-semibold text-white/85">{t("panel.p3")}</p>
                </div>

                {/* soft background glow behind text */}
                <div className="pointer-events-none absolute -inset-24 -z-10 opacity-40">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,.18),transparent_60%),radial-gradient(circle_at_60%_80%,rgba(99,102,241,.16),transparent_65%)]" />
                </div>
            </div>

            {/* cards grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-10 grid gap-4 md:grid-cols-2"
            >
                {cards.map((c) => (
                    <motion.div
                        key={c.title}
                        variants={item}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    >
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute -inset-24 bg-[radial-gradient(closest-side,rgba(34,211,238,.18),transparent)]" />
                        </div>

                        <div className="flex items-start justify-between gap-5">
                            <div>
                                <div className="text-sm text-white/60">{c.title}</div>
                                <div className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                                    {c.value}
                                </div>
                                <div className="mt-3 text-sm leading-relaxed text-white/70">
                                    {c.desc}
                                </div>
                            </div>

                            <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(34,211,238,.10)]" />
                        </div>

                        <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
                        <div className="mt-4 text-xs text-white/55">{t("footnote")}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA strip */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-white/5 p-6 backdrop-blur">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="text-white">
                        <div className="text-lg font-semibold">{t("cta.title")}</div>
                        <div className="mt-1 text-sm text-white/70">{t("cta.subtitle")}</div>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
                    >
                        {t("cta.button")}
                    </a>
                </div>
            </div>
        </section>
    );
}
