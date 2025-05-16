import type { MainCopywritingText } from "../types";

export const getHeroMainCopywriting = async (): Promise<MainCopywritingText> => {
    return [
        { text: "Transforma tu negocio con ", font: "sans-serif" },
        { text: "Apps", font: "handwriting" },
        { text: " ", font: "sans-serif" },
        { text: "Móviles", font: "handwriting" },
        { text: " y ", font: "sans-serif" },
        { text: "APIs", font: "handwriting" },
        { text: " que generan resultados", font: "sans-serif" },
    ];
};
