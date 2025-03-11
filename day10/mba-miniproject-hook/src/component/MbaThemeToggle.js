import { useTheme } from "../context/MbaThemeContext";
export default function MbaThemeToggle(){
    const { theme, toggleTheme } = useTheme();

    return(
        <button onClick={toggleTheme}>
            Next {theme === "light" ? "Dark" : "Light"}
        </button>
    );
}