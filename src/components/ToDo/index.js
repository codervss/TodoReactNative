import React,{useRef, useEffect} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native'
import moment from 'moment';
import colors from '../../globals/colors';
import TaskView from '../common/TaskView';
import {useSelector} from 'react-redux'

const ToDo = ({route}) =>{

    const {todo} = useSelector((state) => state);
    const {data} = todo
    const scrollRef = useRef(null)
    
    const {currentIndex} = route.params

    useEffect(()=>{
        
        if(scrollRef.current){
            scrollRef.current.scrollToIndex({ animated: true, index: currentIndex })
        }
        
    }, [])
    
    return(
        <SafeAreaView style={styles.container} >
            <FlatList
            data = {data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index})=>{
                const isCurrentDay = item.date === moment().format('DD-MM-YYYY')
                const backgroundColor = isCurrentDay ? colors.white : colors.royalblue
                return(
                    <View style={{ backgroundColor, borderTopRightRadius : 25 }}>
                        <TaskView item={item} fullView={true} index={index} isCurrentDay={isCurrentDay} />
                    </View>
                )
            }}
            ref={scrollRef}
            onScrollToIndexFailed={(info) => {
                  const wait = new Promise((resolve) => setTimeout(resolve, 500));
                  wait.then(() => {
                    scrollRef.current?.scrollToIndex({
                      index: info.index,
                      animated: true,
                    });
                  });
              }}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            // ItemSeparatorComponent={()=><View style={{height : 5, backgroundColor : colors.white}} />}
            keyExtractor={(item, index)=>"Task_" + index.toString()}
            removeClippedSubviews={Platform.OS == "android" ? true : false}
        />
        </SafeAreaView>
    )
}

export default ToDo

const styles = StyleSheet.create({
    container : {flex : 1, backgroundColor : colors.primary, paddingTop : 10},
})