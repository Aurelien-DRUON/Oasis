import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
  padding: 20px;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
`;

function Detailscreen() {
  const { id } = useParams();

  const destinations = {
    paris: {
      name: "Paris",
      description: "La ville de l'amour",
      price: "100€",
      date: "15 août 2022",
    },
    londres: {
      name: "Londres",
      description: "La capitale britannique",
      price: "150€",
      date: "10 septembre 2022",
    },
    madrid: {
      name: "Madrid",
      description: "La ville animée d'Espagne",
      price: "120€",
      date: "20 juillet 2022",
    },
    berlin: {
      name: "Berlin",
      description: "La ville historique d'Allemagne",
      price: "130€",
      date: "30 août 2022",
    },
    amsterdam: {
      name: "Amsterdam",
      description: "La ville des canaux",
      price: "140€",
      date: "25 septembre 2022",
    },
    rome: {
      name: "Rome",
      description: "La ville éternelle",
      price: "160€",
      date: "5 juillet 2022",
    },
    varsovie: {
      name: "Varsovie",
      description: "La capitale polonaise",
      price: "110€",
      date: "5 octobre 2022",
    },
    berne: {
      name: "Berne",
      description: "La capitale suisse",
      price: "180€",
      date: "20 octobre 2022",
    },
  };

  const destination = destinations[id];

  return (
    <Container>
      <Title>{destination.name}</Title>
      <Text>Description: {destination.description}</Text>
      <Text>Prix: {destination.price}</Text>
      <Text>Date: {destination.date}</Text>
    </Container>
  );
}

export default Detailscreen;
