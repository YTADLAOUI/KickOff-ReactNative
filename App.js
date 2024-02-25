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
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer >
      <Stack.Navigator >
          <Stack.Screen
            name="tapBar"
            component={tapBar}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Details"
            component={MatchDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfilePlayer}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
           
      </NavigationContainer>
    </Provider>
  );
}

const tapBar=()=>{
  return(
    <Tab.Navigator
    initialRouteName="Matche"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: 'white' }}
  >
<Tab.Screen
  name="Matche"
  component={Matche}
  options={{
    tabBarLabel: 'Matches',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="television-classic" color={color} size={26} />
    ),
  }}
/>
<Tab.Screen
    name="Player"
    component={PlayersScreen}
    options={{
      tabBarLabel: 'players',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account-supervisor-outline" color={color} size={26} />
      ),
    }}
  />
<Tab.Screen
    name="Favorite"
    component={FavoritesScreen}
    options={{
      tabBarLabel: 'Favorite',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="heart" color={color} size={26} />
      ),
    }}
  />
</Tab.Navigator>
  )
}