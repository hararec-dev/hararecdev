export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ThemeProviderProps = React.PropsWithChildren<{}>;