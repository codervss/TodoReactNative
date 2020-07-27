import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import moment from 'moment'
import {width} from '../../globals'
import colors from '../../globals/colors'
import TaskView from '../common/TaskView'
import {useSelector} from 'react-redux'

const SingleTask = ({item , index, navigation}) =>{
    const isCurrentDay = item.date === moment().format('DD-MM-YYYY')
    const backgroundColor = isCurrentDay ? colors.white : colors.royalblue

    const {todo} = useSelector((state) => state);
    const {data} = todo
    
    return(
        <View style={[styles.card, { backgroundColor, marginRight : data.length - 1 === index ? 20 : 0 }]}>
            <TouchableOpacity onPress={()=>navigation.navigate('Todo',{ currentIndex : index})}>
            <TaskView item={item} index={index} isCurrentDay={isCurrentDay} />
            </TouchableOpacity>
        </View>
    )
}

export default SingleTask

const styles = StyleSheet.create({
    card : {
        width : width * 0.7, 
        shadowColor: colors.red,
        marginLeft : 20,
        // borderWidth: 5,
        borderRadius: 15,
        borderColor: colors.lightgray,
        // borderBottomWidth: 15,
        // borderRightWidth : 15,
        // shadowOffset: { width: 10, height: 10 },
        // shadowOpacity: 0.9,
        // shadowRadius: 5,
        elevation: 50,

}
})