import { createContext, useContext } from "react";


export const ThemeContext = createContext( {  // we can provide defalut value here
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
} )  

export const ThemeProvider = ThemeContext.Provider


//we can also create hooks here
export default function useTheme(){
    return useContext(ThemeContext)
}