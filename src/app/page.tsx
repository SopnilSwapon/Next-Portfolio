import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/skills";

export default function Home() {
  return (
    <div className="font-sans bg-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <Navbar />
        <Banner />
        <SkillsSection />
        <h1 className="text-3xl mt-20 font-bold">
          Welcome to My Next Portfolio!
        </h1>
      </div>
    </div>
  );
}
