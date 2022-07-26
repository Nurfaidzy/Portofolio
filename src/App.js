import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Perkenalan from "./Components/Perkenalan";
import Portopolio from "./Components/Portopolio";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <div className="px-[10%] laptop:pt-[5%] pb-10 bg-slate-200 h-[100%] text-slate-800">
        <Navbar />
        <Perkenalan />
        <Portopolio />
        <Project />
        <Contact />
      </div>

      <div className="bg-slate-500 ">
        <Footer />
      </div>
    </>
  );
}

export default App;
