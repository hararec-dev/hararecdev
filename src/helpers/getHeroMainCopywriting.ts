import type { MainCopywritingText } from "../types";

export const getHeroMainCopywriting = async (): Promise<MainCopywritingText> => {
    return [
        { text: "Transforma tu negocio con ", font: "sans-serif" },
        { text: "ia", font: "handwriting" },
        { text: ", ", font: "sans-serif" },
        { text: "websites", font: "handwriting" },
        { text: " y ", font: "sans-serif" },
        { text: "apps", font: "handwriting" },
        { text: " que generan resultados", font: "sans-serif" },
    ];
};
