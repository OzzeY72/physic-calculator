import React from 'react';
import { Button, Col, Container, Grid, Input, Item, Row, Text } from "native-base";
import { styles } from "./styles";

const funcName = (value) => `on${isNaN(parseInt(value)) ? value : 'Tap'}`;

export const MainPageView = ({ scope, buttons }) => {
  const { highlight, calculation, result} = scope.state;
  return (
    <Container style={styles.container}>
      <Grid>
        <Row style={styles.head.base}>
          <Col style={styles.head.text.base}>
            <Item regular style={{flex: 1}} disabled>
              <Input style={highlight ? styles.shadow_text : styles.base_text} value={calculation || '0'} disabled />
            </Item>
            <Item regular style={{flex: 1},{backgroundColor:'#3E3331'}} disabled>
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
                        <Button transparent
                          onPress={() => scope[funcName(value)](value)}
                          style={styles.button}
                          block
                          warning={warning}
                          dark={dark}
                          light={light}
                        >
                          <Text style={styles.button.text}>{title}</Text>
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