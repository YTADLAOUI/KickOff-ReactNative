import React from 'react'
import { StyleSheet, View } from 'react-native'
import MatchContainer from '../components/MatchContainer'
import MatchFilterContainer from '../components/MatchFilterContainer'
const match = {
  "aggregate_id": null,
 "details": null,
  "group_id": null,
   "has_odds": false,
    "id": 216268, "league_id": 271, "leg": "1/1", "length": 90, "name": "Esbjerg vs OB", "participants": [{"country_id": 320,
     "founded": 1924, 
     "gender": "male", "id": 1371, 
     "image_path": "https://cdn.sportmonks.com/images/soccer/teams/27/1371.png",
      "last_played_at": "2024-02-17 12:00:00", "meta": [Object], "name": "Esbjerg",
       "placeholder": false, "short_code": "ESB",
        "sport_id": 1, "type": "domestic", "venue_id": 618},
         {
          "country_id": 320, 
         "founded": 1889, "gender": "male", "id": 1789, "image_path": "https://cdn.sportmonks.com/images/soccer/teams/29/1789.png", "last_played_at": "2024-02-08 12:00:00", "meta": [Object], "name": "OB", "placeholder": false, "short_code": "ODE", "sport_id": 1, "type": "domestic", "venue_id": 214349}],
     "placeholder": false,
      "result_info": "Esbjerg won after full-time.", 
      "round_id": 23332, "season_id": 1273, "sport_id": 1, 
      "stage_id": 1086, 
      "starting_at": "2006-03-25 16:00:00", 
      "starting_at_timestamp": 1143302400, 
      "state_id": 5, 
      "venue_id": 618
    }

const MatchDetailsScreen = () => {
  return (
   <View>
        <MatchFilterContainer screen={'Detail matche'}/>
        <MatchContainer data={match} onPress={()=>(
          console.log("match")
        )} />
        <View style={styles.containerTeam}>
          <View style={styles.teamA}>
            
          </View>
          <View style={styles.teamB}>

          </View>
        </View>
   </View>
  )
}
const styles=StyleSheet.create({
      containerTeam:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
      },

      teamA:{
        width:"45%",
        height:100,
        backgroundColor:"red"
      },
      teamB:{
        width:"45%",
        height:100,
        backgroundColor:"blue"
      }
})
export default MatchDetailsScreen