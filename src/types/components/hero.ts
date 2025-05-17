export interface MarketingText {
    text: string;
    font: 'handwriting' | 'sans-serif';
}

export type MainCopywritingText = MarketingText[];

export type CopywritingItem = {
    text: string;
    font: string;
};