import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import GaleriaScreen from "../screens/GaleriaScreen";
import FormularioScreen from "../screens/FormularioScreen";

const Tab= createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={ WelcomeScreen } />
            <Tab.Screen name='Galeria' component={ GaleriaScreen} />
            <Tab.Screen name="Formulario" component={ FormularioScreen} />
        </Tab.Navigator>
    )
}

export default function BottomNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}