import Navbar from "./components/Navbar";
import {useEffect} from "react"
import Heroes from "./views/Heroes";
import ForEveryone from "./views/ForEveryone";
import Features from "./views/Features";
import SecondFeatures from "./views/SecondFeatures";
import Preview from "./views/Preview";
import SecondPreview from "./views/SecondPreview";
import FigmaSocial from "./views/FigmaSocial";
import Download from "./views/Download"
import Footer from "./views/Footer";

function App() {
  useEffect(() => {
    document.title = "Wumbo";
  }, [])
  return (
    <>
    <Navbar />
    <main className="bg-gradient-to-b from-sky-100 to-sky-50/30 pb-32 px-5 sm:px-24 min-h-screen pt-28">
      <Heroes />
      <ForEveryone />
      <Features />
      <SecondFeatures />
    </main>
    <Preview />
    <SecondPreview />
    <FigmaSocial />
    <Download />
    <Footer />
    </>
  );
}

export default App;
