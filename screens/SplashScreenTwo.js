import React from 'react';
import Layout from '../components/Layout';

export default function SplashScreenTwo({ navigation }) {
  return (
    <Layout
      navigation={navigation} 
      title="Build your dream now, no obstacles!"
      main_image={require('../assets/img/payment-2.png')}
      btnText="Continue"
      dots={require('../assets/img/dot-2.png')}
      nav="SplashScreenThree"
    />
  )
}
