
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="flex min-h-screen w-full max-w-full flex-col items-center justify-between  px-8 bg-white dark:bg-black ">

      <FAQ />
      </main>

    </div>
  );
}
