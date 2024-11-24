// components/ThemeToggle.js
// import { useContext } from "react";
// import ThemeContext from "@/context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
    // const { theme, toggleTheme } = useContext(ThemeContext);
    const handleThemeToggle = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'business' ? 'corporate' : 'business';
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

            <MdLightMode className="swap-off" size={30} />

            <MdDarkMode className="swap-on" size={30} />
        </label>
    );
}
