import React from 'react';
import Layout from '../components/Layout';

export default function SplashScreenOne({ navigation }) {
  return (
    <Layout 
      title="Make extra cash from your stuff"
      main_image={require('../assets/img/payment-1.png')}
      btnText="Continue"
      dots={require('../assets/img/dot-1.png')}
      navigation={navigation}
      nav="SplashScreenTwo"
    />
  )
}
