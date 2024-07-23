import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // we can pass variable as well as methods
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom hooks
export default function useTheme(){
    return useContext(ThemeContext);
}