import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FavoriteButton from './FavoriteButton';
// import Button  from './button';
const MatchContainer = ({data,onPress}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container1}>
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
         {/* <Button title="Details" onPress={onPress} /> */}
         <FavoriteButton match={data} />
   </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 4,
    width: 50,
    overflow: "hidden",
    height: 50,
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
    fontSize: 18, 
    lineHeight: 21,
    color: '#A9A9A9', 
    textAlign: "left",
  },
  middel: {
    height: 45,
    justifyContent: "center",
    marginLeft: 16,
   
  },
  container: {
    top: 20,
    marginHorizontal: "2.5%",
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ECEEF2",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  container1: {
    marginHorizontal: "2.5%",
    width: "95%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ECEEF2",
    padding: 10,
  },
  
});


export default MatchContainer