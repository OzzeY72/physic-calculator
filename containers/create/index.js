import React from 'react';
import {Button, TextInput, View, StyleSheet,Input,Item,Text} from "react-native";
import { styles } from "./styles.js";

export const MainPageView = ({ scope}) => {
    return (
      <View>
        <Button
          onPress={() => scope.props.navigation.navigate('Main')}
          title="Calculator"
        />
        <TextInput
        style={styles.input}
        />
        <TextInput
          style={styles.input}
        />
      </View>
    )
};