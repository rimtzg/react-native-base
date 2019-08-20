import '../../global.js'

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {
  Container,
  Body, 
  Button, 
  Icon, 
  Text,
  Header, 
  Left, 
  Right, 
  Title,
  Content, 
  Form, 
  Item, 
  Input, 
  Label,
  View,
  Card,
  CardItem,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class FloatingLabelExample extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        account : 'rOA4cb8eHlNusVRM8baC',
        username : 'rimtzg',
        password : 'xinuocs2',
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

    setToken = async (token) => {
        try {
            await AsyncStorage.setItem('token', token);
        } catch (error) {
            console.log(error)
        }
    }

    login = async () => {
        console.log('DO LOGIN: ' + server + ':' + port)
        try {
            const response = await fetch(server + ':' + port + '/token', {
                method  : 'get', 
                headers : new Headers({
                    'Content-Type': 'application/json',
                    'Account' : this.state.account,
                    'Username' : this.state.username,
                    'Password' : this.state.password,
                }),
                // body: 'A=1&B=2'
            })

            const data = await response.json()

            if(data.token){
                this.setToken(data.token)

                this.props.navigation.replace('Drawer')
            }

        } catch(error) {
            console.log("Error fetching data", error)
        }
    }

    async componentWillMount() {
        token = await this.getToken()
        if(token != undefined){
            //console.log(token)
            this.props.navigation.replace('Drawer')
            // try {
            //   const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/')
            // } catch(err) {
            //   console.log("Error fetching data-----------", err);
            // }
        }else{
            console.log('NO TOKEN')
        }
    }

    componentDidMount(){
        //self.account_input.focus()
    }

    render() {
        return (
          <Container>
            <Header noLeft>
              <Body>
                <Title>Inicia sesion</Title>
              </Body>
            </Header>
            <Container style={{ backgroundColor : '#F5F5F5', flex: 1, justifyContent: 'center' }} >
              <Card>
                <CardItem>
                  <Body style={{ backgroundColor : '#FFFFFF' }} >
                    <Item floatingLabel>
                      <Label>Cuenta</Label>
                      <Input returnKeyType='next' onChangeText={(account) => this.setState({account})}   getRef={input => { this.account_input = input }}  onSubmitEditing={() => { this.username_input._root.focus() }} blurOnSubmit={false}/>
                    </Item> 
                    <Item floatingLabel>
                      <Label>Usuario</Label>
                      <Input returnKeyType='next' onChangeText={(username) => this.setState({username})} getRef={input => { this.username_input = input }} onSubmitEditing={() => { this.password_input._root.focus() }} blurOnSubmit={false}/>
                    </Item>
                    <Item floatingLabel>
                      <Label>Contraseña</Label>
                      <Input returnKeyType='send' onChangeText={(password) => this.setState({password})} getRef={input => { this.password_input = input }} onSubmitEditing={this.login} secureTextEntry/>
                    </Item>
                    <Button onPress={this.login} block style={{ margin: 15, marginTop: 50 }}>
                      <Text>Iniciar sesion</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </Container>
          </Container>
        );
    }
}