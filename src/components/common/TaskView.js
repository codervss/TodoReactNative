import React, { useState } from 'react'
import { View , Platform, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SeperatorView from '../common/SeperatorView'
import colors from '../../globals/colors'
import {useDispatch} from 'react-redux'
import {toggleTodo} from '../../redux/actions/todoAction'
import CheckComp from './CheckComp';

const TaskView = ({fullView = false, item, isCurrentDay}) =>{

    const textData = isCurrentDay ? 'Daily Task' : item.day
    const textColor = isCurrentDay ? colors.black : colors.white
    const iconColor = isCurrentDay ? colors.royalblue : colors.white

    const [showFull, toggleShowFull] = useState(true)

    const dispatch = useDispatch();

    const toggleCb = (ind) =>{
        dispatch( toggleTodo({date : item.date, taskIndex : ind }) )
    }
    
    return(
        <View style={{padding : 25, position : 'relative'}}>
            {
            showFull ?
                <FlatList
                data = {item.task}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index})=><CheckComp fullView={fullView} item={item} index={index} toggleCb={(ind) => toggleCb(ind)} isCurrentDay={isCurrentDay} />}
                initialNumToRender={5}
                ListHeaderComponent={()=>(
                    <TouchableOpacity disabled={!fullView} onPress={()=>toggleShowFull(!showFull)}>
                        <SeperatorView fullView={fullView} textData={textData} textColor={textColor} iconName='plus' iconColor={iconColor} />
                    </TouchableOpacity>
                )}
                maxToRenderPerBatch={5}
                ItemSeparatorComponent={()=><View style={{height : 10}} />}
                keyExtractor={(item, index)=>"Task_" + index.toString()}
                removeClippedSubviews={Platform.OS === "android" ? true : false}
                />
            :
                <TouchableOpacity disabled={!fullView} onPress={()=>toggleShowFull(!showFull)}>
                    <SeperatorView fullView={fullView} textData={textData} textColor={textColor} iconName='plus' iconColor={iconColor} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default TaskView