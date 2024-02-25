import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native'; // Import Text from 'react-native' to display error messages
import axios from 'axios';
import MatchFilterContainer from '../components/MatchFilterContainer';

const MatchDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [match, setMatch] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://api.sportmonks.com/v3/football/fixtures/${id}?include=participants;venue;league`, {
          headers: {
            'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX'
          }
        });
        setMatch(response.data.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
        navigation.navigate('Matche');
      }
    })();
  }, [id]);

  return (
    <View>
      <MatchFilterContainer screen={'Details'} />
      {match.venue ? (
        <>
        <View style={{height: "26%"}}>

            <ImageBackground style={Styles.tiran} source={{ uri: match.venue.image_path }}>
            <View style={Styles.images}>
              <View style={Styles.teamA}>
                <Image style={Styles.imgTop} source={{uri:match.participants[0].image_path}} />
                <Text style={{ color: 'white',
                            fontWeight: 'bold',fontSize: 20,}}
                            >{match.participants[0].name}
                            </Text>
              </View>
                <Image style={{width: 50,
    height: 50,}} source={require('../../assets/vs.png')}/>
                <View style={Styles.teamA}>
                <Image style={Styles.imgTop} source={{uri:match.participants[1].image_path}}/>
                <Text style={{ color: 'white',
                            fontWeight: 'bold',fontSize: 20,}}>
                        {match.participants[1].name}
                </Text>
                </View>
            </View>
                <View style={{width:"100%",alignItems:'center'}}>
                  <Text style={{color:'#fff',fontWeight:'bold'}}>{match.starting_at}</Text>
                </View>
                  
            </ImageBackground>
        </View>
            <View style={Styles.detail}>
              <Text style={{fontWeight:'bold',fontSize:20}}>Details</Text>
              <View style={{ height:"100%",width:"100%",gap:30}}>
              <Text style={Styles.info}>League              :                       {match.league.name}</Text>
              <Text style={Styles.info}>venue name     :                       {match.venue.name}</Text>
              <Text  style={Styles.info}>venue address :                       {match.venue.address}</Text>
              <Text  style={Styles.info}>venue capacity:                       {match.venue.capacity}</Text>
              <Text  style={Styles.info}>venue surface :                       {match.venue.surface}</Text>
              <Text  style={Styles.info}>last played at:                       {match.league.last_played_at}</Text>
              </View>
            </View>
        </>
        ):(<Text style={{justifyContent:'center', alignContent:'center'}}>loading...</Text>)
      }
    </View>
  );
};

const Styles = StyleSheet.create({
  tiran: { 
    height: "100%",
    marginHorizontal: "2.5%",
   },
   images: {  
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  
   },
   imgTop: {
    width: 100,
    height: 100,
   },
    teamA: {
      alignItems: 'center',
      gap: 10,
    },
   detail: {
    height: "55%",
    padding: 20,
    top: 15,
    marginHorizontal: "2.5%",
    backgroundColor: "#ECEEF2",
    gap: 20,
   },
   info:
   {fontWeight:'bold',
   fontSize:15,
  }

});
export default MatchDetailsScreen;
