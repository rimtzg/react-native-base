import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
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
  CardItem,
  List,
  ListItem,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class AnatomyExample extends Component {

    state = {
        business_list : []
    }

    getToken = async () => {
        let token = undefined
        try {
            token = await AsyncStorage.getItem('token')
        } catch (error) {
            // Error retrieving data
            console.log(error.message)
        }
        return token
    }

    async componentWillMount() {
        token = await this.getToken()
        if(token != undefined){
            try {
                const response = await fetch(server + ':' + port + '/business/', {
                    method  : 'get', 
                    headers : new Headers({
                        'Content-Type': 'application/json',
                        'Token' : token,
                    }),
                    // body: 'A=1&B=2'
                })

                if(response.status == 401){
                    await AsyncStorage.removeItem('token')
                    this.props.navigation.replace('Login')
                }

                const data = await response.json()

                this.setState( (state) => ({ business_list : data }) )

            } catch(error) {
                console.log("Error fetching data", error)
            }
        }else{
            this.props.navigation.replace('Login')
        }
    }

    async componentDidMount(){
        
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
                <Title>Negocios</Title>
              </Body>
              <Right />
            </Header>
            <Content style={{ backgroundColor : '#F5F5F5'}} >
              <Card>
                <CardItem>
                  <Body style={{ backgroundColor : '#FFFFFF' }}>
                    <List style={{ width : '100%' }}>
                      {this.state.business_list.map((business, i) => (
                        <ListItem key={i}>
                          <Text>{business.name}</Text>
                        </ListItem>
                      ))}
                    </List>
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