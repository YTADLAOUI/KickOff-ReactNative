import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import ButtonHome from '../components/button';

const Landing = () => {
  return (
 
    <ImageBackground
      source={require('../../assets/landing.png')}
      style={styles.container}
    > 
    
     <ButtonHome/>
    </ImageBackground>
 
  );
};

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    minHeight: '100%',
 
  },
  img: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Landing;