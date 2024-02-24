import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import MatchFilterContainer from '../components/MatchFilterContainer'

const ProfilePlayer = () => {
  return (
    <>
    <View>
      <MatchFilterContainer screen={'Profile'}/>
      <View style={styles.container1}>
        <ImageBackground style={styles.container} source={require('../../assets/landing.png')}> 

       <Image style={styles.img} source={require('../../assets/landing.png')}/>
        </ImageBackground>
        <View style={styles.container1}>
        <Text style={styles.title}>Player Name</Text>
        <Text style={styles.info}>age</Text>
        <Text style={styles.info}>city</Text>
        </View>
      </View>
        <View style={styles.container2}>
        <Text style={styles.title}>About</Text>
          <Text>'icon height'  Player Stats</Text>
          <Text>'width'Player Stats</Text>
          <Text> 'contry' Player Stats</Text>
          <Text>Player Stats</Text>
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
    // flexDirection: "row",
    // alignItems: "center",
    padding: 20,
    // backgroundColor: "#ECEEF2",
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