export default function Color(props) {

    const { hex } = props;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(hex);
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
        }
    };

    return (
        <div
            className="Color"
            onClick={copyToClipboard}
            style={{backgroundColor: hex}}
        />
    );

}