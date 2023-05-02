import Image from "next/image";
import { Inter } from "next/font/google";
import { data } from "autoprefixer";
import CharCard from "@/components/CharCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ dataSimpsons }) {
  
  return (
    <main>
      <h1>Hola de desde index</h1>
      <CharCard dataSimpsons={dataSimpsons}/>
    </main>
  );
}

export async function getServerSideProps(context) {
  const apiSimpons = await fetch("https://apisimpsons.fly.dev/api/personajes", {
    method: "GET",
  });
  const dataSimpsons = await apiSimpons.json();

  return {
    props: {
      dataSimpsons,
    },
  };
}