import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import GaleriaScreen from "../screens/GaleriaScreen";
import FormularioScreen from "../screens/FormularioScreen";

const Tab= createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Galeria' component={ GaleriaScreen} />
            <Tab.Screen name="Formulario" component={ FormularioScreen} />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator >
            <Stack.Screen name="Welcome" component={ WelcomeScreen}/>
            <Stack.Screen name= 'Tab' component={MyTabs} />
        </Stack.Navigator>
    )
}


export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}