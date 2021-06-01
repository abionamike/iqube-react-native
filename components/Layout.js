import React from 'react'
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function Layout({ navigation, main_image, title, btnText, dots, nav }) {
  return (
    <>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        style={styles.image}
      >
        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
        <Text style={styles.logo_text}>make extra cash now</Text>
        <Image style={styles.main_image} source={main_image} />
        <View style={{ width: '60%', height: 30, marginBottom: 25 }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{ width: '85%', height: 85, marginTop: 10, marginBottom: 4 }}>
          <Text style={styles.subTitle}>Do you have things other people need? Great! Start making some cool cash by lending to other people.</Text>
        </View>
        <Image style={{ resizeMode: 'contain', marginBottom: 20 }} source={dots} />
          <LinearGradient
            colors={['#6fa4ff', '#3580ff']}
            style={styles.button}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(`${nav}`)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{btnText}</Text>
            </TouchableOpacity>
          </LinearGradient>
      </ImageBackground>
      <StatusBar translucent backgroundColor="transparent" />
    </>
  )
}

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },

  logo: {
    marginTop: 20,
    height: 65,
    width: 135,
  },

  logo_text: {
    color: '#828282', 
    opacity: 0.6, 
    fontSize: 12, 
    lineHeight: 15, 
    letterSpacing: 1, 
    marginTop: 8
  },

  main_image: {
    height: 310, 
    width, 
    marginTop: 8, 
    marginBottom: 5,
    resizeMode: 'cover'
  },

  title: {
    fontSize: 22, 
    lineHeight: 26, 
    fontWeight: "600", 
    textAlign: 'center', 
    color: '#001029', 
    letterSpacing: 0.3,
  },

  subTitle: {
    fontSize: 17, 
    lineHeight: 22, 
    color: '#828282', 
    opacity: 0.6, 
    textAlign: 'center'
  },

  button: {
    width: '85%',
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
})
