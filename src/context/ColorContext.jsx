import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {

    const [selectedColor, setSelectedColor] = useState('#e448a4');

    const updateSelectedColor = (newColor) => {
        setSelectedColor(newColor);
    };

    return (
        <ColorContext.Provider value={{ selectedColor, updateSelectedColor }}>
            {children}
        </ColorContext.Provider>
    );

};

export const useColorContext = () => {
    return useContext(ColorContext);
};
