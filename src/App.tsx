import { Suspense } from "react";
import Technologies from "./components/Technologies";
import type { Tptechnology } from "./types/technology";
import Nav from "./components/Nav";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

const allTech = async (): Promise<Tptechnology[]> => {
  const response = await fetch("/data.json");
  const techData = await response.json();
  return techData;
};

function App() {
  const techCall = allTech();

  return (
    <>
      <Nav />
      <Hero />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xs"></span>}
      >
        <Technologies techInfo={techCall} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
