import ColorList from "./ColorList";
import {
    generateBlendedColors,
    generateComplementaryColor,
    generateDarkerColors,
    generateLighterColors
} from "../helpers";
import { useColorContext } from "../context/ColorContext";

export default function GeneratedLists() {

    const { selectedColor } = useColorContext();
    const complementaryColor = generateComplementaryColor(selectedColor);

    return (
        <>
            <ColorList
                title="Lighter"
                colors={generateLighterColors(selectedColor)}
            />
            <ColorList
                title="Darker"
                colors={generateDarkerColors(selectedColor)}
            />
            <ColorList
                title="Blended with Complementary"
                colors={generateBlendedColors(selectedColor)}
            />
            <ColorList
                title="Complementary Light"
                colors={generateLighterColors(complementaryColor)}
            />
            <ColorList
                title="Complementary Dark"
                colors={generateDarkerColors(complementaryColor)}
            />
        </>
    );
}