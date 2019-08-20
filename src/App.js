import React from "react";
import { Root, NativeModules, processColor } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

//SCREENS
import Login from "./screens/login/";
import SideBar from "./screens/sidebar";
import Home from "./screens/home/";
import Business from "./screens/business/";

//const { StatusBarManager } = NativeModules;

const Drawer = createDrawerNavigator(
    {
        Home : { screen : Home },
        Business : { screen : Business },
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
)

const AppNavigator = createStackNavigator(
    {
        Login  : { screen : Login  },
        Drawer : { screen : Drawer },
    },
    {
        initialRouteName : "Login",
        headerMode       : "none",
    }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    /*
    componentDidMount() {
        StatusBarManager.setColor(processColor('#ff0000'), false)
    }
    */

    render() {
        return (
          <Root>
            <AppContainer />
          </Root>
        )
    }
}