import Image from "next/image";
import Link from "next/link";

const CharCard = ({ dataSimpsons }) => {
  const firstName = (arr) => arr.split(' ')[0];
  return (
    <div>
      {dataSimpsons && dataSimpsons.docs.map((element) => {
        return (
        <Link href={`/characters/${firstName(element.Nombre)}`} key={element._id}>
          <Image src={element.Imagen} width={250} height={250} alt={element.Nombre}/>
          <h2>{element.Nombre}</h2>
          <p>{element.Historia}</p>
        </Link>
        );
      })}
    </div>
  );
};

export default CharCard;