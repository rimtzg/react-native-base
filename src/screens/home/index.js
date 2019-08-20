import React, { Component } from 'react';
import {
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text,
  Card,
  CardItem
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class AnatomyExample extends Component {

    componentDidMount(){
        this.props.navigation.openDrawer()
    }

    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Resumen</Title>
              </Body>
              <Right />
            </Header>
            <Content style={{ backgroundColor : '#F5F5F5'}} >
              <Card>
                <CardItem>
                  <Body style={{ backgroundColor : '#FFFFFF' }}>
                    <Text>
                       //Your text here
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
    }
}