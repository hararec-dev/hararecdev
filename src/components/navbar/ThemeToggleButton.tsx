import { useContext } from 'react';
import { ThemeContext } from '../../context';

export const ThemeToggleButton: React.FC = () => {
    const context = useContext(ThemeContext);

    return !context
        ? null
        : (
            <button
                onClick={context.toggleTheme}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
            >
                {context.theme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800 dark:text-gray-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.749-3.753A9.713 9.713 0 013 11.25a9.75 9.75 0 0014.25 14.25 2.25 2.25 0 002.829-5.86m1.802-9.152a45.344 45.344 0 00-1.591-1.98c-.926-.98-2.36-.98-3.286 0l-.094.095a16.924 16.924 0 00-2.552 2.55m-.036-.036a13.18 13.18 0 01-2.367 1.98c-.926.98-2.36.98-3.286 0l-.094-.095a13.18 13.18 0 01-2.367 1.98m-.036-.036a9.73 9.73 0 01-1.393 1.379c-.926.98-2.36.98-3.286 0l-.094.095a9.73 9.73 0 01-1.393 1.379m.036-.036a6.382 6.382 0 01-.911.861c-.926.98-2.36.98-3.286 0l-.094.095a6.382 6.382 0 01-.911.861m.036-.036a2.988 2.988 0 01-.433.304c-.926.98-2.36.98-3.286 0l-.094.095a2.988 2.988 0 01-.433.304" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400 dark:text-yellow-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773l1.591 1.591m11.314 0l-1.591-1.591M12 15.75c3.54 0 6.729-2.255 8.484-6.416M12 15.75c-3.54 0-6.729-2.255-8.484-6.416" />
                    </svg>
                )}
            </button>
        );
};