import React from 'react';
import {Button, Text, View, FlatList, Switch, Container,StyleSheet} from "react-native";
import { styles } from "./styles.js";

export const MainPageView = ({ scope}) => {
  function sortingData(sub){
    data = scope.state.data
    for(var i = 0;i < data.length;i++){
      var ins = data[i];
      data.splice(i,1);
      ins.subject == sub ? data.unshift(ins) : data.push(ins)
    }
    return data
  }
    return (
      <View>
        <Button
          onPress={() => scope.props.navigation.navigate('Main')}
          title="Calculator"
        />
        <FlatList
          data={sortingData("chemistry")}
          keyExtractor={(item, index) => item.formula}
          renderItem={({ item }) => (
            <Text style={item.subject == `physic` ? styles.physic : styles.chemistry}>{item.formula}</Text>
          )}
        />
      </View>
    )
};