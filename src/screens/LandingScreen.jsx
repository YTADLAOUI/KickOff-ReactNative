import React, { useLayoutEffect } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import ButtonHome from '../components/button';
const Landing = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/landing.png')}
      style={styles.container}
    > 
     <ButtonHome style={styles.button} onPress={()=>navigation.navigate('Matche')}/>
    </ImageBackground>
 
  );
};

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    minHeight: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  button: {
    width: 200,
    height: 200,
  },
});

export default Landing;