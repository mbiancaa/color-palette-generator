import {useColorContext} from "../context/ColorContext";

export default function Footer() {

    const { selectedColor } = useColorContext();

    return (
        <footer
            style={{paddingTop: '20px', borderTopWidth: '4px', borderTopStyle: 'solid', borderTopColor: selectedColor}}>
            <p>Made by <a
                style={{color: selectedColor}}
                href="https://www.linkedin.com/in/bianca-draghici/">Bianca Draghici</a>
            </p>
        </footer>
    );

}