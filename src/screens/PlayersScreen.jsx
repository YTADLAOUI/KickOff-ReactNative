import React, { useEffect, useState } from 'react';
import PlayerContainer from '../components/PlayerContainer';
import axios from 'axios';
import { ScrollView, View } from 'react-native';
import MatchFilterContainer from '../components/MatchFilterContainer';
import { Searchbar } from 'react-native-paper';

const PlayersScreen = () => {
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
          console.log('search', search);
          const response = await axios.get(
            `https://api.sportmonks.com/v3/football/players/search/${search}?include=nationality`,
            {
              headers: {
                'authorization': 'GLAB8uX2Q6e574s1cIvoJKuH7i3loCiRwUMrApyw7pp1xzUp47RBmJt35abe',
              },
            }
          );
          console.log('search result', response.data.data);
          setFilteredPlayers(response.data.data);
        } catch (error) {
          console.error('Error fetching Player:', error);
        }
      } else {
        setFilteredPlayers(allPlayers);
      }
    })();
  }, [search, allPlayers]);

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
      <ScrollView style={{ height: '75%' }}>
        {filteredPlayers.map((player) => (
          <PlayerContainer key={player.id} player={player} />
        ))}
      </ScrollView>
    </>
  );
};

export default PlayersScreen;
