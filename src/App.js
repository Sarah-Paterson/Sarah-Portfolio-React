import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/about";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Intro/>
            <About/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;