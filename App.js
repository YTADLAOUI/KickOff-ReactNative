 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './src/screens/LandingScreen';
import Matche from './src/screens/MatcheScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Matche"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'white' }}
            screenOptions={({ route }) => ({
              tabBarVisible: route.name !== 'Landing',
            })}
          >
        <Tab.Screen
          name="Matche"
          component={Matche}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
            name="Landing"
            component={Landing}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="Landing" color={color} size={26} />
              ),
            }}
          />
      </Tab.Navigator>
    

    </NavigationContainer>
  );
}
