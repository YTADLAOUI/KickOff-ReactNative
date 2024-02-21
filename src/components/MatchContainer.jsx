import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const MatchContainer = ({data}) => {
  return (
  
    <View style={styles.container}>
       <Image
         style={styles.imageStyle}
         contentFit="cover"
         source={{ uri: data.participants[0].image_path }}
          />  
          <View style={styles.middel}>
                <View style={styles.info}>
                  <Text style={styles.date}>{data.starting_at}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.Teams}>{data.name}</Text>
              </View>
          </View>
        <Image
         style={styles.imageStyle}
         contentFit="cover"
         source={{ uri: data.participants[1].image_path }} /> 
   </View>
  )
}
const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 4,
    width: 60,
    overflow: "hidden",
    height: 60,
    marginLeft: 12,
  },
  date: {
    lineHeight: 24,
    fontWeight: "500",
    color: '#000000',
    textAlign: "left",
  },
  info: {
    alignItems: "center",
  },
  Teams: {
    fontSize: 10, 
    lineHeight: 21,
    color: '#A9A9A9', 
    textAlign: "left",
  },
  depth4Frame1: {
    height: 21,
    width: 199,
    overflow: "hidden",
  },
  middel: {
    height: 45,
    justifyContent: "center",
    marginLeft: 16,
   
  },
  container: {
    top: 12,
    left: 16,
    width: 373,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // height: 90,
    backgroundColor: "#ECEEF2",
    borderRadius: 10,
    marginBottom: 20,
    // minHeight: 100,
    // backgroundColor: "blue",
    padding: 15,
  },
  
});


export default MatchContainer