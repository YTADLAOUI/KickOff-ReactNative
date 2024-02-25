import React, { useEffect, useState } from 'react';
import PlayerContainer from '../components/PlayerContainer';
import axios from 'axios';
import { ScrollView, Text, View } from 'react-native';
import MatchFilterContainer from '../components/MatchFilterContainer';
import { Searchbar } from 'react-native-paper';

const PlayersScreen = ({navigation}) => {
  const [allPlayers, setAllPlayers] = useState([]); 
  const [filteredPlayers, setFilteredPlayers] = useState([]); 
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://api.sportmonks.com/v3/football/players?include=nationality',
          {
            headers: {
              'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX',
            },
          }
        );
        console.log(response.data);
        setAllPlayers(response.data.data);
        setFilteredPlayers(response.data.data);
        console.log('players', allPlayers);
      } catch (error) {
        console.error('Error fetching Player:', error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (search !== '') {
        try {
          const response = await axios.get(
            `https://api.sportmonks.com/v3/football/players/search/${search}?include=nationality`,
            {
              headers: {
                'authorization': 'GLAB8uX2Q6e574s1cIvoJKuH7i3loCiRwUMrApyw7pp1xzUp47RBmJt35abe',
              },
            }
          );
          setFilteredPlayers(response.data.data);
        } catch (error) {
          console.error('Error fetching Player:', error);
        }
      } else {
        setFilteredPlayers(allPlayers);
      }
    })();
  }, [search]);

  return (
    <>
      <MatchFilterContainer screen={'Players'} />
      <View style={{ height: 'auto', padding: 10 }}>
        <Searchbar
          placeholder="Type Here..."
          onChangeText={(value) => setSearch(value)}
          value={search}
        />
      </View>
      {
        filteredPlayers && filteredPlayers.length > 0 ?(
      <ScrollView style={{ height: '75%' }}>
        {filteredPlayers.map((player) => (
          <PlayerContainer  onPress={() => navigation.navigate('Profile', { playerId: player.id })} key={player.id}  player={player}/>
        ))}
      </ScrollView>):(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, lineHeight: 21, color: '#A9A9A9', textAlign: 'center' }}>
            no data
          </Text>
        </View>
        )
      }
    </>
  );
};

export default PlayersScreen;
