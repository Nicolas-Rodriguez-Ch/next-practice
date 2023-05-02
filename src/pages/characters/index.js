import react from 'react';

const Characters = () => {
  return (
    <>
      <h1>Hola mundo desde index</h1>
    </>
  )
}

export default Characters;

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