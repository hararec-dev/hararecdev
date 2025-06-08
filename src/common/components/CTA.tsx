'use client';
import type { CTAProps } from "@/common/types";

export const CTA: React.FC<CTAProps> = ({
    primaryLabel = "Agendar llamada",
    primaryHref = "#contacto",
    secondaryLabel = "Ver portafolio",
    secondaryHref = "#portafolio"
}) => (
    <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
        <a
            href={primaryHref}
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
            {primaryLabel}
        </a>
        <a
            href={secondaryHref}
            className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
            {secondaryLabel}
        </a>
    </div>
);
