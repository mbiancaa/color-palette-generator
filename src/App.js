import './App.css';
import ColorSelector from './components/ColorSelector';
import GeneratedLists from "./components/GeneratedLists";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <ColorSelector />
            <GeneratedLists />
            <Footer />
        </div>
    );
}

export default App;
