import react from "react";

const Characters = ({ dataSimpsons }) => {
  console.log("🚀 ~ file: [characters].js:4 ~ Characters ~ dataSimpsons:", dataSimpsons)
  console.log();
  return (
    <>
      <h1>Hola mundo desde pagina dinamica</h1>
    </>
  );
};

export default Characters;

export async function getServerSideProps({ params }) {
  const apiSimpons = await fetch(
    `https://apisimpsons.fly.dev/api/personajes/find/${params}`,
    {
      method: "GET",
    }
  );
  const dataSimpsons = await apiSimpons.json();

  return {
    props: {
      dataSimpsons,
    },
  };
}
