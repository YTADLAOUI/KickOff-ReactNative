import React from 'react'
import { Text, TouchableOpacity,View } from 'react-native'

const ButtonNavigation = ({name,onPress}) => {
  return (
    <>
     <View style={{ marginVertical: 8, padding: 5 }}>
            <TouchableOpacity
              style={{
                width: '50%',
                backgroundColor: 'black',
                borderRadius: 12,
                margin: 2,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 80,
                borderColor: 'black'
              }}
              onPress={onPress}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>{name}</Text>
            </TouchableOpacity>
          </View>
    </>
  )
}

export default ButtonNavigation