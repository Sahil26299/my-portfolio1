import React, { createContext, useState } from 'react'

export const ColorSchema = createContext();
export default function ColorThemes(props) {
    const [isDarkMode, setisDarkMode] = useState(true);
    const darkMode = {
        BGColor: '#282c34',
        TXTColor: '#fff',
        TextInputColor: '#252631',
    };
    const lightMode = {
        BGColor: '#f5f5f5',
        TXTColor: '#282c34',
        TextInputColor: '#DBDBDB',
    };
    const newVar = isDarkMode ? darkMode : lightMode;
    let data = {
      testing: 'helloWorld',
      newVar,
      isDarkMode,
      setisDarkMode: data => setisDarkMode(data),
    };
  

    return (
        <ColorSchema.Provider value={data}>{props.children}</ColorSchema.Provider>
    )
}
