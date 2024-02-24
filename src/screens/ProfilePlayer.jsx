import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import MatchFilterContainer from '../components/MatchFilterContainer'
import axios from 'axios';

const ProfilePlayer = ({ route,navigation }) => {
  const { playerId } = route.params;
  const[player,setPlayer] = useState({})
    useEffect(() => {
      (
        async ()=>{
            try {
              const response = await axios.get(`https://api.sportmonks.com/v3/football/players/${playerId}?include=nationality`, {
                headers: { 
                  'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX' 
                }})
                console.log(response.data.data)
                setPlayer(response.data.data);
              }catch (error) {
                console.error("Error fetching matches:", error);
                navigation.navigate('Player')
                }
          }
      )()

    }, [playerId]);

  return (
    <>
    <View>
      <MatchFilterContainer screen={'Profile'}/>
      <View style={styles.container1}>
      <ImageBackground style={styles.container} source={{uri:player.nationality.image_path}}>

       <Image style={styles.img} source={{uri:player.image_path}}/>
        </ImageBackground>
        <View style={styles.container1}>
        <Text style={styles.title}>{player.name}</Text>
        <Text style={styles.info}>{player.date_of_birth}</Text>
        <Text style={styles.info}>{player.nationality.official_name}</Text>
        </View>
      </View>
        <View style={styles.container2}>
        <Text style={styles.title}>About</Text>
          <Text>Height       : {player.height} cm</Text>
          <Text>Width         : 80 kg</Text>
          <Text>nationality : {player.nationality.name}</Text>
          <Text style={styles.title}>State</Text>
          <Text>Shot : 130 </Text>
          <Text>Goal : 50</Text>
          <Text>Assist : 20</Text>
        </View>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 115,
  },
  img:{
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginTop: 50,
  },
  container2:{
    padding: 20,
    gap: 20,
    marginHorizontal: "2.5%",
    width: "95%",
  
    padding: 20,
    borderRadius: 10,
  },
  container1:{
  padding: 20,
    gap: 10,
    top: 12,
  },
  title: {
    fontSize: 28,
    letterSpacing: -1,
    lineHeight: 35,
    fontWeight: "700",
    color: "black",
    // textAlign: "left",
  },
  info: {
    fontSize: 16,
    lineHeight: 21,
    color: '#A9A9A9',
    textAlign: "left",
  },
})

export default ProfilePlayer