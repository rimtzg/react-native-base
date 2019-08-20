import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    Image,
    Left,
    Icon,
} from 'native-base';

import style from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");

const menu_items = [
    {
        name  : "Resumen",
        route : "Home",
        icon  : {
            name : "home",
            type : "MaterialIcons",
        },
    },
    {
        name  : "Negocios",
        route : "Business",
        icon  : {
            name : "business",
            type : "MaterialIcons",
        },
    },
    {
        name  : "Usuarios",
        route : "Users",
        icon  : {
            name : "group",
            type : "MaterialIcons",
        },
    },
    {
        name  : "Proveedores",
        route : "Suppliers",
        icon  : {
            name : "truck",
            type : "MaterialCommunityIcons",
        },
    },
    {
        name  : "Clientes",
        route : "Clients",
        icon  : {
            name : "account-box",
            type : "MaterialCommunityIcons",
        },
    },
    {
        name  : "Productos",
        route : "Products",
        icon  : {
            name : "format-list-bulleted-type",
            type : "MaterialCommunityIcons",
        },
    },
]

export default class ListExample extends Component {
    render() {
        return (
          <Container>
            <Content bounces={false} style={{ flex: 1, backgroundColor: "#37474F" }} >
              <View style={{ backgroundColor : '#263238' }}>
                <Text style={style.h1}>
                  SuperTPV
                </Text>
                <Text style={style.h2}>
                  Negocio
                </Text>
                <Text style={style.text}>
                  Usuario
                </Text>
              </View>
              <List
                dataArray={menu_items}
                renderRow={menu =>
                  <ListItem button noBorder onPress={() => this.props.navigation.navigate(menu.route)} >
                    <Left>
                      <Icon active type={menu.icon.type} name={menu.icon.name} style={{ color: "#6F8592", fontSize: 26, width: 30 }} />
                      <Text style={style.text}>
                        {menu.name}
                      </Text>
                    </Left>
                  </ListItem>
                }
              />
            </Content>
          </Container>
        );
    }
}