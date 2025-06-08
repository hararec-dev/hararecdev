import type { MainCopywritingText } from "@/features/hero/types";

export const getHeroMainCopywriting = async (): Promise<MainCopywritingText> => {
    return [
        { text: "Transforma tu negocio con ", font: "sans-serif" },
        { text: "Apps", font: "handwriting" },
        { text: " ", font: "sans-serif" },
        { text: "Móviles", font: "handwriting" },
        { text: " y ", font: "sans-serif" },
        { text: "Web", font: "handwriting" },
        { text: " 100% a tu medida", font: "sans-serif" },
    ];
};
