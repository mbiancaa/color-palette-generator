import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useColorContext } from "../context/ColorContext";

export default function ColorSelector() {
    const { selectedColor, updateSelectedColor } = useColorContext();
    const [color, setColor] = useColor(selectedColor);

    const handleColorChange = (newColor) => {
        setColor(newColor);
        updateSelectedColor(newColor.hex);
    };

    const generateRandomColor = () => {
        const hexColor =  '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        updateSelectedColor(hexColor);
        return hexColor;
    }

    return (
        <>
            <h1>Color Palette Generator</h1>
            <p className="AppIntro">This React.js-based app helps you {' '}
                <b>create vibrant color combos</b> easily. Choose a color with color picker or {' '}
                <span
                    style={{borderBottomWidth: '3px', borderBottomStyle: 'solid', borderBottomColor: selectedColor}}
                    className="underlined"
                    onClick={generateRandomColor}>generate one clicking here</span>. Enjoy!
            </p>
            <div className="ColorPickerContainer">
                <ColorPicker
                    width={400}
                    color={color}
                    onChange={handleColorChange}
                    dark
                />
            </div>
        </>
    );
}