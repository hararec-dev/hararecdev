import { createContext, useState, useEffect, type Dispatch, type SetStateAction } from 'react';
import type { ThemeContextType, ThemeProviderProps } from '../types';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme]: [
        'light' | 'dark',
        Dispatch<SetStateAction<'light' | 'dark'>>
    ] = useState<'light' | 'dark'>(() => {
        const localTheme = localStorage.getItem('theme');
        return (localTheme === 'light' || localTheme === 'dark') ? localTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};