import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PlayerContainer = ({onPress,player}) => {
  return (
    <TouchableOpacity onPress={onPress}  style={styles.container}>
      <View style={styles.imageStyle}>
        <Image
          style={styles.imageStyle}
          contentFit="cover"
          source={{uri:player.image_path}}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.team}>{player.nationality.name}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    top: 12,
    marginHorizontal: "2.5%",
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#ECEEF2",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  imageStyle: {
    borderRadius: 500,
    width: 60,
    overflow: "hidden",
    height: 60,
  },
  info: {
   flexDirection: "column",
   gap: 3,
  },
  name: {
    fontSize: 16, 
    lineHeight: 21,
    color: '#000000', 
    fontWeight:"bold",
    textAlign: "left",
  },
  team: {
    fontSize: 16, 
    lineHeight: 21,
    color: '#A9A9A9', 
    textAlign: "left",
  },
})

export default PlayerContainer