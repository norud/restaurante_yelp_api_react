import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, SetResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    SetResult(response.data);
  };
  //to call only one time the api
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.img} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
