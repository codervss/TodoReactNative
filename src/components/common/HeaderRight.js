import React from 'react'   
import {View, Image, StyleSheet, SafeAreaView} from 'react-native'

const HeaderRightComp = () => <Image source={require('../../assets/Images/user.jpeg')} style={styles.imageStyle} resizeMode='cover' />

export default HeaderRightComp

const styles = StyleSheet.create({
    imageStyle : {height : 35, width : 35, borderRadius : 100,}
})