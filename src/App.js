import Navbar from "./components/Navbar";
import {useEffect} from "react"
import Heroes from "./components/Heroes";
import About from "./components/About";

function App() {
  useEffect(() => {
    document.title = "Wumbo";
  }, [])
  return (
    <main className="bg-sky-100 px-24 min-h-screen">
      <Navbar />
      <Heroes />
      <About />
    </main>
  );
}

export default App;
