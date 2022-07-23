import Navbar from "./Components/Navbar";
import Perkenalan from "./Components/Perkenalan";

function App() {
  return (
    <div className="px-[10%] laptop:py-[5%] bg-slate-200 h-screen text-slate-800">
      <Navbar />
      <Perkenalan />
    </div>
  );
}

export default App;
