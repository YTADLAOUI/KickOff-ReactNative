import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const MatchFilterContainer = ({screen}) => {
  return (
    <View style={styles.container}>
        <View style={styles.matchesContainer}>
          <Text style={styles.matchesText}>{screen}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green", 
   justifyContent: "center",
    alignItems: "center",
   height: 115,
  },
  
  matchesContainer: {
    width: 310,
    paddingLeft: 30, 
  },
  matchesText: {
    fontSize: 28, 
    letterSpacing: -1,
    lineHeight: 35,
    fontWeight: "700",
    color: "black", 
    textAlign: "left",
  },
});

export default MatchFilterContainer;