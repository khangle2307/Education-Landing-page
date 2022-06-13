import Courses from "./components/courses";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <section className="hero-section bg-[#1C1102]">
        <Navbar />
        <Hero />
      </section>
      <section className="main-section bg-[#FFFBF5]">
        <Courses />
      </section>
    </div>
  );
}

export default App;
