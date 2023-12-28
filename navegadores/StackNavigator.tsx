import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import GaleriaScreen from "../screens/GaleriaScreen";
import FormularioScreen from "../screens/FormularioScreen";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator >
            <Stack.Screen name="Welcome" component={ WelcomeScreen}/>
            <Stack.Screen name='Galeria' component={ GaleriaScreen} />
            <Stack.Screen name="Formulario" component={ FormularioScreen}/>
        </Stack.Navigator>
    )
}

export default function StackNavigation(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}