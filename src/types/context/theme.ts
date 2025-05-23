export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export type ThemeProviderProps = React.PropsWithChildren<{}>;