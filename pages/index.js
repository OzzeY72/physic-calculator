import React from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import {MainScreen} from "./main";
import {FormulasScreen} from "./formulas";
import {CreateScreen} from "./create";

const Navigation = createDrawerNavigator({
    Main: {
      screen: MainScreen
    },
    Formulas: {
      screen: FormulasScreen
    },
    CreateFormula:{
      screen: CreateScreen
    }
  },
  {
    initialRouteName: "Main"
  });

export default createAppContainer(Navigation);
