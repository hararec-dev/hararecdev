import { useContext } from 'react';
import { ThemeContext } from '../../context';
import logoDark from '/images/logo_dark.png';
import logoLight from '/images/logo_light.png';

export const Logo: React.FC = () => {
    const context = useContext(ThemeContext);

    return !context
        ? null
        : (
            <div className="rounded-full overflow-hidden relative flex items-center transition-all duration-300 hover:scale-110">
                <button onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}>
                    <img
                        src={context.theme === 'dark' ? logoDark : logoLight}
                        alt="logo"
                        className="h-12 xl:h-14 w-auto object-contain"
                    />
                </button>
            </div>
        );
};
