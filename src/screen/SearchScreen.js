import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResult from "../Hooks/UseResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, erroMessage] = useResult();

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTerChange={setTerm} //another option {(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {erroMessage ? <Text>{erroMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  viewColor: {
    backgroundColor: "white",
    flex: 1,
  },
});
