import React from 'react';
import { useSelector } from 'react-redux';
import MatchContainer from '../components/MatchContainer'; 
import MatchFilterContainer from '../components/MatchFilterContainer';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const FavScreen = () => {
  const favorites = useSelector((state) => state.favorite.value);

  return (
    <>
      <MatchFilterContainer screen={'Favorites'} />
      {favorites && favorites.length > 0 ? (
        <ScrollView style={{ height: '85%' }}>
          {favorites.map((match) => (
            <MatchContainer key={match.id} data={match} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <Text style={styles.txt}>no data</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    lineHeight: 21,
    color: '#A9A9A9',
    textAlign: 'center',
  },
});

export default FavScreen;
