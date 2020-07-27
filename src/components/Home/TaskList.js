import React, {useState, useEffect} from 'react'
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import SingleTask from './SingleTask'
import {useSelector} from 'react-redux'

const TaskList = ({navigation}) =>{

    const {todo} = useSelector((state) => state);
    const {data} = todo

    return(
        <View style={styles.container}>
        <FlatList
            data = {data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=><SingleTask navigation={navigation} item={item} index={index} />}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            // ItemSeparatorComponent={()=><View style={{width : 25}} />}
            keyExtractor={(item, index)=>"Task_" + index.toString()}
            removeClippedSubviews={Platform.OS == "android" ? true : false}
        />
        </View>
    )
}

export default TaskList

const styles= StyleSheet.create({
    container : {paddingTop : 20}
})