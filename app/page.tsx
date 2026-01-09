
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Header />
      <main className="flex min-h-screen w-full max-w-full flex-col items-center justify-between  px-8 bg-white dark:bg-black ">
   
      <FAQ />
      </main>
      <Footer />
    </div>
  );
}
