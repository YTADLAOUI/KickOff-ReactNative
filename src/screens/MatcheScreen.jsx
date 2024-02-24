import React, { useEffect,useState } from 'react'
import MatchFilterContainer from '../components/MatchFilterContainer'
import MatchContainer from '../components/MatchContainer'
import axios from "axios";
import { ScrollView, View } from 'react-native'


const Matche = () => {
  const [matches, setMatches] = useState([]);
 
  useEffect(() => {
    (
      async ()=>{
        try {
          const response = await axios.get('https://api.sportmonks.com/v3/football/fixtures?include=participants', {
            headers: {
              'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX'
            }
          });
          setMatches(response.data.data);
        } catch (error) {
          console.error("Error fetching matches:", error);
        }
      }
    )()
  }, [])
  
  return (
    <View >
      <MatchFilterContainer screen={'Matches'}/>
        <ScrollView >
        {matches.map((match)=>(
          <MatchContainer  data={match} onPress={()=>(
            console.log(match)
          )
          }/>
        ))}
        </ScrollView>
    </View>
  )
}


export default Matche