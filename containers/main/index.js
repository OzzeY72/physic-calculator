import React from 'react';
import { Button, Col, Container, Grid, Input, Item, Row, Text } from "native-base";
import { styles } from "./styles";

const funcName = (value) => `on${isNaN(parseInt(value)) ? value : 'Tap'}`;

export const MainPageView = ({ scope, buttons }) => {
  const { highlight, calculation, result} = scope.state;
  return (
    <Container>
      <Grid>
        <Row style={styles.history.base}>
          <Col style={styles.history.content.base}>
            <Button onPress={() => scope.props.navigation.navigate('Formulas')} block>
              <Text>History</Text>
            </Button>
          </Col>
        </Row>
        <Row style={styles.head.base}>
          <Col style={styles.head.text.base}>
            <Item regular style={{flex: 1}} disabled>
              <Input style={highlight ? styles.shadow_text : styles.base_text} value={calculation || '0'} disabled />
            </Item>
            <Item regular style={{flex: 1}} disabled>
              <Input style={[styles.base_text, !highlight ? styles.shadow_text : styles.base_text]} value={result} disabled />
            </Item>
          </Col>
        </Row>
        <Row style={styles.content.base}>
          <Col>
            {
              buttons.map((row, i) => (
                <Row key={i}>
                  {
                    row.map(({warning, dark, light, value, title}, index) => (
                      <Col key={index}>
                        <Button
                          onPress={() => scope[funcName(value)](value)}
                          style={styles.button}
                          block
                          warning={warning}
                          dark={dark}
                          light={light}
                        >
                          <Text>{title}</Text>
                        </Button>
                      </Col>
                    ))
                  }
                </Row>
              ))
            }
          </Col>
        </Row>
      </Grid>
    </Container>
  )
};