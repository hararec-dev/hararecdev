import { useContext } from 'react';
import Image from 'next/image'; // Added import
import { ThemeContext } from '@/common/context/ThemeContext';
import logoDark from '/images/logo_dark.png';
import logoLight from '/images/logo_light.png';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
    const context = useContext(ThemeContext);

    return !context
        ? null
        : (
            <div className={`rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 ${className}`}>
                <button onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}>
                    <Image
                        src={context.theme === 'dark' ? logoDark : logoLight}
                        alt="logo"
                        className="h-12 xl:h-14 w-auto object-contain"
                    />
                </button>
            </div>
        );
};
