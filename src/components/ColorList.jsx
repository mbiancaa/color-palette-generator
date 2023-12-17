import Color from "./Color";

export default function ColorList(props) {

    const { colors, title } = props;

    return (
        <div className="ColorListContainer">
            <h2>{title}</h2>

            <div className="ColorList">
                {colors.map((color, i) => (
                    <Color key={i} hex={color} />
                ))}
            </div>
        </div>
    );

}