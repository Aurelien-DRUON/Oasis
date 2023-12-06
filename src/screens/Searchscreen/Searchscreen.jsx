import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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

const countries = [
  "France",
  "Angleterre",
  "Espagne",
  "Allemagne",
  "Danemark",
  "Italie",
  "Pologne",
  "Suisse",
];

const cities = [
  "Paris",
  "Londres",
  "Madrid",
  "Berlin",
  "Amsterdam",
  "Rome",
  "Varsovie",
  "Berne",
];

function Searchscreen() {
  const [selectedCountry, setSelectedCountry] = useState("Pays");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleChangeCountry = useCallback((e) => {
    setSelectedCountry(e.target.value);
    const filtered = countries.filter((country) => country === e.target.value);
    setFilteredCountries(filtered);
  }, []);

  return (
    <Container>
      <Header />
      <BodyUI>
        <SearchUI>
          <Searchbars>
            <Date />
            <Dropdown
              title="Pays"
              value={selectedCountry}
              onChange={handleChangeCountry}
            >
              {countries}
            </Dropdown>
            <Dropdown title="Ville">{cities}</Dropdown>
          </Searchbars>
        </SearchUI>
        {selectedCountry === "Pays"
          ? countries.map((country, index) => (
              <Searchrow
                key={index}
                country={country}
                date="Jamais"
                price="1€"
              />
            ))
          : filteredCountries.map((country, index) => (
              <Searchrow
                key={index}
                country={country}
                date="Jamais"
                price="1€"
              />
            ))}
      </BodyUI>
      <Footer />
    </Container>
  );
}

export default Searchscreen;
