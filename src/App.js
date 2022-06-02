import Navbar from "./components/Navbar";
import {useEffect} from "react"
import Heroes from "./components/Heroes";
import About from "./components/About";
import SecondAbout from "./components/SecondAbout";

function App() {
  useEffect(() => {
    document.title = "Wumbo";
  }, [])
  return (
    <>
    <Navbar />
    <main className="bg-gradient-to-b from-sky-100 to-sky-50/30 pb-32 px-24 min-h-screen pt-28">
      <Heroes />
      <About />
      <SecondAbout />
    </main>
    </>
  );
}

export default App;
