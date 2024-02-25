 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Landing from './src/screens/LandingScreen';
import Matche from './src/screens/MatcheScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PlayersScreen from './src/screens/PlayersScreen';
import MatchDetailsScreen from './src/screens/MatchDetailsScreen';
import ProfilePlayer from './src/screens/ProfilePlayer';
import FavoritesScreen from './src/screens/FavScreen';
import { Provider } from 'react-redux'
import { store } from './app/store'

const Tab = createMaterialBottomTabNavigator();
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Matche"
              activeColor="#e91e63"
              barStyle={{ backgroundColor: 'white' }}
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
              name="Player"
              component={PlayersScreen}
              options={{
                tabBarLabel: 'player',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="player" color={color} size={26} />
                ),
              }}
            />
          <Tab.Screen
              name="Details"
              component={MatchDetailsScreen}
              options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="Details" color={color} size={26} />
                ),
              }}
            />
          <Tab.Screen
              name="Profile"
              component={ProfilePlayer}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="profile" color={color} size={26} />
                ),
              }}
            />
          <Tab.Screen
              name="Favorite"
              component={FavoritesScreen}
              options={{
                tabBarLabel: 'Favorite',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="Favorite" color={color} size={26} />
                ),
              }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
