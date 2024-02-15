import { createContext, useContext } from 'react';

interface ThemeContextType {
    themeMode: string,
    darkTheme: () => void,
    lightTheme: () => void,
    setThemeMode: React.Dispatch<React.SetStateAction<string>>

}

export const ThemeContext = createContext<ThemeContextType>({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
    setThemeMode: () => { }
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
