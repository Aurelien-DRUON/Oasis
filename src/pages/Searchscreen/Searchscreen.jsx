import styled from "styled-components";
import Date from "../../components/Inputs/Date/Date";
import Dropdown from "../../components/Inputs/Dropdown";
import Searchrow from "../../components/Rows/SearchRow/Searchrow";
import { useCallback, useState } from "react";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: #fff;
  gap: 8px;
`;

const BodyUI = styled.div`
  display: flex;
  padding: 32px 16px 0px 16px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const SearchUI = styled.div`
  display: flex;
  padding-top: 128px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: url("https://source.unsplash.com/random/1888x231");
`;

const Searchbars = styled.div`
  display: flex;
  padding: 32px 200px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px 8px 0px 0px;
  background: #f8f8f8;
`;

const destinations = [
  { pays: "France", name: "Paris", price: "100€", date: "15 août 2022" },
  {
    pays: "Angleterre",
    name: "Londres",
    price: "150€",
    date: "10 septembre 2022",
  },
  { pays: "Espagne", name: "Madrid", price: "120€", date: "20 juillet 2022" },
  { pays: "Allemagne", name: "Berlin", price: "130€", date: "30 août 2022" },
  {
    pays: "Danemark",
    name: "Amsterdam",
    price: "140€",
    date: "25 septembre 2022",
  },
  { pays: "Italie", name: "Rome", price: "160€", date: "5 juillet 2022" },
  { pays: "Pologne", name: "Varsovie", price: "110€", date: "5 octobre 2022" },
  { pays: "Suisse", name: "Berne", price: "180€", date: "20 octobre 2022" },
];

function Searchscreen() {
  const [selectedCountry, setSelectedCountry] = useState("Pays");
  const [filteredCountries, setFilteredCountries] = useState(destinations);
  const [selectedCity, setSelectedCity] = useState("Ville");

  const handleChangeCountry = useCallback((e) => {
    setSelectedCountry(e.target.value);
    const filtered = destinations.filter(
      (city) => city.pays === e.target.value
    );
    setFilteredCountries(filtered);
  }, []);

  const handleChangeCity = useCallback((e) => {
    setSelectedCity(e.target.value);
    const filtered = destinations.filter(
      (city) => city.name === e.target.value
    );
    setFilteredCountries(filtered);
  }, []);

  return (
    <Container>
      <BodyUI>
        <SearchUI>
          <Searchbars>
            <Date />
            <Dropdown
              title="Pays"
              value={selectedCountry}
              onChange={handleChangeCountry}
            >
              {destinations.map((city) => city.pays)}
            </Dropdown>
            <Dropdown
              title="Ville"
              value={selectedCity}
              onChange={handleChangeCity}
            >
              {destinations.map((city) => city.name)}
            </Dropdown>
          </Searchbars>
        </SearchUI>
        {selectedCountry === "Pays" && selectedCity === "Ville"
          ? destinations.map((city, index) => (
              <Searchrow
                key={index}
                country={city.pays}
                city={city.name}
                date={city.date}
                price={city.price}
              />
            ))
          : filteredCountries.map((city, index) => (
              <Searchrow
                key={index}
                country={city.pays}
                city={city.name}
                date={city.date}
                price={city.price}
              />
            ))}
      </BodyUI>
    </Container>
  );
}

export default Searchscreen;
