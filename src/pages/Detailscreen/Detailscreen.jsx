import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 200px;
`;

function Detailscreen() {
  const { id } = useParams();

  const destinations = {
    paris: {
      name: "Paris",
      description:
        "Paris, la ville de l'amour, est réputée pour sa beauté et son romantisme. Découvrez la majestueuse Tour Eiffel, flânez le long des Champs-Élysées bordés de boutiques de luxe, et délectez-vous de délicieux croissants dans les charmantes cafés parisiens.",
      price: "100€",
      date: "15 août 2022",
    },
    londres: {
      name: "Londres",
      description:
        "Londres, la capitale britannique, est une métropole dynamique et cosmopolite. Visitez le Buckingham Palace, la résidence officielle de la monarchie britannique, explorez les trésors du British Museum, et offrez-vous une expérience authentique avec une tasse de thé à l'anglaise accompagnée de scones frais.",
      price: "150€",
      date: "10 septembre 2022",
    },
    madrid: {
      name: "Madrid",
      description:
        "Madrid, la vibrante capitale espagnole, est renommée pour sa vie nocturne animée et sa riche scène culturelle. Explorez le majestueux Palais Royal, détendez-vous dans le magnifique parc du Retiro, et régalez-vous de délicieuses tapas accompagnées de vin espagnol dans les bars animés de la ville. ",
      price: "120€",
      date: "20 juillet 2022",
    },
    berlin: {
      name: "Berlin",
      description:
        "Berlin, ville emblématique de l'histoire allemande, offre un fascinant mélange d'histoire et de modernité. Visitez le célèbre mur de Berlin chargé d'histoire, admirez la majestueuse Porte de Brandebourg, et plongez-vous dans la scène artistique dynamique de la ville.",
      price: "130€",
      date: "30 août 2022",
    },
    amsterdam: {
      name: "Amsterdam",
      description:
        "Amsterdam, surnommée la « Venise du Nord » pour ses magnifiques canaux, est célèbre pour son architecture unique et son ambiance décontractée. Explorez les nombreux musées de renommée mondiale, partez en balade à vélo le long des canaux pittoresques, et découvrez l'atmosphère unique des célèbres coffee shops.",
      price: "140€",
      date: "25 septembre 2022",
    },
    rome: {
      name: "Rome",
      description:
        "Rome, la ville éternelle, est un véritable musée à ciel ouvert avec ses vestiges historiques impressionnants. Admirez l'incroyable architecture du Colisée, jetez une pièce dans la fontaine de Trevi pour vous assurer un retour à Rome, et dégustez une délicieuse pizza italienne dans une trattoria traditionnelle.",
      price: "160€",
      date: "5 juillet 2022",
    },
    varsovie: {
      name: "Varsovie",
      description:
        "Varsovie, la capitale dynamique de la Pologne, offre un mélange captivant d'histoire et de modernité. Explorez la charmante vieille ville reconstruite, admirez le palais de la Culture et de la Science, et délectez-vous des saveurs riches et variées de la cuisine polonaise.",
      price: "110€",
      date: "5 octobre 2022",
    },
    berne: {
      name: "Berne",
      description:
        "Berne, la pittoresque capitale suisse, est entourée de paysages à couper le souffle. Explorez les rues pavées de la vieille ville classée au patrimoine mondial de l'UNESCO, visitez le majestueux Palais fédéral, et régalez-vous de délicieux chocolats suisses dans les chocolateries traditionnelles.",
      price: "180€",
      date: "20 octobre 2022",
    },
  };

  const destination = destinations[id];

  return (
    <Container>
      <h1>{destination.name}</h1>
      <h3>{destination.price}</h3>
      <h3>{destination.date}</h3>
      <p>{destination.description}</p>
    </Container>
  );
}

export default Detailscreen;
