import Navbar from "./Components/Navbar";
import Perkenalan from "./Components/Perkenalan";
import Portopolio from "./Components/Portopolio";
import Project from "./Components/Project";

function App() {
  return (
    <div className="px-[10%] laptop:py-[5%] bg-slate-200 h-[100%] text-slate-800">
      <Navbar />
      <Perkenalan />
      <Portopolio />
      <Project />
    </div>
  );
}

export default App;
