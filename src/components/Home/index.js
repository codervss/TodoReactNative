import React from 'react'
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import greetingText from '../helpers/greeting';
import colors from '../../globals/colors';
import ClockComp from './Clock';
import IconComp from '../common/IconComonent';
import TaskList from './TaskList';
import SeperatorView from '../common/SeperatorView';

const Home = ({navigation}) =>{
    
    return(
            <SafeAreaView style={styles.container} >
                <ScrollView>

                <View style={{paddingHorizontal : 20}}>
                    <Text style={styles.greetingStyle}>{greetingText()}</Text>
                    <Text style={styles.nameStyle}>Vishvajeet Shekhawat</Text>
                </View>

                <ClockComp />

                <View style={{paddingHorizontal : 20}}>
                    <SeperatorView textData='Tasks Lists' boldTitle={true} iconName='plussquare' iconColor={colors.red} />
                </View>

                <TaskList navigation={navigation} />

                </ScrollView>
                
                </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container : {flex : 1, backgroundColor : colors.primary, paddingVertical : 10},
    greetingStyle : {fontSize : 30, color : colors.dimgray},
    nameStyle : {fontSize : 18, color : colors.royalblue, fontWeight : '700'},
})