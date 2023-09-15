import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/about";
import Works from "./components/Works/works"

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Intro/>
            <About/>
            <Works/>
        </div>
    );
}

export default App;