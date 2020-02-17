import React from 'react';
import {Button, TextInput, View, StyleSheet,Input,Text,TouchableOpacity,FlatList,SafeAreaView,ScrollView} from "react-native";
import { styles } from "./styles.js";

export const MainPageView = ({ scope}) => {
    return (
      <View>
        <Button
          onPress={() => scope.props.navigation.navigate('Main')}
          title="Calculator"
        />
        <View style={styles.container}>
          <SafeAreaView style={styles.areaView}>
            <ScrollView style={styles.flatList}>
                {scope.state.data.map((item, index) => {return (
                  <View style={styles.flatList.textbox} key={index}>
                    <Text style={styles.flatList.text}> {item.massage}</Text>
                  </View>)})}
            </ScrollView>
           </SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {scope.setState({massage: text}); scope.getMassages()}}
              value={scope.state.massage}
            />
            <TouchableOpacity onPress={() => {scope.sendMassage()}} style={styles.button}>
              <Text style={styles.button.text}>Отправить</Text>
           </TouchableOpacity>
        </View>
      </View>
    )
};