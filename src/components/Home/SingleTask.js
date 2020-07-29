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
        <View>

        <View style={[styles.card, { backgroundColor : colors.lightgray, position : 'absolute' }]}>
            <TouchableOpacity onPress={()=>navigation.navigate('Todo',{ currentIndex : index})}>
                <TaskView item={item} index={index} isCurrentDay={isCurrentDay} />
            </TouchableOpacity>
        </View>

        <View style={[styles.card, { backgroundColor, marginRight : data.length - 1 === index ? 30 : 0, elevation : 1, bottom : 10, right : 10 }]}>
            <TouchableOpacity onPress={()=>navigation.navigate('Todo',{ currentIndex : index})}>
            <TaskView item={item} index={index} isCurrentDay={isCurrentDay} />
            </TouchableOpacity>
        </View>

        </View>
    )
}

export default SingleTask

const styles = StyleSheet.create({
    card : {
        width : width * 0.7,
        marginLeft : 30,
        marginTop : 30,
        borderRadius: 15,
        position : 'relative',

}
})