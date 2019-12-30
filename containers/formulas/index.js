import React from 'react';
import {Button, Text, View, FlatList} from "react-native";
import { styles } from "./styles.js";

export const MainPageView = ({ scope}) => {
  const { data} = scope.state;
    return (
      <View>
        <Button
          onPress={() => scope.props.navigation.navigate('Main')}
          title="Calculator"
        />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.formula}</Text>
          )}
        />
      </View>
    )
};