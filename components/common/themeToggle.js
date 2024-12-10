
// import ThemeContext from "@/context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
    const handleThemeToggle = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dracula' ? 'light' : 'dracula';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return (
        <label
            htmlFor="toggleTheme"
            className="swap swap-rotate text-base-content md:bg-base-100 md:rounded-full w-5 md:w-8 h-5 md:h-8 md:shadow-sm md:hover:shadow-md transition-all"
        >
            <input
                id="toggleTheme"
                type="checkbox"
                className="theme-controller"
                // checked={theme === "corporate"}
                onChange={handleThemeToggle}
            />

            <MdLightMode className="swap-off" size={20} />
            <MdDarkMode className="swap-on" size={20} />
        </label>
    );
}
