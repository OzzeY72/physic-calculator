import React from 'react';
import {Button, TextInput, View, StyleSheet,Input,Text,TouchableOpacity,FlatList,SafeAreaView,ScrollView,} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from "./styles.js";

export const MainPageView = ({ scope}) => {
    return (
      <View>
      <KeyboardAwareScrollView >
          <SafeAreaView style={styles.areaView}>
            <ScrollView style={styles.flatList}>
                {scope.state.data.map((item, index) => {return (
                  <View style={styles.flatList.textbox} key={index}>
                    <Text style={styles.flatList.text}> {item.massage}</Text>
                    <Text style={styles.flatList.author}> {item.author}</Text>
                  </View>)})}
            </ScrollView>
           </SafeAreaView>
           <View style={styles.block}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {scope.setState({massage: text})}}
              value={scope.state.massage}
            />
            <TouchableOpacity onPress={() => {if(scope.state.text != '') scope.sendMassage()}} style={styles.button}>
              <Text style={styles.button.text}>-></Text>
           </TouchableOpacity>
           </View>
        </KeyboardAwareScrollView>
      </View>
    )
};