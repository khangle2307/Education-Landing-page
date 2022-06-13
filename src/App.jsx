import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div className="bg-[#1C1102]">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-[#FFFBF5]">
        <h1>Hello word</h1>
      </div>
    </div>
  );
}

export default App;
