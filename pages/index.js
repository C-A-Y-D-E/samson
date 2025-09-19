import { Londrina_Solid } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Buy from "@/components/Buy";
import Join from "@/components/Join";
import Copyright from "@/components/Copyright";
import Token from "@/components/Token";

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrina-solid",
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
});

export default function Home() {
  return (
    <main
      className={`${londrinaSolid.variable} font-londrinaSolid overflow-hidden w-full`}
    >
      <Hero />
      <About />
      <Token />
      <Buy />
      <Join />
      <Copyright />
    </main>
  );
}
