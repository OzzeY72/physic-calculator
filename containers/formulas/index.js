import React from 'react';
import {Button, Text, View, FlatList, Switch, Container,StyleSheet,ScrollView,RefreshControl,SafeAreaView} from "react-native";
import Constants from 'expo-constants';
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
  function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    scope.makeRemoteRequest();
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

    return (
      <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
      </ScrollView>
    </SafeAreaView>
        
    )
};