import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

export class FormulasScreen extends Component {
  render() {
    return (
      <View>
        <Text>Formulas</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Main')}
          title="MAIN"
        />
        <Text>To do</Text>
      </View>
    )
  }
}
