import React, { useEffect, useState } from 'react'
import PlayerContainer from '../components/PlayerContainer'
import axios from 'axios'
import { ScrollView } from 'react-native'
import MatchFilterContainer from '../components/MatchFilterContainer'

const PlayersScreen = () => {
  const [players,setPlayers]= useState([])


  useEffect(() => {
    (
      async () => {
        try {
          const response = await axios.get('https://api.sportmonks.com/v3/football/players?include=nationality', {
            headers: {
              'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX'
            }
          });
          console.log(response.data)
          setPlayers(response.data.data);
          
          console.log("players",players)
        } catch (error) {
          console.error("Error fetching Player:", error);
        }
      }
      
      )()
    }, [])
    // console.log("first",players);
    return (
    <>
    <MatchFilterContainer screen={'Players'}/>
    
    <ScrollView>
    {players.map((player)=>(    
      <PlayerContainer player={player}/>
      )
      )
      }
      </ScrollView>
    </>
  )
}

export default PlayersScreen