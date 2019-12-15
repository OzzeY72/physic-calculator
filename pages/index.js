import React from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import {MainScreen} from "./main";
import {FormulasScreen} from "./formulas";

const Navigation = createDrawerNavigator({
    Main: {
      screen: MainScreen
    },
    Formulas: {
      screen: FormulasScreen
    }
  },
  {
    initialRouteName: "Main"
  });

export default createAppContainer(Navigation);
