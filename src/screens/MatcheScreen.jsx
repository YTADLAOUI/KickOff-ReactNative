import React, { useEffect,useState } from 'react'
import MatchFilterContainer from '../components/MatchFilterContainer'
import MatchContainer from '../components/MatchContainer'
import axios from "axios";
import { ScrollView, View } from 'react-native'


const Matche = ({navigation}) => {
  const [matches, setMatches] = useState([]);
 
  useEffect(() => {
    (
      async ()=>{
        try {
          const response = await axios.get(`https://api.sportmonks.com/v3/football/fixtures?include=participants`, {
            headers: {
              'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX'
            }
          });
          console.log(response.data.data)
          setMatches(response.data.data);
        } catch (error) {
          console.log("why")
          console.error("Error fetching matches:", error);
        }
      }
    )()
  }, [])
  
  return (
    <View >
      <MatchFilterContainer screen={'Matches'}/>
        <ScrollView style={{height:"85%"}} >
        {matches.map((match)=>(
          <MatchContainer key={match.id}  data={match} onPress={()=>(
            navigation.navigate('Details', {id:match.id})
          )
          }/>
        ))}
        </ScrollView>
    </View>
  )
}


export default Matche