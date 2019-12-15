import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { buttons } from './buttons'
import { MainPageView } from "../../containers/main";

export class MainScreen extends Component {
  static calculateString(string) { return `${eval(string)}`; }
  static getLast(string) { return string.substr(-1, 1) }
  static getWithoutLast(string) { return string.substr(0, string.length - 1) }
  static isOperator (value) { return '+-*/'.includes(value); }
  static removeChar(falsy, condition = null, truth = '') {
    return isEmpty(condition || falsy) ? truth : falsy.substr(0, falsy.length - 1)
  }

  constructor(props) {
    super(props);
    this.state = { calculation: '', current_num: '', result: '', highlight: false, clear_calc: '' };
  }

  onTap(value) { this.setValues(value) }
  onPlus() { this.setOperatorValue('+') }
  onMinus() { this.setOperatorValue('-') }
  onClear() { this.setState({ calculation: '', current_num: '', result: '', clear_calc: '', highlight: false }) }
  onDivide() {
    if (!isEmpty(this.state.calculation)) {
      this.setOperatorValue('/')
    }
  }

  onMultiply() {
    if (!isEmpty(this.state.calculation)) {
      this.setOperatorValue('*')
    }
  }

  onDelete() {
    const { removeChar, isOperator, calculateString, getWithoutLast, getLast } = MainScreen;
    const { calculation, current_num, clear_calc } = this.state;
    const num = removeChar(current_num);
    const calc = removeChar(calculation);
    const clear = removeChar(clear_calc, current_num, clear_calc);
    let result_value = isEmpty(calc) && isOperator(getLast(calc)) ? '' : calc;
    let sign = '';

    if( !isEmpty(result_value) && isOperator(getLast(result_value))) {
      sign = getLast(result_value);
      result_value = getWithoutLast(result_value)
    }

    const result = isEmpty(result_value) ? '' : calculateString(result_value);

    this.setState({ current_num: num, clear_calc: clear, calculation: calc, result: result + sign })
  }

  onResult() {
    const calc = MainScreen.calculateString(this.state.calculation);

    this.setState({ result: calc, clear_calc: calc, current_num: '', highlight: true})
  }

  onComa() {
    if (!this.state.current_num.includes('.')) {
      this.setValues('.')
    }
  }

  setValues(value, round) {
    const operators = '+-*/';
    const { current_num, clear_calc, highlight } = this.state;
    const num = operators.includes(current_num) ? '' : current_num;
    const calc = operators.includes(current_num) ? clear_calc + current_num : clear_calc;
    const calculation = calc + num + value;

    this.setState({
      highlight: false,
      clear_calc: calc,
      current_num: num + value,
      result: MainScreen.calculateString(calculation, round),
      calculation: highlight ? clear_calc : calculation
    })
  }

  setOperatorValue(value) {
    const operators = '+-*/';
    const { clear_calc, current_num, highlight } = this.state;
    const num = operators.includes(current_num) ? '' : current_num;
    const calc = operators.includes(current_num) ? clear_calc : clear_calc + current_num;

    this.setState({
      clear_calc: calc,
      current_num: value,
      highlight: false,
      result: MainScreen.calculateString(calc),
      calculation: highlight ? MainScreen.calculateString(clear_calc) : clear_calc + num + value
    })
  }

  render() {
    this.bindMethods.call(this);
    return <MainPageView scope={this} buttons={buttons}/>
  }

  bindMethods() {
    this.onTap = this.onTap.bind(this);
    this.onPlus = this.onPlus.bind(this);
    this.onComa = this.onComa.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onDivide = this.onDivide.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onResult = this.onResult.bind(this);
    this.setValues = this.setValues.bind(this);
    this.onMultiply = this.onMultiply.bind(this);
    this.setOperatorValue = this.setOperatorValue.bind(this);
  }
}
