import React from 'react';
import Layout from '../components/Layout';

export default function SplashScreenThree({ navigation }) {
  return (
    <Layout 
      navigation={navigation}
      title="Help the community get better"
      main_image={require('../assets/img/payment-3.png')}
      btnText="Get Started"
      dots={require('../assets/img/dot-3.png')}
      nav="SplashScreenOne"
    />
  )
}
